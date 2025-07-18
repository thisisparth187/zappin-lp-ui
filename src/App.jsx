import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const username = "Parth";
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen  bg-[#fef1e7]">
        <Header username={username} toggleSidebar={() => setCollapsed(!collapsed)} />
        <div className="flex flex-1">
          <Sidebar collapsed={collapsed} />
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
