import React, { useState } from "react";

function App() {
  // تعریف دو متغیر وضعیت برای نگهداری مقدار فیلدهای ورودی
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  // تعریف یک تابع برای پاک کردن مقدار فیلدها
  const clearInputs = () => {
    setInput1("");
    setInput2("");
  };

  return (
    <div>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button onClick={clearInputs}>پاک کردن</button>
    </div>
  );
}

export default App;