import SetupLanding from "@/components/home/setup-landing";
import PoweredByLanding from "@/components/home/powered-by-landing";

export default function Home() {
  return (
    <main>
      {/* Hero / Setup section */}
      <SetupLanding />

      {/* Powered By Scaffold Rust section */}
      <PoweredByLanding />
    </main>
  );
}
