import Logos from "@/components/logos";
import Search from "@/components/search";

export default function Home() {
  return (
    <>
      <div className="space-y-2 text-center">
        <Logos />
        <h1 className="text-4xl font-bold text-foreground">
          DuckDuckPerplexity
        </h1>
        <p className="text-lg text-muted-foreground">
          Use DuckDuckGo for <code>!bangs</code> and Perplexity for everything
          else.
        </p>
      </div>
      <Search />;
    </>
  );
}
