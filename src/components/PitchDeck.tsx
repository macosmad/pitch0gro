
import React, { useState } from 'react';
import SlideNavigation from './SlideNavigation';
import TableOfContents from './slides/TableOfContents';
import Idea from './slides/Idea';
import CompanyOverview from './slides/CompanyOverview';
import TargetMarket from './slides/TargetMarket';
import BusinessModel from './slides/BusinessModel';
import GrowthOpportunities from './slides/GrowthOpportunities';
import Competitors from './slides/Competitors';
import MarketStrategies from './slides/MarketStrategies';
import Finance1 from './slides/Finance1';
import Finance2 from './slides/Finance2';
import Finance3 from './slides/Finance3';
import Team from './slides/Team';

const PitchDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slideIds = [
    'table-of-contents',
    'idea',
    'company-overview',
    'target-market',
    'business-model',
    'growth-opportunities',
    'competitors',
    'market-strategies',
    'finance-1',
    'finance-2',
    'finance-3',
    'team'
  ];

  const totalSlides = slideIds.length;

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    document.getElementById(slideIds[index])?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="pitch-deck">
      <TableOfContents goToSlide={goToSlide} slideIds={slideIds} />
      <Idea />
      <CompanyOverview />
      <TargetMarket />
      <BusinessModel />
      <GrowthOpportunities />
      <Competitors />
      <MarketStrategies />
      <Finance1 />
      <Finance2 />
      <Finance3 />
      <Team />
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        slideIds={slideIds}
      />
    </div>
  );
};

export default PitchDeck;
