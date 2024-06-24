import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold text-foreground">
          DuckDuckPerplexity
        </h1>
        <p className="text-lg text-muted-foreground">
          Use DuckDuckGo for <code>!bangs</code> and Perplexity for everything
          else.
        </p>
      </div>
      <div className="mt-4 w-full max-w-md">
        <form className="relative">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-full border-2 border-input bg-background px-4 py-2 pr-12 focus:border-primary focus:outline-none"
          />
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            <SearchIcon className="h-5 w-5 text-muted-foreground" />
          </Button>
        </form>
      </div>
    </div>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
