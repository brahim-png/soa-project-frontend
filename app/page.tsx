import Image from "next/image";
import HeroSection from "@/components/common/Hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Welcome to TechVendo</h2>
        <p className="text-lg text-center mb-4">
          Step into the Future - EXPERIENCE THE DIFFERENCE with TechVendo
        </p>
        <p className="text-lg text-center mb-4">
          Discover Our Latest Collection of Cutting-Edge Tech and Innovative Designs with TechVendo
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/Quiz.jpg"
            alt="Quiz Image"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-6">GO SHOPPING</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/images/Quiz1.jpg"
                alt="Product 1"
                width={300}
                height={300}
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Product 1</h4>
              <p className="text-gray-700">40% OFF</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/images/Quiz2.jpg"
                alt="Product 2"
                width={300}
                height={300}
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Product 2</h4>
              <p className="text-gray-700">30% OFF</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/images/Quiz3.jpg"
                alt="Product 3"
                width={300}
                height={300}
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Product 3</h4>
              <p className="text-gray-700">20% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
