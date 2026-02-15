function getElementWidth(content, padding, border) {
    const contentN = Number.parseFloat(content);
    const contentP = Number.parseFloat(padding);
    const contentB = Number.parseFloat(border);
    const lastWidth = contentN + contentP * 2 + contentB * 2;
    return lastWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

