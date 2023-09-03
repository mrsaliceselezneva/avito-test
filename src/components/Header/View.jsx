import AddItemModal from "components/AddItemModal";
import AuthorizationModal from "components/AuthorizationModal";
import Menu from "components/Menu";
import React from "react";
import { FiLogIn, FiLogOut, FiMenu, FiPlus } from "react-icons/fi";

import styles from "./styles.module.scss";

const View = (props) => {
    const {
        onCLoseAuthorizationModal,
        onOpenAuthorizationModal,
        onCloseMenu,
        onOpenMenu,
        onCloseAddItem,
        onOpenAddItem,
        picture,
        isEmptyProfile,
        isLogout,
        showAuthorization,
        logOut,
        setIsLogout,
        showMenu,
        showAddItem,
        setShowAddItem,
        setShowAuthorization,
    } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header}>
                <Menu show={showMenu} onClose={onCloseMenu} />
                {isEmptyProfile ? (
                    <FiLogIn
                        className={styles.wrapper__header__icon}
                        onClick={onOpenAuthorizationModal}
                    />
                ) : (
                    <>
                        <FiMenu className={styles.wrapper__header__icon} onClick={onOpenMenu} />
                        <FiPlus className={styles.wrapper__header__icon} onClick={onOpenAddItem} />
                        <AddItemModal
                            show={showAddItem}
                            onClose={onCloseAddItem}
                            setShowAddItem={setShowAddItem}
                        />
                        <img
                            src={picture}
                            alt='user image'
                            className={styles.wrapper__header__icon}
                            onClick={onOpenAuthorizationModal}
                        />
                        <FiLogOut className={styles.wrapper__header__icon} onClick={logOut} />
                    </>
                )}
                <AuthorizationModal
                    show={showAuthorization}
                    isLogout={isLogout}
                    onClose={onCLoseAuthorizationModal}
                    setShowAuthorization={setShowAuthorization}
                    setIsLogout={setIsLogout}
                />
            </div>
        </div>
    );
};

export default View;
