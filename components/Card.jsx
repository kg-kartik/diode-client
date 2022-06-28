import styles from "../styles/Card.module.css";
import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import { SiFastapi, SiFlask, SiRedis } from "react-icons/si"

const Card = ({ instanceName = 'Some Instance Name :)', buildPackName = 'redis' }) => {
    return (
        <div className={styles.card}>
            <div className={styles.heading}>
                {instanceName}
            </div>
            <div className={styles.buildPack}>
                {
                    buildPackName === 'node' ? <IoLogoNodejs className="node" /> :
                        buildPackName === 'react' ? <IoLogoReact className="react" /> :
                            buildPackName === 'django' ? <DiDjango className="django" /> :
                                buildPackName === 'fastapi' ? <SiFastapi className="fast" /> :
                                    buildPackName === 'flask' ? <SiFlask className="flask" /> :
                                        buildPackName === 'redis' ? <SiRedis className="redis" /> : ''
                }
                {buildPackName}
            </div>
        </div>
    )

}
export default Card;