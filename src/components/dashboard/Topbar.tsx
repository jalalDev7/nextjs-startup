"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiBell, FiMoon, FiSearch, FiSun, FiUser } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function Topbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur border-b px-6 py-4 bg-white/90 border-slate-200 text-slate-800 dark:bg-slate-900/90 dark:border-slate-700 dark:text-slate-100">
      <div className="flex items-center justify-between gap-4">
        <div className="relative max-w-md w-full">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-300" />
          <input
            type="search"
            placeholder="Search reports, projects, users..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? "hover:bg-slate-800 text-slate-200"
                : "hover:bg-blue-50 text-slate-600"
            }`}
            aria-label="Toggle theme"
            disabled={!mounted}
            title={
              mounted
                ? isDark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
                : "Loading theme"
            }
          >
            {mounted ? (
              isDark ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )
            ) : (
              <FiSun className="h-5 w-5 opacity-50" />
            )}
          </button>
          <button
            className={`p-2 rounded-lg ${
              isDark
                ? "hover:bg-slate-800 text-slate-200"
                : "hover:bg-blue-50 text-slate-600"
            }`}
          >
            <FiBell className="h-5 w-5" />
          </button>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-lg px-3 py-2 border border-slate-200 bg-white text-slate-700 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            <FiUser className="h-4 w-4 text-slate-600 dark:text-slate-200" />
          </Link>
        </div>
      </div>
    </header>
  );
}
