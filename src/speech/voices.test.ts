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
