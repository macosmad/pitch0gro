
import React from 'react';
import Slide from '../Slide';
import { Card } from '@/components/ui/card';
import { Users, ShoppingBag, Building } from 'lucide-react';

const TargetMarket: React.FC = () => {
  return (
    <Slide id="target-market" title="Mercato Target">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <p className="slide-paragraph">
            La nostra piattaforma è pensata per tre segmenti di mercato principali,
            accomunati dalla ricerca di un'alimentazione più sana, sostenibile e
            consapevole.
          </p>
          
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-pitch-blue mb-4">Punti chiave</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-pitch-teal mr-2"></span>
                <span className="text-pitch-gray">Mercato alimentare sostenibile in crescita (+20% annuo)</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-pitch-teal mr-2"></span>
                <span className="text-pitch-gray">86% dei consumatori disposti a pagare di più per prodotti locali di qualità</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-pitch-teal mr-2"></span>
                <span className="text-pitch-gray">Crescente domanda di trasparenza nella filiera alimentare</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-pitch-teal mr-2"></span>
                <span className="text-pitch-gray">Aumento della sensibilità verso lo spreco alimentare</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 border-l-4 border-pitch-blue">
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-blue/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-pitch-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pitch-blue mb-1">Consumatori Consapevoli</h3>
                  <p className="text-pitch-gray mb-2">Famiglie e individui alla ricerca di qualità</p>
                  <ul className="text-pitch-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-blue mr-2"></span>
                      <span>Attenti alla provenienza degli alimenti</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-blue mr-2"></span>
                      <span>Seguono diete specifiche o regimi alimentari personalizzati</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-pitch-teal">
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-teal/10 p-3 rounded-full">
                  <ShoppingBag className="h-6 w-6 text-pitch-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pitch-teal mb-1">Piccoli Produttori</h3>
                  <p className="text-pitch-gray mb-2">Agricoltori e artigiani del cibo di qualità</p>
                  <ul className="text-pitch-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-teal mr-2"></span>
                      <span>Alla ricerca di canali di distribuzione alternativi</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-teal mr-2"></span>
                      <span>Concentrati sulla qualità e sostenibilità dei prodotti</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-pitch-accent">
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-accent/10 p-3 rounded-full">
                  <Building className="h-6 w-6 text-pitch-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pitch-accent mb-1">Ristoranti e Catering</h3>
                  <p className="text-pitch-gray mb-2">Attività di ristorazione orientate alla qualità</p>
                  <ul className="text-pitch-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-accent mr-2"></span>
                      <span>Necessità di materie prime eccellenti e tracciabili</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-accent mr-2"></span>
                      <span>Interesse nel ridurre gli sprechi e ottimizzare gli acquisti</span>
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
