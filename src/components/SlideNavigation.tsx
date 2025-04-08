
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  slideIds: string[];
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  slideIds,
}) => {
  const scrollToSlide = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center z-10">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-2 py-1 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            onPrev();
            if (currentSlide > 0) {
              scrollToSlide(slideIds[currentSlide - 1]);
            }
          }}
          disabled={currentSlide === 0}
          className="text-pitch-blue hover:text-pitch-blue/80 hover:bg-pitch-blue/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <div className="px-4 text-sm font-medium text-pitch-gray">
          {currentSlide + 1} / {totalSlides}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            onNext();
            if (currentSlide < totalSlides - 1) {
              scrollToSlide(slideIds[currentSlide + 1]);
            }
          }}
          disabled={currentSlide === totalSlides - 1}
          className="text-pitch-blue hover:text-pitch-blue/80 hover:bg-pitch-blue/10"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default SlideNavigation;
