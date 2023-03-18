import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(3);
    return (
        <div className="flex flex-row justify-around content-center px-4 py-8 border bg-gray-100 rounded-md text-3xl dark:bg-gray-800 dark:border-gray-900">
            <button onClick={() => {setCount(count - 1)}} className="rounded-full w-10 h-10 bg-red-200 focus:outline outline-2 outline-red-300 dark:bg-red-600 dark:outline-red-700">-</button>
            <div>{count}</div>
            <button onClick={() => {setCount(count + 1)}} className="rounded-full w-10 h-10 bg-green-200 focus:outline outline-2 outline-green-300 dark:bg-green-600 dark:outline-green-700">+</button>
        </div>
    );
}