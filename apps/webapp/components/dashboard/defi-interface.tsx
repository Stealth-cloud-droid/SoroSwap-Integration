"use client";

import { useState, useEffect } from "react";
import {
  Settings,
  ArrowLeftRight,
  Droplets,
  BarChart3,
  Plus,
  Minus,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import SwapInterface from "./swap-interface";
import LiquidityTab from "./liquidity-tab";

interface Token {
  symbol: string;
  icon: string;
  balance?: string;
}

interface Pool {
  id: string;
  pair: string;
  tvlUSD: number;
  ratio: number;
  icon?: string;
}

const tokens: Token[] = [
  { symbol: "XLM", icon: "⭐", balance: "1,234.56" },
  { symbol: "USDC", icon: "💵", balance: "567.89" },
  { symbol: "BTC", icon: "₿", balance: "0.05" },
  { symbol: "ETH", icon: "Ξ", balance: "2.34" },
];

// Pool list stub function
const fetchPools = async (): Promise<Pool[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    { id: "xlm-usdc", pair: "XLM/USDC", tvlUSD: 2450000, ratio: 0.1 }, // example: 1 XLM ≈ 0.10 USDC
    { id: "xlm-eurc", pair: "XLM/EURC", tvlUSD: 310000, ratio: 0.09 },
  ];
};

export default function DefiInterface() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [liquidityMode, setLiquidityMode] = useState<"add" | "remove">("add");
  const [tokenA, setTokenA] = useState<Token>(tokens[0]);
  const [tokenB, setTokenB] = useState<Token>(tokens[1]);
  const [amountA, setAmountA] = useState("");
  const [amountB, setAmountB] = useState("");

  // Liquidity state
  const [poolId, setPoolId] = useState<string | null>(null);
  const [liquidityTokenA, setLiquidityTokenA] = useState("XLM");
  const [liquidityTokenB, setLiquidityTokenB] = useState("USDC");
  const [liquidityAmountA, setLiquidityAmountA] = useState("");
  const [liquidityAmountB, setLiquidityAmountB] = useState("");
  const [priceRatio, setPriceRatio] = useState<number | null>(null);
  const [balances] = useState<Record<string, number>>({
    XLM: 1234.56,
    USDC: 567.89,
    BTC: 0.05,
    ETH: 2.34,
  });

  // Pool state
  const [pools, setPools] = useState<Pool[]>([]);
  const [selectedPool, setSelectedPool] = useState<Pool | null>(null);

  // Wallet placeholder
  const wallet = {
    connected: false as boolean,
    address: undefined as string | undefined,
  };

  const tabs = [
    { id: "swap", label: "Swap", icon: ArrowLeftRight },
    { id: "liquidity", label: "Liquidity", icon: Droplets },
    { id: "pools", label: "Pools", icon: BarChart3 },
  ];

  // Load pools on mount
  useEffect(() => {
    const loadPools = async () => {
      try {
        const poolsData = await fetchPools();
        setPools(poolsData);

        // Set default pool to 'xlm-usdc'
        const defaultPool = poolsData.find((pool) => pool.id === "xlm-usdc");
        if (defaultPool) {
          setSelectedPool(defaultPool);
          setPoolId(defaultPool.id);
          setPriceRatio(defaultPool.ratio);
        }
      } catch (error) {
        console.error("Failed to load pools:", error);
      }
    };

    loadPools();
  }, []);

  const handleMaxClick = () => {
    if (tokenA.balance) {
      setAmountA(tokenA.balance.replace(",", ""));
    }
  };

  // Liquidity handlers
  const setActiveTab = (tab: string) => {
    // This can be called after mount to preview Liquidity by default during development
    console.log(`Setting active tab to: ${tab}`);
  };

  const onSelectPool = (id: string) => {
    const pool = pools.find((p) => p.id === id);
    if (pool) {
      setPoolId(pool.id);
      setSelectedPool(pool);
      setPriceRatio(pool.ratio);
    }
  };

  const onChangeAmountA = (value: string) => {
    setLiquidityAmountA(value);
    if (priceRatio && value) {
      const amountA = parseFloat(value);
      if (!isNaN(amountA)) {
        const calculatedAmountB = (amountA * priceRatio).toFixed(6);
        setLiquidityAmountB(calculatedAmountB);
      }
    }
  };

  const onChangeAmountB = (value: string) => {
    setLiquidityAmountB(value);
    if (priceRatio && value) {
      const amountB = parseFloat(value);
      if (!isNaN(amountB)) {
        const calculatedAmountA = (amountB / priceRatio).toFixed(6);
        setLiquidityAmountA(calculatedAmountA);
      }
    }
  };

  const handleMaxA = () => {
    const maxAmount = balances.XLM.toFixed(2);
    setLiquidityAmountA(maxAmount);
    if (priceRatio) {
      const calculatedAmountB = (balances.XLM * priceRatio).toFixed(6);
      setLiquidityAmountB(calculatedAmountB);
    }
  };

  const validateForm = () => {
    const amountA = parseFloat(liquidityAmountA);
    const amountB = parseFloat(liquidityAmountB);

    if (amountA <= 0 || amountB <= 0) {
      return { valid: false, reason: "Amounts must be greater than 0" };
    }

    if (amountA > balances.XLM) {
      return { valid: false, reason: "Insufficient XLM balance" };
    }

    if (amountB > balances.USDC) {
      return { valid: false, reason: "Insufficient USDC balance" };
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

  const handleLiquidityModeToggle = (mode: "add" | "remove") => {
    setLiquidityMode(mode);
  };

  const handlePrimaryAction = () => {
    if (wallet.connected) {
      // Add liquidity logic
      console.log("Adding liquidity");
    } else {
      // Connect wallet logic
      console.log("Connecting wallet");
    }
  };

  return (
    <section aria-labelledby="defi-interface-title">
      <div className="w-full max-w-lg mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2
                id="defi-interface-title"
                className="text-lg md:text-xl font-bold text-gray-900 mb-1"
              >
                DeFi Interface
              </h2>
              <p className="text-sm text-gray-500">
                Connect your wallet to start trading
              </p>
            </div>
            <button
              role="button"
              aria-label="Open settings"
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="liquidity" className="w-full">
            <TabsList
              role="tablist"
              className="grid w-full grid-cols-3 mb-6 bg-gray-100 p-1"
            >
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    role="tab"
                    aria-selected={tab.id === "liquidity"}
                    aria-controls={`${tab.id}-panel`}
                    className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700 px-2 py-2 sm:px-3 sm:py-2"
                  >
                    <span className="flex items-center justify-center gap-1 sm:gap-2">
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium">
                        {tab.label}
                      </span>
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <TabsContent
              value="swap"
              role="tabpanel"
              id="swap-panel"
              aria-labelledby="swap-tab"
            >
              <SwapInterface
                isWalletConnected={isWalletConnected}
                onWalletToggle={() => setIsWalletConnected(!isWalletConnected)}
              />
            </TabsContent>

            <TabsContent
              value="liquidity"
              role="tabpanel"
              id="liquidity-panel"
              aria-labelledby="liquidity-tab"
            >
              <LiquidityTab />
            </TabsContent>

            <TabsContent
              value="pools"
              role="tabpanel"
              id="pools-panel"
              aria-labelledby="pools-tab"
            >
              <div className="text-center py-12">
                <div className="flex justify-center mb-4">
                  <BarChart3 className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Pool Analytics
                </h3>
                <p className="text-gray-500 mb-4">
                  View pool statistics and performance
                </p>
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                  TODO: Implement pool analytics interface
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
