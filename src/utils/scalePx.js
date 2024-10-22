export function scalePxTemplate(value, sizeRatio) {
    return `${value}px * ${sizeRatio}`
}

export function scalePx(value, sizeRatio) {
    return `calc(${scalePxTemplate(value, sizeRatio)})`
}