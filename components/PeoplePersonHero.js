'use client';

import Image from 'next/image';

export default function PeoplePersonHero() {
  return (
    <section
      className="grain-bg"
      style={{
        position: 'relative',
        backgroundColor: '#0d0d0d',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Content — fades in slowly */}
      <div
        className="anim-hero-fade"
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '8rem 2rem 10rem',
          maxWidth: '760px',
          width: '100%',
          margin: '0 auto',
          gap: '0',
        }}
      >
        {/* Promo image */}
        <div
          style={{
            width: '100%',
            maxWidth: '760px',
            marginBottom: '3rem',
          }}
        >
          <Image
            src="/images/People Person Work in progress is live.jpg"
            alt="People Person — Work in Progress is Live"
            width={1366}
            height={768}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            letterSpacing: '0.05em',
            color: '#555',
            lineHeight: 1.7,
            maxWidth: '400px',
            textAlign: 'center',
          }}
        >
          People Person : A solo show by Fab.{' '}
          <a
            href="https://fabfabfabfabfab.bigcartel.com/category/shows"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#aaa',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            Get tickets for the work in progress nights
          </a>
        </p>
      </div>

      {/* Work button */}
      <button
        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          position: 'absolute',
          bottom: '5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.6rem',
          padding: 0,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#aaa',
          }}
        >
          Work
        </span>
        <span style={{ color: '#888', fontSize: '1rem', lineHeight: 1 }}>↓</span>
      </button>
    </section>
  );
}
