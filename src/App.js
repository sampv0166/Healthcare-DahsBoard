import { useState } from 'react';
import './App.css';
//import Calendar from './components/Calendar';
import LeftBar from './components/LeftBar';
import TopBar from './components/TopBar';
import Map from './components/MapContainer';
import DoctorSearch from './components/DoctorSearch';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import '../src/components/Calendar.css';

function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div className="app">
      <TopBar />
      <LeftBar />

      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        calendarClassName="calendar"
      />

      <Map />
      <DoctorSearch />
    </div>
  );
}

export default App;
