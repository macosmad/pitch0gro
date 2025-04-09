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
            Nel mercato alimentare attuale, esiste una disconnessione significativa tra i piccoli e medi produttori
            di alta qualità e i consumatori finali. Questa separazione crea problemi sia per i produttori
            che per chi cerca un'alimentazione più consapevole e sostenibile.
          </p>
          
          <div className="space-y-4 mt-8">
            <div className="slide-list-item">
              <AlertTriangle className="text-pitch-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <p className="text-pitch-gray">
                <span className="font-semibold">
                  I consumatori sprecano in media oltre 30kg di cibo all'anno pro capite (Fonte: FAO)
                </span>
              </p>
            </div>
            
            <div className="slide-list-item">
              <AlertTriangle className="text-pitch-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <p className="text-pitch-gray">
                <span className="font-semibold">
                  Fare la spesa richiede tempo, pianificazione e attenzione... che spesso non abbiamo
                </span>
              </p>
            </div>
            
            <div className="slide-list-item">
              <AlertTriangle className="text-pitch-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <p className="text-pitch-gray">
                <span className="font-semibold">
                  I piccoli produttori faticano a raggiungere il cliente finale e sono schiacciati dalla GDO
                </span>
              </p>
            </div>
              
            <div className="slide-list-item">
              <AlertTriangle className="text-pitch-accent h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <p className="text-pitch-gray">
                <span className="font-semibold">
                  Le piattaforme di delivery alimentare non risolvono il problema: sono veloci ma impersonali e disorganizzate
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <Card className="slide-card h-full flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4 text-pitch-blue">La nostra visione</h3>
            <p className="text-pitch-gray mb-6">
              Una piattaforma di distribuzione alimentare decentralizzata che connette direttamente i piccoli e medi produttori 
              di alta qualità con i consumatori finali, promuovendo un'alimentazione più consapevole e sostenibile.
            </p>
            
            <div className="mt-auto space-y-3">
              <div className="flex items-center">
                <CheckCircle className="text-pitch-teal h-5 w-5 mr-2" />
                <p className="text-pitch-gray">Connessione diretta tra produttori e consumatori</p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-pitch-teal h-5 w-5 mr-2" />
                <p className="text-pitch-gray">Assistente AI per pianificazione alimentare personalizzata</p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-pitch-teal h-5 w-5 mr-2" />
                <p className="text-pitch-gray">Riduzione degli sprechi con spesa mirata e consapevole</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
};

export default Idea;
