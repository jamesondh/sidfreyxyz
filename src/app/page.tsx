import Search from "@/components/search";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Home() {
  return (
    <>
      <div className="space-y-2 text-center">
        <div className="flex justify-center items-center">
          <TextAnimate
            text="DuckDuckPerplexity"
            type="calmInUp"
            className="text-foreground text-5xl font-medium"
          />
        </div>
        <p className="text-lg text-muted-foreground">
          Use DuckDuckGo for <code>!bangs</code> and Perplexity for everything
          else.
        </p>
      </div>
      <Search />
    </>
  );
}
