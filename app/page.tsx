"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <p className="mt-4 text-gray-600 text-sm">Loading content, please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      <section className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">📊 Dashboard Overview</h1>
        <p className="text-gray-600 text-lg">Welcome back! Here's what's happening today.</p>
        <Link href="/about" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Go to About Page
        </Link>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          {
            title: 'Users',
            value: '1,248',
            growth: '+32 today',
            color: 'text-blue-600',
            bgHover: 'hover:bg-blue-50',
          },
          {
            title: 'Revenue',
            value: '₹89,200',
            growth: '+₹4,100 today',
            color: 'text-green-600',
            bgHover: 'hover:bg-green-50',
          },
          {
            title: 'Sessions',
            value: '392',
            growth: '+14 active',
            color: 'text-purple-600',
            bgHover: 'hover:bg-purple-50',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`bg-white shadow-lg rounded-2xl p-6 transform transition duration-500 ease-in-out 
              hover:scale-105 hover:shadow-2xl hover:-rotate-1 ${item.bgHover}`}
          >
            <h2 className="text-sm font-semibold text-gray-500 uppercase">{item.title}</h2>
            <p className={`text-3xl font-bold mt-2 ${item.color}`}>{item.value}</p>
            <p className="text-sm text-gray-400 mt-1">{item.growth}</p>
          </div>
        ))}
      </section>
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔔 Recent Activity</h2>
        <ul className="divide-y divide-gray-200 text-gray-600">
          <li className="py-2">🕒 John logged in 2 hours ago</li>
          <li className="py-2">📦 New order #3941 placed</li>
          <li className="py-2">📈 Sales report for July generated</li>
          <li className="py-2">✅ Payment from Anya confirmed</li>
        </ul>
      </section>
    </main>
  );
}

