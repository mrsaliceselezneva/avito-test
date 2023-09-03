import React, { useState } from "react";
import View from "./View.jsx";

const Controller = (props) => {
    const { picture, isEmptyProfile } = props;

    const [showMenu, setShowMenu] = useState(false);
    const [showAddItem, setShowAddItem] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [showAuthorization, setShowAuthorization] = useState(false);

    const onCloseAuthorizationModal = () => {
        setIsLogout(false);
        setShowAuthorization(false);
    };

    const onOpenAuthorizationModal = () => {
        setShowAuthorization(true);
    };

    const onCloseMenu = () => setShowMenu(false);
    const onOpenMenu = () => setShowMenu(true);

    const onCloseAddItem = () => setShowAddItem(false);
    const onOpenAddItem = () => setShowAddItem(true);


    const logOut = () => {
        setIsLogout(true);
        setShowAuthorization(true);
    };

    return (
        <View
            onCloseAuthorizationModal={onCloseAuthorizationModal}
            onOpenAuthorizationModal={onOpenAuthorizationModal}
            onCloseMenu={onCloseMenu}
            onOpenMenu={onOpenMenu}
            onCloseAddItem={onCloseAddItem}
            onOpenAddItem={onOpenAddItem}
            picture={picture}
            isEmptyProfile={isEmptyProfile}
            isLogout={isLogout}
            showAuthorization={showAuthorization}
            logOut={logOut}
            setIsLogout={setIsLogout}
            showMenu={showMenu}
            showAddItem={showAddItem}
            setShowAddItem={setShowAddItem}
            setShowAuthorization={setShowAuthorization}
        />
    );
};

export default Controller;
