import { useRef } from "react";


const SimpleInput = (props) => {
  // we can just read about that inforation which user entered in input 
  const enteredInputRef = useRef();

  const formSubmission = (event) => {
    event.preventDefault();

    // we need this current value because this input element now is an object and it has every property
    // such as objact has , and we need to reach them and store or send this infomation everywhere we want 
    const enteredName = enteredInputRef.current.value;
    console.log(enteredName);

    // we can set input an empty value after form was sabmit but it i not an ideal way and 
    // this situation to use useState is good choice
    
    enteredInputRef.current.value = '';
  }


  return (
    <form onSubmit={formSubmission}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          ref={enteredInputRef} //we need this ref key-word to point useRef and make this input element real Dom Object
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
