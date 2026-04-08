import "./App.css";
import { useState } from "react";

interface CurrencyValues {
  USD: number;
  EUR: number;
  GBP: number;
  RUB: number;
}

function App() {
  const currencyValues: CurrencyValues = {
    USD: import.meta.env.VITE_CURRENCY_USD,
    EUR: import.meta.env.VITE_CURRENCY_EUR,
    GBP: import.meta.env.VITE_CURRENCY_GBP,
    RUB: import.meta.env.VITE_CURRENCY_RUB,
  };

  const [amount, setAmount] = useState<number>(
    import.meta.env.VITE_CURRENCY_USD,
  );
  const [currency, setCurrency] = useState<string>("USD");

  const [result, setResult] = useState<number>(1);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (currency) {
      case "USD":
        setResult(amount / import.meta.env.VITE_CURRENCY_USD);
        break;
      case "EUR":
        setResult(amount / import.meta.env.VITE_CURRENCY_EUR);
        break;
      case "GBP":
        setResult(amount / import.meta.env.VITE_CURRENCY_GBP);
        break;
      case "RUB":
        setResult(amount / import.meta.env.VITE_CURRENCY_RUB);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-3 justify-center items-center h-screen"
        onSubmit={handleSubmit}
      >
        <label htmlFor="iznos">Iznos u dinarima: </label>
        <input
          id="iznos"
          type="text"
          className="border-2 rounded-md"
          onChange={handleChangeInput}
        />
        <select onChange={handleSelectChange}>
          {currencyValues &&
            Object.keys(currencyValues).map((currency, index) => {
              return (
                <option key={index} value={currency}>
                  {currency}
                </option>
              );
            })}
        </select>
        <button
          type="submit"
          className="border-2 bg-blue-600 text-white rounded-md px-4 py-2"
        >
          Calculate
        </button>
        <p className="font-bold text-2xl">Result: {result}</p>
      </form>
    </>
  );
}

export default App;
