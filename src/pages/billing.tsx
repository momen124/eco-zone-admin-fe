import { CreditCardIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const Billing = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Billing</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Card Information</h2>
          <div className="bg-gray-100 p-4 rounded-lg mb-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Card Holder</p>
              <p>Jack Peterson</p>
              <p className="font-medium">Expires</p>
              <p>11/22</p>
            </div>
            <CreditCardIcon className="w-10 h-10 text-gray-500" />
          </div>
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add New Card</button>
          </div>
        </div>

        {/* Billing Information */}
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <div className="divide-y divide-gray-200">
            {['Oliver Liam', 'Lucas Harper', 'Ethan James'].map((name, idx) => (
              <div key={idx} className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{name}</p>
                  <p>Company Name: Viking Burrito</p>
                  <p>Email: {name.split(' ')[0].toLowerCase()}@burrito.com</p>
                  <p>VAT Number: FRB1235476</p>
                </div>
                <div className="flex space-x-2">
                  <PencilSquareIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
                  <TrashIcon className="w-6 h-6 text-red-500 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Your Transactions</h2>
        <div className="divide-y divide-gray-200">
          {[
            { name: 'Netflix', date: '27 March 2020', amount: -2500 },
            { name: 'Apple', date: '27 March 2020', amount: 2000 },
            { name: 'Stripe', date: '26 March 2020', amount: 750 },
            { name: 'Hubspot', date: '26 March 2020', amount: -1000 },
            { name: 'Creative Tim', date: '26 March 2020', amount: 2500 },
            { name: 'Webflow', date: '26 March 2020', amount: -1400 }
          ].map((transaction, idx) => (
            <div key={idx} className="py-4 flex justify-between items-center">
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p>{transaction.date}</p>
              </div>
              <p className={`font-medium ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Billing;
