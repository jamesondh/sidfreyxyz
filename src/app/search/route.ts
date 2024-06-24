import { type NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  if (!query) {
    redirect("/404");
  }

  if (query.startsWith("!")) {
    redirect(`https://duckduckgo.com/?q=${query}`);
  }

  redirect(`https://www.perplexity.ai/search?q=${query}`);
}
