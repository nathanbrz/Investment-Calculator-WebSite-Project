import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";

export default function Results({ inputData }) {
  const data = calculateInvestmentResults(inputData);
  const initInv =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((yearObj) => {
          const totalInt =
            yearObj.valueEndOfYear -
            yearObj.annualInvestment * yearObj.year -
              initInv;
            
            const totalAmountInv = yearObj.valueEndOfYear - totalInt;
          return (
            <tr key={yearObj.year}>
              <td>{yearObj.year}</td>
              <td>{formatter.format(yearObj.valueEndOfYear)} </td>
              <td>{formatter.format(yearObj.interest)}</td>
              <td>{formatter.format(totalInt)}</td>
              <td>{formatter.format(totalAmountInv)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
