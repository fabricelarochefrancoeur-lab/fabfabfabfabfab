import Link from 'next/link';

export const metadata = {
  title: 'Shows — Fab',
  description: 'Upcoming shows for People Person by Fab.',
};

// Upcoming shows go here when available.
// Each show: { date, venue, city, ticketUrl }
const upcomingShows = [
  {
    date: 'April 2, 2026',
    description: 'People Person — Work in Progress',
    venue: "Fab's Studio",
    city: 'London',
    ticketUrl: 'https://fabfabfabfabfab.bigcartel.com/product/peoplepersonwip1',
  },
  {
    date: 'April 8, 2026',
    description: 'People Person — Work in Progress',
    venue: "Fab's Studio",
    city: 'London',
    ticketUrl: 'https://fabfabfabfabfab.bigcartel.com/product/peoplepersonwip2',
  },
  {
    date: 'April 9, 2026',
    description: 'People Person — Work in Progress',
    venue: "Fab's Studio",
    city: 'London',
    ticketUrl: 'https://fabfabfabfabfab.bigcartel.com/product/peoplepersonwip3',
  },
];

export default function ShowsPage() {
  return (
    <main
      style={{
        backgroundColor: '#0d0d0d',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Page content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '760px',
          margin: '0 auto',
          padding: '10rem 2.5rem 6rem',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 300,
            color: '#e8e6e1',
            letterSpacing: '-0.02em',
            lineHeight: 0.97,
            marginBottom: '4rem',
          }}
        >
          Upcoming Shows
        </h1>

        {/* Shows list */}
        {upcomingShows.length > 0 ? (
          <div>
            {/* Divider */}
            <div
              style={{
                borderTop: '1px solid #2a2a2a',
                marginBottom: '0',
              }}
            />
            {upcomingShows.map((show, i) => (
              <div key={i} className="show-row">
                <div className="show-row-info">
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: '#555',
                      letterSpacing: '0.06em',
                      flexShrink: 0,
                    }}
                  >
                    {show.date}
                  </span>
                  {show.description && (
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        color: '#e8e6e1',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {show.description}
                    </span>
                  )}
                  <div className="show-row-meta">
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        color: '#555',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {show.venue}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.7rem',
                        color: '#555',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {show.city}
                    </span>
                  </div>
                </div>

                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#e8e6e1',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  Tickets →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: '#444',
              lineHeight: 1.8,
              letterSpacing: '0.01em',
            }}
          >
            No upcoming shows. Check back soon.
          </p>
        )}
      </div>

      {/* Back link */}
      <div
        style={{
          padding: '2rem 2.5rem',
          borderTop: '1px solid #1a1a1a',
        }}
      >
        <Link
          href="/"
          className="back-link"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#444',
            textDecoration: 'none',
          }}
        >
          ← fabfabfabfabfab.com
        </Link>
      </div>
    </main>
  );
}
