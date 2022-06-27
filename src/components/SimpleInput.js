import useInput from "../hooks/use-Input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueIsValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    BlurHandler: nameBlurHandler,
    reset: nameInputReset
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailChanegHandler,
    BlurHandler: emailBlurHandler,
    reset: emailInputReset
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // Check The Validation - if it's not valid i wanna return 
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);

    nameInputReset();
    emailInputReset();
  }

  const formValidationClass = nameInputHasError ? 'form-control invalid input' : 'form-control';
  const emailValidationClass = emailInputHasError ? 'form-control invalid input' : 'form-control'; 

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formValidationClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          placeholder='Your Name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty!</p>}
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
        {emailInputHasError && <p className="error-text">Email should includes =&gt; @!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;