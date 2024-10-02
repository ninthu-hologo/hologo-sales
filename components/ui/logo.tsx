import Link from "next/link";
import Image from "next/image";
// import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="https://hologo.world/" className="inline-flex shrink-0" aria-label="Cruip">
      {/* removed the template logo from the application */}
      {/* <Image src={logo} alt="Cruip Logo" width={32} height={32} /> */}
      <Image
        src={"/images/logo/Icon-Store-1024.png"}
        alt="Hologo Logo"
        width={50}
        height={50}
        className="rounded-md"
      />
    </Link>
  );
}
