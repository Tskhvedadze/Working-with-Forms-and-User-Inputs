import { useState } from "react";

const useInputs = (valueValidation) => {
    const [enteredInput, setEnteredInput] = useState('');
    const [inputValid, setInputValid] = useState(false);

    const hasError = valueValidation(enteredInput);
    const inputIsValid = !hasError && inputValid

    const inputChangeHandler = (e) => {
        setEnteredInput(e.target.value);

        setInputValid(true);
    }

    const inputBlurChangeHandler = (e) => {
        setInputValid(true);
    }

    const reset = () => {
        setEnteredInput('');
        setInputValid(false);
    }

    return {
        value: enteredInput,
        hasError,
        isValid: inputIsValid,
        inputChangeHandler,
        inputBlurChangeHandler,
        reset
    }

}

export default useInputs;