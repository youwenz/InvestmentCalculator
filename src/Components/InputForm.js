import react, { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("10000");
  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const [yearlySavings, setYearlySavings] = useState("1200");
  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const [interests, setInterests] = useState("7");
  const interestsHandler = (event) => {
    setInterests(event.target.value);
  };
  const [durations, setDurations] = useState("10");
  const durationsHandler = (event) => {
    setDurations(event.target.value);
  };

  //alternative ways
  const [userInput, setUserInput] = useState({
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10,
  });
  //alternative way
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        //use the value of input as the key
        [input]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const investmentData = {
      currentSavings: currentSavings,
      yearlySavings: yearlySavings,
      interests: interests,
      durations: durations,
    };
    props.onSaveInvestmentData(investmentData);
    console.log(investmentData);
  };

  const resetHandler = () => {
    setCurrentSavings("10000");
    setDurations("10");
    setInterests("7");
    setYearlySavings("1200");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            //onChange={(event) => inputChangeHandler("currentSavings", event.target.value)}
            onChange={currentSavingsHandler}
            value={currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution" >
            Yearly Savings ($)
          </label>
          <input type="number" id="yearly-contribution" value={yearlySavings} onChange={yearlySavingsHandler}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={interestsHandler}
            value={interests}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={durationsHandler} value={durations}/>
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
