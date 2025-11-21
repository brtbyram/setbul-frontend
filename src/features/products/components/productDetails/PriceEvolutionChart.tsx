import React from "react";
import { AnimatedLineChart } from "@/shared/components/charts/AnimatedChart";
import clsx from "clsx";

interface PriceEvolutionProps {
  data: Array<{
    date: string;
    price: number;
    seller: string;
  }>;
}

function PriceEvolutionChart({ data }: PriceEvolutionProps) {
  const [timeRange, setTimeRange] = React.useState<"1m" | "3m" | "all">("all");

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const chartData = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Seller",
        data: [...data.map((entry) => entry.price)],
        borderColor: "rgb(0, 90, 0)",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      },
      {
        fill: true,
        label: "Seller 2",
        data: [...data.map((entry) => entry.price + Math.random() * 40)],
        borderColor: "rgb(180, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
      {
        fill: true,
        label: "Seller 3",
        data: [...data.map((entry) => entry.price + Math.random() * 30)],
        borderColor: "rgb(0, 0, 180)",
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    animations: {
      tension: {
        duration: 5000,
        easing: "easeInOutQuad",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    plugins: {
      // bu ayar grafik üzerindeki eklentilerin konumunu ve başlığını belirler
      legend: {
        // bu ayar lejandın konumunu belirler.
        display: false,
        position: "bottom" as const, // lejandın altta konumlanmasını sağlar
        labels: {
          boxWidth: 12, // lejand kutusunun genişliği
          weight: "thin", // lejand etiketlerinin kalınlığı
          padding: 10, // lejand etiketleri arasındaki boşluk
        },
      },
      title: {
        // başlık ayarları
        display: false,
        text: "Price Evolution Over Time",
        font: { size: 18 },
        padding: { top: 10, bottom: 30 },
        boxWidth: 50,
      },
    },
    scales: {
      // bu ayar eksenlerin başlangıç noktasını belirler
      y: {
        min: 0,
        max: Math.max(...data.map((entry) => entry.price)) + 50,
        beginAtZero: true, // y-ekseninin sıfırdan başlamasını sağlar
      },
      x: {
        min: 0,
        max: 100,
        beginAtZero: true, // x-ekseninin sıfırdan başlamasını sağlar
        ticks: { maxRotation: 0, minRotation: 0 }, // x-eksenindeki etiketlerin dönmesini engeller
      },
      backdropColor: "rgba(255, 255, 255, 0.1)",
    },
  };

  return (
    <div className="">
      <div className="w-full  h-96">
        <AnimatedLineChart data={chartData} options={options} />
      </div>
      <div className="flex justify-center items-center gap-x-3 mt-4">
        {["1m", "3m", "all"].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={clsx(
              "px-4 py-2 rounded-full text-sm border transition duration-300",
              timeRange === range
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:border-black"
            )}
          >
            {range === "1m" ? "1 month" : range === "3m" ? "3 months" : "All time"}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PriceEvolutionChart;
