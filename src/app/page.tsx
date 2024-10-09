import Counter from "./components/Counter";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 ">
      <Head>
        <title>Tally Counter</title>
        <meta name="description" content="A simple tally counter built with Next.js" />
      </Head>
      <Counter />
    </div>
  );
}
