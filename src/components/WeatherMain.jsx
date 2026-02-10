const WeatherMain = (props) => {
  const {
    weather,
  } = props

  return (
    <div className="weather__main">
      <img src={weather?.icon} alt="" />
      <div className="weather__text">
        <h3>{weather?.description}</h3>
        <h1>{weather?.degree}°C</h1>
      </div>
    </div>
  );
};

export default WeatherMain;
