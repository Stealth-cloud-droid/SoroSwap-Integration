import QuickActions, {
  type QuickAction,
} from "@/components/dashboard/quick-actions";

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
    <div className="min-h-screen p-8">
      <div className="w-full flex justify-center">
        <QuickActions actions={actions} />
      </div>
    </div>
  );
}
