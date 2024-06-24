"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps, FormEvent } from "react";

export default function Search() {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("search") as string;
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="mt-4 w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          type="search"
          name="search"
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
