function calculate() {
    const operation = document.getElementById('operation').value;
    const a11 = parseFloat(document.getElementById('a11').value);
    const a12 = parseFloat(document.getElementById('a12').value);
    const a21 = parseFloat(document.getElementById('a21').value);
    const a22 = parseFloat(document.getElementById('a22').value);
    const b11 = parseFloat(document.getElementById('b11').value);
    const b12 = parseFloat(document.getElementById('b12').value);
    const b21 = parseFloat(document.getElementById('b21').value);
    const b22 = parseFloat(document.getElementById('b22').value);

    let result = '';

    if (operation === 'addition') {
        const c11 = a11 + b11;
        const c12 = a12 + b12;
        const c21 = a21 + b21;
        const c22 = a22 + b22;
        result = `Hasil Penjumlahan:<br>
                  [${c11} ${c12}]<br>
                  [${c21} ${c22}]`;
    } else if (operation === 'subtraction') {
        const c11 = a11 - b11;
        const c12 = a12 - b12;
        const c21 = a21 - b21;
        const c22 = a22 - b22;
        result = `Hasil Pengurangan:<br>
                  [${c11} ${c12}]<br>
                  [${c21} ${c22}]`;
    } else if (operation === 'multiplication') {
        const c11 = a11 * b11 + a12 * b21;
        const c12 = a11 * b12 + a12 * b22;
        const c21 = a21 * b11 + a22 * b21;
        const c22 = a21 * b12 + a22 * b22;
        result = `Hasil Perkalian:<br>
                  [${c11} ${c12}]<br>
                  [${c21} ${c22}]`;
    }

    document.getElementById('result').innerHTML = result;
}
