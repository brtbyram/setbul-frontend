import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

// Gerekli Chart.js bileşenlerini kaydet
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

// Global varsayılanlar (isteğe bağlı)
ChartJS.defaults.font.family = "Inter, sans-serif";
ChartJS.defaults.font.size = 14;
ChartJS.defaults.color = "black";
ChartJS.defaults.responsive = true;
ChartJS.defaults.animation.duration = 1200; // animasyon süresi
ChartJS.defaults.animation.easing = "easeInOutQuart";
