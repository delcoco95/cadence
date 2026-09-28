/**
 * npm run validate-content — validation pédagogique du contenu.
 * Code de sortie 1 s'il y a des erreurs (utilisable en CI).
 */
import { LESSONS, UNITS, PATH, VOCAB_A2, IRREGULAR_VERBS } from '../src/content';
import { KCS } from '../src/content/kcs';
import { validateContent, type Issue } from '../src/content/validate';

const report = validateContent({ lessons: LESSONS, units: UNITS, kcs: KCS, vocab: VOCAB_A2, irregulars: IRREGULAR_VERBS, path: PATH });
const errors = report.issues.filter((i) => i.level === 'error');
const warnings = report.issues.filter((i) => i.level === 'warning');

const group = (list: Issue[]) => {
  const byMessage = new Map<string, string[]>();
  for (const i of list) byMessage.set(i.message, [...(byMessage.get(i.message) ?? []), i.where]);
  for (const [message, where] of byMessage)
    console.log(`   ${message} (${where.length}) : ${where.slice(0, 6).join(', ')}${where.length > 6 ? ', …' : ''}`);
};

console.log('\nValidation du contenu Cadence\n');
console.log(`✓ ${report.validExercises} / ${report.exercises} exercices valides`);
console.log(`  ${LESSONS.length} leçons · ${UNITS.length} unités · ${KCS.length} notions · ${VOCAB_A2.length} mots · ${IRREGULAR_VERBS.length} verbes`);
if (warnings.length) {
  console.log(`⚠ ${warnings.length} élément(s) à relire`);
  group(warnings);
}
if (errors.length) {
  console.log(`❌ ${errors.length} erreur(s)`);
  group(errors);
  process.exit(1);
}
console.log(errors.length ? '' : '\nAucune erreur bloquante.');
