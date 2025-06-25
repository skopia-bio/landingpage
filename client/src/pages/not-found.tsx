import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
        <p className="max-w-[600px] text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
        </p>
        <Link href="/">
          <Button variant="default" size="lg">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
