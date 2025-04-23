'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type PropsType = {
  data: { name: string; amount: number }[];
};

const COLORS = ['#808080', '#4CAF50', '#ff0000'];

export function DonutChart({ data }: PropsType) {
  return (
    <div className="w-full flex flex-col items-center bg-white p-4 rounded-xl shadow-md">
      <p className="font-bold mb-2">Total Value</p>
      <h2 className="text-2xl font-bold mb-4">
        {data.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString()}
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            innerRadius={50}
            dataKey="amount"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) =>
              new Intl.NumberFormat().format(value as number)
            }
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
