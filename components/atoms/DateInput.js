import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";


export default function DateInput({ date, onChange, isNew, isWrong }) {
  const [startDate, setStartDate] = useState(date);

  function handleChangeDate(newDate) {
    setStartDate(newDate);
    onChange(newDate);
  }

  return (
    <motion.div
      animate={isWrong && {y: [0, -2, 2, -2, 2, 0]}}
      transition={{duration: .2}}
    >
      <DatePicker
        className={`bg-dark-500 text-white font-bold text-xl rounded-full cursor-pointer px-4 py-2
          focus:outline-none focus:bg-dark-700 
          ${isNew && 'bg-dark-700 outline-1 outline-dashed outline-light-700 hover:bg-dark-700 focus:outline-1 '}
          ${isWrong && 'outline-pink-100 outline-double outline-2'}
          `}
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={(newDate) => handleChangeDate(newDate)}
      />
    </motion.div>
  );
}
