// scripts/latex.js

// Diccionario de conversión de símbolos a LaTeX
const conversionLatex = {
    '¬': '\\neg',                   
    '∧': '\\land',                  
    '∨': '\\lor',                   
    '⊻': '\\oplus',                 
    '→': '\\rightarrow',            
    '↔': '\\leftrightarrow',       
    '=': '=',                       
    '≠': '\\neq',                   
    ':': ':',                       
    '∴': '\\therefore',             
    '≡': '\\equiv',                 
    '⊨': '\\models',                
    '(': '(',                       
    ')': ')',                       
    '{': '\\{',                     
    '}': '\\}',                     
    '[': '[',                       
    ']': ']',                       
    '⟶': '\\longrightarrow',        
    'Ɐ': '\\forall',                
    'Ǝ': '\\exists',                
    '⟹': '\\Rightarrow',            
};

// Función para convertir una fórmula completa a LaTeX
export function convertirAFormaLatex(formula) {
    let resultadoLatex = '';
    for (let i = 0; i < formula.length; i++) {
        const caracter = formula[i];
        resultadoLatex += conversionLatex[caracter] || caracter;
        // Agregar un espacio después de cada carácter
        resultadoLatex += ' ';
    }
    return resultadoLatex.trim(); // Eliminar el espacio final
}

// Función para generar LaTeX a partir del input y mostrarlo en la página
export function generarLatex() {
    const formulaInput = document.getElementById('formulaInput').value;
    const latexOutput = convertirAFormaLatex(formulaInput);
    document.getElementById('latexOutput').textContent = `${latexOutput}`;
}