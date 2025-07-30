import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import ResultsTable from "./components/ResultsTable.jsx"
import { useState } from "react"
import { calculateInvestmentResults } from "./util/investment.js"

function App() {
const [saveData, setSaveData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

const result = calculateInvestmentResults({
    initialInvestment: +saveData.initialInvestment,
    annualInvestment: +saveData.annualInvestment,
    expectedReturn: +saveData.expectedReturn,
    duration: +saveData.duration,
})

  return (
    <>
    <Header />
    <main>
      <UserInput inputData={saveData} onChangeData={setSaveData}/>
      <ResultsTable inputData={result}/>
    </main>  
    </>
  )
}

export default App
