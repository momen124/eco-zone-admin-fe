import Layout from '@/components/layout';
import { HandThumbUpIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const Reports = () => {
  const [data, setData] = useState([
    { icon: <UserIcon className="w-6 h-6 text-blue-600" />, title: 'Users Active', count: 1600, change: '+55%' },
    // { icon: <CursorClickIcon className="w-6 h-6 text-purple-600" />, title: 'Click Events', count: 357, change: '+124%' },
    { icon: <ShoppingCartIcon className="w-6 h-6 text-green-600" />, title: 'Purchases', count: 2340, change: '+14%' },
    { icon: <HandThumbUpIcon className="w-6 h-6 text-pink-600" />, title: 'Likes', count: 940, change: '+90%' },
  ]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Reports</h1>
      <Layout />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-gray-100 p-3 rounded-full">
              {item.icon}
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{item.count}</h2>
              <p className="text-gray-500">{item.title}</p>
              <p className={`font-medium ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{item.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Reviews</h2>
          <div className="mb-4">
            <p className="mb-1">Positive Reviews</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="mb-1">Neutral Reviews</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-gray-600 h-2 rounded-full" style={{ width: '17%' }}></div>
            </div>
            <p className="mb-1">Negative Reviews</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-red-600 h-2 rounded-full" style={{ width: '3%' }}></div>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            More than <strong>1,500,000 developers</strong> used Creative Tim's products and over <strong>700,000 projects</strong> were created.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View all reviews</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Authors</h2>
          <div className="divide-y divide-gray-200">
            {[
              { author: 'John Michael', function: 'Manager', reviews: 23, percentage: 80 },
              { author: 'Alexa Liras', function: 'Developer', reviews: 19, percentage: 72 },
              { author: 'Laurent Perrier', function: 'Executive', reviews: 31, percentage: 90 },
              { author: 'Michael Levi', function: 'Developer', reviews: 8, percentage: 60 },
              { author: 'Richard Gran', function: 'Manager', reviews: 4, percentage: 45 },
            ].map((author, idx) => (
              <div key={idx} className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{author.author}</p>
                  <p className="text-gray-500">{author.function}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium">{author.reviews}</p>
                  <div className="w-24 bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${author.percentage}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Reports;
