let sumData=(a, b) => {
    return a + b;
}

let minData=(a, b) => {
    return a - b;
}


// export default sumData /* Default Export -> for one function Exportation only */

export {sumData, minData} /* Named Export -> for multiple Functions Exportation OR put the 'export' keyword before the function definition instead of doing this line. */

export let myName = "Nidhi";