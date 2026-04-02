"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const revenueData = [
  { name: "Jan", revenue: 42000 },
  { name: "Feb", revenue: 54000 },
  { name: "Mar", revenue: 61000 },
  { name: "Apr", revenue: 74000 },
  { name: "May", revenue: 81000 },
  { name: "Jun", revenue: 93000 },
];

const tasksData = [
  { name: "UI/UX", tasks: 34 },
  { name: "Dev", tasks: 46 },
  { name: "Marketing", tasks: 28 },
  { name: "Design", tasks: 39 },
  { name: "Writing", tasks: 20 },
];

export default function AnalyticsCharts() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 p-4 bg-white shadow-sm h-80 dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-base font-semibold text-slate-800 mb-3 dark:text-slate-100">
          Revenue (last 6 months)
        </h3>
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={0}
          minHeight={0}
        >
          <AreaChart
            data={revenueData}
            margin={{ top: 10, right: 24, left: 0, bottom: 0 }}
            className="min-w-0 min-h-0"
          >
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1d4ed8" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#94a3b8"
              opacity={0.5}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#1d4ed8"
              fill="url(#revenueGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-2xl border border-slate-200 p-4 bg-white shadow-sm h-80 dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-base font-semibold text-slate-800 mb-3 dark:text-slate-100">
          Tasks by category
        </h3>
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={0}
          minHeight={0}
        >
          <BarChart
            data={tasksData}
            margin={{ top: 10, right: 16, left: 0, bottom: 0 }}
            className="min-w-0 min-h-0"
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#94a3b8"
              opacity={0.5}
            />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Legend />
            <Bar dataKey="tasks" fill="#2563eb" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
