import { ChartData, ScriptableContext } from "chart.js";
import cssvar from "@/lib/cssvar";

export const salesData: ChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Monthly Sales (in USD)",
      data: [
        12000, 15000, 17000, 14000, 16000, 18000, 20000, 19000, 22000, 21000,
        23000, 25000,
      ],
      backgroundColor: ({ chart: { ctx } }: ScriptableContext<"line">) => {
        const bg = ctx.createLinearGradient(0, 0, 0, 450);

        bg.addColorStop(0, `oklch(${cssvar("--a")} / 1)`);
        bg.addColorStop(0.5, `oklch(${cssvar("--a")} / 0.5)`);
        bg.addColorStop(1, `oklch(${cssvar("--a")} / 0.2)`);

        return bg;
      },
      borderWidth: 3,
      hoverBorderWidth: 4,
      // pointRadius: 4,
      // pointHoverRadius: 8,
      // tension: 0.1,
      // hitRadius: 30,
      pointBackgroundColor: "rgba(255, 255, 255, 1)",
      borderColor: ({ chart: { ctx } }: ScriptableContext<"line">) => {
        return `oklch(${cssvar("--a")} / 1)`;
      },
      fill: true,
    },
  ],
};
