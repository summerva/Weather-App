const mockWeather = [
  {
    city: "г. Москва",
    degree: "+10",
    description: "Небольшой дождь",
    icon: "https://cdn-icons-png.flaticon.com/512/3313/3313888.png",
    wind: "3 м/с",
    feels_like: "+2°",
    sunrise: "07:45",
    sunset: "17:30",
  },
  {
    city: "г.Химки",
    degree: "+22",
    description: "Солнечно, без осадков",
    icon: "https://cdn-icons-png.flaticon.com/512/606/606795.png",
    wind: "5 м/с",
    feels_like: "+19°",
    sunrise: "06:45",
    sunset: "21:42",
  },
  {
    city: "г. Санкт-петербург",
    degree: "+5",
    description: "Небольшой дождь",
    icon: "https://cdn-icons-png.flaticon.com/512/3313/3313888.png",
  },
  {
    city: "г. Сочи",
    degree: "+25",
    description: "Солнечно",
    icon: "https://cdn-icons-png.flaticon.com/512/606/606795.png",
  },
];

export const fetchWeather = () => {
  return Promise.resolve(mockWeather);
};
