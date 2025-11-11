import React from "react";
import { Link } from "react-router-dom";
import "../styles/publications.css";

export type Publication = {
  id?: string | number;
  title: string;
  authors?: string;
  venue?: string;
  year?: string | number;
  links?: { label: string; href: string }[];
  image?: string; // public-relative path, e.g. '/projects/etralogo.png'
};

type Props = {
  title: string;
  items: Publication[];
};

export default function Publications({ title, items }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <section className="publications">
      <h2 className="publications-title">{title}</h2>
      <div className="publications-list">
        {items.map((p, i) => (
          <article key={p.id ?? i} className="publication">
            {p.image && (
              <div className="publication-image">
                <img src={p.image} alt={p.title} />
              </div>
            )}

            <div className="publication-body">
              <div className="publication-meta">
                <div className="publication-title">{p.title}</div>
                {p.authors && <div className="publication-authors">{p.authors}</div>}
                {p.venue && (
                  <div className="publication-venue">{p.venue} {p.year ? `, ${p.year}` : null}</div>
                )}
              </div>

              {p.links && (
                <div className="publication-links">
                  {p.links.map((l, j) => (
                    l.href.startsWith("/") ? (
                      <Link key={j} to={l.href} className="pub-link">
                        {l.label}
                      </Link>
                    ) : (
                      <a key={j} href={l.href} target="_blank" rel="noopener noreferrer" className="pub-link">
                        {l.label}
                      </a>
                    )
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
