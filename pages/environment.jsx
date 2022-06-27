import { useState, useEffect } from "react";
import styles from "../styles/Environment.module.css";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import backImage from "../assets/page1.svg";
import Button from "../components/Button";
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import { MdAddCircle } from "react-icons/md";
import withAuth from "../components/PrivateRoute";
import { useRouter } from "next/router";

const Environment = () => {
    const [fields, setFields] = useState([{ value: null }]);
    const router = useRouter();

    const handleChangeKey = (i, event) => {
        const values = [...fields];
        values[i].key = event.target.value;
        setFields(values);
    };

    const handleChangeValue = (i, event) => {
        const values = [...fields];
        values[i].value = event.target.value;
        setFields(values);
    };

    const handleAdd = () => {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    };

    const handleRemove = (i) => {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    };

    const nextHandle = () => {
        router.push({
            pathname: "/createInstance",
            query: {
                environment: fields,
                repo: router.query.repo,
                buildpack: router.query.buildpack
            }
        });
    };

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
                            </div>

                            {fields.map((field, idx) => {
                                return (
                                    <div className={styles.input_container}>
                                        <input
                                            className="input-box"
                                            placeholder="Enter key"
                                            value={field.key}
                                            onChange={(e) => handleChangeKey(idx, e)}
                                        />
                                        <input
                                            className="input-box"
                                            placeholder="Enter Value"
                                            value={field.value}
                                            onChange={(e) => handleChangeValue(idx, e)}
                                        />
                                        <MdAddCircle className={styles.add} onClick={handleAdd} />

                                        {idx !== 0 && (
                                            <AiFillDelete
                                                className={styles.delete}
                                                onClick={() => handleRemove(idx)}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                            <></>
                        </div>
                    </Fade>
                    <div className="button-container">
                        <Button className="next" text="Next" cb={nextHandle} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default withAuth(Environment);
