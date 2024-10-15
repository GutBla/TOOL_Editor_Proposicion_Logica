export function renderUppercaseLetters() {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const container = document.getElementById('uppercaseLetters');
  container.innerHTML = '';
  uppercaseLetters.split('').forEach(letter => {
    const btn = document.createElement('button');
    btn.textContent = letter;
    btn.onclick = () => insertSymbol(letter);
    container.appendChild(btn);
  });
}

export function renderLowercaseLetters() {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const container = document.getElementById('lowercaseLetters');
  container.innerHTML = '';
  lowercaseLetters.split('').forEach(letter => {
    const btn = document.createElement('button');
    btn.textContent = letter;
    btn.onclick = () => insertSymbol(letter);
    container.appendChild(btn);
  });
}

function insertSymbol(symbol) {
  const formulaInput = document.getElementById('formulaInput');
  const start = formulaInput.selectionStart;
  const end = formulaInput.selectionEnd;
  const currentText = formulaInput.value;
  formulaInput.value = currentText.slice(0, start) + symbol + currentText.slice(end);
  formulaInput.setSelectionRange(start + symbol.length, start + symbol.length);
  formulaInput.focus();
}