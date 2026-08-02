import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-7xl font-bold text-secondary">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/">
          <Button className="w-full gap-2 sm:w-auto">
            <Home className="h-4 w-4" /> Go home
          </Button>
        </Link>
        <Link href="/properties">
          <Button variant="outline" className="w-full gap-2 sm:w-auto">
            <Search className="h-4 w-4" /> Browse properties
          </Button>
        </Link>
      </div>
    </div>
  );
}
