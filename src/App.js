import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import OutputTable from "./Components/OutputTable";
import { useState } from "react";

function App() {
  const [results, setResults] = useState(null);
  const calculateHandler = (userInput) => {
    const yearlyData = [];
    
    let currentSavings = +userInput["currentSavings"];
    const yearlySavings = +userInput["yearlySavings"];
    const interests = +userInput["interests"] / 100;
    const durations = +userInput["durations"];
    const initialSavings = currentSavings;

    for (let i = 0; i < durations; i++) {
      const yearlyInterest = currentSavings * interests;
      currentSavings += yearlyInterest + yearlySavings;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlySavings: yearlySavings,
        initialSavings: initialSavings
      });
    }

    setResults(yearlyData);
    console.log(yearlyData);
    // do something with yearlyData ...
  };
console.log(results);
  return (
    <div>
      <Header />

      <InputForm onSaveInvestmentData={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!results && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      
      {results && (<OutputTable investmentData={results} />)}
    </div>
  );
}

export default App;
