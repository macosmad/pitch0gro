
import React from 'react';
import Slide from '../Slide';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface TableOfContentsProps {
  goToSlide: (index: number) => void;
  slideIds: string[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ goToSlide, slideIds }) => {
  const sections = [
    { title: "1. Indice", index: 0 },
    { title: "2. L'idea (Il problema)", index: 1 },
    { title: "3. Panoramica aziendale (La soluzione)", index: 2 },
    { title: "4. Mercato target", index: 3 },
    { title: "5. Modello di business", index: 4 },
    { title: "6. Opportunità di crescita", index: 5 },
    { title: "7. Concorrenti", index: 6 },
    { title: "8. Strategie di mercato", index: 7 },
    { title: "9. Finanza (I)", index: 8 },
    { title: "10. Finanza (II)", index: 9 },
    { title: "11. Finanza (III)", index: 10 },
    { title: "12. Team", index: 11 }
  ];

  return (
    <Slide 
      id={slideIds[0]} 
      title="Pitch Deck" 
      className="bg-gradient-to-br from-pitch-blue to-pitch-teal"
      titleClassName="text-white"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-pitch-blue">Indice</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sections.map((section) => (
            <Button
              key={section.index}
              variant="ghost"
              className="justify-start text-left h-auto py-3 hover:bg-pitch-blue/10 hover:text-pitch-blue transition-colors"
              onClick={() => goToSlide(section.index)}
            >
              <span className="flex items-center">
                <span className="font-medium">{section.title}</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </span>
            </Button>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default TableOfContents;
