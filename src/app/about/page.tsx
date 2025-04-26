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
          Sidfrey is a flexible search engine that combines DuckDuckGo&apos;s
          efficient !bang system with your choice of default search provider.
          Use !bangs to jump directly to specific services, or let your chosen
          default search engine handle everything else.
        </p>
        <p>
          When you start your search with an exclamation mark (!), known as a
          &quot;bang,&quot; your query is directed to a specific service. For
          instance, &quot;!w apple&quot; searches Wikipedia for
          &quot;apple.&quot; If you don&apos;t use a bang command, your search
          goes to your chosen default provider.
        </p>
        <p>
          Set your default search provider by using the format:{" "}
          <code>https://sidfrey.xyz/search/[service]?q=%s</code>. Replace
          `[service]` with your preferred provider (e.g., &quot;chatgpt&quot;,
          &quot;google&quot;, &quot;perplexity&quot;, &quot;bing&quot;). For
          example, to use ChatGPT as your default:{" "}
          <code>https://sidfrey.xyz/search/chatgpt?q=%s</code>.
        </p>
        <p>Quick setup:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            For Chrome:
            <ol className="list-decimal list-inside ml-4">
              <li>Settings &gt; Search engine &gt; Manage search engines</li>
              <li>
                Click &quot;Add&quot; under &quot;Other search engines&quot;
              </li>
              <li>Name: &quot;Sidfrey&quot;</li>
              <li>Keyword: &quot;sf&quot;</li>
              <li>
                URL: <code>https://sidfrey.xyz/search/chatgpt?q=%s</code>
              </li>
              <li>Click &quot;Add&quot; and set as default</li>
            </ol>
          </li>
          <li>
            For Firefox:
            <ol className="list-decimal list-inside ml-4">
              <li>Install &quot;Add custom search engine&quot; extension</li>
              <li>Right-click search bar &gt; &quot;Add search engine&quot;</li>
              <li>Name: &quot;Sidfrey&quot;</li>
              <li>
                URL: <code>https://sidfrey.xyz/search/chatgpt?q=%s</code>
              </li>
              <li>Add and set as default in Settings &gt; Search</li>
            </ol>
          </li>
        </ul>
      </div>
      <h2 className="mt-8 text-1xl font-bold mb-4 text-foreground">
        Available Services
      </h2>
      <Table>
        <TableCaption>
          Use these service names in the URL to set your default search
          provider. !bangs will always override your default choice.
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
