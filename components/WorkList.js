'use client';

import { useState, useMemo, useEffect } from 'react';
import WorkEntry from './WorkEntry';
import { works } from '@/data/works';

const FILTERS = ['ALL', 'FILM', 'COMEDY', 'MUSIC & OTHER'];

export default function WorkList() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [expandedIds, setExpandedIds] = useState(new Set());

  const filteredWorks = useMemo(() => {
    if (activeFilter === 'ALL') return works;
    return works.filter((w) => w.category === activeFilter);
  }, [activeFilter]);

  // Reset expanded entries when filter changes
  useEffect(() => {
    setExpandedIds(new Set());
  }, [activeFilter]);

  const allExpanded =
    filteredWorks.length > 0 &&
    filteredWorks.every((w) => expandedIds.has(w.id));

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(filteredWorks.map((w) => w.id)));
    }
  };

  const toggleEntry = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Show date for every entry
  const annotated = filteredWorks.map((work) => ({ ...work, showDate: true }));

  return (
    <section
      id="work"
      style={{
        backgroundColor: '#f5f3ee',
        minHeight: '100vh',
        paddingTop: '7rem',
        paddingBottom: '10rem',
      }}
    >
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '0 2.5rem',
        }}
      >
        {/* ── Controls bar ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '2.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid #d8d4cb',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {/* Filter links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: activeFilter === f ? '#0d0d0d' : '#aaa',
                  textDecoration: activeFilter === f ? 'underline' : 'none',
                  textUnderlineOffset: '3px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Expand / Collapse all */}
          <button
            onClick={toggleAll}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#aaa',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#555')}
            onMouseLeave={(e) => (e.target.style.color = '#aaa')}
          >
            {allExpanded ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {/* ── Work entries ── */}
        <div>
          {annotated.map((work) => (
            <WorkEntry
              key={work.id}
              entry={work}
              isExpanded={expandedIds.has(work.id)}
              onToggle={() => toggleEntry(work.id)}
              showDate={work.showDate}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
