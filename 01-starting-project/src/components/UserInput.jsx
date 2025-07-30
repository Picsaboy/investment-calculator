import InputGroup from "./InputGroup.jsx";

export default function UserInput({ inputData, onChangeData }) {
  function onChangeHandler(nombreInput, NewValue) {
    onChangeData((prev) => ({
      ...prev,
      [nombreInput]: NewValue,
    }));
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <InputGroup
          labelName="Initial Investment"
          inputType="number"
          value={inputData.initialInvestment}
          onChangeInputData={(e) =>
            onChangeHandler("initialInvestment", e.target.value)
          }
        />
        <InputGroup
          labelName="Annual Investment"
          inputType="number"
          value={inputData.annualInvestment}
          onChangeInputData={(e) =>
            onChangeHandler("annualInvestment", e.target.value)
          }
        />
      </div>
      <div className="input-group">
        <InputGroup
          labelName="Expected Return"
          inputType="number"
          value={inputData.expectedReturn}
          onChangeInputData={(e) =>
            onChangeHandler("expectedReturn", e.target.value)
          }
        />
        <InputGroup
          labelName="Duration"
          inputType="number"
          value={inputData.duration}
          onChangeInputData={(e) => onChangeHandler("duration", e.target.value)}
        />
      </div>
    </section>
  );
}
