import { useEffect, useState, useCallback } from "react";
import Header from "./components/Header";
import WeatherMain from "./components/WeatherMain";
import { fetchWeather } from "./services/api";
import "./styles";
import CardInfo from "./components/CardInfo";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [allWeather, setAllWeather] = useState([]);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme || "day"
  })

  useEffect(() => {
    fetchWeather().then((data) => {
      setAllWeather(data);
      setWeather(data[0]);
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSearch = (e) => {
    e.preventDefault();

    setError("");

    const foundCity = allWeather.find((city) =>
      city.city.toLowerCase().includes(searchCity.toLowerCase()),
    );

    if (foundCity) {
      setWeather(foundCity);
      setSearchCity("");
    } else {
      setSearchCity("");
      setWeather(null);
      setError("Такого города нет");
    }
  };

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "day" ? "night" : "day"));
  }, []);

  const clearError = () => {
    setError("");
  };

  return (
    <>
      <div className="weather">
        <Header
          weather={weather}
          error={error}
          searchCity={searchCity}
          onSearchChange={setSearchCity}
          onSearch={handleSearch}
          onClearError={clearError}
          onThemeToggle={toggleTheme}
          theme={theme}
        />
        {!error ? (
          <>
            <WeatherMain weather={weather} />
            <div className="weather__day"></div>
            <CardInfo weather={weather} />
          </>
        ) : (
          <div className="weather__error-content">
            <p>Пожалуйста, введите правильное название города</p>
            <p>
              <strong>Доступные города:</strong>{" "}
              {allWeather.map((city) => city.city).join(", ")}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
