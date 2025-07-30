export default function InputGroup({labelName, inputType, value, onChangeInputData}){
    return(
        <>
            <p>
                <label>{labelName}</label>
                <input type={inputType} value={value} onChange={onChangeInputData}></input>
            </p>
        </>
    )
}