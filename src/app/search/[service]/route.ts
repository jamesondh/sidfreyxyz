import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { useBangs } from "@/utils";
import { supportedBangs } from "@/config"; // Import supportedBangs

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
  const bangUrl = useBangs(query);
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
