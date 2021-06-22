import React from 'react';
import './DoctorSearch.css';

const DoctorSearch = () => {
  return (
    <div className="search_container">
      <p className="label"> Search a Doctor</p>

      <select name="specialization" className="text">
        <option value="specialization" placeholder="">
          Specialization
        </option>
      </select>
      <select name="specialization" className="text">
        <option value="specialization" placeholder="">
          City
        </option>
      </select>

      <input
        type="date"
        id="start"
        name="trip-start"
        value="Date"
        className="text"
      ></input>
      <button className="doctor_search_btn">Search</button>
    </div>
  );
};

export default DoctorSearch;
