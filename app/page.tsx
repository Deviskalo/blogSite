import { PostGrid } from '@/components/post-grid';
import { HeroSection } from '@/components/hero-section';

export default async function Home() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <PostGrid />
    </div>
  );
}