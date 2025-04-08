
import React from 'react';
import Slide from '../Slide';
import { Card } from '@/components/ui/card';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const Idea: React.FC = () => {
  return (
    <Slide id="idea" title="L'idea: Il Problema">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="slide-paragraph">
            Oggi, molte persone si trovano ad affrontare sfide significative che impattano la loro
            vita quotidiana e il loro benessere. Abbiamo identificato un problema critico
            nel mercato che richiede una soluzione innovativa.
          </p>
          
          <div className="space-y-4 mt-8">
            <div className="slide-list-item">
              <AlertTriangle className="text-pitch-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <p className="text-pitch-gray">
                <span className="font-semibold">Inefficienza persistente</span> nei processi attuali che causano ritardi e frustrazione
              </p>
            </div>
            
            <div className="slide-list-item">
              <AlertTriangle className="text-pitch-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <p className="text-pitch-gray">
                <span className="font-semibold">Costi elevati</span> associati alle soluzioni esistenti sul mercato
              </p>
            </div>
            
            <div className="slide-list-item">
              <AlertTriangle className="text-pitch-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <p className="text-pitch-gray">
                <span className="font-semibold">Scarsa accessibilità</span> delle alternative disponibili per la maggior parte degli utenti
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <Card className="slide-card h-full flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4 text-pitch-blue">La nostra visione</h3>
            <p className="text-pitch-gray mb-6">
              Crediamo che sia possibile risolvere questo problema fondamentale con un approccio completamente nuovo, 
              che unisce tecnologia all'avanguardia e un profondo focus sull'esperienza utente.
            </p>
            
            <div className="mt-auto space-y-3">
              <div className="flex items-center">
                <CheckCircle className="text-pitch-teal h-5 w-5 mr-2" />
                <p className="text-pitch-gray">Maggiore efficienza operativa</p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-pitch-teal h-5 w-5 mr-2" />
                <p className="text-pitch-gray">Riduzione significativa dei costi</p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-pitch-teal h-5 w-5 mr-2" />
                <p className="text-pitch-gray">Accessibilità per tutti gli utenti</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
};

export default Idea;
