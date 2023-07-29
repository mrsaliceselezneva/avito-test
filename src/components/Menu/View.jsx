import React from "react";
import styles from "./styles.module.scss";

const View = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__menu}>
                <div>
                    <input type='checkbox' id='scales' name='scales' />
                    <label htmlFor='scales'>техника</label>
                </div>
                <div>
                    <input type='checkbox' id='scales' name='scales' />
                    <label htmlFor='scales'>игрушки</label>
                </div>
                <div>
                    <input type='checkbox' id='scales' name='scales' />
                    <label htmlFor='scales'>для животных</label>
                </div>
                <div>
                    <input type='checkbox' id='scales' name='scales' />
                    <label htmlFor='scales'>одежда</label>
                </div>
                <div>
                    <input type='checkbox' id='scales' name='scales' />
                    <label htmlFor='scales'>посуда</label>
                </div>
            </div>
        </div>
    );
};

export default View;
