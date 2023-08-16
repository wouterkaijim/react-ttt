import styles from "./Crowd.module.scss";
import { Goober } from "./components/Goober/Goober";

export const Crowd = () => {
    return (
        <div className={`${styles.crowd}`}>
            <Goober />
            {/* <Goober /> */}
        </div>
    );
};
