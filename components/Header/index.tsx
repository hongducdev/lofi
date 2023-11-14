import { LibraryBig } from "lucide-react";
import Link from "next/link";
import React from "react";
import ToggleExpand from "./ToggleExpand";
import SwitchDayNight from "./SwitchDayNight";

const Header = () => {
  return (
    <div className="fixed top-5 left-14 min-w-[500px] glass-effect p-3 z-50 rounded-2xl flex items-center justify-between gap-10">
      <Link href="/" className="cursor-pointer flex items-center gap-2">
        <LibraryBig size={45} color="white" />
        <span className="text-white text-3xl font-bold">Chill With Me</span>
      </Link>

      <div className="flex items-center gap-5">
        <SwitchDayNight />
        <ToggleExpand />
      </div>
    </div>
  );
};

export default Header;
