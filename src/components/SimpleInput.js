import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if(enteredNameIsValid){
      console.log('Name input is Valid!');
    }
  }, [enteredNameIsValid])

  const inputCHangeHandler = (event) => {
    setEnteredName(event.target.value);

    setEnteredNameIsValid(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    // Check The Validation 
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    console.log(enteredName);

    setEnteredName('');
  }

  const nameTouchedIsNotValid = !enteredNameIsValid && enteredNameTouched;

  const formValidationClass = nameTouchedIsNotValid ? 'form-control invalid input' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formValidationClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={inputCHangeHandler}
          value={enteredName}
        />
        {nameTouchedIsNotValid && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;