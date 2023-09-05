import React from "react";
import View from "./View.jsx";

const Connector = () => {
    const name = "Полувесов Артём Алексеевич";
    const phone = "+7 (927) 807-07-27";
    const linkTelegram = "https://t.me/Alice_Selezneva";
    const linkVK = "https://vk.com/ironart00";

    return <View name={name} phone={phone} linkTelegram={linkTelegram} linkVK={linkVK} />;
};

export default Connector;
