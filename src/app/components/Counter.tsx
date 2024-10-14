'use client'
import { useEffect, useState } from 'react';
import { FaPlus, FaMinus, FaRedo } from 'react-icons/fa';


export default function Counter() {
  // State to store the count
  const [count, setCount] = useState(0);
  // State to manage hydration status
  const [isHydrated, setIsHydrated] = useState(false)

  // Retrieve the count from local storage on component mount
  useEffect(() => {
    const savedCount = localStorage.getItem('count');
    if (savedCount !== null) {
      setCount(parseInt(savedCount, 10))
    };
    setIsHydrated(true) // Set hydrated to true after the count is set
  }, [])

  // Update local storae whenever the count changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('count', count.toString());
    }
  }, [count])

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Render nothing until hydrated to avoid mismatch
  if (!isHydrated) return null

  return (
    <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl shadow-xl text-center max-w-sm w-full mx-auto md:max-w-md lg:max-w-lg">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
        Tally Counter
      </h1>
      <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-indigo-600 dark:text-indigo-300 mb-8">
        {count}
      </div>
      <div className='flex justify-center gap-2 mb-6'>
        <button  aria-label='plus' onClick={increment} className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-105">
          <FaPlus size={24} />
        </button>
        <button aria-label='minus' onClick={decrement} className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-105">
          <FaMinus size={24} />
        </button>
      </div>
      <button  aria-label='reset' onClick={reset} className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 mx-auto">
        <FaRedo size={28} />
      </button>
    </div>
  );
}