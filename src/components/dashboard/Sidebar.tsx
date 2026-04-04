import Link from "next/link";
import { FiHome, FiPieChart, FiUsers, FiSettings } from "react-icons/fi";
import { RiLogoutCircleFill } from "react-icons/ri";
import { signOut } from "@/auth";

const navItems = [
  { label: "Analytics", href: "/dashboard", icon: FiPieChart },
  { label: "Projects", href: "#", icon: FiHome },
  { label: "Clients", href: "#", icon: FiUsers },
  { label: "Settings", href: "#", icon: FiSettings },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 shrink-0 flex-col justify-between bg-white/95 border-r border-slate-200 sticky top-0 dark:bg-slate-900 dark:border-slate-800">
      <div>
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
      </div>

      <div className="px-6 py-5 border-t border-slate-200 dark:border-slate-800">
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            <RiLogoutCircleFill className="h-4 w-4" />
            Logout
          </button>
        </form>
      </div>
    </aside>
  );
}
