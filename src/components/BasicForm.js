import useInputs from "../hooks/use-inputs";

const BasicForm = (props) => {
  // First Name Input
  const {
    value: firstName,
    hasError : firstNameNotValid,
    isValid : fNameIsValid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurChangeHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInputs(value => value.trim() !== '');
  const firstNameInputIsNotValid = !firstNameNotValid && fNameIsValid;

// Last Name Input
  const {
    value: lastName,
    hasError : lastNameNotValid,
    isValid : lastNameIsValid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurChangeHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useInputs(value => value.trim() !== '');
  const lastNameInputIsNotValid = !lastNameNotValid && lastNameIsValid;

  // E-mail Input
  const {
    value: emailInput,
    hasError : emailNotValid,
    isValid : emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurChangeHandler: emailBlurHandler,
    reset: emailReset
  } = useInputs(value => value.includes('@'));
  const emailInputIsNotValid = !emailNotValid && emailIsValid;

  let formIsValid = false;
  if(firstNameNotValid && lastNameNotValid && emailNotValid){
    formIsValid = true;
  }

  const formSubmisionHandler = (e) => {
    e.preventDefault();

    if (!firstNameNotValid && !lastNameNotValid && !emailNotValid) {
      return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(emailInput);

    firstNameReset();
    lastNameReset();
    emailReset();
  }

  const firstNameClass = firstNameInputIsNotValid ? 'form-control invalid input' : 'form-control '
  const lastNameClass = lastNameInputIsNotValid ? 'form-control invalid input' : 'form-control ';
  const emailInputClass = emailInputIsNotValid ? 'form-control invalid input' : 'form-control ';

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className='control-group'>
        <div className={firstNameClass}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            placeholder="first name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
         {firstNameInputIsNotValid && <p className="error-text">First Name must not be empty!</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            placeholder="last name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameInputIsNotValid && <p className="error-text">Last Name must not be empty!</p>}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          placeholder="e-mail address"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {emailInputIsNotValid && <p className="error-text">Please enter valid e-mail</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;