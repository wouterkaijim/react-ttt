import styles from "./Goober.module.scss";

export const Goober = () => {
    return (
        <div className={`${styles.goober}`}>
            <img src="./images/goober.png" alt="goob" draggable="false" />
        </div>
    );
};
