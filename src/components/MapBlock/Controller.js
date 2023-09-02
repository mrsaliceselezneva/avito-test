import React, { useRef, useEffect } from "react";
import View from "./View.jsx";

const Controller = (props) => {
    const { setStreet, setHouse, ymaps } = props;

    const ref = useRef(null);

    useEffect(() => {
        if (!ymaps || !ref.current) {
            return;
        }

        const defaultState = {
            center: [54.31800414150244, 48.39647750793459],
            zoom: 14,
            controls: ["zoomControl", "fullscreenControl"],
        };

        var myMap = new ymaps.Map(ref.current, defaultState);

        // myMap.contaner.fitToViewport();

        var searchControl = new ymaps.control.SearchControl({
            options: {
                provider: "yandex#search",
            },
        });

        myMap.controls.add(searchControl);

        searchControl.events.add("resultselect", function (event) {
            var index = event.get("index");
            searchControl.getResult(index).then(function (res) {
                const position = res.geometry.getCoordinates();

                myMap.geoObjects.removeAll();

                ymaps.geocode(position, { kind: "house" }).then(function (res) {
                    var nearest = res.geoObjects.get(0);
                    var name = nearest.properties.get("name");
                    setStreet(name.split(",")[0]);
                    setHouse(name.split(",")[1]);
                    nearest.properties.set("iconContent", name);
                    nearest.options.set("preset", "islands#redStretchyIcon");
                    myMap.geoObjects.add(nearest);
                });
            });
        });

        myMap.events.add("click", function (event) {
            const position = event.get("coords");

            myMap.geoObjects.removeAll();

            ymaps.geocode(position, { kind: "house" }).then(function (res) {
                var nearest = res.geoObjects.get(0);
                var name = nearest.properties.get("name");
                setStreet(name.split(",")[0]);
                setHouse(name.split(",")[1]);
                nearest.properties.set("iconContent", name);
                nearest.options.set("preset", "islands#redStretchyIcon");
                myMap.geoObjects.add(nearest);
            });
        });
    }, [ref, setHouse, setStreet, ymaps]);

    return <View ref={ref} />;
};

export default Controller;
