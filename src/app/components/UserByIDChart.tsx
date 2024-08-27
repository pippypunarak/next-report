import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ActivityChartProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
}

const UserByIDChart: React.FC<ActivityChartProps> = ({
  startDate,
  endDate,
}) => {
  // Function to generate labels based on the date range
  const generateLabels = (start: Date | undefined, end: Date | undefined) => {
    if (!start || !end) return [];
    const labels = [];
    const currentDate = new Date(start);
    while (currentDate <= end) {
      labels.push(currentDate.toLocaleDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return labels;
  };

  const labels = generateLabels(startDate, endDate);

  const data = {
    labels,
    datasets: [
      {
        label: "Out",
        data: [500, 200, 200, 100, 200, 0, 590],
        backgroundColor: "#25F948",
        borderColor: "#25F948",
        borderWidth: 1,
        barThickness: 40,
      },
    ],
  };

  // Function to format axis title based on the date range
  const formatAxisTitle = (start: Date | undefined, end: Date | undefined) => {
    if (!start || !end) return "Date";
    const startMonth = start.toLocaleString("en-US", { month: "long" });
    const startYear = start.getFullYear();
    const endMonth = end.toLocaleString("en-US", { month: "long" });
    const endYear = end.getFullYear();
    return startMonth === endMonth
      ? `${startMonth} ${startYear}`
      : `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: formatAxisTitle(startDate, endDate),
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Kcal",
        },
        ticks: {
          stepSize: 200,
          min: 0,
          max: 1000,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `Kcal: ${tooltipItem.raw}`,
        },
      },
    },
    datalabels: {
      anchor: "end",
      align: "top",
      formatter: (value: number) => `${value} Kcal`,
      color: "#333",
      font: {
        weight: "bold",
      },
    },
  };

  return (
    <div className="h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default UserByIDChart;
