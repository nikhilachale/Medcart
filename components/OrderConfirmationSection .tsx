import Image from "next/image";
import {
  ChevronDownIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";

export const OrderConfirmationSection = () => {
  return (
    <header className="w-full flex items-center justify-between bg-white px-4 lg:px-8 py-2 gap-4">
      <Image src="/logo.png" alt="Medcart" width={128} height={40} className="w-24 sm:w-32 h-auto" />

      {/* Location – desktop only */}
      <div className="hidden md:flex flex-col">
        <span className="text-sm text-[#666666] ">Delivery to</span>
        <Button variant="ghost" className="h-auto text-black p-0">
          Bengaluru, 560102 <ChevronDownIcon className="ml-1 h-4 w-4" />
        </Button>
      </div>
₹
      {/* Search */}
      <div className="hidden sm:flex  flex-1 max-w-md relative">
        <Input  placeholder="Search medicines or health products" />
        <SearchIcon className="absolute text-black right-3 top-1/2 -translate-y-1/2 h-4 w-4 " />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex text-black items-center gap-4">
        <Button variant="ghost">
          <UserIcon  className="text-[#60096A]"/>  Login
        </Button>
        <Button variant="ghost">
          <ShoppingCartIcon  className="text-[#60096A]"/> Cart
        </Button>
        <Button variant="ghost">
          <PlusIcon  className="text-[#60096A]"/> Become a seller
        </Button>
      </nav>

      {/* Mobile Icons */}
      <div className="ml-auto flex items-center gap-2 lg:hidden">
        <ShoppingCartIcon className="h-6 w-6" />
        <MenuIcon className="h-6 w-6" />
      </div>
    </header>
  );
};