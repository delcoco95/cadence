import { describe, expect, it } from 'vitest';
import { chooseVoice, rankVoices, voiceGender, voiceLabel, voiceTier } from './voices';

const V = (name: string, lang = 'en-GB', localService = true) => ({ name, lang, localService });

describe('voix', () => {
  const voices = [
    V('Daniel'),
    V('Serena (Premium)'),
    V('Kate (Enhanced)'),
    V('Bad News'),
    V('Zarvox', 'en-US'),
    V('Samantha', 'en-US'),
    V('Microsoft Libby Online (Natural) - English (United Kingdom)', 'en-GB', false),
    V('Thomas', 'fr-FR'),
  ];

  it('nettoie les noms', () => {
    expect(voiceLabel('Serena (Premium)')).toBe('Serena');
    expect(voiceLabel('Microsoft Libby Online (Natural) - English (United Kingdom)')).toBe('Libby');
  });

  it('écarte les voix gadget et les autres langues', () => {
    const names = rankVoices(voices, 'en-GB').map((r) => r.label);
    expect(names).not.toContain('Bad News');
    expect(names).not.toContain('Thomas');
    expect(rankVoices(voices, 'en-US').map((r) => r.label)).toEqual(['Samantha']);
  });

  it('classe les voix naturelles avant les standard', () => {
    expect(voiceTier(V('Serena (Premium)'))).toBe(3);
    expect(voiceTier(V('Kate (Enhanced)'))).toBe(2);
    expect(voiceTier(V('Daniel'))).toBe(1);
    expect(rankVoices(voices, 'en-GB')[0].tier).toBe(3);
  });

  it('reconnaît le genre et respecte la préférence à qualité égale', () => {
    expect(voiceGender(V('Daniel'))).toBe('male');
    expect(voiceGender(V('Serena (Premium)'))).toBe('female');
    const males = rankVoices([V('Daniel'), V('Kate')], 'en-GB', 'male');
    expect(males[0].label).toBe('Daniel');
  });

  it('utilise la voix choisie si elle existe, sinon la meilleure', () => {
    expect(chooseVoice(voices, 'en-GB', 'any', 'Daniel')?.name).toBe('Daniel');
    expect(chooseVoice(voices, 'en-GB', 'any', 'Absente')?.name).toMatch(/Serena|Libby/);
    expect(chooseVoice([V('Zarvox', 'en-US'), V('Alex', 'en-US')], 'en-AU')?.name).toBe('Alex');
  });
});

describe('repli d’accent', () => {
  const windowsVoices = [
    { name: 'Microsoft Mark - English (United States)', lang: 'en-US' },
    { name: 'Microsoft Zira - English (United States)', lang: 'en-US' },
    { name: 'Microsoft Hortense - French (France)', lang: 'fr-FR' },
  ];
  it('propose les voix anglaises d’un autre accent quand le sien manque', () => {
    expect(rankVoices(windowsVoices, 'en-GB')).toHaveLength(0);
    expect(rankVoices(windowsVoices, 'en', 'female')[0].label).toBe('Zira');
    expect(chooseVoice(windowsVoices, 'en-GB', 'female')?.name).toContain('Zira');
  });
  it('garde une voix choisie d’un autre accent', () => {
    expect(chooseVoice(windowsVoices, 'en-GB', 'any', 'Microsoft Mark - English (United States)')?.name).toContain('Mark');
  });
});

describe('iPhone : voix de même nom', () => {
  // Sur iOS, la version téléchargée porte le même nom que la version compacte : seul le voiceURI les distingue.
  const ios = [
    { name: 'Samantha', lang: 'en-US', voiceURI: 'com.apple.voice.compact.en-US.Samantha' },
    { name: 'Samantha', lang: 'en-US', voiceURI: 'com.apple.voice.enhanced.en-US.Samantha' },
    { name: 'Ava', lang: 'en-US', voiceURI: 'com.apple.voice.premium.en-US.Ava' },
    { name: 'Eddy', lang: 'en-US', voiceURI: 'com.apple.eloquence.en-US.Eddy' },
    { name: 'Daniel', lang: 'en-GB', voiceURI: 'com.apple.voice.compact.en-GB.Daniel' },
  ];

  it('lit la qualité dans l’identifiant', () => {
    expect(voiceTier(ios[0])).toBe(1);
    expect(voiceTier(ios[1])).toBe(2);
    expect(voiceTier(ios[2])).toBe(3);
  });

  it('écarte les voix Eloquence, très robotiques', () => {
    expect(rankVoices(ios, 'en-US').map((r) => r.voice.voiceURI)).not.toContain('com.apple.eloquence.en-US.Eddy');
  });

  it('utilise exactement la voix choisie, pas sa version compacte', () => {
    expect(chooseVoice(ios, 'en-US', 'any', 'com.apple.voice.enhanced.en-US.Samantha')?.voiceURI).toBe('com.apple.voice.enhanced.en-US.Samantha');
  });

  it('avec un ancien réglage (nom seul), prend la meilleure voix de ce nom', () => {
    expect(chooseVoice(ios, 'en-US', 'any', 'Samantha')?.voiceURI).toBe('com.apple.voice.enhanced.en-US.Samantha');
  });

  it('sans choix, prend la meilleure voix de l’accent', () => {
    expect(chooseVoice(ios, 'en-US')?.voiceURI).toBe('com.apple.voice.premium.en-US.Ava');
  });
});
