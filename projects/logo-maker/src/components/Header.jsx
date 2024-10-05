import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

function Header() {
  return (
    <div className="p-2  shadow-sm border flex items-center justify-between">
      <img src="/logo.svg" alt="logo" />
      <Button className="flex gap-2 items-center">
        <Download className="w-4 h-4" /> Download
      </Button>
    </div>
  );
}

export default Header;
