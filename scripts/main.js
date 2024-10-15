import { renderSymbols } from './symbols.js';
import { renderUppercaseLetters, renderLowercaseLetters } from './letters.js';
import { copyToClipboard, clearFormula, generateLatex } from './utils.js';

document.addEventListener('DOMContentLoaded', function() {
  renderSymbols();
  renderUppercaseLetters();
  renderLowercaseLetters();

  document.getElementById('trueBtn').addEventListener('click', () => insertSymbol('V'));
  document.getElementById('falseBtn').addEventListener('click', () => insertSymbol('F'));
  document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
  document.getElementById('clearBtn').addEventListener('click', clearFormula);
  document.getElementById('latexBtn').addEventListener('click', generateLatex);
});

function insertSymbol(symbol) {
  const formulaInput = document.getElementById('formulaInput');
  const start = formulaInput.selectionStart;
  const end = formulaInput.selectionEnd;
  const currentText = formulaInput.value;
  formulaInput.value = currentText.slice(0, start) + symbol + currentText.slice(end);
  formulaInput.setSelectionRange(start + symbol.length, start + symbol.length);
  formulaInput.focus();
}