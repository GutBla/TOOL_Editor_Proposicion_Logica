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


export function convertirAFormaLatex(formula) {
    let resultadoLatex = '';
    for (let i = 0; i < formula.length; i++) {
        const caracter = formula[i];
        resultadoLatex += conversionLatex[caracter] || caracter;
        resultadoLatex += ' ';
    }
    return resultadoLatex.trim();
}

export function generarLatex() {
    const formulaInput = document.getElementById('formulaInput').value;
    const latexOutput = convertirAFormaLatex(formulaInput);
    document.getElementById('latexOutput').textContent = `${latexOutput}`;
}
