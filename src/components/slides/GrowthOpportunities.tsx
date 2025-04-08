
import React from 'react';
import Slide from '../Slide';
import { Card } from '@/components/ui/card';
import { TrendingUp, Globe, Zap, ArrowRight } from 'lucide-react';

const GrowthOpportunities: React.FC = () => {
  return (
    <Slide id="growth-opportunities" title="Opportunità di Crescita">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <p className="slide-paragraph">
            La nostra strategia di crescita è strutturata su tre pilastri fondamentali, 
            ciascuno progettato per massimizzare il potenziale della nostra offerta 
            e conquistare quote di mercato.
          </p>
          
          <div className="relative mt-8 bg-white p-6 rounded-lg shadow border border-gray-100">
            <div className="absolute -top-4 left-6 bg-pitch-teal text-white text-sm font-semibold py-1 px-3 rounded">
              Obiettivo
            </div>
            <h3 className="text-xl font-bold text-pitch-blue mt-2 mb-4">
              Crescita a 5 anni
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-pitch-blue mr-3"></div>
                <span className="font-medium">Anno 1:</span>
                <span className="ml-2 text-pitch-gray">Espansione nazionale</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-pitch-teal mr-3"></div>
                <span className="font-medium">Anno 2-3:</span>
                <span className="ml-2 text-pitch-gray">Mercato europeo</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-pitch-accent mr-3"></div>
                <span className="font-medium">Anno 4-5:</span>
                <span className="ml-2 text-pitch-gray">Espansione globale</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 transition-all hover:shadow-lg">
              <div className="flex items-start">
                <div className="mr-5 bg-pitch-blue/10 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-pitch-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pitch-blue mb-2">Espansione Verticale</h3>
                  <p className="text-pitch-gray mb-4">
                    Arricchimento dell'offerta attuale con funzionalità avanzate e servizi 
                    complementari per aumentare il valore per cliente.
                  </p>
                  <div className="flex items-center text-sm text-pitch-blue font-medium">
                    <span>Aumento LTV del 50% in 24 mesi</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 transition-all hover:shadow-lg">
              <div className="flex items-start">
                <div className="mr-5 bg-pitch-teal/10 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-pitch-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pitch-teal mb-2">Espansione Geografica</h3>
                  <p className="text-pitch-gray mb-4">
                    Piano di internazionalizzazione per portare la nostra soluzione nei 
                    principali mercati europei e successivamente globali.
                  </p>
                  <div className="flex items-center text-sm text-pitch-teal font-medium">
                    <span>Target di 5 nuovi mercati entro 36 mesi</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 transition-all hover:shadow-lg">
              <div className="flex items-start">
                <div className="mr-5 bg-pitch-accent/10 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-pitch-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pitch-accent mb-2">Acquisizioni Strategiche</h3>
                  <p className="text-pitch-gray mb-4">
                    Identificazione di tecnologie complementari e team di talento 
                    per accelerare lo sviluppo e l'adozione del mercato.
                  </p>
                  <div className="flex items-center text-sm text-pitch-accent font-medium">
                    <span>Budget allocato per 1-2 acquisizioni nei prossimi 3 anni</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default GrowthOpportunities;
