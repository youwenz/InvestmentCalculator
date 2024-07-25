import "./OutputTable.css";
import React from "react";

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFactionDigits: 2,
  maximumFractionDigits: 2
})

const OutputTable = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.investmentData.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>
              {formatter.format(yearData.savingsEndOfYear -
                yearData.yearlySavings * yearData.year -
                yearData.initialSavings)}
            </td>
            <td>{formatter.format(yearData.initialSavings + yearData.yearlySavings * yearData.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OutputTable;
