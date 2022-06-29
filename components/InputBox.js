import { useState } from "react";
const InputBox = ({ placeholder, cb, inputType }) => {
    return (
        <input
            type={inputType === "password" ? "password" : "text"}
            className="input-box"
            onChange={(e) => cb(e.target.value)}
            placeholder={placeholder}
        />
    );
};

export default InputBox;
