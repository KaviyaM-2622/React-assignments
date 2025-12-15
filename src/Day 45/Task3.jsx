import { useState } from "react";

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        Accept Terms
      </label>
      <p>{isChecked ? "Checked" : "Not Checked"}</p>
    </div>
  );
}

export default Checkbox;
