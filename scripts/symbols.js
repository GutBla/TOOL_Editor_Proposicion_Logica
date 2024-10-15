export function renderSymbols() {
  const symbols = [
    { symbol: '¬', name: 'Negación lógica', latex: '\\neg' },
    { symbol: '∧', name: 'Conjunción lógica', latex: '\\land' },
    { symbol: '∨', name: 'Disyunción lógica', latex: '\\lor' },
    { symbol: '⊻', name: 'Disyunción lógica Exclusiva', latex: '\\oplus' },
    { symbol: '→', name: 'Implicación lógica', latex: '\\rightarrow' },
    { symbol: '↔', name: 'Doble implicación lógica', latex: '\\leftrightarrow' },
    { symbol: '=', name: 'Igual', latex: '=' },
    { symbol: '≠', name: 'Diferente o no Igual', latex: '\\neq' },
    { symbol: ':', name: 'Dos Puntos', latex: ':' },
    { symbol: '∴', name: 'Tres puntos Consecuencia', latex: '\\therefore' },
    { symbol: '≡', name: 'Equivalencia lógica', latex: '\\equiv' },
    { symbol: '⊨', name: 'Consecuencia lógica', latex: '\\models' },
    { symbol: '(', name: 'Paréntesis izquierdo', latex: '(' },
    { symbol: ')', name: 'Paréntesis derecho', latex: ')' },
    { symbol: '{', name: 'Llave izquierda', latex: '\\{' },
    { symbol: '}', name: 'Llave derecha', latex: '\\}' },
    { symbol: '[', name: 'Corchete izquierdo', latex: '[' },
    { symbol: ']', name: 'Corchete derecho', latex: ']' },
    { symbol: '⟶', name: 'Demostración matemática', latex: '\\longrightarrow' },
    { symbol: 'Ɐ', name: 'Cuantificador universal', latex: '\\forall' },
    { symbol: 'Ǝ', name: 'Cuantificador existencial', latex: '\\exists' },
  ];

  const container = document.getElementById('symbolsContainer');
  container.innerHTML = '';
  symbols.forEach(({ symbol }) => {
    const btn = document.createElement('button');
    btn.textContent = symbol;
    btn.onclick = () => insertSymbol(symbol);
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