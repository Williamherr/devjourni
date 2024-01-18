import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        {/* <Image src='/logo.svg' alt='logo' width={28} height={28} /> */}
        <p className="text-heading3-bold text-light-1 max-xs:hidden">LOGO</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">sign in</div>
      </div>
    </nav>
  );
};

export default NavBar;
