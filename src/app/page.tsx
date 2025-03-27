'use client'
import dynamic from 'next/dynamic';

// Dynamically import components with ssr: false
const HeroSection = dynamic(() => import('@/components/ui/Page_Section/HeroSection'), { ssr: false });
const WorkProcess = dynamic(() => import('@/components/ui/Page_Section/WorkProcess'), { ssr: false });
const RefferralProgram = dynamic(() => import('@/components/ui/Page_Section/ReferralProgram'), { ssr: false });
const FrequentlyAskedQuestions = dynamic(() => import('@/components/ui/Page_Section/FrequentlyAskedQuestions'), { ssr: false });
const MessageSection = dynamic(() => import('@/components/ui/Page_Section/MessageSection'), { ssr: false });
const Footer = dynamic(() => import('@/components/ui/Page_Section/Footer'), { ssr: false });

function Page() {
  return (
    <div>
      <HeroSection />
      <WorkProcess />
      <RefferralProgram />
      <FrequentlyAskedQuestions />
      <MessageSection />
      <Footer />
    </div>
  );
}

export default Page;
