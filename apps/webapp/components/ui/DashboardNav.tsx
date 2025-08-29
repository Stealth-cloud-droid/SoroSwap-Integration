import { FlashIcon, WalletIcon } from "@/public/svg";

const DashboardNav = () => {
  return (
    <header
      role="banner"
      className="py-3 sm:px-18 md:px-24 bg-white border border-[#E5E5E5]"
    >
      <nav className="w-full max-w-7xl mx-auto  flex items-center justify-between px-4 sm:px-0">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-[14px] custom_gradient flex items-center justify-center">
            <FlashIcon />
          </div>
          <article className="hidden md:flex flex-col">
            <p className="text-xl font-bold leading-[28px] text-[#0A0A0A] tracking-[0%]">
              Soroswap Dashboard
            </p>
            <p className="text-xs font-normal text-[#737373] leading-[16px] tracking-[0%]">
              Powered by Scaffold Rust
            </p>
          </article>
        </div>
        <div className="flex gap-3 items-center">
          <div
            aria-live="polite"
            className="sm:flex items-center gap-1 py-[3px] px-3 bg-[#F5F5F5] rounded-full  hidden"
          >
            <div className="size-2 rounded-full bg-green-500 " />
            <p className="text-xs font-semibold text-[#171717]">
              Stellar Mainnet
            </p>
          </div>
          <button
            aria-label="connect Wallet"
            className="py-2 px-3 flex gap-2 items-center justify-center rounded-lg  custom_gradient shadow-[#000005] shadow-[0px_1px_2px] text-sm text-[#FAFAFA] font-medium focus:outline-white focus:outline-1"
          >
            <WalletIcon />
            Connect Wallet
          </button>
        </div>
      </nav>
    </header>
  );
};
export default DashboardNav;
