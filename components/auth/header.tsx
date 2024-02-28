import { cn } from "@/lib/utils";
import React from "react";

interface HeaderProps {
  headerTitle: string;
  label: string;
}

const Header: React.FC<HeaderProps> = ({ label, headerTitle }) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold")}>{headerTitle}</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
