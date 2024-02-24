import './App.css';
import React, {useState, forwardRef} from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

function App() {
  /*
  1. verzió
  const [startDate, setDate] = useState(null);
  return (
    <div className='App'>
      <p>ANYÁD!</p>
      <DatePicker selected={startDate} onChange={(date) => setDate(date)} />
    </div>
    
  );
  */
 /*
 2. verzió
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      className="kutyaszunyog"
    />
  );
  */

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16),
  );
  return (
    <div className='behuz'>
          <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          excludeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 18),
            setHours(setMinutes(new Date(), 30), 19),
            setHours(setMinutes(new Date(), 30), 17),
          ]}
          dateFormat="MMMM d, yyyy h:mm aa"
          onKeyDown={(e) => {
            e.preventDefault();
        }}
        />
    </div>

  );
}

export default App;
