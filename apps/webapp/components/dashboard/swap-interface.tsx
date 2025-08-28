"use client";

import { useState } from "react";
import { ArrowUpDown, Zap } from "lucide-react";

interface Token {
  symbol: string;
  icon: string;
  balance?: string;
}

const tokens: Token[] = [
  { symbol: "XLM", icon: "⭐", balance: "1,234.56" },
  { symbol: "USDC", icon: "💵", balance: "567.89" },
  { symbol: "BTC", icon: "₿", balance: "0.05" },
  { symbol: "ETH", icon: "Ξ", balance: "2.34" },
];

interface SwapInterfaceProps {
  isWalletConnected: boolean;
  onWalletToggle: () => void;
}

export default function SwapInterface({
  isWalletConnected,
  onWalletToggle,
}: SwapInterfaceProps) {
  const [fromToken, setFromToken] = useState<Token>(tokens[0]);
  const [toToken, setToToken] = useState<Token>(tokens[1]);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  const handleSwapTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const handleMaxClick = () => {
    if (fromToken.balance) {
      setFromAmount(fromToken.balance.replace(",", ""));
    }
  };

  return (
    <div id="swap-panel" role="tabpanel" aria-labelledby="swap-tab">
      {/* From Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          From
        </label>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
            <input
              type="number"
              placeholder="0.0"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="bg-transparent text-xl sm:text-2xl font-semibold text-gray-900 placeholder-gray-400 border-none outline-none flex-1 min-w-0"
              aria-label="Amount to swap from"
            />
            <select
              value={fromToken.symbol}
              onChange={(e) => {
                const token = tokens.find((t) => t.symbol === e.target.value);
                if (token) setFromToken(token);
              }}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto sm:min-w-[120px]"
              aria-label="Select token to swap from"
            >
              {tokens.map((token) => (
                <option key={token.symbol} value={token.symbol}>
                  {token.icon} {token.symbol}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Balance: {fromToken.balance || "—"}</span>
            {fromToken.balance && (
              <button
                onClick={handleMaxClick}
                className="text-blue-600 hover:text-blue-700 font-medium"
                aria-label="Use maximum balance"
              >
                MAX
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Swap Direction Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={handleSwapTokens}
          className="p-2 bg-white border-2 border-gray-200 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-colors"
          aria-label="Swap token positions"
        >
          <ArrowUpDown className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* To Field */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          To
        </label>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
            <input
              type="number"
              placeholder="0.00"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="bg-transparent text-xl sm:text-2xl font-semibold text-gray-900 placeholder-gray-400 border-none outline-none flex-1 min-w-0"
              aria-label="Amount to receive"
            />
            <select
              value={toToken.symbol}
              onChange={(e) => {
                const token = tokens.find((t) => t.symbol === e.target.value);
                if (token) setToToken(token);
              }}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-auto sm:min-w-[120px]"
              aria-label="Select token to receive"
            >
              {tokens.map((token) => (
                <option key={token.symbol} value={token.symbol}>
                  {token.icon} {token.symbol}
                </option>
              ))}
            </select>
          </div>
          <div className="text-sm text-gray-500">
            Balance: {toToken.balance || "—"}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onWalletToggle}
        disabled={!isWalletConnected && (!fromAmount || !toAmount)}
        className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all focus:ring-4 focus:ring-blue-200 ${
          isWalletConnected
            ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
        } ${
          !isWalletConnected && (!fromAmount || !toAmount)
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        aria-label={
          isWalletConnected
            ? "Execute swap"
            : "Connect wallet to enable swapping"
        }
      >
        <span className="flex items-center justify-center gap-2">
          <Zap className="w-5 h-5" />
          {isWalletConnected ? "Swap" : "Connect Wallet to Swap"}
        </span>
      </button>

      {/* Footer */}
      <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
        Powered by Soroswap AMM on Stellar Network. Trades are executed
        instantly with minimal fees.
      </p>
    </div>
  );
}
