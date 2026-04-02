"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const LandingNavbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-lg shadow-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <div className="leading-tight">
              <p className="text-lg font-bold text-slate-900">Freelancer</p>
              <p className="text-xs text-blue-600 font-semibold">.ma</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <Link
              href="#how-it-works"
              className="hover:text-blue-600 transition-colors"
            >
              Comment ça marche
            </Link>
            <Link
              href="#why-us"
              className="hover:text-blue-600 transition-colors"
            >
              Pourquoi nous aimer
            </Link>
            <Link
              href="#categories"
              className="hover:text-blue-600 transition-colors"
            >
              Missions
            </Link>
            <Link
              href="#pricing"
              className="hover:text-blue-600 transition-colors"
            >
              Packs
            </Link>
            <Link
              href="#support"
              className="hover:text-blue-600 transition-colors"
            >
              Support
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/auth/login">
              <Button
                variant="ghost"
                className="text-blue-600 hover:bg-blue-50 px-4 py-2"
              >
                Connexion
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-4 py-2">
                Déposer une mission
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default LandingNavbar;
