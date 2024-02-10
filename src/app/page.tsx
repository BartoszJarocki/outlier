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
import { MagicCard, MagicContainer } from "../components/ui/magic-card";
import Marquee from "../components/ui/marquee";
import {
  CanalDigitalLogo,
  ClevertechLogo,
  EvercastLogo,
  MobileVikingsLogo,
  ParabolLogo,
} from "../img/logos";

const FAQ_ITEMS = [
  {
    title: "How is this different than other agencies?",
    description:
      "Outlier operates without signing any contracts. You subscribe, I start work. You can pause or cancel at any time using the customer portal. Also, Outlier is just one person (me), so know who will be working on your project. This also means limited availability.",
  },
  {
    title: "Who is this for?",
    description:
      "This offer works particularly well with early stage startups that does not always have the budget and time to hire a full-time developer. With Outlier, they get an experienced developer without worrying about contacts, time commitment or spending time on finding the right person.",
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
  {
    title: "Are there any refunds?",
    description:
      "Straight talk: No refunds after the work has been started. If for some reason you're not happy after seeing the work results, you can cancel your subscription at any time.",
  },
] as const;

type Availability = "available" | "limited" | "unavailable";

const MarqueeLogos = () => {
  return (
    <div className="relative flex flex-col items-center justify-center grayscale overflow-hidden -mx-6">
      <Marquee className="[--gap:2rem] flex flex-row items-center justify-center">
        <a href="https://evercast.com">
          <EvercastLogo className="w-32 h-auto" />
        </a>
        <a href="https://clevertech.biz">
          <ClevertechLogo className="w-32 h-auto" />
        </a>
        <a href="https://parabol.co">
          <ParabolLogo className="w-32 h-auto" />
        </a>
        <a href="https://mobilevikings.pl">
          <MobileVikingsLogo className="w-32 h-auto" />
        </a>
        <a href="https://www.allente.no">
          <CanalDigitalLogo className="w-32 h-auto" />
        </a>
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

const AvailabilityStyles: Record<Availability, string> = {
  available: "text-green-500 border-green-500",
  limited: "text-yellow-500 border-yellow-500",
  unavailable: "text-red-500 border-red-500",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <main className="space-y-12 max-w-xl">
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
            Outlier is a tiny development studio where I focus on helping
            startups build and improve their products based on{" "}
            <a href="https://nextjs.org" target="_blank" className="underline">
              Next.js
            </a>{" "}
            framework.
          </p>

          <div className="flex min-h-0 gap-y-2 justify-start gap-x-4 items-center">
            <h2 className="text-sm">Current availability</h2>
            <div>
              <Badge
                variant="outline"
                className={AvailabilityStyles["limited"]}
              >
                Limited
              </Badge>
            </div>
          </div>
        </section>

        <MagicContainer className="flex flex-col md:flex-row gap-6 md:-m-6 items-stretch">
          <MagicCard className="flex-1">
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
          </MagicCard>

          <MagicCard className="flex-1">
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
          </MagicCard>
        </MagicContainer>

        <section className="flex flex-col min-h-0 gap-y-4">
          <h2 className="text-xl font-bold">Companies I worked with</h2>
          <MarqueeLogos />
        </section>

        <section className="flex flex-col min-h-0">
          <h2 className="text-xl font-bold">FAQ</h2>
          {FAQ_ITEMS.map((item) => (
            <Accordion type="single" collapsible key={item.title}>
              <AccordionItem value={item.description}>
                <AccordionTrigger className="text-start text-pretty">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-pretty">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </section>

        <section className="flex flex-col min-h-0 gap-y-2">
          <h2 className="text-xl font-bold">Contact</h2>

          <div>
            If you have any outstanding concerns or questions, feel free to{" "}
            <a
              href="https://consultly.com/s/bartosz-jarocki"
              target="_blank"
              className="underline"
            >
              book a meeting
            </a>{" "}
            with me, or{" "}
            <a href="mailto:bartosz.jarocki@hey.com" className="underline">
              send me an email
            </a>
            .
          </div>
        </section>
      </main>
    </div>
  );
}
