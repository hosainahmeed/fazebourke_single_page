import HeroSection from '@/components/ui/Page_Section/HeroSection';
import WorkProcess from '@/components/ui/Page_Section/WorkProcess';
import RefferralProgram from '@/components/ui/Page_Section/ReferralProgram';
import React from 'react';
import FrequentlyAskedQuestions from '@/components/ui/Page_Section/FrequentlyAskedQuestions';
import MessageSection from '@/components/ui/Page_Section/MessageSection';
import Footer from '@/components/ui/Page_Section/Footer';

function page() {
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

export default page;
