"use client";

import { cn } from "@/lib/utils";
import { selectCategories } from "@/redux/categories/selector";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const { data, pending } = useAppSelector(selectCategories);

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
  ];
  // data?.map((item) =>
  //   item.name === "Home"
  //     ? {
  //         href: `/`,
  //         label: item.name,
  //         active: pathname === `/`,
  //       }
  //     : {
  //         href: `/${item.name.replace(/\s+/g, "").toLowerCase()}`,
  //         label: item.name,
  //         active:
  //           pathname === `/${item.name.replace(/\s+/g, "").toLowerCase()}`,
  //       }
  // );

  return (
    <nav
      className={cn(
        "z-10 sticky flex items-center space-x-4 lg:space-x-6",
        className
      )}
    >
      {pending && "Loading..."}
      {data &&
        routes?.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-lg md:text-xl font-medium hover:text-primary hover:scale-110 hover:font-bold transition-all duration-200",
              pathname === "/" ? "text-white" : "text-black",
              route.active && pathname === "/"
                ? "text-white font-bold scale-110"
                : "text-black scale-110"
            )}
          >
            {route.label}
          </Link>
        ))}
    </nav>
  );
}
