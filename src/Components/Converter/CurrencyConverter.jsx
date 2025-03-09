import { useEffect, useState } from "react";
import CurrencyDropdown from "../Dropdownlist/dropdown";
import { HiArrowsRightLeft } from "react-icons/hi2";
import Cnvtr from "../../assests/Cnvtr.png"
import "./CorrencyConveter.css"; // Import the new CSS file

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || ["INR", "EUR"]
  );

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const res = await fetch("https://api.frankfurter.app/currencies");
        const data = await res.json();
        setCurrencies(Object.keys(data));
      } catch (error) {
        console.error("Error Fetching", error);
      }
    };

    fetchCurrencies();
  }, []);

  const convertCurrency = async () => {
    if (!amount) return;
    setConverting(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
    } catch (error) {
      console.error("Error Fetching", error);
    } finally {
      setConverting(false);
    }
  };

  const handleFavorite = (currency) => {
    let updatedFavorites = [...favorites];
    if (favorites.includes(currency)) {
      updatedFavorites = updatedFavorites.filter((fav) => fav !== currency);
    } else {
      updatedFavorites.push(currency);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <>
      <div className="converter-description">
        <div className="converter-discription-c1">
        <h1> Converter </h1>
        <img src={Cnvtr} alt="" />
        </div>
        <p>
          This Currency Converter allows you to convert an amount from one currency to another using real-time exchange rates. 
          You can select the currencies from the dropdown lists, enter the amount you want to convert, and click the convert button 
          to see the converted amount. You can also swap the currencies using the swap button and add currencies to your favorites 
          for quick access.
        </p>
      </div>
      <div className="currency-converter">
        <h2>Currency Converter</h2>

        <div className="grid-container">
          <CurrencyDropdown
            favorites={favorites}
            currencies={currencies}
            title="From:"
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            handleFavorite={handleFavorite}
          />
          <div className="swap-button-container">
            <button onClick={swapCurrencies} className="swap-button">
              <HiArrowsRightLeft className="swap-icon" />
            </button>
          </div>
          <CurrencyDropdown
            favorites={favorites}
            currencies={currencies}
            currency={toCurrency}
            setCurrency={setToCurrency}
            title="To:"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="amount" className="label">
            Amount:
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            required
            className="input"
          />
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={convertCurrency}
            required
            className={`convert-button ${converting ? "loading" : ""}`}
          >
            Convert
          </button>
        </div>

        {convertedAmount && (
          <div className="converted-amount">Converted Amount: {convertedAmount}</div>
        )}
      </div>
    </>
  );
};

export default CurrencyConverter;