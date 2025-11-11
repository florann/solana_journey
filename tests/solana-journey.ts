import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { SolanaJourney } from "../target/types/solana_journey";

describe("solana-journey", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.SolanaJourney as Program<SolanaJourney>;
  const wallet = provider.wallet as anchor.Wallet;

  const [messagePda, messageBump] = PublicKey.findProgramAddressSync(
    [Buffer.from("message"), wallet.publicKey.toBuffer()],
    program.programId
  );

  const [vaultPda, vaultBump] = PublicKey.findProgramAddressSync(
    [Buffer.from("vault"), wallet.publicKey.toBuffer()],
    program.programId
  );

   before(async () => {
    try {
      // Try to delete the account if it exists
      await program.methods
        .delete()
        .accounts({
          user: wallet.publicKey,
          messageAccount: messagePda,
        })
        .rpc();
      console.log("Cleaned up existing account");
    } catch (error) {
      // Account doesn't exist, that's fine
      console.log("No existing account to clean up");
    }
  });

  it("Create Message Account", async () => {
    const message = "Hello, world !";
    const transactionSignature = await program.methods
      .create(message)
      .accounts({
        messageAccount: messagePda
      })
      .rpc({ commitment: "confirmed"});

      const messageAccount = await program.account.messageAccount.fetch(
        messagePda,
        "confirmed"
      );

      console.log(JSON.stringify(messageAccount, null, 2));
      console.log(
        "Transaction Signature:",
        `${transactionSignature}`
      );
  });

  it("Update Message Account", async () => {

    await provider.connection.requestAirdrop(
        vaultPda,
        1000000000 
    );

    await new Promise(resolve => setTimeout(resolve, 1000));
  
    let message = "Uwu";
    const transactionSignature = await program.methods
      .update(message)
      .accounts({
        messageAccount: messagePda,
        vaultAccount: vaultPda
      })
      .rpc({commitment: "confirmed"});

    const depositSignature = await program.methods
    .deposit(new anchor.BN(1_000_000))
    .rpc();
    
    const messageAccount = await program.account.messageAccount.fetch(messagePda, "confirmed");

    console.log(JSON.stringify(messageAccount, null, 2));
    console.log("transactionSignature");
    console.log(
        `${transactionSignature}`
      );
    console.log("depositSignature");
    console.log(
        `${depositSignature}`
      );
  });

  it("Delete Message Account", async () => {
      const transactionSignature = await program.methods
        .delete()
        .accounts({
          user: wallet.publicKey,
          messageAccount: messagePda,
          vaultAccount: vaultPda
        })
        .rpc();
      console.log("Delete");

      console.log(
        "Transaction Signature:",
        `${transactionSignature}`
      );
  });
});
