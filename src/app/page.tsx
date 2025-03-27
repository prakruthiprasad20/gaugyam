



import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-white text-[#4B2E1A] min-h-screen">
      {/* Hero Section - Image on Left, Text on Right */}
      <section className="flex flex-col md:flex-row items-center justify-center text-left py-16 gap-12">
        <Image
          src="/MAIN.png"
          alt="Hero Image"
          width={400}  // Set appropriate width
          height={300} // Set appropriate height
          className="rounded-lg w-full h-95 md:w-1/2 max-w-md p-0"
        />
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Welcome to GauGyam</h2>
          <p className="text-lg max-w-2xl pr-0">
            An AI-powered solution dedicated to smarter cow management and disease prevention. Track health, detect early signs of illness, and enhance dairy and cattle farming efficiency with real-time insights.
          </p>
        </div>
      </section>

<div className="flex items-center justify-center">
  <h2 className="text-xl font-semibold text-white border border-brown-900 bg-amber-950 px-6 py-5 rounded-md">
    Explore GauGyam&apos;s Smart Features
  </h2>
</div>

      {/* Features Section - 3 Features in Each Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-17 px-8 py-16">
        {/* Row 1 */}
        <div className="text-center border-1 border-amber-950 p-5 rounded-lg shadow-lg">
        <Image src="/login.jpg" alt="Feature 1"
         width={400}  // Set appropriate width
         height={300} // Set appropriate height
        className="rounded-lg shadow-lg w-full max-w-md" />
          <p className="text-lg mt-4">Login Page - Users enter their phone number and request an OTP for verification to access smart cattle care features.</p>
        </div>   

        <div className="text-center border border-amber-950 p-5 rounded-lg shadow-lg">
          <Image src="/home.jpg" alt="Feature 2"  width={400}  // Set appropriate width
    height={300} // Set appropriate height
    className="rounded-lg shadow-lg" 
    />
          <p className="text-lg mt-4">Home Page - Displays key cattle statistics like male-to-female ratio, breed ratio, and age distribution.</p>
        </div>

        <div className="text-center border border-amber-950 p-5 rounded-lg shadow-lg">
          <Image src="/chat_assistant.jpg" alt="Feature 3"
           width={400}  // Set appropriate width
           height={300} // Set appropriate height
           className="rounded-lg shadow-lg" />
          <p className="text-lg mt-4">Chat Assistant - Provides expert guidance on cow nutrition, feeding plans, and health management.</p>
        </div>

        {/* Row 2 */}
        <div className="text-center border border-amber-950 p-5 rounded-lg shadow-lg">
          <Image src="/dashboard.jpg" alt="Feature 4" 
           width={400}  // Set appropriate width
           height={300} // Set appropriate height
          className="rounded-lg shadow-lg w-full max-w-md" />
          <p className="text-lg mt-4">Dashboard - Manage cattle efficiently with insights into age, breed, and vital details at a glance.</p>
        </div>

        

        <div className="text-center border border-amber-950 p-5 rounded-lg shadow-lg">
          <Image src="/cow_feeding_assistant2.jpg" alt="Feature 6"
           width={400}  // Set appropriate width
           height={300} // Set appropriate height
          className="rounded-lg shadow-lg w-full max-w-md" />
          <p className="text-lg mt-4">Users enter relevant data, which is processed by AI to generate precise nutritional insights.

</p>
        </div>

        <div className="text-center border border-amber-950 p-5 rounded-lg shadow-lg">
          <Image src="/cow_feeding_assistant.jpg" alt="Feature 5"
           width={400}  // Set appropriate width
           height={300} // Set appropriate height
          className="rounded-lg shadow-lg w-full max-w-md" />
          <p className="text-lg mt-4">Cow Feeding Assistant - The AI then delivers a customized feeding plan, ensuring optimal health and well-being.







</p>
          </div>

        {/* Row 3 */}
        <div className="text-center border border-amber-950 p-5 rounded-lg shadow-lg">
          <Image src="/search.jpg" alt="Feature 7"
           width={400}  // Set appropriate width
           height={300} // Set appropriate height
          className="rounded-lg shadow-lg w-full max-w-md" />
          <p className="text-lg mt-4">Search Page - Find doctors, pharmacies, hospitals, and cattle health topics in one place.</p>
        </div>

        <div className="text-center border border-amber-950 p-5 rounded-lg shadow-lg">
          <Image src="/schedule_appointment.png" alt="Feature 8" 
           width={400}  // Set appropriate width
           height={300} // Set appropriate height
          className="rounded-lg shadow-lg w-full max-w-md" />
          <p className="text-lg mt-4">Schedule Appointment - Book vet visits by selecting a cow, entering doctor details, and choosing a time.</p>
        </div>

        <div className="text-center border border-amber-950 p-5 rounded-lg shadow-lg">
          <Image src="/view_appointments.jpg" alt="Feature 9"
           width={400}  // Set appropriate width
           height={300} // Set appropriate height
          className="rounded-lg shadow-lg w-full max-w-md" />
          <p className="text-lg mt-4">View Appointments - Displays scheduled and completed vet visits with details like doctor, date, and status.</p>
        </div>
      </section>
    </div>
  );
}
