import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Landing Page</h1>
      <p className="text-lg text-gray-700 mb-4">This is a simple landing page layout.</p>
      <Button variant={'default'}>Get Started</Button>
    </div>
  );
}
