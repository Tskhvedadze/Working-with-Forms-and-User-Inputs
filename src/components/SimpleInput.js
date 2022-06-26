import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const inputCHangeHandler = (event) => {
    setEnteredName(event.target.value);

    setEnteredNameTouched(true);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    // Check The Validation - if it's not valid i wanna return 
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    setEnteredName('');
    setEnteredNameTouched(false);
  }

  const formValidationClass = nameInputIsInValid ? 'form-control invalid input' : 'form-control';

  const buttonTextChange = !formIsValid ? 'check input' : 'Submit';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formValidationClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          placeholder={!nameInputIsInValid ? 'Your Name' : ''}
          onChange={inputCHangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInValid && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>{buttonTextChange}</button>
      </div>
    </form>
  );
};

export default SimpleInput;