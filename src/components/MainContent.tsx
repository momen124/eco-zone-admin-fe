import React from 'react';
import Transactions from './Transactions';
import Card from './Card';

const MainContent = () => {
    return (
        <div className="flex-1 p-6 bg-gray-100">
            <Card title="Billing">
                {/* Billing information */}
            </Card>
            <Card title="Invoices">
                {/* Invoice information */}
            </Card>
            <Card title="Transactions">
                <Transactions />
            </Card>
        </div>
    );
};

export default MainContent;
