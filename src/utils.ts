import { supportedBangs } from "./config";

export function useBangs(query: string): string | null {
  if (!query.startsWith("!")) {
    return null;
  }

  const [bangQuery, ...restQuery] = query.split(" ");
  const bang = supportedBangs.find((bang) => bang.bangs.includes(bangQuery));

  if (bang) {
    return bang.query(restQuery.join(" "));
  } else {
    // default to DuckDuckGo if no matching bang found
    return `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
  }
}
