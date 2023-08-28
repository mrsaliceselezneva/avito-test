import { isEmpty } from "api/utils";
import AddItemModal from "components/AddItemModal";
import AuthorizationModal from "components/AuthorizationModal";
import Menu from "components/Menu";
import React, { useState } from "react";
import { FiLogIn, FiLogOut, FiMenu, FiPlus } from "react-icons/fi";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const View = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showAddItem, setShowAddItem] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [showAuthorization, setShowAuthorization] = useState(false);

    const { profile } = useSelector((state) => state.profileReducer);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header}>
                <Menu show={showMenu} onClose={() => setShowMenu(false)} />
                {isEmpty(profile) ? (
                    <FiLogIn
                        className={styles.wrapper__header__icon}
                        onClick={() => setShowAuthorization(true)}
                    />
                ) : (
                    <>
                        <FiMenu
                            className={styles.wrapper__header__icon}
                            onClick={() => setShowMenu(true)}
                        />
                        <FiPlus
                            className={styles.wrapper__header__icon}
                            onClick={() => setShowAddItem(true)}
                        />
                        <AddItemModal show={showAddItem} onClose={() => setShowAddItem(false)} />
                        <img
                            src={profile.picture}
                            alt='user image'
                            className={styles.wrapper__header__icon}
                            onClick={() => setShowAuthorization(true)}
                        />
                        <FiLogOut
                            className={styles.wrapper__header__icon}
                            onClick={() => {
                                setIsLogout(true);
                                setShowAuthorization(true);
                            }}
                        />
                    </>
                )}
                <AuthorizationModal
                    show={showAuthorization}
                    isLogout={isLogout}
                    onClose={() => {
                        setIsLogout(false);
                        setShowAuthorization(false);
                    }}
                    setShowAuthorization={setShowAuthorization}
                    setIsLogout={setIsLogout}
                />
            </div>
        </div>
    );
};

export default View;
