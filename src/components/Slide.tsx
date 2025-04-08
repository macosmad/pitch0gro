
import React from 'react';
import { cn } from '@/lib/utils';

interface SlideProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Slide: React.FC<SlideProps> = ({ 
  id, 
  title, 
  children, 
  className, 
  titleClassName 
}) => {
  return (
    <div id={id} className={cn('slide-container', className)}>
      <div className="slide-content">
        {title && <h2 className={cn('slide-title', titleClassName)}>{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Slide;
