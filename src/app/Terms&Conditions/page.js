import Head from 'next/head';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div>
      <Head>
        <title>Terms and Conditions - Ceo Mirror</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-10">
        <button className='m-auto bg-gray-700 ml-6 p-2 px-2 rounded-md font-semibold'>
          <Link href="/">Back</Link>
        </button>
        <div className="container mx-auto px-6 lg:px-20 bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
          <p className='text-black'>Welcome to Ceo Mirror, where we specialize in making high-quality mirrors. By accessing or using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Payment</h2>
          <p className="text-gray-600 mb-6">
            2.1. Payments can be made in part or in full for any mirror purchased from our online store.
          </p>
          <p className="text-gray-600 mb-6">
            2.2. Once payment is received, production process for your mirror purchase would commence, production time frame and delivery date would be communicated with you by a sales representative.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Delivery Notification and Delay</h2>
          <p className="text-gray-600 mb-6">
            3.1. Upon being notified that the mirror is ready for delivery, the client is expected to arrange for the delivery within two (2) days.
          </p>
          <p className="text-gray-600 mb-6">
            3.2. If the client fails to arrange for the delivery within the specified two-day period, any risk associated with the mirror will transfer to the client.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Custody and Responsibility</h2>
          <p className="text-gray-600 mb-6">
            4.1. Our company takes no responsibility for the mirror once the two-day period after notification has elapsed. This includes any damage or loss that may occur while the mirror remains in our custody.
          </p>
          <p className="text-gray-600 mb-6">
            4.2. Due to the fragile nature of our mirrors, we do not store customers mirrors in our workshop beyond the two-day period.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Liability</h2>
          <p className="text-gray-600 mb-6">
            5.1. The company is not liable for any damages or loss that occur to the mirror if delivery is delayed beyond the two-day period specified.
          </p>
          <p className="text-gray-600 mb-6">
            5.2. The client assumes full responsibility for any risks associated with delayed delivery casued by the client, including but not limited to damages and loss.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Amendments</h2>
          <p className="text-gray-600 mb-6">
            6.1. We reserve the right to modify or update these terms and conditions at any time. Changes will be effective immediately upon posting on our website.
          </p>
          <p className="text-gray-600 mb-6">
            6.2. Continued use of our services following any changes indicates your acceptance of the new terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Contact Information</h2>
          <p className="text-gray-600 mb-6">
            For any questions or concerns regarding these terms and conditions, please contact us at support@ceomirror.com.
          </p>

          <div className="mt-10">
            <p className="text-gray-600 mb-2">
              By using any of our services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
            </p>
            <p className="text-gray-600">
              Effective Date: July 13, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
