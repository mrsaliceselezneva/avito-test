const gridRows = (numberItems) => {
    if (window.innerWidth >= 1400) {
        if (numberItems < 5) return { gridTemplateRows: "1fr" };
        if (numberItems < 9) return { gridTemplateRows: "1fr 1fr" };
    } else if (window.innerWidth >= 1120) {
        if (numberItems < 4) return { gridTemplateRows: "1fr" };
        if (numberItems < 7) return { gridTemplateRows: "1fr 1fr" };
        if (numberItems < 10) return { gridTemplateRows: "1fr 1fr 1fr" };
    } else if (window.innerWidth >= 600) {
        if (numberItems < 3) return { gridTemplateRows: "1fr" };
        if (numberItems < 5) return { gridTemplateRows: "1fr 1fr" };
        if (numberItems < 7) return { gridTemplateRows: "1fr 1fr 1fr" };
        if (numberItems < 9) return { gridTemplateRows: "1fr 1fr 1fr 1fr" };
        if (numberItems < 11) return { gridTemplateRows: "1fr 1fr 1fr 1fr 1fr" };
    } else if (window.innerWidth < 600) {
        if (numberItems < 2) return { gridTemplateRows: "1fr" };
        if (numberItems < 3) return { gridTemplateRows: "1fr 1fr" };
        if (numberItems < 4) return { gridTemplateRows: "1fr 1fr 1fr" };
        if (numberItems < 5) return { gridTemplateRows: "1fr 1fr 1fr 1fr" };
        if (numberItems < 6) return { gridTemplateRows: "1fr 1fr 1fr 1fr 1fr" };
        if (numberItems < 7) return { gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr" };
        if (numberItems < 8) return { gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr" };
        if (numberItems < 9) return { gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" };
        if (numberItems < 10) return { gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" };
        if (numberItems < 11)
            return { gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" };
        if (numberItems < 12)
            return { gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" };
    }
};

export default gridRows;
