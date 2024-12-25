import { DashboardTabs } from "@/components/dashboard/dashboard-tabs";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardTabs />
    </div>
  );
}