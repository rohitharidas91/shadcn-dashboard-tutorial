"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart with a grid and circle";

const chartData = [
  { stat: "Attack", value: 186 },
  { stat: "Sp Attack", value: 305 },
  { stat: "Defense", value: 237 },
  { stat: "Sp Defense", value: 273 },
  { stat: "Speed", value: 209 },
  { stat: "HP", value: 214 },
];

const chartConfig = {
  desktop: {
    label: "value",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function AppRadialChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>User Stats</CardTitle>
        <CardDescription>Showing user stats</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[500px]"
        >
          <RadarChart
            data={chartData}
            margin={{
              top: 20,
              right: 40,
              bottom: 20,
              left: 40,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="stat" />
            <Radar
              dataKey="value"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
