import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

// This route now simply redirects to the dynamic route with a default service.
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  if (!query) {
    // If no query, redirect to home or 404, matching the dynamic route's behavior
    redirect("/");
    return;
  }

  // Redirect to the dynamic route, defaulting to Perplexity
  redirect(`/search/perplexity?q=${encodeURIComponent(query)}`);
}
