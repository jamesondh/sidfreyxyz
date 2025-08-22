import { type SearchService } from "./types";

export const supportedBangs: SearchService[] = [
  {
    name: "Google",
    bangs: ["!g", "!google"],
    query: (searchQuery: string) =>
      `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`,
  },
  {
    name: "YouTube",
    bangs: ["!yt", "!youtube"],
    query: (searchQuery: string) =>
      `https://www.youtube.com/results?search_query=${encodeURIComponent(
        searchQuery
      )}`,
  },
  {
    name: "Wikipedia",
    bangs: ["!w", "!wiki", "!wikipedia"],
    query: (searchQuery: string) =>
      `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
        searchQuery
      )}`,
  },
  {
    name: "Claude",
    bangs: ["!cl", "!claude"],
    query: (searchQuery: string) =>
      `https://claude.ai/new?q=${encodeURIComponent(searchQuery)}`,
  },
  {
    name: "ChatGPT",
    bangs: ["!gpt", "!chatgpt", "!chat"],
    query: (searchQuery: string) =>
      `https://chat.openai.com/?q=${encodeURIComponent(searchQuery)}`,
  },
  {
    name: "Google Images",
    bangs: ["!gi", "!img", "!image"],
    query: (searchQuery: string) =>
      `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery
      )}&tbm=isch`,
  },
  {
    name: "Wolfram Alpha",
    bangs: ["!wa", "!wolfram", "!wolframalpha"],
    query: (searchQuery: string) =>
      `https://www.wolframalpha.com/input/?i=${encodeURIComponent(
        searchQuery
      )}`,
  },
  {
    name: "Reddit",
    bangs: ["!r", "!reddit"],
    query: (searchQuery: string) =>
      `https://www.reddit.com/search?q=${encodeURIComponent(searchQuery)}`,
  },
  {
    name: "Bing",
    bangs: ["!b", "!bing"],
    query: (searchQuery: string) =>
      `https://www.bing.com/search?q=${encodeURIComponent(searchQuery)}`,
  },
  {
    name: "Amazon",
    bangs: ["!a", "!amazon"],
    query: (searchQuery: string) =>
      `https://www.amazon.com/s?k=${encodeURIComponent(searchQuery)}`,
  },
  {
    name: "Twitter",
    bangs: ["!x", "!tw", "!twitter"],
    query: (searchQuery: string) =>
      `https://twitter.com/search?q=${encodeURIComponent(searchQuery)}`,
  },
  {
    name: "GitHub",
    bangs: ["!github", "!gh"],
    query: (searchQuery: string) =>
      `https://github.com/search?q=${encodeURIComponent(searchQuery)}`,
  },
  {
    name: "eBay",
    bangs: ["!ebay"],
    query: (searchQuery: string) =>
      `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(searchQuery)}`,
  },
  {
    name: "DuckDuckGo",
    bangs: ["!ddg", "!duckduckgo"],
    query: (searchQuery: string) =>
      `https://duckduckgo.com/?q=${encodeURIComponent(searchQuery)}`,
  },
  {
    name: "Perplexity",
    bangs: ["!p", "!perplexity"],
    query: (searchQuery: string) =>
      `https://www.perplexity.ai/search?q=${encodeURIComponent(searchQuery)}`,
  },
];
