import { Sun, Cloud, CloudRain } from "lucide-react";

const HourlyForecast = () => {
  const hourlyData = [
    { time: "Now", temp: "72°", icon: Sun },
    { time: "1PM", temp: "74°", icon: Sun },
    { time: "2PM", temp: "75°", icon: Cloud },
    { time: "3PM", temp: "73°", icon: Cloud },
    { time: "4PM", temp: "71°", icon: CloudRain },
    { time: "5PM", temp: "70°", icon: CloudRain },
  ];

  return (
    <div className="card bg-base-100 shadow-lg p-4 rounded-lg">
      <h3 className="font-semibold text-lg mb-4">Hourly Forecast</h3>
      <div className="grid grid-cols-3 gap-4">
        {hourlyData.map((hour, index) => {
          const Icon = hour.icon;
          return (
            <div key={index} className="text-center">
              <p className="text-sm text-muted-foreground">{hour.time}</p>
              <Icon className="w-8 h-8 my-2 mx-auto text-[#60a5fa]" />
              <p className="font-medium">{hour.temp}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
