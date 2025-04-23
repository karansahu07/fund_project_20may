import { compactFormat } from "@/lib/format-number";
import { getOverviewData } from "../../fetch";
import { OverviewCard } from "./card";
import * as icons from "./icons";

export async function OverviewCardsGroup() {
  const { invest, profit, values, units } = await getOverviewData();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="Total Investment"
        data={{
          ...invest,
          value: compactFormat(invest.value),
        }}
        Icon={icons.Invest}
      />

      <OverviewCard
        label="Total Profit"
        data={{
          ...profit,
          value: "$" + compactFormat(profit.value),
        }}
        Icon={icons.Profit}
      />

      <OverviewCard
        label="Total Value"
        data={{
          ...values,
          value: compactFormat(values.value),
        }}
        Icon={icons.Values}
      />

      <OverviewCard
        label="Total Units"
        data={{
          ...units,
          value: compactFormat(units.value),
        }}
        Icon={icons.Units}
      />
    </div>
  );
}
