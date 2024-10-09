import Image from "next/image";
import Counter from "./components/Counter";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <Head>
        <title>Tally Counter</title>
        <meta name="description" content="A simple tally counter built with Next.js" />
      </Head>
      <Counter />
    </div>
  );
}
