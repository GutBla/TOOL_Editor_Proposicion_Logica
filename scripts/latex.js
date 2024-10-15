export function generateLatex(inputElement) {
    const formula = inputElement.value
      .replace(/¬/g, '\\neg')
      .replace(/∧/g, '\\land')
      .replace(/∨/g, '\\lor')
      .replace(/⊻/g, '\\oplus')
      .replace(/→/g, '\\rightarrow')
      .replace(/↔/g, '\\leftrightarrow')
      .replace(/≠/g, '\\neq')
      .replace(/∴/g, '\\therefore')
      .replace(/≡/g, '\\equiv')
      .replace(/⊨/g, '\\models')
      .replace(/\(/g, '(')
      .replace(/\)/g, ')')
      .replace(/{/g, '\\{')
      .replace(/}/g, '\\}')
      .replace(/\[/g, '[')
      .replace(/]/g, ']')
      .replace(/⟶/g, '\\longrightarrow')
      .replace(/Ɐ/g, '\\forall')
      .replace(/Ǝ/g, '\\exists');
    
    alert(`Código LaTeX generado:\n${formula}`);
  }
  