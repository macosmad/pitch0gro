
import React from 'react';
import Slide from '../Slide';
import { Card } from '@/components/ui/card';
import { Users, Briefcase, Building } from 'lucide-react';

const TargetMarket: React.FC = () => {
  return (
    <Slide id="target-market" title="Mercato Target">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <p className="slide-paragraph">
            La nostra soluzione è ideale per tre segmenti di mercato ben definiti,
            ciascuno con esigenze specifiche ma accomunati dalla necessità di superare
            le inefficienze attuali.
          </p>
          
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-pitch-blue mb-4">Punti chiave</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-pitch-teal mr-2"></span>
                <span className="text-pitch-gray">Mercato in rapida espansione (+15% annuo)</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-pitch-teal mr-2"></span>
                <span className="text-pitch-gray">Alta disponibilità di budget nelle aziende target</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-pitch-teal mr-2"></span>
                <span className="text-pitch-gray">Bassa soddisfazione con le attuali soluzioni</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-pitch-teal mr-2"></span>
                <span className="text-pitch-gray">Potenziale di espansione internazionale</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 border-l-4 border-pitch-blue">
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-blue/10 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-pitch-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pitch-blue mb-1">Piccole e Medie Imprese</h3>
                  <p className="text-pitch-gray mb-2">Aziende con 10-250 dipendenti</p>
                  <ul className="text-pitch-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-blue mr-2"></span>
                      <span>Budget limitato ma necessità di ottimizzazione</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-blue mr-2"></span>
                      <span>Focus su soluzioni cost-effective</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-pitch-teal">
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-teal/10 p-3 rounded-full">
                  <Building className="h-6 w-6 text-pitch-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pitch-teal mb-1">Aziende Enterprise</h3>
                  <p className="text-pitch-gray mb-2">Organizzazioni con esigenze complesse</p>
                  <ul className="text-pitch-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-teal mr-2"></span>
                      <span>Necessità di soluzioni scalabili</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-teal mr-2"></span>
                      <span>Integrazione con sistemi esistenti</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-pitch-accent">
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-accent/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-pitch-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pitch-accent mb-1">Professionisti</h3>
                  <p className="text-pitch-gray mb-2">Consulenti e liberi professionisti</p>
                  <ul className="text-pitch-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-accent mr-2"></span>
                      <span>Ricerca di efficienza operativa</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-accent mr-2"></span>
                      <span>Strumenti per migliorare il servizio ai clienti</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default TargetMarket;
