/**
 * npm run speech-corpus — écrit, pour chaque cours, tous les textes lus par l'app avec leur clé de fichier audio :
 * tools/voices/corpus.json (anglais), corpus-it.json, corpus-es.json.
 * À relancer après chaque ajout de contenu, puis générer l'audio.
 */
import { writeFileSync } from 'node:fs';
import { activateCourse, loadCourse } from '../src/content';
import { speechCorpus } from '../src/speech/corpus';
import { speechKey } from '../src/speech/audioKey';
import { LANGS } from '../src/content/types';

for (const lang of LANGS) {
  activateCourse(await loadCourse(lang));
  const corpus = speechCorpus().map((text) => ({ key: speechKey(text), text }));
  const file = lang === 'en' ? 'corpus.json' : `corpus-${lang}.json`;
  writeFileSync(new URL(`./voices/${file}`, import.meta.url), JSON.stringify(corpus, null, 1));
  console.log(`${lang} : ${corpus.length} textes → tools/voices/${file}`);
}
