import { redirect } from "next/navigation";
import { useBangs } from "@/utils";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  if (!query) {
    redirect("/404");
  }

  const bang = useBangs(query);

  if (bang !== null) {
    redirect(bang);
  } else {
    redirect(`https://www.perplexity.ai/search?q=${encodeURIComponent(query)}`);
  }
}
