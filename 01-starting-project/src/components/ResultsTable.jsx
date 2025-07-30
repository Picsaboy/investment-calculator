import { formatter } from "../util/investment";

export default function ResultsTable({ inputData }) {
  const valid = inputData.length > 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th><p>Year</p></th>
          <th><p>Investment Value</p></th>
          <th><p>Interest (Year)</p></th>
          <th><p>Total Interest</p></th>
          <th><p>Invested Capital</p></th>
        </tr>
      </thead>
      <tbody>
        {valid ? (
          inputData.map((invesData) => (
            <tr key={invesData.year}>
              <td>{invesData.year}</td>
              <td>{formatter.format(invesData.valueEndOfYear)}</td>
              <td>{formatter.format(invesData.interest)}</td>
              <td>{formatter.format(invesData.interestEarnedInYear)}</td>
              <td>{formatter.format(invesData.investeCapital)}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No investment data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
