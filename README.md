# Solana journey
Another experimentation, this one on the blockchain :sunglasses:

## Solana CLI 

### Main commands 

- solana config set : Use to configuration on which network the Solana command will be
-- ...set --url localhost : local network 
-- ...set --url devnet : live network environment
-- ...set --url testnet : more realistic network conditions
-- ...set --url mainnet-beta : real environment, real money

- solana-keypair new : creating a new wallet
- solana address : get the current wallet public address on which solana command is bound on
- solana aidrop X : request to get X SOL token(s)
- solana balance : get current wallet balance

- solana-test-validator : run a test SOL blockchain on local network

## Anchor CLI

### Main commands

- anchor init <projet_name> : create a new anchor project with the choosen name
- anchor build : to build the project and create a project signature. 
-- To know, if the project as been modified after the build command have run, the program signature will not being valid for deployment and must be rebuilt. 
- anchor deploy : to deploy project on the network 
- anchor test : will run "solana-test-validator", "anchor deploy", run tests, shutdown the solana validator