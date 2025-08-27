"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HeroLanding() {
  return (
    <section
      className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
          <span className="text-sm sm:text-base" role="img" aria-label="rocket">🚀</span>
          Production-Ready Soroswap Integration
        </div>

        {/* Main Heading */}
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
        >
          Build DeFi Apps on <span className="text-purple-600">Stellar</span> in
          Minutes
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-2">
          Complete Soroswap integration template with wallet connection, token
          swapping, liquidity pools, and yield farming. Built with modern tools
          and ready to deploy.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-medium"
            aria-label="Try the live demo of the DeFi application"
          >
            <span className="mr-2" role="img" aria-label="lightning">⚡</span>
            Try Live Demo
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 text-sm sm:text-base font-medium bg-transparent"
            aria-label="View the source code on GitHub"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <Card className="p-4 sm:p-6 text-center bg-white border border-gray-200 shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">$2.4M</div>
            <div className="text-gray-600 text-xs sm:text-sm font-medium">
              Total Value Locked
            </div>
          </Card>

          <Card className="p-4 sm:p-6 text-center bg-white border border-gray-200 shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
              $12.8M
            </div>
            <div className="text-gray-600 text-xs sm:text-sm font-medium">
              Total Volume
            </div>
          </Card>

          <Card className="p-4 sm:p-6 text-center bg-white border border-gray-200 shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">1,247</div>
            <div className="text-gray-600 text-xs sm:text-sm font-medium">
              Active Users
            </div>
          </Card>

          <Card className="p-4 sm:p-6 text-center bg-white border border-gray-200 shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-1 sm:mb-2">8</div>
            <div className="text-gray-600 text-xs sm:text-sm font-medium">
              Active Pools
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
