/* eslint-disable react/prop-types */
import { HiOutlineStar, HiStar } from "react-icons/hi2";
import "./dropdownlist.css"; // Import the new CSS file

const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorite,
  title = "",
}) => {
  const isFavorite = (curr) => favorites.includes(curr);

  return (
    <div className="currency-dropdown">
      <label htmlFor={title} className="currency-label">
        {title}
      </label>

      <div className="dropdown-container">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="currency-select"
        >
          {favorites.map((currency) => (
            <option className="favorite-option" value={currency} key={currency}>
              {currency}
            </option>
          ))}
          <hr />
          {currencies
            .filter((c) => !favorites.includes(c))
            .map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
        </select>

        <button onClick={() => handleFavorite(currency)} className="favorite-button">
          {isFavorite(currency) ? <HiStar className="favorite-icon" /> : <HiOutlineStar className="favorite-icon" />}
        </button>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
