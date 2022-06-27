import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.trim().includes('@');

  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // Name Input
  const inputCHangeHandler = (event) => {
    setEnteredName(event.target.value);

    setEnteredNameTouched(true);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  // Email Input
  const emailChanegHandler = (e) => {
    setEnteredEmail(e.target.value);

    setEnteredEmailTouched(true);
  }

  const emailBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    // Check The Validation - if it's not valid i wanna return 
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredEmail('');
    setEnteredName('');

    setEnteredEmailTouched(false);
    setEnteredNameTouched(false);
  }

  const formValidationClass = nameInputIsInValid ? 'form-control invalid input' : 'form-control';

  const emailValidationClass = emailInputIsValid ? 'form-control invalid input' : 'form-control'; 

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
      <div className={emailValidationClass}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='Email'
          onChange={emailChanegHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsValid && <p className="error-text">Email must not be empty and should includes =&gt; @!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;