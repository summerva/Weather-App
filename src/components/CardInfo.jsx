const CardInfo = (props) => {
  const { weather } = props;

  if (
    !weather ||
    !weather.wind ||
    !weather.feels_like ||
    !weather.sunrise ||
    !weather.sunset
  ) {
    return null;
  }

  return (
    <div className="weather__info">
      <div className="info__block">
        <p>
          <strong>Ветер:</strong> {weather?.wind}
        </p>
        <p>
          <strong>Ощущается как:</strong> {weather?.feels_like}
        </p>
      </div>
      <div className="info__block">
        <p>
          <strong>Восход:</strong> {weather?.sunrise}
        </p>
        <p>
          <strong>Закат:</strong> {weather?.sunset}
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
