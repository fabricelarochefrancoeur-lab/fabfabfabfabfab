'use client';

import { useState } from 'react';

const bio = {
  en: [
    'Fabrice-Édouard La Roche-Francoeur (Fab) is a filmmaker and comedian from Quebec, based in London.',
    'After graduating from the Mel Hoppenheim School of Cinema in Montreal, he teams up with production company Achromatic Media, and directs a number of short films. He is currently in post-production of his first feature film, PINK HAZE, a nostalgic coming of age thriller.',
    'Fab has been doing improv for more than 20 years. He has been part of many troupes in Quebec like La Ligue d\'improvisation Montréalaise (LIM), La Limonade, Les Cravates and Le Punch Club. He also toured all over Europe with La LIQA and Le Punch Club.',
    'In 2015, he creates and hosts UN SHOW LA NUIT, a live on stage late night talk show. During the 12 editions of USLN, some of the most famous Quebec stars like Xavier Dolan, Anne Dorval and Évelyne Brochu took part in the show as guests and collaborators.',
    'Fab makes the leap to stand-up in 2019. He develops material both in French and English and performs in Quebec, France and the UK. In 2020, he appears on the TV show THE NEXT STAND-UP produced by Just for Laughs.',
    'He now lives in London where he regularly performs in stand-up and improv shows. He presented FUNNY STAND-UP FOR SAD PEOPLE, SAD SONGS FOR FUNNY PEOPLE, his first solo stand-up show at the Edinburgh Fringe Festival 2022.',
    'On some rainy days, Fab also publishes cartoons on Instagram under the name INACCURATE SELF-PORTRAITS.',
  ],
  fr: [
    'Fabrice-Édouard La Roche-Francoeur (Fab) est un cinéaste et humoriste québécois basé à Londres.',
    "Après avoir obtenu son diplôme de l'École de cinéma Mel Hoppenheim à Montréal, il s'associe à la société de production Achromatic Media et réalise plusieurs courts métrages. Il est actuellement en post-production de son premier long métrage, PINK HAZE, un thriller nostalgique sur le passage à l'âge adulte.",
    "Fab fait de l'improvisation depuis plus de 20 ans. Il a fait partie de nombreuses troupes au Québec comme la Ligue d'improvisation Montréalaise (LIM), La Limonade, Les Cravates et Le Punch Club. Il a également tourné dans toute l'Europe avec La LIQA et Le Punch Club.",
    "En 2015, il crée et anime UN SHOW LA NUIT, un late night talk-show en direct sur scène. Lors des 12 éditions d'USLN, certaines des plus grandes stars québécoises comme Xavier Dolan, Anne Dorval et Évelyne Brochu ont participé au spectacle en tant qu'invités et collaborateurs.",
    "Fab se lance dans le stand-up en 2019. Il développe du matériel en français et en anglais et se produit au Québec, en France et au Royaume-Uni. En 2020, il apparaît dans l'émission de télévision THE NEXT STAND-UP produite par Juste pour Rire.",
    "Il vit maintenant à Londres où il se produit régulièrement dans des spectacles de stand-up et d'improvisation. Il a présenté FUNNY STAND-UP FOR SAD PEOPLE, SAD SONGS FOR FUNNY PEOPLE, son premier spectacle solo de stand-up au Edinburgh Fringe Festival 2022.",
    'Les jours de pluie, Fab publie également des dessins animés sur Instagram sous le nom de INACCURATE SELF-PORTRAITS.',
  ],
};

export default function BilingualBio() {
  const [lang, setLang] = useState('en');

  return (
    <div>
      {/* ── Language toggle ── */}
      <div
        style={{
          display: 'flex',
          gap: '1.25rem',
          marginBottom: '2rem',
          alignItems: 'center',
        }}
      >
        {['en', 'fr'].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: lang === l ? '#0d0d0d' : '#bbb',
              textDecoration: lang === l ? 'underline' : 'none',
              textUnderlineOffset: '3px',
              background: 'none',
              border: 'none',
              cursor: lang === l ? 'default' : 'pointer',
              padding: 0,
              transition: 'color 0.2s',
            }}
          >
            {l === 'en' ? 'English' : 'Français'}
          </button>
        ))}
      </div>

      {/* ── Bio paragraphs ── */}
      <div
        key={lang}
        style={{
          animation: 'bioFadeIn 0.35s ease both',
        }}
      >
        <style>{`
          @keyframes bioFadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {bio[lang].map((para, i) => (
          <p
            key={i}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              lineHeight: 2,
              color: '#2a2a2a',
              marginBottom: i < bio[lang].length - 1 ? '1.4rem' : 0,
              maxWidth: '62ch',
            }}
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
