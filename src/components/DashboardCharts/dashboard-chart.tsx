"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
AreaChart,
CartesianGrid,
Cell,
Legend,
Pie,
PieChart,
ResponsiveContainer,
Tooltip,
XAxis,
YAxis,
} from "@/components/ui/chart"

const lineChartData = [
{ name: "Jan", value: 4000 },
{ name: "Feb", value: 3000 },
{ name: "Mar", value: 5000 },
{ name: "Apr", value: 4000 },
{ name: "May", value: 7000 },
{ name: "Jun", value: 6000 },
{ name: "Jul", value: 8000 },
{ name: "Aug", value: 9000 },
{ name: "Sep", value: 8500 },
{ name: "Oct", value: 10000 },
{ name: "Nov", value: 11000 },
{ name: "Dec", value: 12000 },
]

const pieChartData = [
{ name: "Invested Value", value: 60000, color: "#0ea5e9" },
{ name: "Profit", value: 15000, color: "#22c55e" },
{ name: "Total Value", value: 75000, color: "#8b5cf6" },
]

export function LineChartComponent() {
return (
  <Card className="col-span-3">
    <CardHeader>
      <CardTitle>Investment Growth</CardTitle>
      <CardDescription>Monthly investment growth over the past year</CardDescription>

</CardHeader>
<CardContent>
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={lineChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#008000" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#008000" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#008000" fillOpacity={1} fill="url(#colorValue)" />
    </AreaChart>
  </ResponsiveContainer>
</CardContent>
</Card>
)
}

export function PieChartComponent() {
    return (
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Fund Distribution</CardTitle>
          <CardDescription>Breakdown of fund allocation</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    )
  }