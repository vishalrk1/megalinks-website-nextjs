"use client";

import { cn } from "@/lib/utils";
import { selectCategories } from "@/redux/categories/selector";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const { data, pending, error } = useAppSelector(selectCategories);
  
  const routes = data?.map((item) =>
    item.name === "Home"
      ? {
          href: `/`,
          label: item.name,
          active: pathname === `/`,
        }
      : {
          href: `/${item.name.replace(/\s+/g, "").toLowerCase()}`,
          label: item.name,
          active:
            pathname === `/${item.name.replace(/\s+/g, "").toLowerCase()}`,
        }
  );

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {pending && "Loading..."}
      {data &&
        routes?.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
    </nav>
  );
}
