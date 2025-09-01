"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

interface Pool {
  id: string;
  pair: string;
  tvlUSD: number;
  icon: string;
  priceRatio: number;
}

const pools: Pool[] = [
  {
    id: "xlm-usdc",
    pair: "XLM/USDC",
    tvlUSD: 2450000,
    icon: "⭐",
    priceRatio: 0.1,
  },
  {
    id: "xlm-eurc",
    pair: "XLM/EURC",
    tvlUSD: 310000,
    icon: "⭐",
    priceRatio: 0.09,
  },
  {
    id: "btc-usdc",
    pair: "BTC/USDC",
    tvlUSD: 890000,
    icon: "₿",
    priceRatio: 45000,
  },
  {
    id: "eth-usdc",
    pair: "ETH/USDC",
    tvlUSD: 1560000,
    icon: "Ξ",
    priceRatio: 3200,
  },
];

export default function LiquidityTab() {
  const [liquidityAction, setLiquidityAction] = useState("add");
  const [xlmAmount, setXlmAmount] = useState("");
  const [usdcAmount, setUsdcAmount] = useState("");
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [selectedPool, setSelectedPool] = useState<Pool>(pools[0]);

  const xlmBalance = 1234.56;
  const usdcBalance = 567.89;

  const handleMaxXlm = () => {
    const maxAmount = xlmBalance.toString();
    setXlmAmount(maxAmount);
    if (selectedPool.priceRatio) {
      const calculatedAmountB = (xlmBalance * selectedPool.priceRatio).toFixed(
        4
      );
      setUsdcAmount(calculatedAmountB);
    }
  };

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
  };

  const handlePoolChange = (poolId: string) => {
    const pool = pools.find((p) => p.id === poolId);
    if (pool) {
      setSelectedPool(pool);
      // Clear amounts when pool changes
      setXlmAmount("");
      setUsdcAmount("");
    }
  };

  const handleAmountAChange = (value: string) => {
    setXlmAmount(value);
    if (selectedPool.priceRatio && value) {
      const amountA = parseFloat(value);
      if (!isNaN(amountA)) {
        const calculatedAmountB = (amountA * selectedPool.priceRatio).toFixed(
          4
        );
        setUsdcAmount(calculatedAmountB);
      } else {
        setUsdcAmount("");
      }
    }
  };

  const handleAmountBChange = (value: string) => {
    setUsdcAmount(value);
    if (selectedPool.priceRatio && value) {
      const amountB = parseFloat(value);
      if (!isNaN(amountB)) {
        const calculatedAmountA = (amountB / selectedPool.priceRatio).toFixed(
          4
        );
        setXlmAmount(calculatedAmountA);
      } else {
        setXlmAmount("");
      }
    }
  };

  const validateForm = () => {
    const amountA = parseFloat(xlmAmount);
    const amountB = parseFloat(usdcAmount);

    if (amountA <= 0 || amountB <= 0) {
      return { valid: false, reason: "Amounts must be greater than 0" };
    }

    if (amountA > xlmBalance) {
      return { valid: false, reason: "Insufficient XLM balance" };
    }

    if (amountB > usdcBalance) {
      return { valid: false, reason: "Insufficient USDC balance" };
    }

    if (!selectedPool.id) {
      return { valid: false, reason: "Please select a pool" };
    }

    return { valid: true };
  };

  // Keyboard handlers
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  const handleActionToggle = (action: "add" | "remove") => {
    setLiquidityAction(action);
  };

  return (
    <div className="space-y-6">
      <Tabs
        value={liquidityAction}
        onValueChange={setLiquidityAction}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1">
          <TabsTrigger
            value="add"
            className="flex items-center gap-2 text-sm data-[state=active]:bg-white data-[state=active]:text-black data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            role="button"
            aria-pressed={liquidityAction === "add"}
            onClick={() => handleActionToggle("add")}
            onKeyDown={(e) => handleKeyDown(e, () => handleActionToggle("add"))}
            tabIndex={0}
          >
            <Plus className="h-4 w-4 data-[state=active]:text-black data-[state=inactive]:text-gray-500" />
            Add Liquidity
          </TabsTrigger>
          <TabsTrigger
            value="remove"
            className="flex items-center gap-2 text-sm data-[state=active]:bg-white data-[state=active]:text-black data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            role="button"
            aria-pressed={liquidityAction === "remove"}
            onClick={() => handleActionToggle("remove")}
            onKeyDown={(e) =>
              handleKeyDown(e, () => handleActionToggle("remove"))
            }
            tabIndex={0}
          >
            <Minus className="h-4 w-4 data-[state=active]:text-black data-[state=inactive]:text-gray-500" />
            Remove Liquidity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="add" className="space-y-6 mt-6">
          {/* Select Pool Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Select Pool</h3>
            <p className="text-sm text-gray-600">
              Choose a liquidity pool to add funds to
            </p>

            <div className="relative">
              <label htmlFor="pool-select" className="sr-only">
                Select liquidity pool
              </label>
              <select
                id="pool-select"
                value={selectedPool.id}
                onChange={(e) => handlePoolChange(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                aria-label="Select liquidity pool"
                aria-describedby="pool-description"
              >
                {pools.map((pool) => (
                  <option key={pool.id} value={pool.id}>
                    {pool.icon} {pool.pair} - TVL: $
                    {pool.tvlUSD.toLocaleString()}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <div id="pool-description" className="sr-only">
              Select a liquidity pool to add funds to. Each option shows the
              token pair and total value locked.
            </div>

            {/* Selected Pool Display */}
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {selectedPool.icon}
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {selectedPool.pair}
                  </div>
                  <div className="text-sm text-gray-500">
                    TVL: ${selectedPool.tvlUSD.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Liquidity Section */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Plus className="h-3 w-3 text-white" />
                </div>
                Add Liquidity to {selectedPool.pair}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Provide equal value of both tokens to earn trading fees
              </p>
            </div>

            {/* XLM Amount */}
            <div className="space-y-2">
              <label
                htmlFor="xlm-amount"
                className="text-sm font-medium text-gray-700"
              >
                XLM Amount
              </label>
              <div className="relative">
                <input
                  id="xlm-amount"
                  type="number"
                  placeholder="0.0"
                  value={xlmAmount}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleAmountAChange(e.target.value)
                  }
                  className="w-full pr-20 text-right text-lg border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="XLM amount"
                  aria-describedby="xlm-balance"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">⭐</span>
                  </div>
                  <span className="font-medium text-gray-900">XLM</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span id="xlm-balance" className="text-gray-500">
                  Balance: {xlmBalance.toLocaleString()}
                </span>
                <Button
                  variant="link"
                  size="sm"
                  onClick={handleMaxXlm}
                  className="h-auto p-0 text-blue-600 hover:text-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                  aria-label="Use maximum XLM balance"
                  onKeyDown={(e) => handleKeyDown(e, handleMaxXlm)}
                  tabIndex={0}
                >
                  MAX
                </Button>
              </div>
            </div>

            {/* Center Plus Icon */}
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                <Plus className="h-4 w-4 text-gray-600" />
              </div>
            </div>

            {/* USDC Amount */}
            <div className="space-y-2">
              <label
                htmlFor="usdc-amount"
                className="text-sm font-medium text-gray-700"
              >
                USDC Amount
              </label>
              <div className="relative">
                <input
                  id="usdc-amount"
                  type="number"
                  placeholder="0.0"
                  value={usdcAmount}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleAmountBChange(e.target.value)
                  }
                  className="w-full pr-20 text-right text-lg border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="USDC amount"
                  aria-describedby="usdc-balance"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">$</span>
                  </div>
                  <span className="font-medium text-gray-900">USDC</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span id="usdc-balance" className="text-gray-500">
                  Balance: {usdcBalance.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Primary Button */}
          <Button
            onClick={handleConnectWallet}
            disabled={!isWalletConnected || !validateForm().valid}
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={
              !isWalletConnected
                ? "Connect wallet to enable liquidity operations"
                : "Add liquidity to pool"
            }
            onKeyDown={(e) => handleKeyDown(e, handleConnectWallet)}
            tabIndex={0}
          >
            {!isWalletConnected ? "Connect Wallet" : "Add Liquidity"}
          </Button>

          {/* Footer Note */}
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            By adding liquidity, you&apos;ll earn 0.3% of all trades on this
            pair proportional to your share of the pool.
          </p>
        </TabsContent>

        <TabsContent value="remove" className="space-y-6 mt-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <Minus className="h-3 w-3 text-white" />
                </div>
                Remove Liquidity from {selectedPool.pair}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Remove your liquidity position and claim your tokens
              </p>
            </div>

            <div className="p-8 border border-gray-200 rounded-md bg-gray-50 text-center">
              <p className="text-gray-500 font-medium">
                TODO: Remove Liquidity functionality
              </p>
              <p className="text-sm text-gray-400 mt-2">
                This feature will be implemented soon
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
