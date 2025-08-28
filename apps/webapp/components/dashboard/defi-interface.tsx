"use client";

import { useState } from "react";
import { Settings, ArrowLeftRight, Droplets, BarChart3 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SwapInterface from "./swap-interface";

export default function DefiInterface() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const tabs = [
    { id: "swap", label: "Swap", icon: ArrowLeftRight },
    { id: "liquidity", label: "Liquidity", icon: Droplets },
    { id: "pools", label: "Pools", icon: BarChart3 },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
              DeFi Interface
            </h1>
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
        <Tabs defaultValue="swap" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-100 p-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
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

          <TabsContent value="swap">
            <SwapInterface
              isWalletConnected={isWalletConnected}
              onWalletToggle={() => setIsWalletConnected(!isWalletConnected)}
            />
          </TabsContent>

          <TabsContent value="liquidity">
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <Droplets className="w-16 h-16 text-blue-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Liquidity Pools
              </h3>
              <p className="text-gray-500 mb-4">
                Provide liquidity to earn trading fees
              </p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                TODO: Implement liquidity pool interface
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pools">
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
  );
}
