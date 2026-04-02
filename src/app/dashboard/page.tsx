import React from "react";
import { auth } from "@/auth";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import AnalyticsCharts from "@/components/dashboard/AnalyticsCharts";

const page = async () => {
  const user = await auth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <Topbar />

          <main className="p-6 lg:p-8">
            <div className="mb-6 overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
              <h2 className="text-xl font-bold">
                Bonjour, {user?.user?.name ?? "Utilisateur"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Voici vos statistiques de base et performance du mois.
              </p>
            </div>

            <AnalyticsCards />
            <AnalyticsCharts />

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold mb-4">
                Détails utilisateur
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-slate-100 p-4 dark:border-slate-700">
                  <p className="text-xs text-slate-500 uppercase tracking-wide dark:text-slate-400">
                    Email
                  </p>
                  <p className="text-base font-medium text-slate-800 dark:text-slate-100">
                    {user?.user?.email || "-"}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 p-4 dark:border-slate-700">
                  <p className="text-xs text-slate-500 uppercase tracking-wide dark:text-slate-400">
                    Role
                  </p>
                  <p className="text-base font-medium text-slate-800 dark:text-slate-100">
                    {user?.user?.role || "Utilisateur"}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 p-4 dark:border-slate-700">
                  <p className="text-xs text-slate-500 uppercase tracking-wide dark:text-slate-400">
                    ID
                  </p>
                  <p className="text-base font-medium text-slate-800 dark:text-slate-100">
                    {user?.user?.id || "-"}
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;
