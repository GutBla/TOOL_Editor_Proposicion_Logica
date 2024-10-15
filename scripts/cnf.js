export function convertToCNF(formula) {
    // Implementación simplificada de la transformación a CNF
    // Aquí se pueden agregar más reglas de equivalencia lógicas según sea necesario
  
    // Ejemplo básico, no implementa todas las transformaciones necesarias
    return formula
      .replace(/¬\(A ∧ B\)/g, '¬A ∨ ¬B') // Ley de De Morgan
      .replace(/A ∧ \(B ∨ C\)/g, '(A ∧ B) ∨ (A ∧ C)'); // Distributividad
  }
  