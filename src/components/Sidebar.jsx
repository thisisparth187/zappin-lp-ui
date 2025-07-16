import { Link, useLocation } from "react-router-dom";
import { FaHome, FaShoppingCart, FaMoneyCheckAlt } from "react-icons/fa";

const navItems = [
    { name: "Landing", path: "/", icon: <FaHome /> },
    { name: "Cart", path: "/cart", icon: <FaShoppingCart /> },
    { name: "Checkout", path: "/checkout", icon: <FaMoneyCheckAlt /> },
];

const Sidebar = ({ collapsed }) => {
    const location = useLocation();

    return (
        <div
            className={`${collapsed ? "w-16" : "w-60"
                } h-full bg-[#222D32] text-[#FFFEFF] font-bold flex flex-col transition-all duration-300`}
        >
            <nav className="flex-1 p-2">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-2 my-4 mx-2 py-2 rounded hover:bg-[#FFA923] ${location.pathname === item.path ? "bg-gray-700" : ""
                            } duration-200`}
                    >
                        <span className="text-lg">{item.icon}</span>
                        {!collapsed && <span>{item.name}</span>}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
