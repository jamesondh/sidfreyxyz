import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supportedBangs } from "@/config";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4 text-foreground">About</h1>
      <div className="text-foreground flex flex-col gap-y-4">
        <p>
          DuckDuckPerplexity is a search engine that combines the strengths of{" "}
          <a href="https://duckduckgo.com" className="underline">
            DuckDuckGo
          </a>{" "}
          and{" "}
          <a href="https://www.perplexity.ai" className="underline">
            Perplexity
          </a>{" "}
          to offer a versatile search experience. It leverages DuckDuckGo&apos;s
          efficient !bang system for querying specific services, while utilizing
          Perplexity&apos;s AI-powered capabilities for general knowledge
          queries.
        </p>
        <p>
          When you start your search with an exclamation mark (!), known as a
          &quot;bang,&quot; your query is directed to a specific service or
          website. For instance, &quot;!w apple&quot; searches Wikipedia for
          &quot;apple.&quot; Popular services (listed below) are optimized for
          quicker access, saving an extra redirect. If you don&apos;t use a bang
          command, your search is processed by Perplexity, providing
          AI-generated answers to your general questions.
        </p>
        <p>
          You can set DuckDuckPerplexity as your default search engine by
          setting this URL as your search engine:{" "}
          <code>https://duckduckperplexity.vercel.app/search?q=%s</code>.
        </p>
        <p>
          Alternatively, if you prefer using ChatGPT as your default search
          provider instead of Perplexity, use:{" "}
          <code>https://duckduckperplexity.vercel.app/search/chat?q=%s</code>.
          This route works identically to the regular search route but defaults
          to ChatGPT when no !bang is specified.
        </p>
        <p>Instructions:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            For Chrome:
            <ol className="list-decimal list-inside ml-4">
              <li>
                Go to Settings &gt; Search engine &gt; Manage search engines
              </li>
              <li>
                Click &quot;Add&quot; under &quot;Other search engines&quot;
              </li>
              <li>Enter &quot;DuckDuckPerplexity&quot; as the name</li>
              <li>Enter &quot;ddp&quot; as the keyword</li>
              <li>Paste the URL above in the URL field</li>
              <li>Click &quot;Add&quot;</li>
              <li>
                Find DuckDuckPerplexity in the list and click &quot;Make
                default&quot;
              </li>
            </ol>
          </li>
          <li>
            For Firefox:
            <ol className="list-decimal list-inside ml-4">
              <li>
                Install the &quot;Add custom search engine&quot; extension
              </li>
              <li>
                Right-click in the search bar and select &quot;Add search
                engine&quot;
              </li>
              <li>Enter &quot;DuckDuckPerplexity&quot; as the name</li>
              <li>Paste the URL above in the search URL field</li>
              <li>Click &quot;Add&quot;</li>
              <li>Go to Settings &gt; Search</li>
              <li>
                Find DuckDuckPerplexity in the list and click &quot;Set as
                default search engine&quot;
              </li>
            </ol>
          </li>
        </ul>
      </div>
      <h2 className="mt-8 text-1xl font-bold mb-4 text-foreground">
        Supported !bangs
      </h2>
      <Table>
        <TableCaption>
          Other !bangs will be redirected to DuckDuckGo.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead>Bangs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {supportedBangs.map((service, index) => (
            <TableRow key={index}>
              <TableCell>{service.name}</TableCell>
              <TableCell className="font-medium">
                {service.bangs.join(", ")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
