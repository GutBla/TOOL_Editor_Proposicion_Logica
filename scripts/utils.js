export function copyToClipboard() {
  const formulaInput = document.getElementById('formulaInput');
  formulaInput.select();
  document.execCommand('copy');
}

export function clearFormula() {
  const formulaInput = document.getElementById('formulaInput');
  formulaInput.value = '';
  formulaInput.focus();
}

export function generateLatex() {
  const formulaInput = document.getElementById('formulaInput').value;
  const latexOutput = document.getElementById('latexOutput');

  try {
    latexOutput.innerHTML = ''; // Limpiar el contenedor
    katex.render(formulaInput, latexOutput, {
      throwOnError: false
    });
  } catch (error) {
    latexOutput.innerHTML = `<span style="color: red;">Error en la fórmula LaTeX</span>`;
  }
}

// Función ficticia para la conversión a LaTeX, reemplázala con tu lógica
function convertToLatex(formula) {
  // Implementar la conversión a LaTeX según sea necesario
  return formula; // Modifica esto según tu implementación
}