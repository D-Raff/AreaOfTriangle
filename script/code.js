// functionality
const btnCalc = document.querySelector('[data-calc]');

let base = document.querySelector('[data-base]')

let height = document.querySelector('[data-height]')

let output = document.querySelector('[data-res]')

function Area(){
    let res = 0.5 * +base.value * +height.value;
    
    output.textContent = `
    Area of this traingle: ${res}
    `;
}

btnCalc.addEventListener("click", Area);