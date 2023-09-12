const gridRows = (numberItems, width) => {
    const gridMas = [
        "1fr",
        "1fr 1fr",
        "1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    ];

    if (width >= 1400) {
        if (numberItems < 5) return { gridTemplateRows: gridMas[0] };
        if (numberItems < 9) return { gridTemplateRows: gridMas[1] };
    } else if (width >= 1120) {
        if (numberItems < 4) return { gridTemplateRows: gridMas[0] };
        if (numberItems < 7) return { gridTemplateRows: gridMas[1] };
        if (numberItems < 10) return { gridTemplateRows: gridMas[2] };
    } else if (width >= 600) {
        if (numberItems < 3) return { gridTemplateRows: gridMas[0] };
        if (numberItems < 5) return { gridTemplateRows: gridMas[1] };
        if (numberItems < 7) return { gridTemplateRows: gridMas[2] };
        if (numberItems < 9) return { gridTemplateRows: gridMas[3] };
        if (numberItems < 11) return { gridTemplateRows: gridMas[4] };
    } else if (width < 600) {
        if (numberItems < 2) return { gridTemplateRows: gridMas[0] };
        if (numberItems < 3) return { gridTemplateRows: gridMas[1] };
        if (numberItems < 4) return { gridTemplateRows: gridMas[2] };
        if (numberItems < 5) return { gridTemplateRows: gridMas[3] };
        if (numberItems < 6) return { gridTemplateRows: gridMas[4] };
        if (numberItems < 7) return { gridTemplateRows: gridMas[5] };
        if (numberItems < 8) return { gridTemplateRows: gridMas[6] };
        if (numberItems < 9) return { gridTemplateRows: gridMas[7] };
        if (numberItems < 10) return { gridTemplateRows: gridMas[8] };
        if (numberItems < 11) return { gridTemplateRows: gridMas[9] };
        if (numberItems < 12) return { gridTemplateRows: gridMas[10] };
    }
    return null;
};

module.exports = gridRows;
