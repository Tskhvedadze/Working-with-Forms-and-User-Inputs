import { useState } from "react";


const SimpleInput = (props) => {
  const [enteredname, setEnteredName] = useState('');

  // listening on every key-stroke and set the update state 
  const inputCHangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = (event) => {
    // prevent forms default behavior , which is to 
    // the send request when form is submitted
    event.preventDefault();

    console.log(enteredname);

    // set input to the empty string when form is already submitted 
    setEnteredName('');
  }  

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={inputCHangeHandler} //listening to every key-stroke
          value={enteredname}  // set value useState's arrays first meaning after form submitted 
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
