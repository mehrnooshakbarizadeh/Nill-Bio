import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import React from "react";

function MenuAncher({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const router = useRouter();
  const selected = isSelected(router, href);

  return (
    <>
      <Link href={href} >
        <a className={selected ? "text-blue-400" : "text-gray-300"} >
          {children}
        </a>
      </Link>
    </>
  );
}

function isSelected(router: NextRouter, href: string) {
  if (router.pathname === href) {
    return true;
  } else return false;
}

export default MenuAncher;
