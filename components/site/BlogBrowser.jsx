"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import PostCard from "./PostCard";
import { usePosts } from "@/lib/usePosts";
import { plainText } from "@/lib/text";

const PAGE_SIZE = 9;

export default function BlogBrowser() {
  const { posts, loading, error } = usePosts();
  const [query, setQuery] = useState("");
  const [shown, setShown] = useState(PAGE_SIZE);

  const hits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((p) => plainText(`${p.title} ${p.content}`).toLowerCase().includes(q));
  }, [posts, query]);

  return (
    <section>
      <div className="toolbar">
        <label className="search" htmlFor="blog-q">
          <Search size={17} aria-hidden="true" />
          <input
            id="blog-q"
            type="search"
            placeholder="Search posts"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShown(PAGE_SIZE);
            }}
          />
        </label>
        {!loading && !error && <span className="mono" style={{ color: "var(--muted)" }}>{hits.length} post{hits.length === 1 ? "" : "s"}</span>}
      </div>

      {loading && <div className="posts" aria-busy="true">{Array.from({ length: 6 }, (_, i) => <div key={i} className="post glass skeleton" />)}</div>}
      {error && <div className="empty glass"><b>Couldn&apos;t load posts right now</b><span>The server may be waking up. Refresh in a moment.</span></div>}
      {!loading && !error && hits.length === 0 && (
        <div className="empty glass">
          <b>No posts match that</b>
          <span>Try another word.</span>
        </div>
      )}
      <div className="posts">
        {hits.slice(0, shown).map((p) => (
          <PostCard key={p._id} post={p} />
        ))}
      </div>
      {hits.length > shown && (
        <div style={{ display: "grid", justifyItems: "center", marginTop: 28 }}>
          <button type="button" className="btn btn-glass" onClick={() => setShown(shown + PAGE_SIZE)}>
            Load more posts
          </button>
        </div>
      )}
    </section>
  );
}
