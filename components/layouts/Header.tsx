import Image from "next/image";
import Link from "next/link";
import { navBarLinks } from "../../constants/link";

const header = () => {
  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/logo.svg"
              alt="community_logo"
              className="rounded-full object-cover"
              width={24}
              height={24}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Brand Name
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {navBarLinks.map((link) => {
                return (
                  <li key={link.label}>
                    <Link
                      href={link.route}
                      className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default header;
