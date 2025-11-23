"use client";

import React from "react";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "./ui/chart";
import { PieChart, Label, Pie, Legend, LabelList } from "recharts";

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "var(--chart-1)",
    },
    safari: {
        label: "Safari",
        color: "var(--chart-2)",
    },
    firefox: {
        label: "Firefox",
        color: "var(--chart-3)",
    },
    edge: {
        label: "Edge",
        color: "var(--chart-4)",
    },
    other: {
        label: "Other",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig;

export function AppPieChart() {
    const totalVisitors = chartData.reduce((acc, curr) => acc + curr.visitors, 0);
    const topBrowser = chartData.reduce((acc, curr) => {
        if (curr.visitors > acc.visitors) {
            return curr;
        }
        return acc;
    }, chartData[0]);

    return (
        <div className="h-full flex flex-col items-between justify-start">
            <h1 className="text-2xl font-bold">Top Browser: {topBrowser.browser}</h1>
            <ChartContainer
                config={chartConfig}
                className="mx-auto h-1/2 w-full my-auto"
            >
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <LabelList dataKey="browser" />
                    <Pie
                        data={chartData}
                        dataKey="visitors"
                        innerRadius="60%"
                        strokeWidth={1}
                        label={({ name, value }) => `${name}: ${value}`}
                        nameKey="browser"
                    >
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-foreground text-3xl font-bold"
                                            >
                                                {totalVisitors.toLocaleString()}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-muted-foreground"
                                            >
                                                Visitors
                                            </tspan>
                                        </text>
                                    );
                                }
                            }}
                        />
                    </Pie>
                </PieChart>
            </ChartContainer>
        </div>
    );
}
