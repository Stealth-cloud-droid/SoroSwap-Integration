import DashboardNav from "@/components/ui/DashboardNav";
import QuickActions, {
  type QuickAction,
} from "@/components/dashboard/quick-actions";
import DeFiInterface from "@/components/dashboard/defi-interface";

export default function Dashboard() {
  const actions: QuickAction[] = [
    {
      id: "swap",
      label: "Swap Tokens",
      ariaLabel: "Swap Tokens action",
      icon: "swap",
      href: "/swap",
    },
    {
      id: "add-liq",
      label: "Add Liquidity",
      ariaLabel: "Add Liquidity action",
      icon: "plus",
      href: "/liquidity/add",
    },
    {
      id: "soroswap",
      label: "View on Soroswap",
      ariaLabel: "View on Soroswap action",
      icon: "external",
      href: "https://app.soroswap.finance",
      external: true,
    },
  ];

  return (
    <div className="">
      <DashboardNav />
      <div className="max-w-6xl mx-auto pt-10">
        <p className=" text-2xl">Dashboard </p>
    <main className="min-h-screen p-8">
      <div className="w-full flex justify-center mb-8">
        {/* <QuickActions actions={actions} /> */}
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <DeFiInterface />
      </div>
    </main>
  );
}
