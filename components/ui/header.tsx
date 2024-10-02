"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="mb-[10rem]">
      <div className="z-30 w-full bg-gradient-to-r from-[#f6f6f6] to-[#efefef] p-5 fixed">
        <div className="px-52">
          <div className="">
            {/* Site branding */}
            <Link href="https://hologo.world/">
              <div className="flex items-center justify-center gap-4">
                <Logo />
                <h4 className="flex text-transparent text-2xl font-extrabold bg-clip-text bg-gradient-to-r from-[#a32260] to-[#ef592a]">
                  Hologo
                </h4>
              </div>
            </Link>

            {/* Desktop sign in links */}
            {/* <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                >
                Sign In
                </Link>
                </li>
                <li>
                <Link
                href="/signup"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
              Register
              </Link>
              </li>
          </ul> */}
          </div>
        </div>
      </div>
    </header>
  );
}
