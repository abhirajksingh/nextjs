"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTest = () => {
  // Client Side Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  console.log(q);
  const handleClick = () => {
    console.log("clicked");
    router.back();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Home
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTest;
