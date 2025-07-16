import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
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
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="px-4 py-2 rounded hover:bg-[#DA6D1C] flex items-center gap-2 duration-200"
                >
                    <FaUser className="text-lg" />
                    <span>{username}</span>
                </button>

                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-32 z-10">
                        <button
                            onClick={() => {
                                navigate("/profile");
                                setDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2 hover:bg-gray-100 text-left flex items-center gap-2 duration-200"
                        >
                            <FaCircleUser />
                            <span>Profile</span>
                        </button>
                        <button
                            onClick={handleLogout}
                            className="w-full px-4 py-2 hover:bg-gray-100 text-left flex items-center gap-2 duration-200"
                        >
                            <IoLogOut />
                            <span>Logout</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
