import Link from 'next/link';

export default function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.6rem 2.5rem',
        background: 'linear-gradient(to bottom, rgba(245,243,238,0.9) 0%, transparent 100%)',
        pointerEvents: 'none',
      }}
    >
      {/* Wordmark */}
      <Link
        href="/"
        className="nav-link"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.35rem',
          fontWeight: 400,
          color: '#0d0d0d',
          letterSpacing: '0.02em',
          pointerEvents: 'all',
        }}
      >
        fab
      </Link>

      {/* Links */}
      <div
        style={{
          display: 'flex',
          gap: '1.8rem',
          pointerEvents: 'all',
          alignItems: 'center',
        }}
      >
        {[
          { href: '/shows', label: 'Shows' },
          { href: '/about', label: 'About' },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="nav-link"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#0d0d0d',
            }}
          >
            {label}
          </Link>
        ))}
        <a
          href="https://www.instagram.com/fabfabfabfabfabx"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          title="Instagram"
          style={{ color: '#0d0d0d', display: 'flex', alignItems: 'center' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/fabparleavecvous"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          title="En français"
          style={{
            color: '#0d0d0d',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.55rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          <span>FR</span>
        </a>
        <a
          href="MAILCHIMP_SIGNUP_URL"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#0d0d0d',
            border: '1px solid #0d0d0d',
            padding: '0.4rem 1rem',
            textDecoration: 'none',
            transition: 'background 0.2s, color 0.2s',
          }}
          className="newsletter-btn"
        >
          Newsletter
        </a>
      </div>
    </nav>
  );
}
