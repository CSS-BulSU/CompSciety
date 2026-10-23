"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import { api } from "@/lib/api";
import { plainText, shortDate } from "@/lib/text";

export default function BlogArticlePage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get(`/api/blogs/${id}`)
      .then(setBlog)
      .catch((err) => setError(err.message));
  }, [id]);

  useEffect(() => {
    if (blog) document.title = `${plainText(blog.title)} | CompSciety`;
  }, [blog]);

  return (
    <SiteShell>
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">home</Link>/<Link href="/blog">blog</Link>/<span>post</span>
          </p>
        </div>
      </section>
      <div className="wrap page-body">
        {error && (
          <div className="empty glass">
            <b>We couldn&apos;t find that post</b>
            <span>It may have been removed. Head back to the blog for the latest.</span>
            <Link className="btn btn-glass btn-sm" href="/blog" style={{ marginTop: 8 }}>
              Back to the blog
            </Link>
          </div>
        )}
        {!blog && !error && <div className="post glass skeleton" style={{ maxWidth: 760 }} />}
        {blog && (
          <article className="article">
            <div className="meta">
              <span className="date">{shortDate(blog.createdAt)}</span>
            </div>
            <h1>{plainText(blog.title)}</h1>
            {blog.image && (
              <div className="cover glass">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={blog.image} alt="" />
              </div>
            )}
            <div className="content">{plainText(blog.content)}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {blog.fbLink && (
                <a className="btn btn-primary btn-sm" href={blog.fbLink} target="_blank" rel="noopener noreferrer">
                  View on Facebook
                </a>
              )}
              <Link className="btn btn-glass btn-sm" href="/blog">
                ← Back to the blog
              </Link>
            </div>
          </article>
        )}
      </div>
    </SiteShell>
  );
}
