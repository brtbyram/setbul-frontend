import React from "react";
import { AnimatedLineChart } from "@/shared/components/charts/AnimatedChart";

function PriceEvolutionChartSection() {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Seller",
        data: [
          65, 59, 80, 81, 56, 55, 40, 30, 50, 70, 60, 80, 90, 100, 85, 75, 65, 55, 45, 35, 25, 35, 25, 40, 40, 30, 40,
          50, 60, 70, 80,
        ],
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
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
        max: 100,
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
    <div id="price-evolution" className="px-3 container mx-auto">
      <h2 className="text-3xl mb-4 text-[#0b051d]">Price Evolution</h2>
      <div className="w-full  h-96">
        <AnimatedLineChart data={data} options={options} />
      </div>
    </div>
  );
}

export default PriceEvolutionChartSection;
