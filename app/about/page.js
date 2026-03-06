import BilingualBio from '@/components/BilingualBio';

export const metadata = {
  title: 'About — Fab',
  description:
    'Fabrice-Édouard La Roche-Francoeur — filmmaker, comedian, performer from Quebec, based in London.',
};

export default function AboutPage() {
  return (
    <main
      style={{
        backgroundColor: '#f5f3ee',
        minHeight: '100svh',
      }}
    >
      <div
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '10rem 2.5rem 8rem',
        }}
      >
        {/* ── Portrait placeholder ── */}
        <div
          style={{
            width: '100%',
            maxWidth: '200px',
            aspectRatio: '3/4',
            backgroundColor: '#e0ddd7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: '#b5b0a4',
              textTransform: 'uppercase',
            }}
          >
            Portrait Photo
          </span>
        </div>

        {/* ── Name ── */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 300,
            color: '#0d0d0d',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: '3rem',
          }}
        >
          Fabrice-Édouard
          <br />
          La Roche-Francoeur
        </h1>

        {/* ── Bilingual bio with toggle ── */}
        <div style={{ marginBottom: '4rem' }}>
          <BilingualBio />
        </div>

        {/* ── Contact ── */}
        <div
          style={{
            paddingTop: '3rem',
            borderTop: '1px solid #d4d0c8',
            maxWidth: '62ch',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#aaa',
              marginBottom: '0.75rem',
            }}
          >
            Contact
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: '#555',
              lineHeight: 1.8,
            }}
          >
            For all inquiries:{' '}
            <a
              href="mailto:inaccurateempire@gmail.com"
              style={{
                color: '#0d0d0d',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              inaccurateempire@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
