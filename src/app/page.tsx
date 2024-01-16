import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";

const FAQ_ITEMS = [
  {
    title: "How is Outlier different than other agencies?",
    description:
      "Outlier operates without signing any contracts. You subscribe, I start work. You can pause or cancel at any time using the customer portal. Also, Outlier is just one person (me), so know who will be working on your project. This also means limited availability.",
  },
  {
    title: "What happens after I subscribe?",
    description:
      "I'll contact you to schedule a 30min meeting to discuss your needs. If we're on the same page, we'll set up all the accesses needed and start working. If for some reason there's no fit, you'll get a full refund.",
  },
  {
    title: "How do I request work?",
    description:
      "If you're already using some kind of issue tracking software, I'll need an access to it. If you don't I'll set up an account for you where you can request new work and see the progress.",
  },
  {
    title: "How much time do you need to finish the work request?",
    description:
      "This really depends on the scope of the work. You should aim to have the work well defined, as it'll decrease back & forth when making sure we're on the same page. Initial work requests can take longer due to the initial setup and getting familiar with the product.",
  },
  {
    title: "What if I only have a single request?",
    description:
      "That's ok. You can pause your subscription when the work is done and return when you have additional request.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <main className="space-y-8 max-w-xl">
        <section className="flex flex-col min-h-0 gap-y-6">
          <div>
            <h1 className="text-6xl font-bold inline-flex items-center gap-4 md:-ml-10">
              <span className="h-6 w-6 bg-white animate-pulse" />
              Outlier
            </h1>
            <div className="text-xs font-mono text-pretty">
              /ˈaʊtˌlaɪ(ə)r/ - a person or thing that is different from or in a
              position away from others in the group
            </div>
          </div>

          <p className="text-base text-wrap">
            <a href="https://jarocki.me" target="_blank" className="underline">
              I&apos;m Bartosz, an experienced product engineer.
            </a>{" "}
            Outlier is a tiny development studio where I focus on on helping
            startups build and improve their products based on{" "}
            <a href="https://nextjs.org" target="_blank">
              Next.js
            </a>{" "}
            framework.
          </p>
        </section>
        <section className="flex min-h-0 gap-y-2 justify-start gap-x-4 items-center">
          <h2 className="text-sm">Current availability</h2>
          <p>
            <Badge variant="outline">Limited</Badge>
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-6 md:-m-6 items-stretch">
          <Card className="md:max-w-96 flex-1">
            <CardHeader>
              <div>
                <Badge>6000€ per month</Badge>
              </div>
              <CardTitle>One request at a time</CardTitle>
              <CardDescription className="max-w-md">
                Suitable for existing Next.js application. Requires granting
                access to your current code base.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm">
                <li>Implementing a new feature</li>
                <li>Fixing performance issues</li>
                <li>Upgrading dependencies</li>
                <li>Migration to the new app router</li>
                <li>Bug fixing</li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-y-2">
              <Button className="w-full" asChild>
                <a href="https://buy.stripe.com/4gw3cX64n8C14gw6oq">
                  Subscribe
                </a>
              </Button>
              <div className="text-xs text-muted-foreground">
                Pause or cancel anytime
              </div>
            </CardFooter>
          </Card>
          <Card className="md:max-w-96 flex-1">
            <CardHeader>
              <div>
                <Badge>Requires budget of 15 000€+</Badge>
              </div>
              <CardTitle>Bring idea to life</CardTitle>
              <CardDescription className="max-w-md">
                Creating a new Next.js application from scratch including
                deployment and domain configuration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-">
                <li>Minimalist design</li>
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
        <section>
          <h2 className="text-xl">FAQ</h2>
          {FAQ_ITEMS.map((item) => (
            <Accordion type="single" collapsible key={item.title}>
              <AccordionItem value={item.title}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </section>
      </main>
    </div>
  );
}
