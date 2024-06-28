// pages/settings.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Settings = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 min-h-screen bg-gray-50">
                <Header />
                <main className="p-8">
                    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Settings</h2>
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700">Username</label>
                                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Email</label>
                                    <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Password</label>
                                    <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button type="button" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Cancel</button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Settings;
