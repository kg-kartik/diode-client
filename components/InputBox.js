import { useState } from "react";
const InputBox = ({ placeholder, cb }) => {
    return (
        <input
            className="input-box"
            onChange={(e) => cb(e.target.value)}
            placeholder={placeholder}
        />
    );
};

export default InputBox;
