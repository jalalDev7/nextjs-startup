"use client";
import { motion } from "framer-motion";

const cards = [
  { label: "Revenue", value: "159,200 DH", delta: "+14%" },
  { label: "Missions", value: "1,032", delta: "+9%" },
  { label: "Clients", value: "387", delta: "+7%" },
  { label: "Growth", value: "+22%", delta: "+22%" },
];

export default function AnalyticsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-8">
      {cards.map((card, index) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <p className="text-sm text-slate-500 uppercase tracking-wider dark:text-slate-400">
            {card.label}
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            {card.value}
          </p>
          <p className="mt-1 text-sm font-semibold text-green-600">
            {card.delta} vs last month
          </p>
        </motion.div>
      ))}
    </div>
  );
}
