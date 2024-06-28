import React from 'react';

const transactionsData = [
    { id: 1, date: '2023-06-01', amount: 500.0, description: 'Payment received' },
    { id: 2, date: '2023-06-05', amount: -200.0, description: 'Purchase' },
    { id: 3, date: '2023-06-10', amount: -100.0, description: 'Purchase' },
    { id: 4, date: '2023-06-15', amount: 250.0, description: 'Payment received' },
];

const Transactions = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Transactions</h3>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Date</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionsData.map((transaction) => (
                        <tr key={transaction.id}>
                            <td className="py-2 px-4 border-b">{transaction.date}</td>
                            <td className="py-2 px-4 border-b">{transaction.description}</td>
                            <td className="py-2 px-4 border-b">{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
