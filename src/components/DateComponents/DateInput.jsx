import React from "react";
import { useState } from "react";

export const DateInput = ({ format, className }) => {
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    const inputDate = e?.target?.value;
    setDate(inputDate);
  };

  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={handleChange}
        className={className}
      />
    </div>
  );
};
