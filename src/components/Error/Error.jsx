import React from "react";
import styles from './Error.module.css';

export default function Error() {
    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <h2>Oops... Page not found.</h2>
                <h2>ERROR 404.</h2>
            </div>
        </div>
    )
}