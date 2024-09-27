import { supportedBangs } from "./config";

export function useBangs(query: string): string | null {
  const trimmedQuery = query.trim();
  const words = trimmedQuery.split(" ");
  const firstWord = words[0];
  const lastWord = words[words.length - 1];

  let bangQuery: string | null = null;
  let searchQuery: string | null = null;

  // Check for bang at the end
  if (lastWord.startsWith("!")) {
    bangQuery = lastWord;
    searchQuery = words.slice(0, -1).join(" ");
  }

  // Check for bang at the beginning (overrides end bang if present)
  if (firstWord.startsWith("!")) {
    bangQuery = firstWord;
    searchQuery = words.slice(1).join(" ");
  }

  // If no bang found, return null
  if (!bangQuery) {
    return null;
  }

  // "I'm feeling lucky" case
  if (bangQuery === "!") {
    return `https://duckduckgo.com/?q=${encodeURIComponent(trimmedQuery)}`;
  }

  const bang = supportedBangs.find((b) => b.bangs.includes(bangQuery));

  if (bang && searchQuery) {
    return bang.query(searchQuery);
  } else {
    // Default to DuckDuckGo if no matching bang found
    return `https://duckduckgo.com/?q=${encodeURIComponent(trimmedQuery)}`;
  }
}
