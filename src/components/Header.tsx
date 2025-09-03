import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Trophy,
  ClipboardList,
  BarChart2,
  Settings,
  Search,
  Wallet,
  Bell,
  UserRoundPlus,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#AD0002] text-white px-4 sm:px-6 pt-4 pb-20 sm:pb-20">
      <div className="flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="ScoreHub" className="h-10 sm:h-12 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center text-[14px] font-normal leading-[100%] tracking-[0]">
          <Link to="/" className="flex items-center gap-1 hover:text-gray-200">
            <Home size={18} /> Home
          </Link>
          <Link to="/feed" className="flex items-center gap-1 hover:text-gray-200">
            <ClipboardList size={16} /> Feed
          </Link>
          <Link to="/leagues" className="flex items-center gap-1 hover:text-gray-200">
            <Trophy size={18} /> Leagues
          </Link>
          <Link to="/mypicks" className="flex items-center gap-1 hover:text-gray-200">
            <ClipboardList size={18} /> My Picks
          </Link>
          <Link to="/leaderboard" className="flex items-center gap-1 hover:text-gray-200">
            <BarChart2 size={18} /> Leaderboard
          </Link>
          <Link to="/settings" className="flex items-center gap-1 hover:text-gray-200">
            <Settings size={18} /> Settings
          </Link>
        </nav>

        {/* Right: Icons + Login */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="p-2 rounded-full bg-white/20 hover:bg-red-600">
            <Search size={18} />
          </button>
          <button className="p-2 rounded-full bg-white/20 hover:bg-red-600">
            <Wallet size={18} />
          </button>
          <button className="p-2 rounded-full bg-white/20 hover:bg-red-600">
            <Bell size={18} />
          </button>

          <div className="hidden sm:block w-px h-6 bg-white/40" />

          <Link
            to="/login"
            className="hidden md:flex bg-white text-red-600 px-3 sm:px-4 py-1 rounded-md font-medium text-sm hover:bg-gray-100"
          >
            <UserRoundPlus size={18} className="mr-1 sm:mr-2" />
            Login/Signup
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-red-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="mt-4 flex flex-col gap-3 lg:hidden text-sm font-medium">
          <Link to="/" className="flex items-center gap-2 hover:text-gray-200">
            <Home size={18} /> Home
          </Link>
          <Link to="/feed" className="flex items-center gap-2 hover:text-gray-200">
            <ClipboardList size={16} /> Feed
          </Link>
          <Link to="/leagues" className="flex items-center gap-2 hover:text-gray-200">
            <Trophy size={18} /> Leagues
          </Link>
          <Link to="/mypicks" className="flex items-center gap-2 hover:text-gray-200">
            <ClipboardList size={18} /> My Picks
          </Link>
          <Link to="/leaderboard" className="flex items-center gap-2 hover:text-gray-200">
            <BarChart2 size={18} /> Leaderboard
          </Link>
          <Link to="/settings" className="flex items-center gap-2 hover:text-gray-200">
            <Settings size={18} /> Settings
          </Link>
          <Link
            to="/login"
            className="flex md:hidden items-center gap-2 bg-white text-red-600 px-3 py-1 rounded-md hover:bg-gray-100 mt-2 w-fit"
          >
            <UserRoundPlus size={18} /> Login/Signup
          </Link>
        </nav>
      )}
    </header>
  );
}
