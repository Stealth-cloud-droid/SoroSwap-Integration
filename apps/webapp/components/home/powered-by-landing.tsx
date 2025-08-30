import { Code2, Layers, Rocket } from "lucide-react";

export default function PoweredByLanding() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0052cc] to-[#d60087] text-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-yellow-300 text-sm font-medium">
          ⚡ Powered by Scaffold Rust
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Built with the Best Tools for{" "}
          <span className="text-yellow-300">Stellar Development</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
          Scaffold Rust provides production-ready templates and tools to maximize
          developer efficiency. This Soroswap integration showcases the power of our
          platform.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-600 mb-4">
              <Code2 size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-white/70">
              Production-ready, well-documented code following best practices.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
              <Layers size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modular Design</h3>
            <p className="text-white/70">
              Reusable components and clear separation of concerns.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
              <Rocket size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>
            <p className="text-white/70">
              Deploy to production in minutes with our optimized templates.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/ScaffoldRust"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition transform hover:scale-105 text-white font-medium"
          >
            Visit Scaffold Rust
          </a>
          <a
            href="https://github.com/ScaffoldRust/SoroSwap-Integration"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md border border-white text-white hover:bg-white hover:text-black transition transform hover:scale-105 font-medium"
          >
            Explore More Templates
          </a>
        </div>
      </div>
    </section>
  );
}
