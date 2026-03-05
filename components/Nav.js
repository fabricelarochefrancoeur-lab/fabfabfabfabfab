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
        background: 'linear-gradient(to bottom, rgba(13,13,13,0.85) 0%, transparent 100%)',
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
          color: '#e8e6e1',
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
          gap: '2.5rem',
          pointerEvents: 'all',
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
              color: '#e8e6e1',
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
