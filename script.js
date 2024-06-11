function calculate() {
    const type = document.getElementById('type').value;
    const a1 = parseFloat(document.getElementById('a1').value);
    const n = parseInt(document.getElementById('n').value);

    let result = '';
    if (type === 'aritmatika') {
        const d = calculateDifference();
        const an = calculateAritmatikaN(a1, d, n);
        const Sn = calculateAritmatikaSum(a1, an, n);
        result = `Suku ke-${n}: ${an}, Jumlah ${n} suku pertama: ${Sn}`;
    } else if (type === 'geometri') {
        const r = calculateRatio();
        const an = calculateGeometriN(a1, r, n);
        const Sn = calculateGeometriSum(a1, r, n);
        result = `Suku ke-${n}: ${an}, Jumlah ${n} suku pertama: ${Sn}`;
    }

    document.getElementById('result').innerText = result;
}

function calculateDifference() {
    const a1 = parseFloat(document.getElementById('a1').value);
    const a2 = parseFloat(document.getElementById('a1').value) + 1;
    return a2 - a1;
}

function calculateRatio() {
    const a1 = parseFloat(document.getElementById('a1').value);
    const a2 = parseFloat(document.getElementById('a1').value) + 1;
    return a2 / a1;
}

function calculateAritmatikaN(a1, d, n) {
    return a1 + (n - 1) * d;
}

function calculateAritmatikaSum(a1, an, n) {
    return (n / 2) * (a1 + an);
}

function calculateGeometriN(a1, r, n) {
    return a1 * Math.pow(r, n - 1);
}

function calculateGeometriSum(a1, r, n) {
    return (a1 * (1 - Math.pow(r, n))) / (1 - r);
}

function calculate() {
    const type = document.getElementById('type').value;
    const a1 = parseFloat(document.getElementById('a1').value);
    const n = parseInt(document.getElementById('n').value);

    let result = '';
    if (type === 'aritmatika') {
        const d = calculateDifference();
        const an = calculateAritmatikaN(a1, d, n);
        const Sn = calculateAritmatikaSum(a1, an, n);
        result = `Suku ke-${n}: ${an}, Jumlah ${n} suku pertama: ${Sn}`;
    } else if (type === 'geometri') {
        const r = calculateRatio();
        const an = calculateGeometriN(a1, r, n);
        const Sn = calculateGeometriSum(a1, r, n);
        result = `Suku ke-${n}: ${an}, Jumlah ${n} suku pertama: ${Sn}`;
    }

    document.getElementById('result').innerText = result;
}

function calculateDifference() {
    const a1 = parseFloat(document.getElementById('a1').value);
    const a2 = parseFloat(document.getElementById('a1').value) + 1;
    return a2 - a1;
}

function calculateRatio() {
    const a1 = parseFloat(document.getElementById('a1').value);
    const a2 = parseFloat(document.getElementById('a1').value) + 1;
    return a2 / a1;
}

function calculateAritmatikaN(a1, d, n) {
    return a1 + (n - 1) * d;
}

function calculateAritmatikaSum(a1, an, n) {
    return (n / 2) * (a1 + an);
}

function calculateGeometriN(a1, r, n) {
    return a1 * Math.pow(r, n - 1);
}

function calculateGeometriSum(a1, r, n) {
    return (a1 * (1 - Math.pow(r, n))) / (1 - r);
}
