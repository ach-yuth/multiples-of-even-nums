import React from "react";
import Number from "./Number";

export default function Numbers({ evenNumbers, setEvenNumbers }) {
  const nums = [];
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      nums.push(i);
    }
  }
  return (
    <div>
      {/* printing of highest number from multiples of 2 */}
      <p>highest number is :{evenNumbers}</p>
      {nums.map((num, idx) => {
        return <Number key={idx} num={num} />;
      })}
      <button
        onClick={() => {
          setEvenNumbers(Math.max(...nums));
        }}
      >
        click
      </button>
    </div>
  );
}
