// pages/ecommerce/new-product.js
import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/layout';


const NewProduct = () => {
    const steps = ['Product Info', 'Media', 'Socials', 'Pricing'];

    return (
        <Layout>
            <Breadcrumb steps={steps} currentStep={3} />
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Pricing</h2>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700">Price</label>
                            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Currency</label>
                            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                                <option>USD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">SKU</label>
                            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Tags</label>
                        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div className="flex justify-between">
                        <button type="button" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Prev</button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default NewProduct;
