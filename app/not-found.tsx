import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export default function NotFound() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center container-x">
          <div className="font-mono text-8xl md:text-9xl font-bold text-gradient mb-6">404</div>
          <h1 className="h-display text-3xl md:text-4xl text-navy-900 mb-4">Page not found</h1>
          <p className="text-slate-600 max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
