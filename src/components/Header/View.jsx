import AddItemModal from "components/AddItemModal";
import AuthorizationModal from "components/AuthorizationModal";
import Menu from "components/Menu";
import React from "react";
import { FiLogIn, FiLogOut, FiMenu, FiPlus, FiX } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import styles from "./styles.module.scss";

const View = (props) => {
    const {
        onCloseAuthorizationModal,
        onOpenAuthorizationModal,
        onClickMenu,
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
                <Menu show={showMenu} />
                {isEmptyProfile ? (
                    <>
                        <Tooltip anchorSelect='#login' place='bottom'>
                            войти
                        </Tooltip>

                        <FiLogIn
                            className={styles.wrapper__header__icon}
                            onClick={onOpenAuthorizationModal}
                            id='login'
                        />
                    </>
                ) : (
                    <>
                        {!showMenu ? (
                            <>
                                <Tooltip anchorSelect='#menu' place='bottom'>
                                    статус
                                </Tooltip>
                                <FiMenu
                                    className={styles.wrapper__header__icon}
                                    onClick={onClickMenu}
                                    id='menu'
                                />
                            </>
                        ) : (
                            <FiX
                                className={styles.wrapper__header__icon_red}
                                onClick={onClickMenu}
                            />
                        )}
                        <Tooltip anchorSelect='#add' place='bottom'>
                            добавить
                        </Tooltip>
                        <FiPlus
                            className={styles.wrapper__header__icon}
                            onClick={onOpenAddItem}
                            id='add'
                        />
                        <AddItemModal
                            show={showAddItem}
                            onClose={onCloseAddItem}
                            setShowAddItem={setShowAddItem}
                        />
                        <Tooltip anchorSelect='#img' place='bottom'>
                            профиль
                        </Tooltip>
                        <img
                            src={picture}
                            alt='user image'
                            id='img'
                            className={styles.wrapper__header__icon}
                            onClick={onOpenAuthorizationModal}
                        />
                        <Tooltip anchorSelect='#logout' place='bottom'>
                            выйти
                        </Tooltip>
                        <FiLogOut
                            className={styles.wrapper__header__icon}
                            onClick={logOut}
                            id='logout'
                        />
                    </>
                )}
                <AuthorizationModal
                    show={showAuthorization}
                    isLogout={isLogout}
                    onClose={onCloseAuthorizationModal}
                    setShowAuthorization={setShowAuthorization}
                    setIsLogout={setIsLogout}
                />
            </div>
        </div>
    );
};

export default View;
