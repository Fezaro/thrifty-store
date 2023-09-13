"use client";
import Button from "@/components/ui/buttond";
import { ShoppingBag} from "lucide-react";
// import { ShoppingBagIcon } from "lucide-react";


const NavbarActions = () => {
    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center rounded-full bg-black px-4 py-2">
            <ShoppingBag size={20} />
            </Button>
        </div>
    )
};

export default NavbarActions;