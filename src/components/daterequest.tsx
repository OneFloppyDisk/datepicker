import '../App.css';
import React, {useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";

import {setHours} from "date-fns/setHours";
import {setMinutes} from "date-fns/setMinutes";

const DatePlanner = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16),
  );
  return (
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
  );
};
  

export default DatePlanner;