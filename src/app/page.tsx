export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <section className="max-w-xl flex flex-col min-h-0 gap-y-4">
        <h1 className="text-5xl font-black inline-flex items-center gap-4 -ml-10">
          <span className="h-6 w-6 bg-white animate-pulse"></span> Outlier
        </h1>
        <p className="text-lg">
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
    </main>
  );
}
