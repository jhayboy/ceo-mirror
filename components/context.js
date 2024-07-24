import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineGppGood } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link'

const Context = () => {
  return (
    <div className="py-10 items-center justify-center w-full lg:flex lg:gap-10">
      <div className="flex w-full justify-center items-center rounded-lg shadow-lg p-4">
        <Image src="/myrrow.jpeg" alt="half moon mirror" width={400} height={400} className="rounded-lg"/>
      </div>
      <div className='mt-5 lg:mt-0'>
        <h2 className="text-3xl font-bold text-gray-800 my-10">Benefits You Get When Using Our Service</h2>
        <p className="text-gray-600 mb-6">
          Experience cost savings and increased collaboration opportunities with our premium mirrors, making any space in your home ideal. Our mirrors enhance brightness and openness, boosting the overall ambiance and fostering a welcoming atmosphere. See how our mirrors can transform your living space into a perfect, inviting home.
        </p>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          <a href='https://www.instagram.com/ceomirror?igsh=dms2ZzU2ODFyY2Uy'>Learn More</a>
        </button>
      </div>
      
    </div>
  );
};

export default Context;
