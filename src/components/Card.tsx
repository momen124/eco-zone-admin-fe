import React from 'react';

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            {children}
        </div>
    );
};

export default Card;
