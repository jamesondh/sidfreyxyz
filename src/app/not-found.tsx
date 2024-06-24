import Search from "@/components/search";

export default function Page404() {
  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold text-foreground">404</h1>
        <p className="text-lg text-muted-foreground">
          Page not found. Try a new search:
        </p>
      </div>
      <Search />
    </>
  );
}
