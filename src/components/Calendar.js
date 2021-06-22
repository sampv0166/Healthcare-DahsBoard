import React, { useState } from 'react';
import './Calendar.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar1 } from 'react-modern-calendar-datepicker';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div className="calendar">
      <Calendar1
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
      />
    </div>
  );
};

export default Calendar;
