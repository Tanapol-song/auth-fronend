import React from "react";
import Image from "next/image";
import Link from "next/link";

const FormContainer = ({ children }) => {
  return (
    <div className="bg-white p-4 rounded-xl drop-shadow-xl">
      <Image
        src="/images/logo2.png"
        alt="logoBlueStone"
        width={300}
        height={300}
      />
      <div>{children}</div>
      <div className="flex flex-col justify-center items-center w-full border-t-2 border-gray-300">
        <p className="text-xs text-black py-2">Contact Us</p>
        <div className="flex flex-row gap-8">
          <Link
            href="https://www.facebook.com/Bluestone.co.th/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons-facebook.png"
              alt="Facebook"
              width={40}
              height={40}
            />
          </Link>
          <Link
            href="https://www.instagram.com/bluestonethailand/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons-ig.png"
              alt="Instagram"
              width={40}
              height={40}
            />
          </Link>
          <Link
            href="https://line.me/ti/p/~@bluestonethailand"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons-line.png"
              alt="Line"
              width={40}
              height={40}
            />
          </Link>
          <Link
            href="https://line.me/ti/p/~@bluestonethailand"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons-youtube.png"
              alt="youtube"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <Link
          href="https://www.bluestone.co.th/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-xs text-blue-900 pt-2 underline">https://www.bluestone.co.th</p>
        </Link>
      </div>
    </div>
  );
};

export default FormContainer;
