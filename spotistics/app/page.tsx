import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';
// import { usePathname } from "next/navigation";

export default function Home() {

  // const pathname = usePathname();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link
        key={"stats page"} href={"/general-stats"}
        className={clsx(
          ' gap-2 rounded-md text-black bg-gray-50 p-3 text-sm font-medium hover:bg-red-500 hover:text-yellow-600  ',
        )}
      >
        <div className=" flex w-30 items-center justify-center">
          <p className="items-center justify-centerhidden md:block text-black"> Stats Page </p>
        </div>
      </Link>
    </div>
  );
}
