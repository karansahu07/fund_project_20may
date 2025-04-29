import { PaymentsOverview } from "@/components/Charts/payments-overview";
import { UsedDevices } from "@/components/Charts/used-devices";
import { WeeksProfit } from "@/components/Charts/weeks-profit";
import { TopChannels } from "@/components/Tables/top-channels";
import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { Suspense } from "react";
import { ChatsCard } from "./_components/chats-card";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { RegionLabels } from "./_components/region-labels";
import { CreditCard, IndianRupee, LineChart, TrendingUp } from "lucide-react"

import { DashboardCard } from "../../../components/DashboardCards/dashboard-card"
import { LineChartComponent, PieChartComponent } from "../../../components/DashboardCharts/dashboard-chart"


type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function AdminLogin({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
    <>
      {/* <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense> */}

      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <PaymentsOverview
          className="col-span-12 xl:col-span-7"
          key={extractTimeFrame("payments_overview")}
          timeFrame={extractTimeFrame("payments_overview")?.split(":")[1]}
        />

        <UsedDevices
          className="col-span-12 xl:col-span-5"
          key={extractTimeFrame("used_devices")}
          timeFrame={extractTimeFrame("used_devices")?.split(":")[1]}
        />

      </div> */}

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

<DashboardCard title="Total Investments" value="₹60,000" icon={IndianRupee} description="+20% from last month" />

        <DashboardCard title="Total Profit" value="₹15,000" icon={TrendingUp} description="+15% from last month" />
        <DashboardCard
          title="Total Value"
          value="₹75,000"
          icon={CreditCard}
          description="Combined value of investments"
        />
        <DashboardCard title="Total Units" value="1,500" icon={LineChart} description="Units across all employees" />
      </div>
      <div className="grid gap-4 md:grid-cols-5 mt-8">
        <LineChartComponent />
        <PieChartComponent />
      </div>
    </>
  );
}
