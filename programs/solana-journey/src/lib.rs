use anchor_lang::prelude::*;

declare_id!("4EJsWz3Zukghypz2a5SJUgearJUvb6dnhkSAEe49k7PZ");

#[program]
pub mod solana_journey {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
