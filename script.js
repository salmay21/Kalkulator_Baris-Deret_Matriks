function calculate() {
    var matrixA = parseMatrix(document.getElementById("matrixA").value);
    var matrixB = parseMatrix(document.getElementById("matrixB").value);
    var operation = document.getElementById("operation").value;
    var result = document.getElementById("result");
  
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
      result.textContent = "Matrix dimensions must be the same!";
      return;
    }
  
    var resultMatrix = [];
    for (var i = 0; i < matrixA.length; i++) {
      var row = [];
      for (var j = 0; j < matrixA[0].length; j++) {
        var value;
        if (operation === "add") {
          value = matrixA[i][j] + matrixB[i][j];
        } else if (operation === "subtract") {
          value = matrixA[i][j] - matrixB[i][j];
        } else if (operation === "multiply") {
          value = 0;
          for (var k = 0; k < matrixA[0].length; k++) {
            value += matrixA[i][k] * matrixB[k][j];
          }
        }
        row.push(value);
      }
      resultMatrix.push(row);
    }
  
    result.textContent = "Result:\n" + stringifyMatrix(resultMatrix);
  }
  
  function parseMatrix(input) {
    return input.trim().split("\n").map(row => row.trim().split(" ").map(Number));
  }
  
  function stringifyMatrix(matrix) {
    return matrix.map(row => row.join("\t")).join("\n");
  }
  