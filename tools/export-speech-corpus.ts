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
import { loadScenes } from '../src/content/scenes';
import { sceneTexts } from '../src/speech/corpus';

for (const lang of LANGS) {
  activateCourse(await loadCourse(lang));
  // Répliques des scènes de conversation (personnages, réactions, exemples d'aide), dédoublonnées par clé.
  const texts = [...speechCorpus(), ...sceneTexts(await loadScenes(lang))];
  const byKey = new Map(texts.map((t) => [speechKey(t), t]));
  const corpus = [...byKey].map(([key, text]) => ({ key, text }));
  const file = lang === 'en' ? 'corpus.json' : `corpus-${lang}.json`;
  writeFileSync(new URL(`./voices/${file}`, import.meta.url), JSON.stringify(corpus, null, 1));
  console.log(`${lang} : ${corpus.length} textes → tools/voices/${file}`);
}
