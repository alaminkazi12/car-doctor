import About from "@/components/Homepage/About";
import Banner from "@/components/Homepage/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-base-100">
      <Banner></Banner>
      <About></About>
    </main>
  );
}
