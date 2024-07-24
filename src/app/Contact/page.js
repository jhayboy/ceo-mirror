import Head from 'next/head';
import { ImWhatsapp } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us - Ceo Mirror</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-10">
       <button className='m-auto bg-gray-700 ml-6 p-2 px-2 rounded-md font-semibold'>
          <Link href="/">Back</Link>
        </button>
        <div className="container mx-auto px-6 lg:px-20 bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-10">
            We are here to help! For more enquiry reach out to us through Instagram or WhatsApp.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-4">
            <a href="https://www.instagram.com/ceomirror?igsh=dms2ZzU2ODFyY2Uy" target="_blank" rel="noopener noreferrer">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-lg w-full lg:w-auto mb-4 lg:mb-0">
                <FaInstagram/>
                Follow Us on Instagram
              </button>
            </a>
            <a href="https://wa.me/7048058901" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg w-full lg:w-auto">
                <ImWhatsapp/>
                Chat with Us on WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
