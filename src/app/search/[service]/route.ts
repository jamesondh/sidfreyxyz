import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { supportedBangs } from "@/config";

function getBangUrl(query: string): string | null {
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

export async function GET(
  request: NextRequest,
  { params }: { params: { service: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const serviceName = params.service;

  if (!query) {
    // Redirect to home or a specific error page if no query is provided
    redirect("/");
    return; // Ensure redirect happens
  }

  // Check for bangs first
  const bangUrl = getBangUrl(query);
  if (bangUrl !== null) {
    redirect(bangUrl);
    return; // Ensure redirect happens
  }

  // No bang used, find the service specified in the URL
  const targetService = supportedBangs.find(
    (s) => s.name.toLowerCase() === serviceName.toLowerCase()
  );

  if (targetService) {
    // Found the service, redirect using its query function
    const defaultUrl = targetService.query(query);
    redirect(defaultUrl);
    return; // Ensure redirect happens
  } else {
    // Service name not found, redirect to 404 or a default fallback
    // For now, let's redirect to a 404 page
    redirect("/404");
    return; // Ensure redirect happens
  }
}
