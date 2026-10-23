import Link from "next/link";
import { Heart } from "lucide-react";
import { excerpt, plainText, shortDate } from "@/lib/text";

export default function PostCard({ post }) {
  return (
    <Link className="post glass" href={`/blog/${post._id}`}>
      <div className="img">
        {post.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.image} alt="" loading="lazy" />
        ) : (
          <Heart size={44} strokeWidth={1.8} aria-hidden="true" />
        )}
      </div>
      <div className="body">
        <div className="meta">
          <span className="date">{shortDate(post.createdAt)}</span>
        </div>
        <h3>{plainText(post.title)}</h3>
        <p>{excerpt(post.content, 160)}</p>
      </div>
    </Link>
  );
}
