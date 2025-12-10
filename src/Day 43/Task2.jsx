import { useState } from "react";
function InputBox() {
    const [text, setText] = useState("");
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Type something..."/>
            <h2>{text}</h2>
        </div>
    );

}
export default InputBox;