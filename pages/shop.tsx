import Image from "next/image";
import Link from "next/link";
import "../app/globals.css"; // Import the global CSS
import products from "../app/auth/products"; // Import products

const Shop = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <nav className="w-full py-4">
                <div className="container mx-auto flex justify-center space-x-4">
                    <Link href="/" legacyBehavior>
                        <a className="hover:underline text-white">Home</a>
                    </Link>
                    <Link href="/shop" legacyBehavior>
                        <a className="hover:underline text-white">Shop</a>
                    </Link>
                    <Link href="/about" legacyBehavior>
                        <a className="hover:underline text-white">About</a>
                    </Link>
                    <Link href="/login" legacyBehavior>
                        <a className="hover:underline text-white">Login</a>
                    </Link>
                </div>
            </nav>
            <div className="container mx-auto py-10 px-4 text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg mt-8">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">TechVendo Shop</h1>
                <p className="text-lg mb-4 text-gray-700">
                    Welcome to the TechVendo shop. Explore our latest products and innovations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`} legacyBehavior>
                            <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={200}
                                    height={200}
                                    className="rounded-lg mb-4"
                                />
                                <h4 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h4>
                                <p className="text-gray-700 mb-2">{product.description}</p>
                                <p className="text-gray-900 font-semibold">{product.price}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;