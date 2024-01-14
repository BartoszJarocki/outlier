import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <main className="space-y-8 max-w-xl">
        <section className="flex flex-col min-h-0 gap-y-4">
          <h1 className="text-6xl font-bold inline-flex items-center gap-4 md:-ml-10">
            <span className="h-6 w-6 bg-white animate-pulse"></span> Outlier
          </h1>
          <p className="text-lg text-wrap">
            <a href="https://jarocki.me" target="_blank" className="underline">
              I&apos;m Bartosz
            </a>
            , and I run a small development studio specializing in creating and
            maintaining{" "}
            <a href="https://nextjs.org" target="_blank">
              Next.js
            </a>{" "}
            applications.
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-6 md:-m-6 items-stretch">
          <Card className="md:max-w-96 flex-1">
            <CardHeader>
              <CardTitle>One request at a time</CardTitle>
              <CardDescription className="max-w-md">
                Suitable for existing Next.js application. Requires granting
                access to your current code base.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm">
                <li>Adding a new feature to your Next.js application</li>
                <li>Removing tech debt</li>
                <li>Upgrading dependencies</li>
                <li>Migration to the new app router</li>
                <li>Bug fixing</li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-y-2">
              <Button className="w-full" asChild>
                <a href="https://buy.stripe.com/6oE00LeATf0p8wM9AA">
                  Subscribe now - 4000€/month
                </a>
              </Button>
              <div className="text-xs text-muted-foreground">
                Pause or cancel anytime
              </div>
            </CardFooter>
          </Card>
          <Card className="md:max-w-96 flex-1">
            <CardHeader>
              <CardTitle>MVP</CardTitle>
              <CardDescription className="max-w-md">
                Creating a new Next.js application from scratch including
                deployment and domain configuration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-">
                <li>Minimalist design with growing in mind</li>
                <li>Tech stack that scales</li>
                <li>Domain configuration</li>
                <li>Deployment</li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-y-2">
              <Button className="w-full" asChild>
                <a href="mailto:bartosz.jarocki@hey.com">Contact us</a>
              </Button>
              <div className="text-xs text-muted-foreground">
                Delivery time depends on the scope
              </div>
            </CardFooter>
          </Card>
        </section>
      </main>
    </div>
  );
}
