import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function HeroSection() {
  return (
    <section className="container px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Hero Content */}
        <div className="text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">🎉 Welcome to our platform</div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Build Amazing Products
            <br />
            <span className="text-primary">Faster Than Ever</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">The modern platform for teams who want to ship products quickly. Get started in minutes and scale to millions.</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Demo
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>Built for speed and performance. Experience blazing fast load times and instant updates.</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <CardTitle>Secure by Default</CardTitle>
              <CardDescription>Enterprise-grade security built-in. Your data is encrypted and protected at all times.</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <CardTitle>Easy to Customize</CardTitle>
              <CardDescription>Flexible and customizable. Adapt the platform to match your unique workflow and needs.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
