import Head from 'next/head';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Stripe from 'stripe';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const stripe = 
}

export default function Home() {
  return (
    <div className="min-h-screen bg-solid">
      <Head>
        <title>BOOSTbuilder</title>
        <meta name="description" content="Your source for high-performance car parts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* Navbar import */}
      <Navbar/>

{/* Main body */}

      <main className="container mx-auto my-8 px-4 text-primary-2 font-tiltwarp">
        <h1 className="text-4xl font-medium text-gray-900 mb-4">Welcome to <span className="text-primary font-bold">BOOST</span>builder</h1>
        <p className="text-lg text-gray-700 mb-8">Your source for high-performance car parts</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="/products" className="bg-white shadow-lg rounded-md transition-all duration-500 hover:bg-gray-100">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Products</h3>
              <p className="text-lg text-gray-700">Browse our selection of high-quality performance car parts</p>
            </div>
          </a>

          <a href="#" className="bg-white shadow-lg rounded-md transition-all duration-500 hover:bg-gray-100">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About</h3>
              <p className="text-lg text-gray-700">Learn more about our company and our mission</p>
            </div>
          </a>

          <a href="#" className="bg-white shadow-lg rounded-md transition-all duration-500 hover:bg-gray-100">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
              <p className="text-lg text-gray-700">Get in touch with us if you have any questions or concerns</p>
            </div>
          </a>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Parts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-md transition-all duration-500 hover:bg-gray-100">
              <Link href="/products?type=suspension" className="block p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Suspension</h3>
                  <p className="text-lg text-gray-700">Improve your car's handling and performance with our high-quality suspension parts</p>
                </Link>
                </div>

<div className="bg-white shadow-lg rounded-md transition-all duration-500 hover:bg-gray-100">
  <Link href="/products?type=exhaust" className="block p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Exhaust</h3>
      <p className="text-lg text-gray-700">Upgrade your car's exhaust system to improve performance and sound</p>
  </Link>
</div>

<div className="bg-white shadow-lg rounded-md transition-all duration-500 hover:bg-gray-100">
  <Link href="/products?type=intake" className="block p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Intake</h3>
      <p className="text-lg text-gray-700">Increase horsepower and torque with our high-performance air intake systems</p>
  </Link>
</div>
</div>
</div>
</main>

<footer className="bg-gray-900 text-white">
<div className="container mx-auto py-4 px-4 flex justify-between items-center">
<p className="text-lg">&copy; 2023 BOOSTbuilder</p>
<nav>
<ul className="flex space-x-4 text-lg">
  <li><a href="#">Privacy Policy</a></li>
  <li><a href="#">Terms of Use</a></li>
  <li><a href="#">Sitemap</a></li>
</ul>
</nav>
</div>
</footer>
</div>
);
}