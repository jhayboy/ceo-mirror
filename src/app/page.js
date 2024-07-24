import Head from 'next/head';
import Context from '../../components/context';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineGppGood } from 'react-icons/md';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('/ceobg.jpeg')` }}>
        <header className="bg-transparent fixed w-full z-50">
          <nav className="flex items-center justify-between px-6 py-4">
            <div className="text-white text-xl font-bold">Ceo Mirror</div>
            <div className="text-white hidden lg:flex gap-4">
              <Link href="/Terms&Conditions">About</Link>
              <Link href="/Contact">Contact</Link>
              
            </div>
          </nav>
        </header>
        <main className="pt-48 px-6">
          <div className="bg-black bg-opacity-50 rounded-lg p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Give Your Space That Extra Modern Look</h1>
            <p className="text-lg ">Having the best reflection of you and your space is all that matters</p>
          </div>
        </main>
      </div>
      <div className='p-10 w-full'>
        <div className="w-full h-full lg:flex items-center justify-center lg:gap-16 ">

           <div className="text-center flex flex-col items-center mt-5">
            <TbTruckDelivery className="text-3xl text-green-500 mb-2" />
            <p className="text-xl font-semibold">Delivery</p>
            <p className="text-gray-600">Fast and reliable delivery.</p>
          </div>

          <div className="text-center flex flex-col items-center mt-5">
            <MdOutlineGppGood className="text-3xl text-red-500 mb-2" />
            <p className="text-xl font-semibold">Quality</p>
            <p className="text-gray-600">Top-notch product quality.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="text-3xl text-yellow-500 mb-2">⭐</div>
            <p className="text-xl font-semibold">Customer Satisfaction</p>
            <p className="text-gray-600">Our customers love us!</p>
          </div>
        </div>
          <Context/>
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6 lg:px-20">
              <div className="lg:flex lg:justify-between">
                <div className="mb-6 lg:mb-0">
                  <h4 className="text-2xl font-bold mb-4">Ceo Mirror</h4>
                  <p className="text-gray-400">Enhancing spaces with quality mirrors since 2022 .</p>
                </div>
                <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center">
                  <div className="mb-4 lg:mb-0 lg:mr-6">
                    <h5 className="font-semibold">Quick Links</h5>
                    <ul className="text-gray-400">
                      <Link href="/Terms&Conditions" className="hover:underline">About</Link>
                      <Link href="#" className="hover:underline">Services</Link>
                      <Link href="/Contact" className="hover:underline">Contact</Link>
                    </ul>
                  </div>
                  <div className="mb-4 lg:mb-0 lg:mr-6">
                    <h5 className="font-semibold">Follow Us</h5>
                    <ul className="text-gray-400 flex gap-4">
                      <li><a href="#" className="hover:text-white"><i className="fab fa-facebook"></i> Facebook</a></li>
                      <li><a href="#" className="hover:text-white"><i className="fab fa-twitter"></i> Twitter</a></li>
                      <li><a href="#" className="hover:text-white"><i className="fab fa-instagram"></i> Instagram</a></li>
                    </ul>
                  </div>
                  <div className="mb-4 lg:mb-0">
                    <h5 className="font-semibold">Contact Us</h5>
                    <p className="text-gray-400">Email: support@ceomirror.com</p>
                    <p className="text-gray-400">Phone: +234 704 805 8901</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-500">
              &copy; 2022  Ceo Mirror. All rights reserved.
            </div>
          </footer>
      </div>
    </div>
  );
}
