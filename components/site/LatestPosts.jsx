"use client";

import PostCard from "./PostCard";
import { usePosts } from "@/lib/usePosts";

export default function LatestPosts({ count = 3 }) {
  const { posts, loading, error } = usePosts();
  if (loading) return <div className="posts" aria-busy="true">{Array.from({ length: count }, (_, i) => <div key={i} className="post glass skeleton" />)}</div>;
  if (error) return <div className="empty glass"><b>Couldn&apos;t load posts right now</b><span>The server may be waking up. Refresh in a moment.</span></div>;
  if (!posts.length) return <div className="empty glass"><b>No posts yet</b><span>Check back soon.</span></div>;
  return (
    <div className="posts">
      {posts.slice(0, count).map((p) => (
        <PostCard key={p._id} post={p} />
      ))}
    </div>
  );
}
