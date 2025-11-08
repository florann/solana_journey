# Solana Journey
Another experimentation, this one on the blockchain :sunglasses:

## Solana CLI 

### Main Commands

**Network Configuration**
- `solana config set --url <network>` - Configure which network Solana commands will target:
  - `--url localhost` - Local network
  - `--url devnet` - Live network environment
  - `--url testnet` - More realistic network conditions
  - `--url mainnet-beta` - Real environment, real money

**Wallet Management**
- `solana-keypair new` - Create a new wallet
- `solana address` - Get the current wallet's public address that Solana commands are bound to

**SOL Operations**
- `solana airdrop X` - Request X SOL token(s)
- `solana balance` - Get current wallet balance

**Local Development**
- `solana-test-validator` - Run a test SOL blockchain on local network

---

## Anchor CLI

### Main Commands

**Project Setup**
- `anchor init <project_name>` - Create a new Anchor project with the chosen name

**Build & Deploy**
- `anchor build` - Build the project and create a program signature
  - **Note:** If the project is modified after building, the program signature becomes invalid for deployment and must be rebuilt
- `anchor deploy` - Deploy project to the network

**Testing**
- `anchor test` - Runs the complete test workflow:
  1. Starts `solana-test-validator`
  2. Executes `anchor deploy`
  3. Runs tests
  4. Shuts down the Solana validator
 
---

## Solana Network 

### Reading from Network 

**Account information**

Account structure : 

```json
{
  "data": {
    "type": "Buffer",
    "data": [] //Binary of the executable code, if nothing then wallet
  },
  "executable": false, //True : Executable code account, False: Wallet account 
  "lamports": 1000000000, // Balance of the wallet in Lamport ( 1 Lamport = 0.000,000,001 SOL )
  "owner": "11111111111111111111111111111111", // The program that own the account, for wallet it's alaway System Program 111.....
  "rentEpoch": 0, // Obsolete
  "space": 0 // Number of bytes of the executable code ( data[] )
}
```
