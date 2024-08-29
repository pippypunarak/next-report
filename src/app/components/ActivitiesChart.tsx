import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface ActivityChartProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
}

const ActivityChart: React.FC<ActivityChartProps> = ({
  startDate,
  endDate,
}) => {
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

  const data = {
    labels,
    datasets: [
      {
        label: "RUNNING",
        data: [0.4, 0.5, 0.3, 0.4, 0.6, 0.5, 0.4],
        backgroundColor: "#FFE47A",
        borderColor: "#FFE47A",
        borderWidth: 2,
        pointRadius: 3,
        pointBorderWidth: 1,
        fill: false,
      },
      {
        label: "WALKING",
        data: [0.2, 0.3, 0.4, 0.3, 0.5, 0.3, 0.2],
        borderColor: "#8EF2C7",
        backgroundColor: "#8EF2C7",
        borderWidth: 2,
        pointRadius: 3,
        pointBorderWidth: 1,
        fill: false,
      },
      {
        label: "CYCLING",
        data: [0.2, 0.3, 0.4, 0.2, 0.2, 0.3, 0.1],
        borderColor: "#DE6C80",
        backgroundColor: "#DE6C80",
        borderWidth: 2,
        pointRadius: 3,
        pointBorderWidth: 1,
        fill: false,
      },
      {
        label: "GYM&FITNESS",
        data: [0.2, 0.3, 0.4, 0.3, 0.5, 0.3, 0.2],
        borderColor: "#8092C9",
        backgroundColor: "#8092C9",
        borderWidth: 2,
        pointRadius: 3,
        pointBorderWidth: 1,
        fill: false,
      },
      {
        label: "SWIMMING",
        data: [0.1, 0.5, 0.4, 0.2, 0.6, 0.1, 0.2],
        borderColor: "#8EE1F2",
        backgroundColor: "#8EE1F2",
        borderWidth: 2,
        pointRadius: 3,
        pointBorderWidth: 1,
        fill: false,
      },
      {
        label: "ELLIPTICAL",
        data: [0.4, 0.1, 0.3, 0.6, 0.1, 0.2, 0.2],
        borderColor: "#00AFB7",
        backgroundColor: "#00AFB7",
        borderWidth: 2,
        pointRadius: 3,
        pointBorderWidth: 1,
        fill: false,
      },
      {
        label: "TREADMILL",
        data: [0.2, 0.5, 0.1, 0.4, 0.3, 0.2, 0.4],
        borderColor: "#2CB473",
        backgroundColor: "#2CB473",
        borderWidth: 2,
        pointRadius: 3,
        pointBorderWidth: 1,
        fill: false,
      },
      {
        label: "YOGA",
        data: [0.2, 0.3, 0.4, 0.3, 0.5, 0.3, 0.2],
        borderColor: "#DFB0DA",
        backgroundColor: "#DFB0DA",
        borderWidth: 2,
        pointRadius: 3,
        pointBorderWidth: 1,
        fill: false,
      },
      {
        label: "MULTI SPORT",
        data: [0.5, 0.2, 0.1, 0.2, 0.6, 0.1, 0.2],
        borderColor: "#0A1F63",
        backgroundColor: "#0A1F63",
        borderWidth: 2,
        pointRadius: 3,
        pointBorderWidth: 1,
        fill: false,
      },
      {
        label: "OTHER",
        data: [0.4, 0.5, 0.2, 0.6, 0.1, 0.1, 0.3],
        borderColor: "#845F5F",
        backgroundColor: "#845F5F",
        borderWidth: 2,
        pointRadius: 3,
        pointBorderWidth: 1,
        fill: false,
      },
    ],
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
      },
      y: {
        title: {
          display: true,
        },
        ticks: {
          stepSize: 0.1,
          min: 0,
          max: 0.6,
        },
        grid: {
          drawOnChartArea: false, // Hide the grid lines
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `Hours: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white h-[500px]">
      <div className="flex flex-col">
        <select className="text-sm rounded-md w-[66px] h-[28px] text-[#491DC5] bg-[#491DC51A]">
          <option value="Hours">Hours</option>
          <option value="Kilometers">Kilometers</option>
        </select>
      </div>
      <div className="h-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ActivityChart;
