import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import About from '../../app/auth/About'; // Import About component
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

const ProductDetails = ({ product, products }) => {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('default');

    if (!product) {
        return <p className="text-center text-2xl text-red-600">Product not found</p>;
    }

    const discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2);

    const handleBuy = () => {
        alert(`You have bought ${quantity} of ${product.name} in ${color} color`);
    };

    const handlePrevious = () => {
        const previousProductId = product.id - 1;
        if (previousProductId > 0) {
            router.push(`/product/${previousProductId}`);
        }
    };

    const handleNext = () => {
        const nextProductId = product.id + 1;
        if (nextProductId <= products.length) {
            router.push(`/product/${nextProductId}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-gradient-to-r from-green-400 to-blue-500">
            <div className="container mx-auto text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
                {/* Breadcrumb Navigation */}
                <nav className="mb-4 text-gray-700">
                    <Link href="/" className="hover:underline">Home</Link> / <Link href="/shop" className="hover:underline">Shop</Link> / <span>{product.name}</span>
                </nav>
                <h1 className="text-4xl font-bold mb-6 text-gray-900">{product.name}</h1>
                <div className="flex justify-center mb-4">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
                <p className="text-lg mb-4 text-gray-700">{product.description}</p>
                <p className="text-2xl font-semibold text-gray-900">
                    Original Price: ${product.price.toFixed(2)}
                </p>
                <p className="text-2xl font-semibold text-red-600">
                    Discounted Price: ${discountedPrice}
                </p>
                {/* Product Rating */}
                <div className="flex items-center justify-center mt-4">
                    <span className="text-yellow-500">
                        {'★'.repeat(Math.floor(product.rating)) + (product.rating % 1 ? '☆' : '')}
                    </span>
                    <span className="ml-2 text-gray-700">({product.rating}/5)</span>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <label htmlFor="quantity" className="mr-2 text-lg text-gray-700">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        min="1"
                        className="w-16 p-2 border rounded-lg text-center"
                    />
                </div>
                <div className="flex items-center justify-center mt-4">
                    <label htmlFor="color" className="mr-2 text-lg text-gray-700">Color:</label>
                    <select
                        id="color"
                        name="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="p-2 border rounded-lg"
                    >
                        <option value="default">Select Color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                    </select>
                </div>
                <button
                    onClick={handleBuy}
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Buy Item
                </button>
                <div className="flex justify-between mt-4 w-full">
                    <button
                        onClick={handlePrevious}
                        className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                        Next
                    </button>
                </div>
                <button
                    onClick={() => router.back()}
                    className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                    Back to Shop
                </button>
                {/* Related Products */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.filter(p => p.id !== product.id).slice(0, 4).map((relatedProduct) => (
                            <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`} legacyBehavior>
                                <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
                                    <Image
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        width={200}
                                        height={200}
                                        className="rounded-lg mb-4"
                                    />
                                    <h4 className="text-xl font-bold mb-2 text-gray-900">{relatedProduct.name}</h4>
                                    <p className="text-gray-700 mb-2">{relatedProduct.description}</p>
                                    <p className="text-gray-900 font-semibold">${relatedProduct.price.toFixed(2)}</p>
                                    <div className="flex items-center justify-center mt-4">
                                        <span className="text-yellow-500">
                                            {'★'.repeat(Math.floor(relatedProduct.rating)) + (relatedProduct.rating % 1 ? '☆' : '')}
                                        </span>
                                        <span className="ml-2 text-gray-700">({relatedProduct.rating}/5)</span>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <About />
        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.params;
    const filePath = path.join(process.cwd(), 'public', 'products.json');
    const jsonData = fs.readFileSync(filePath);
    const products = JSON.parse(jsonData);
    const product = products.find((p) => p.id === parseInt(id));

    return {
        props: {
            product,
            products,
        },
    };
}

export default ProductDetails;