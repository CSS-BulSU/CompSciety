"use client";

import { useEffect, useState } from "react";
import { api } from "./api";

// Fetches blog posts from the backend, newest first.
export function usePosts() {
  const [state, setState] = useState({ posts: [], loading: true, error: "" });
  useEffect(() => {
    api
      .get("/api/blogs")
      .then((posts) => setState({ posts, loading: false, error: "" }))
      .catch((err) => setState({ posts: [], loading: false, error: err.message }));
  }, []);
  return state;
}
