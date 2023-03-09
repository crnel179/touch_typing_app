import React from 'react';
import Navbar from './Navbar/Navbar';
import IntroSection from './IntroSection/IntroSection';
import LearnSection from './LearnSection/LearnSection';
import HowItWorksSection from './HowItWorksSection/HowItWorksSection';
import ReviewsCarousel from './ReviewsCarousel/ReviewsCarousel';
import Footer from './Footer/Footer';

function Components() {
    return (
        <div>
            <Navbar />
            <IntroSection />
            <LearnSection />
            <HowItWorksSection />
            <ReviewsCarousel />
            <Footer />
        </div>
    );
}

export default Components;
