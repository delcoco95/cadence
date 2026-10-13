/**
 * npm run validate-content [-- en|it|es] — validation pédagogique du contenu d'un cours (anglais par défaut).
 * Code de sortie 1 s'il y a des erreurs (utilisable en CI).
 */
import { activateCourse, loadCourse, PATH } from '../src/content';
import { validateContent, type Issue } from '../src/content/validate';
import { LANGUAGES } from '../src/content/languages';
import type { Lang } from '../src/content/types';

const lang = (process.argv[2] ?? 'en') as Lang;
if (!LANGUAGES[lang]) {
  console.error(`Langue inconnue : ${lang} (en, it ou es)`);
  process.exit(2);
}
const course = await loadCourse(lang);
activateCourse(course);
const report = validateContent({
  lessons: course.lessons,
  units: course.units,
  kcs: course.kcs,
  vocab: course.vocab,
  irregulars: course.verbs,
  path: PATH,
  checkpoints: course.checkpoints,
  placement: course.placement,
  lang,
  themes: course.themes,
  motivationThemes: course.motivationThemes,
});
const errors = report.issues.filter((i) => i.level === 'error');
const warnings = report.issues.filter((i) => i.level === 'warning');

const group = (list: Issue[]) => {
  const byMessage = new Map<string, string[]>();
  for (const i of list) byMessage.set(i.message, [...(byMessage.get(i.message) ?? []), i.where]);
  for (const [message, where] of byMessage)
    console.log(`   ${message} (${where.length}) : ${where.slice(0, 6).join(', ')}${where.length > 6 ? ', …' : ''}`);
};

console.log(`\nValidation du contenu Cadence · ${LANGUAGES[lang].label}\n`);
console.log(`✓ ${report.validExercises} / ${report.exercises} exercices valides (leçons, défis, test de niveau)`);
console.log(
  `  ${course.lessons.length} leçons · ${course.units.length} unités · ${course.kcs.length} notions · ${course.vocab.length} mots · ` +
    `${course.verbs.length} verbes · ${course.placement.length} items de test`,
);
for (const level of course.levels) {
  const lessons = course.lessons.filter((l) => l.cefr === level);
  const exercises = lessons.reduce((a, l) => a + l.exercises.length, 0);
  const units = course.units.filter((u) => u.cefr === level);
  const challenge = units.reduce((a, u) => a + (course.checkpoints[u.id]?.length ?? 0), 0);
  const vocab = course.vocab.filter((v) => v.cefr === level).length;
  console.log(`  ${level} : ${units.length} unités · ${lessons.length} leçons · ${exercises} exercices · ${challenge} items de défi · ${vocab} mots`);
}
if (warnings.length) {
  console.log(`⚠ ${warnings.length} élément(s) à relire`);
  group(warnings);
}
if (errors.length) {
  console.log(`❌ ${errors.length} erreur(s)`);
  group(errors);
  process.exit(1);
}
console.log('\nAucune erreur bloquante.');
