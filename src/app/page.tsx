import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 px-4 md:px-6 lg:px-8">
      <Counter />
    </div>
  );
}
