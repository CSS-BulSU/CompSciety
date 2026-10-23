"use client";

import { useSyncExternalStore } from "react";
import { startOfToday } from "./dates";

const noSubscribe = () => () => {};
let today;
const getToday = () => (today ??= startOfToday());
const getSearch = () => location.search;

// Pages are prerendered at build time, so "today" and the query string are only known in
// the browser. Both hooks return null during prerender to keep server and client markup identical.
export function useToday() {
  return useSyncExternalStore(noSubscribe, getToday, () => null);
}

export function useSearch() {
  return useSyncExternalStore(noSubscribe, getSearch, () => null);
}
