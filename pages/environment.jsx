import { useState, useEffect } from "react";
import styles from "../styles/Environment.module.css";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import backImage from "../assets/page1.svg";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import CancelButton from "../components/CancelButton";
import Dropdown from "../components/Dropdown";
import Image from "next/image";



const Environment_Input = ({ showButton, count, setCount, showCancelButton }) => {
    const [key, setKey] = useState("");
    const [value, setValue] = useState("");
    const [finalData, setFinalData] = useState([]);


    function onClick() {
        if (key != "" && value != "") {
            setCount(count + 1);
            const newData = { key, value };
            const result = [...finalData, newData];
            setFinalData(result);
        }
    }

    return (
        <div className={styles.input_container}>
            <input className="input-box" placeholder="Enter key" value={key} onChange={(e) => setKey(e.target.value)} />
            <input className="input-box" placeholder="Enter Value" value={value} onChange={(e) => setValue(e.target.value)} />
            {showButton && (
                <Button
                    className="next"
                    text="Add"
                    size="small"
                    showArrow={false}
                    arrow_size={12}
                    cb={onClick}
                />
            )}
            {showCancelButton && <CancelButton size="small" arrow_size={12} />}
            {finalData.map((item) => {
                return <>
                    <p>{item.key}</p> " "
                    <p>{item.value}</p>
                </>
            })}

        </div>


    );
};

const Environment = () => {
    const [count, setCount] = useState(1);
    //TODO:  Set the value to be repo's unique value getting from GitHub API.
    const repos = [
        { value: "Project 1", label: "Project 1" },
        { value: "Project 2", label: "Project 2" },
        { value: "Project 3", label: "Project 3" }
    ];


    // Logic: When to show Add Button.
    const arr = [...Array(count)];
    arr.fill(false);
    arr[arr.length - 1] = true;

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <Bounce>
                    <div className={styles.left}>
                        <Image src={backImage} alt="illus" />
                    </div>
                </Bounce>

                <div className={styles.right}>
                    <Fade cascade triggerOnce>
                        <h2 className={styles.heading}>Set Environment Variables</h2>
                        <div className={styles.repoContainer}>



                            <div className={styles.environment_container}>
                                <p className="label">Add Environment Variables</p>
                                {
                                    arr.map((item, index) => {
                                        return (
                                            <Environment_Input key={index} showButton={item} count={count} setCount={setCount} showCancelButton={!item} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Fade>
                    <div className="button-container">
                        <Button className="next" text="Next" redirectPage={"/lol"} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Environment;
