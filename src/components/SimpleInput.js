import { useState } from "react";


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');

  // we need another state for input validation
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  // listening on every key-stroke and set the update state 
  const inputCHangeHandler = (event) => {
    setEnteredName(event.target.value);
    
    setEnteredNameIsValid(true);
  }

  const formSubmissionHandler = (event) => {
    // prevent forms default behavior , which is to 
    // the send request when form is submitted
    event.preventDefault();

    // check the validation 
    // trim() removes the white space at the beginning and end 
    // if this enteredName is empty the second code would not execute 
    // return will stop the second part of that code
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    // set input to the empty string when form is already submitted 
    setEnteredName('');
  }
  // now here we change input style if its not valid
  const formValidationClass = enteredNameIsValid ? 'form-control' : 'form-control invalid input' ;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formValidationClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={inputCHangeHandler} //listening to every key-stroke
          value={enteredName}  // set value useState's arrays first meaning after form submitted 
        />
        {/* if enteredNameIsValid is false output this error message otherwise nothing */}
        {!enteredNameIsValid && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
