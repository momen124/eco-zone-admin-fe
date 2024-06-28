// components/Breadcrumb.js
import React from 'react';
import { useRouter } from 'next/router';

const Breadcrumb = ({ steps, currentStep }) => {
    const router = useRouter();
    const pathArray = router.asPath.split('/').filter(path => path);

    return (
        <nav className="flex items-center space-x-4">
            {pathArray.map((step, index) => (
                <div key={index} className="flex items-center">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        {index + 1}
                    </span>
                    <span className="mx-2 text-gray-500">{step}</span>
                    {index < pathArray.length - 1 && (
                        <span className="mx-2 text-gray-500">></span>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumb;
