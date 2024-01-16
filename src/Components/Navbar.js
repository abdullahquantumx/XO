import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const css="text-black mx-4 text-xl font-medium hover:border-b-2 hover:border-blue-500 ease-in-out duration-150 hover:font-bold";

  
  return (
    <>
      <nav className="bg-gray-200 p-4 flex justify-around items-center border-black">
        <div className="flex items-center">
          <Image src='/logo.png' alt='logo' width={54} height={10} className="mr-2 " />
          <div className="text-3xl "><span className='text-black font-bold'>MEDI</span><span>CARE</span></div>
        </div>
        <div className="flex-grow text-center">
          <Link href="/" className="text-black mx-4 text-xl font-bold hover:border-b-2 hover:border-blue-500 ease-in-out duration-150 ">
            Home
          </Link>
          <Link href="/about" className={css}>
            About
          </Link>
          <Link href="/services" className={css}>
            Services
          </Link>
          <Link href="/contact" className={css}>
            Contact Us
          </Link>
          <Link href="#" className={css}>
            Appointment
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/login" className={css}>
            Login
          </Link>
          <span className="text-black mx-3 text-2xl">|</span>
          <Link href="/signUp" className={css}>
            Signup
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

