"use client";
import Link from "next/link";
import { FiHome, FiPieChart, FiUsers, FiSettings } from "react-icons/fi";

const navItems = [
  { label: "Analytics", href: "/dashboard", icon: FiPieChart },
  { label: "Projects", href: "#", icon: FiHome },
  { label: "Clients", href: "#", icon: FiUsers },
  { label: "Settings", href: "#", icon: FiSettings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 shrink-0 bg-white/95 border-r border-slate-200 h-screen sticky top-0 dark:bg-slate-900 dark:border-slate-800">
      <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Dash
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Freelance hub
        </p>
      </div>
      <nav className="mt-5" aria-label="Main navigation">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={`item-${item.label}`}>
                <Link
                  href={item.href}
                  className="flex items-center px-5 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
