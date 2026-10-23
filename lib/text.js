// Facebook-style posts use Unicode "mathematical bold" letters (𝗛𝗔𝗧𝗔𝗚) for emphasis.
// NFKC folds them back to plain text so titles are searchable and screen-reader friendly.
export function plainText(text = "") {
  return text.normalize("NFKC");
}

export function excerpt(text = "", length = 140) {
  const clean = plainText(text).replace(/\s+/g, " ").trim();
  return clean.length <= length ? clean : clean.slice(0, length).trim() + "…";
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function shortDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export function initials(name = "") {
  const words = name.replace(/,.*$/, "").split(/\s+/).filter((w) => w.length > 1 && !w.endsWith("."));
  if (!words.length) return "?";
  return (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "")).toUpperCase();
}
