import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen w-screen">
      <h1 className="text-7xl font-bold">
        Daily Updates
      </h1>
      <Link href="/dashboard">
        <Button variant="secondary" className="w-full">Dashboard</Button>
      </Link>
      <Link href="/team-analysis">
        <Button variant="secondary" className="w-full">Team Analytics</Button>
      </Link>

      
    </main>
  );
}
