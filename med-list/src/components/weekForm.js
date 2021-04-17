import React, { useState } from 'react'

const WeekForm = () => {
   const [selectedOption, setSelectedOption] = useState('select')

    const handleChange = (e) => {
      setSelectedOption({value: e.target.value})
   }
   const handleMedList = (e) => {
      e.preventDefault()
   }

   return (
      <div>
         <h1>Daily Medication</h1>
         <form>
               <h2>Sunday</h2>
               <label> AM
                  <select value={selectedOption} onChange={handleChange}>
                     <option value="Taken?">---Taken?---</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select>
               </label>
               <label> PM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <h2>Monday</h2>
               <label> AM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <label> PM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <h2>Tuesday</h2>
               <label> AM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <label> PM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <h2>Wednesday</h2>
               <label> AM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <label> PM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <h2>Thursday</h2>
               <label> AM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <label> PM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <h2>Friday</h2>
               <label> AM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <label> PM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <h2>Saturday</h2>
               <label> AM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <label> PM
                  <select value={selectedOption} onChange={handleChange}>
                     <option>---Taken?---</option>
                     <option>Yes</option>
                     <option>No</option>
                  </select>
               </label>
               <button onChange={handleMedList}>Med List</button>
         </form>
      </div>
   )
}

export default WeekForm
