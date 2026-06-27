import Link from 'next/link';

export const metadata = {
  title: 'Shows — Fab',
  description: 'Upcoming shows for People Person by Fab.',
};

// Upcoming shows go here when available.
// Each show: { date, venue, city, ticketUrl }
const upcomingShows = [];

const pastShows = [
  {
    date: 'June 25, 2026',
    description: "Tout va bien, spectacle d'improvisation en français",
    venue: '26 Exmouth Market',
    city: 'London EC1R 4QE',
  },
  {
    date: 'April 2, 2026',
    description: 'People Person — Work in Progress',
    venue: "Fab's Studio",
    city: 'London',
  },
  {
    date: 'April 8, 2026',
    description: 'People Person — Work in Progress',
    venue: "Fab's Studio",
    city: 'London',
  },
  {
    date: 'April 9, 2026',
    description: 'People Person — Work in Progress',
    venue: "Fab's Studio",
    city: 'London',
  },
];

export default function ShowsPage() {
  return (
    <main
      style={{
        backgroundColor: '#f5f3ee',
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
            color: '#0d0d0d',
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
                borderTop: '1px solid #d8d4cb',
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
                        color: '#0d0d0d',
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
                    color: '#0d0d0d',
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
              color: '#999',
              lineHeight: 1.8,
              letterSpacing: '0.01em',
            }}
          >
            No upcoming shows. Check back soon.
          </p>
        )}

        {/* Past Shows section */}
        {pastShows.length > 0 && (
          <div style={{ marginTop: '6rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontWeight: 300,
                color: '#999',
                letterSpacing: '-0.02em',
                lineHeight: 0.97,
                marginBottom: '2rem',
              }}
            >
              Past Shows
            </h2>
            <div
              style={{
                borderTop: '1px solid #d8d4cb',
                marginBottom: '0',
              }}
            />
            {pastShows.map((show, i) => (
              <div key={i} className="show-row" style={{ opacity: 0.45 }}>
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
                        color: '#0d0d0d',
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
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Back link */}
      <div
        style={{
          padding: '2rem 2.5rem',
          borderTop: '1px solid #d8d4cb',
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
            color: '#aaa',
            textDecoration: 'none',
          }}
        >
          ← fabfabfabfabfab.com
        </Link>
      </div>
    </main>
  );
}
