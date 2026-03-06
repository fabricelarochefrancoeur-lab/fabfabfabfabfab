'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function WorkEntry({ entry, isExpanded, onToggle, showDate }) {
  const {
    date,
    title,
    category,
    tags,
    description,
    image,
    images,
    videoFile,
    comingSoon,
    links,
    vimeoId,
    credits,
  } = entry;

  const [videoOpen, setVideoOpen] = useState(false);

  // Reset video when entry collapses
  useEffect(() => {
    if (!isExpanded) setVideoOpen(false);
  }, [isExpanded]);

  return (
    <div
      style={{
        borderBottom: '1px solid #d8d4cb',
      }}
    >
      {/* ── Row button ── */}
      <button
        onClick={onToggle}
        className="entry-btn"
        aria-expanded={isExpanded}
        style={{
          display: 'flex',
          alignItems: 'baseline',
          width: '100%',
          padding: '1.15rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 0,
        }}
      >
        {/* Date column — fixed width, always rendered for alignment */}
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            color: '#888',
            letterSpacing: '0.04em',
            minWidth: '4.5rem',
            flexShrink: 0,
            visibility: showDate ? 'visible' : 'hidden',
            userSelect: 'none',
          }}
        >
          {date ?? '—'}
        </span>

        {/* Em dash — always rendered for alignment */}
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            color: '#aaa',
            marginRight: '0.9rem',
            flexShrink: 0,
            userSelect: 'none',
            visibility: showDate ? 'visible' : 'hidden',
          }}
        >
          —
        </span>

        {/* Title */}
        <span
          className="entry-title-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.05rem, 2.2vw, 1.45rem)',
            fontWeight: 400,
            color: '#111',
            letterSpacing: '-0.01em',
            lineHeight: 1.25,
            flex: 1,
            transition: 'opacity 0.2s ease',
          }}
        >
          {title}
        </span>

        {/* Trailing label */}
        {comingSoon && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#aaa',
              marginLeft: '1.2rem',
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Coming Soon
          </span>
        )}

        {/* Expand indicator */}
        <span
          style={{
            marginLeft: '1rem',
            color: '#bbb',
            fontSize: '0.65rem',
            flexShrink: 0,
            transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            display: 'inline-block',
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>

      {/* ── Accordion content ── */}
      <div className={`accordion-grid${isExpanded ? ' open' : ''}`}>
        <div className="accordion-inner">
          <div
            style={{
              paddingBottom: '3.5rem',
              paddingLeft: 'calc(4.5rem + 0.9rem + 0.9rem)',
              paddingRight: '1rem',
            }}
          >
            {/* Image / placeholder */}
            {images && images.length > 0 ? (
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '2rem',
                }}
              >
                {images.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt={`${title} ${i + 1}`}
                    style={{
                      display: 'block',
                      width: 'calc(50% - 0.5rem)',
                      height: 'auto',
                    }}
                  />
                ))}
              </div>
            ) : image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt={title}
                style={{
                  display: 'block',
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  marginBottom: '2rem',
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  aspectRatio: '3/2',
                  backgroundColor: '#e5e1d9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.2em',
                    color: '#b0ab9f',
                    textTransform: 'uppercase',
                  }}
                >
                  Image / GIF
                </span>
              </div>
            )}

            {/* Local video file */}
            {videoFile && (
              <video
                src={videoFile}
                controls
                style={{
                  display: 'block',
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  marginBottom: '2rem',
                }}
              />
            )}

            {/* Category tag */}
            <div style={{ marginBottom: '1.1rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#888',
                  border: '1px solid #ccc',
                  padding: '0.22rem 0.65rem',
                  display: 'inline-block',
                }}
              >
                {category}
              </span>
            </div>

            {/* Description — supports multiple paragraphs separated by \n\n */}
            {description && (
              <div style={{ marginBottom: '1.75rem' }}>
                {description.split('\n\n').map((para, i, arr) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      lineHeight: 1.9,
                      color: '#3a3a3a',
                      maxWidth: '540px',
                      marginBottom: i < arr.length - 1 ? '1rem' : 0,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* Credits */}
            {credits && credits.length > 0 && (
              <div style={{ marginBottom: '1.75rem', maxWidth: '540px' }}>
                {credits.map(({ label, value }) => (
                  <div
                    key={label}
                    className="credits-row"
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.55rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#999',
                        minWidth: '6.5rem',
                        flexShrink: 0,
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.78rem',
                        color: '#555',
                        lineHeight: 1.6,
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Vimeo — click-to-reveal */}
            {vimeoId && (
              <div style={{ marginBottom: links && links.length > 0 ? '1.75rem' : 0 }}>
                {/* Trigger button */}
                <button
                  onClick={() => setVideoOpen((v) => !v)}
                  className="video-trigger"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: videoOpen ? '#333' : '#888',
                    border: '1px solid',
                    borderColor: videoOpen ? '#999' : '#ccc',
                    padding: '0.22rem 0.65rem',
                    background: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1.1rem',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.5rem',
                      transform: videoOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      display: 'inline-block',
                      lineHeight: 1,
                    }}
                  >
                    ▶
                  </span>
                  Teaser
                </button>

                {/* Collapsible iframe */}
                <div className={`accordion-grid${videoOpen ? ' open' : ''}`}>
                  <div className="accordion-inner">
                    <div
                      style={{
                        width: '100%',
                        maxWidth: '600px',
                        paddingBottom: '0.5rem',
                      }}
                    >
                      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        {videoOpen && (
                          <iframe
                            src={`https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title={title}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Links */}
            {links && links.length > 0 && (
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: comingSoon ? '1.5rem' : 0 }}>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#1a1a1a',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            )}

            {/* Coming soon label */}
            {comingSoon && (
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#aaa',
                  margin: 0,
                }}
              >
                Coming Soon
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
