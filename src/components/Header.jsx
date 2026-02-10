import Button from "./Button";

const Header = (props) => {
  const { weather, error, searchCity, onSearchChange, onSearch } = props;
  
  const today = new Date();
  const formattedDate = today.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

    const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  return (
    <div className="weather__header">
      <div className="weather__search">
        <input
          type="text"
          placeholder="Введите город"
          value={searchCity}
          onChange={(event) => onSearchChange(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={onSearch}>Найти</Button>
      </div>
      {error && <div className="error">{error}</div>}
      {/* {weather && <h1>{weather.city}</h1>} */}
      <div className="weather__text">
        <h2>{formattedDate}</h2>
        <h1>{weather?.city}</h1>
      </div>
    </div>
  );
};
export default Header;
