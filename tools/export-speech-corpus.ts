/**
 * npm run speech-corpus — écrit tools/voices/corpus.json : tous les textes lus par l'app,
 * avec leur clé de fichier audio. À relancer après chaque ajout de contenu, puis générer l'audio.
 */
import { writeFileSync } from 'node:fs';
import { speechCorpus } from '../src/speech/corpus';
import { speechKey } from '../src/speech/audioKey';

const corpus = speechCorpus().map((text) => ({ key: speechKey(text), text }));
writeFileSync(new URL('./voices/corpus.json', import.meta.url), JSON.stringify(corpus, null, 1));
console.log(`${corpus.length} textes → tools/voices/corpus.json`);
