

"use client";
import Image from 'next/image';

import Link from "next/link";
//import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-amber-950 shadow-md">
      {/* Left Side - Logo and Title */}
      <div className="flex items-center space-x-3">
        <Image
          src="/logo_white.png" // Make sure your logo is in the public folder
          alt="GauGyam Logo"
          width={54} 
          height={54} 
          className="object-contain"
        />
        <h1 className="text-2xl font-bold text-white">GauGyam</h1>
      </div>

      {/* Right Side - Navigation Links */}
      <div className="space-x-5 text-white">
        {/* <Link href="/" className="hover:text-gray-600">Home</Link>
        <Link href="/marketplace" className="hover:text-gray-600">Marketplace</Link> */}
        <Link href="/#contact" className="hover:text-gray-600">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Header;
