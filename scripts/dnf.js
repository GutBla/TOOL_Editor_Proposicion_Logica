export function convertToDNF(formula) {
  let result = formula;
  result = result.replace(/¬\(A ∨ B\)/g, '¬A ∧ ¬B');
  result = result.replace(/A ∨ \(B ∧ C\)/g, '(A ∨ B) ∧ (A ∨ C)');
  return result;
}
