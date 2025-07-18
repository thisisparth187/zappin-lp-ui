import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const Header = ({ username, toggleSidebar }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const handleLogout = () => {
        alert("Logged out!");
    };
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex justify-between items-center bg-[#F3791F] text-white px-6 py-3 shadow-md">
            <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold mx-15">Zappin</h1>
                <FaBars
                    onClick={toggleSidebar}
                    className="text-xl cursor-pointer hover:text-white"
                />
            </div>

            <div className="relative" ref={dropdownRef}>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <FaUser className="text-lg" />
                            <span>{username}</span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => navigate('/profile')}>Profile</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleLogout()}>Log Out</DropdownMenuItem>
                    </DropdownMenuContent>

                </DropdownMenu>
            </div>
        </div>
    );
};

export default Header;
