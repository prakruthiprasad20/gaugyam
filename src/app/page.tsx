// // // // // import Image from "next/image";

// // // // // export default function Home() {
// // // // //   return (
// // // // //     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
// // // // //       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
// // // // //         <Image
// // // // //           className="dark:invert"
// // // // //           src="/next.svg"
// // // // //           alt="Next.js logo"
// // // // //           width={180}
// // // // //           height={38}
// // // // //           priority
// // // // //         />
// // // // //         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
// // // // //           <li className="mb-2 tracking-[-.01em]">
// // // // //             Get started by editing{" "}
// // // // //             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
// // // // //               src/app/page.tsx
// // // // //             </code>
// // // // //             .
// // // // //           </li>
// // // // //           <li className="tracking-[-.01em]">
// // // // //             Save and see your changes instantly.
// // // // //           </li>
// // // // //         </ol>

// // // // //         <div className="flex gap-4 items-center flex-col sm:flex-row">
// // // // //           <a
// // // // //             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
// // // // //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // // //             target="_blank"
// // // // //             rel="noopener noreferrer"
// // // // //           >
// // // // //             <Image
// // // // //               className="dark:invert"
// // // // //               src="/vercel.svg"
// // // // //               alt="Vercel logomark"
// // // // //               width={20}
// // // // //               height={20}
// // // // //             />
// // // // //             Deploy now
// // // // //           </a>
// // // // //           <a
// // // // //             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
// // // // //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // // //             target="_blank"
// // // // //             rel="noopener noreferrer"
// // // // //           >
// // // // //             Read our docs
// // // // //           </a>
// // // // //         </div>
// // // // //       </main>
// // // // //       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
// // // // //         <a
// // // // //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// // // // //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // // //           target="_blank"
// // // // //           rel="noopener noreferrer"
// // // // //         >
// // // // //           <Image
// // // // //             aria-hidden
// // // // //             src="/file.svg"
// // // // //             alt="File icon"
// // // // //             width={16}
// // // // //             height={16}
// // // // //           />
// // // // //           Learn
// // // // //         </a>
// // // // //         <a
// // // // //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// // // // //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // // //           target="_blank"
// // // // //           rel="noopener noreferrer"
// // // // //         >
// // // // //           <Image
// // // // //             aria-hidden
// // // // //             src="/window.svg"
// // // // //             alt="Window icon"
// // // // //             width={16}
// // // // //             height={16}
// // // // //           />
// // // // //           Examples
// // // // //         </a>
// // // // //         <a
// // // // //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// // // // //           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // // // //           target="_blank"
// // // // //           rel="noopener noreferrer"
// // // // //         >
// // // // //           <Image
// // // // //             aria-hidden
// // // // //             src="/globe.svg"
// // // // //             alt="Globe icon"
// // // // //             width={16}
// // // // //             height={16}
// // // // //           />
// // // // //           Go to nextjs.org →
// // // // //         </a>
// // // // //       </footer>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // export default function HomePage() {
// // // //   return (
// // // //     <div className="flex flex-col items-center text-center p-10">
// // // //       <h1 className="text-4xl font-bold text-green-700">Welcome to GauGyam</h1>
// // // //       <p className="text-lg mt-4 max-w-2xl text-align-right">
// // // //         GauGyam is your go-to platform for cattle health and breeding solutions. 
// // // //         Our app provides <span className="font-semibold">cattle disease detection, breeding programs, and other essential tools</span> 
// // // //         to support farmers and cattle owners.
// // // //       </p>
// // // //       <img src="/cattle.png" alt="Cattle" className="w-80 h-auto mt-6 rounded-lg shadow-lg" />
// // // //       <a href="/marketplace" className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800">
// // // //         Visit Marketplace
// // // //       </a>
// // // //     </div>
// // // //   );
// // // // }



// // // export default function HomePage() {
// // //   return (
// // //     <div className="flex flex-row items-center justify-between space-x-8 p-5">
// // //       {/* Image on the Left */}
// // //       <img src="/cattle.png" alt="Cattle" className="w-80 h-auto rounded-lg shadow-lg" />

// // //       {/* Text on the Right */}
// // //       <div className="text-left max-w-xl">
// // //         <h2 className="text-4xl font-bold text-grey-700">Welcome to GauGyam</h2>
// // //         <p className="text-lg mt-4">
// // //           GauGyam is your go-to platform for cattle health and breeding solutions.
// // //           Our app provides <span className="font-semibold">cattle disease detection, breeding programs, and other essential tools</span> 
// // //           to support farmers and cattle owners.
// // //         </p>
// // //         <a href="/marketplace" className="mt-6 inline-block px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800">
// // //           Visit Marketplace
// // //         </a>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// //plain  page with 4 features that's it

// // // import Header from "@/components/Header"; 
// // // import Footer from "@/components/Footer";

// // // export default function HomePage() {
// // //   return (
// // //     <div className="bg-amber-50 text-[#4B2E1A] min-h-screen">
// // //       {/* Header */}
// // //       {/* <Header /> */}

// // //       {/* Hero Section */}
// // //       <section className="flex flex-col items-center justify-center text-center py-16">
// // //         <h2 className="text-4xl font-bold mb-4">Welcome to GauGyam</h2>
// // //         <p className="text-lg max-w-2xl">
// // //         An AI-powered solution dedicated to smarter cow management and disease prevention. Track health, detect early signs of illness, and enhance dairy and cattle farming efficiency with real-time insights.        </p>
// // //       </section>

// // //       {/* Features Section (GIFs) */}
// // //       <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16">
// // //         {/* Feature 1 */}
// // //         <div className="flex flex-col items-center">
// // //           <img
// // //             src="https://i.pinimg.com/originals/25/0c/be/250cbec810f7958f7814b8ac98ebca7f.gif"
// // //             alt="Feature 1"
// // //             className="rounded-lg shadow-lg w-full h-60 max-w-md"
// // //           />
// // //         </div>

// // //         {/* Feature 2 */}
// // //         <div className="flex flex-col items-center">
// // //           <img
// // //             src="https://your-gif-link-2.gif"
// // //             alt="Feature 2"
// // //             className="rounded-lg shadow-lg w-full h-60 max-w-md"
// // //           />
// // //         </div>

// // //         {/* Feature 3 */}
// // //         <div className="flex flex-col items-center">
// // //           <img
// // //             src="https://your-gif-link-3.gif"
// // //             alt="Feature 3"
// // //             className="rounded-lg shadow-lg w-full h-60 max-w-md"
// // //           />
// // //         </div>

// // //         {/* Feature 4 */}
// // //         <div className="flex flex-col items-center">
// // //           <img
// // //             src="https://your-gif-link-4.gif"
// // //             alt="Feature 4"
// // //             className="rounded-lg shadow-lg w-full h-60 max-w-md"
// // //           />
// // //         </div>
// // //       </section>

// // //       {/* Footer */}
// // //       {/* <Footer /> */}
// // //     </div>
// // //   );
// // // }









// // export default function HomePage() {
// //   return (
// //     <div className="bg-amber-50 text-[#4B2E1A] min-h-screen">
// //       {/* Header */}
// //       {/* <Header /> */}

// //       {/* Hero Section */}
// //       <section className="flex flex-col items-center justify-center text-center py-16">
// //         <h2 className="text-4xl font-bold mb-4">Welcome to GauGyam</h2>
// //         <p className="text-lg max-w-2xl">
// //           An AI-powered solution dedicated to smarter cow management and disease prevention. Track health, detect early signs of illness, and enhance dairy and cattle farming efficiency with real-time insights.
// //         </p>
// //       </section>

// //       {/* Features Section (GIFs) */}
// //       <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 gap-10">
// //         {/* Image on the Left */}
// //         <div className="w-full md:w-1/2 flex justify-center">
// //           <img
// //             src="https://i.pinimg.com/originals/25/0c/be/250cbec810f7958f7814b8ac98ebca7f.gif"
// //             alt="Feature 1"
// //             className="rounded-lg shadow-lg w-full h-60 max-w-md"
// //           />
// //         </div>

// //         {/* Text on the Right */}
// //         <div className="w-full md:w-1/2 px-5">
// //           <h3 className="text-2xl font-semibold mb-4">Smart Cow Health Monitoring</h3>
// //           <p className="text-lg">
// //             Get real-time health insights and detect early disease symptoms to ensure the well-being of your cattle. AI-powered tracking enhances efficiency and dairy production.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Additional Feature GIFs */}
// //       <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16">
// //         {/* Feature 2 */}
// //         <div className="flex flex-col items-center">
// //           <img
// //             src="https://your-gif-link-2.gif"
// //             alt="Feature 2"
// //             className="rounded-lg shadow-lg w-full h-60 max-w-md"
// //           />
// //         </div>

// //         {/* Feature 3 */}
// //         <div className="flex flex-col items-center">
// //           <img
// //             src="https://your-gif-link-3.gif"
// //             alt="Feature 3"
// //             className="rounded-lg shadow-lg w-full h-60 max-w-md"
// //           />
// //         </div>

// //         {/* Feature 4 */}
// //         <div className="flex flex-col items-center">
// //           <img
// //             src="https://your-gif-link-4.gif"
// //             alt="Feature 4"
// //             className="rounded-lg shadow-lg w-full h-60 max-w-md"
// //           />
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       {/* <Footer /> */}
// //     </div>
// //   );
// // }













// export default function HomePage() {
//   return (
//     <div className="bg-white text-[#4B2E1A] min-h-screen">
//       {/* Hero Section - Image on Left, Text on Right */}
//       <section className="flex flex-col md:flex-row items-center justify-center text-left py-16 gap-12">
        
        
//         <img
//           src="/mainpic2.png"
//           alt="Hero Image"
//           className="rounded-lg w-full h-90 md:w-1/2 max-w-md p-0"
//         />
//         <div className="md:w-1/2">
//           <h2 className="text-4xl font-bold mb-4">Welcome to GauGyam</h2>
//           <p className="text-lg max-w-2xl pr-0">
//             An AI-powered solution dedicated to smarter cow management and disease prevention. Track health, detect early signs of illness, and enhance dairy and cattle farming efficiency with real-time insights.
//           </p>
//         </div>
//       </section>

//       {/* Features Section (GIFs with Info) */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16">
//         {/* Feature 1 */}
//         <div className="flex flex-col md:flex-row items-center gap-4">
//           <img
//             src="/login.jpg"
//             alt="Feature 1"
//             className="rounded-lg shadow-lg w-full md:w-1/2 h-140 max-w-md"
//           />
//           <p className="text-lg md:w-1/2">This is the login page of the Gaugyam app, where users enter their phone number and request an OTP for verification. It serves as the entry point to access smart cattle care features.
// </p>
//         </div>

//         {/* Feature 2 */}
//         <div className="flex flex-col md:flex-row items-center gap-4">
//           <img
//             src="/home.jpg"
//             alt="Feature 2"
//             className="rounded-lg shadow-lg w-full md:w-1/2 h-140 max-w-md"
//           />
//           <p className="text-lg md:w-1/2">This is the home page of the GauGyam app, displaying key cattle statistics like male-to-female ratio, breed ratio, and age distribution. It also provides quick access to feed stock and breeding techniques.</p>
//         </div>

         

//          {/* Feature 3 */}
//          <div className="flex flex-col md:flex-row items-center gap-4">
//           <img
//             src="/chat_assistant.jpg"
//             alt="Feature 2"
//             className="rounded-lg shadow-lg w-full md:w-1/2 h-140 max-w-md"
//           />
//           <p className="text-lg md:w-1/2">Chat Assistant - Your Virtual Guide to Cow Care!

// Our Chat Assistant is designed to provide instant, expert guidance on all aspects of cow nutrition, feeding plans, health management, and general care. Whether you're a farmer, veterinarian, or animal enthusiast, get accurate and reliable information tailored to your needs.</p>
//         </div>



//          {/* Feature 4 */}
//          <div className="flex flex-col md:flex-row items-center gap-4">
//           <img
//             src="/dashboard.jpg"
//             alt="Feature 2"
//             className="rounded-lg shadow-lg w-full md:w-1/2 h-140 max-w-md"
//           />
//           <p className="text-lg md:w-1/2">Dashboard - 
//           Manage your cattle efficiently with a clear, organized view. Track age, breed, and details at a glance. Navigate seamlessly to appointments, feed planning, and more.</p>
//         </div>



//          {/* Feature 5 */}
//          <div className="flex flex-col md:flex-row items-center gap-4">
//           <img
//             src="/cow_feeding_assistant.jpg"
//             alt="Feature 2"
//             className="rounded-lg shadow-lg w-full md:w-1/2 h-140 max-w-md"
//           />
//           <p className="text-lg md:w-1/2">AI-Powered Cow Feeding Assistant -  
//           A smart tool to create balanced feeding plans for cattle. It helps optimize nutrition by calculating essential dietary requirements based on key factors. Ensure better health and productivity with accurate and easy-to-follow feeding recommendations.</p>
//         </div>


//          {/* Feature 6 */}
//          <div className="flex flex-col md:flex-row items-center gap-4">
//           <img
//             src="/cow_feeding_assistant2.jpg"
//             alt="Feature 2"
//             className="rounded-lg shadow-lg w-full md:w-1/2 h-140 max-w-md"
//           />
//           <p className="text-lg md:w-1/2">The Cow Feeding Assistant is an AI-driven tool that helps farmers optimize livestock nutrition. By inputting key details like cow type, weight, age, breed, purpose, and health conditions, the assistant provides personalized feeding recommendations. Integrated with Google tools, it ensures efficient and data-driven farm management.</p>
//         </div>


//          {/* Feature 7 */}
//          <div className="flex flex-col md:flex-row items-center gap-4">
//           <img
//             src="/search.jpg"
//             alt="Feature 2"
//             className="rounded-lg shadow-lg w-full md:w-1/2 h-140 max-w-md"
//           />
//           <p className="text-lg md:w-1/2">Search Page -
//           Find Doctors, Pharmacies, Hospitals, and key cattle health topics like diseases, nutrition, and stress management—all in one place.</p>
//         </div>


//          {/* Feature 8 */}
//          <div className="flex flex-col md:flex-row items-center gap-4">
//           <img
//             src="/schedule_appointment.png"
//             alt="Feature 2"
//             className="rounded-lg shadow-lg w-full md:w-1/2 h-140 max-w-md"
//           />
//           <p className="text-lg md:w-1/2">The Schedule Appointment page allows users to book vet visits by selecting a cow, entering the doctor’s name, choosing a date and time, and confirming the appointment.</p>
//         </div>

//          {/* Feature 9 */}
//          <div className="flex flex-col md:flex-row items-center gap-4">
//           <img
//             src="/view_appointments.jpg"
//             alt="Feature 2"
//             className="rounded-lg shadow-lg w-full md:w-1/2 h-140 max-w-md"
//           />
//           <p className="text-lg md:w-1/2">The View Appointments page displays scheduled and completed vet visits, showing details like doctor name, cow ID, date, time, and status. Users can cancel appointments if needed.</p>
//         </div>
//       </section>

//       {/* Footer */}
//       {/* <Footer /> */}
//     </div>

//   );
// }






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
