import { Sun, Cloud, CloudRain } from "lucide-react";

const DailyForecast = () => {
  const dailyData = [
    { day: "Today", high: "75°", low: "62°", icon: Sun },
    { day: "Tue", high: "73°", low: "60°", icon: Cloud },
    { day: "Wed", high: "71°", low: "63°", icon: CloudRain },
    { day: "Thu", high: "74°", low: "65°", icon: Sun },
    { day: "Fri", high: "76°", low: "64°", icon: Sun },
  ];

  return (
    <div className="card bg-base-100 shadow-lg p-4 rounded-lg">
      <h3 className="font-semibold text-lg mb-4">5-Day Forecast</h3>
      <div className="space-y-4">
        {dailyData.map((day, index) => {
          const Icon = day.icon;
          return (
            <div key={index} className="flex items-center justify-between">
              <p className="w-20 text-sm">{day.day}</p>
              <Icon className="w-8 h-8 text-[#60a5fa]" />
              <div className="flex gap-4">
                <p className="font-medium w-12">{day.high}</p>
                <p className="text-muted-foreground w-12">{day.low}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
