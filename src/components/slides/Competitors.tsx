
import React from 'react';
import Slide from '../Slide';
import { Card } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const Competitors: React.FC = () => {
  return (
    <Slide id="competitors" title="Analisi Competitiva">
      <div className="space-y-8">
        <p className="slide-paragraph mx-auto text-center max-w-3xl">
          Comprendiamo il panorama competitivo e abbiamo identificato i nostri vantaggi chiave.
          La nostra soluzione si distingue per innovazione tecnologica, prezzo competitivo e 
          focus sulla user experience.
        </p>
        
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <Card className="border shadow-sm">
              <div className="grid grid-cols-5 divide-x">
                {/* Header */}
                <div className="p-4 font-semibold text-pitch-gray">
                  Caratteristiche
                </div>
                <div className="p-4 font-semibold text-pitch-blue text-center">
                  La Nostra Soluzione
                </div>
                <div className="p-4 font-semibold text-pitch-gray text-center">
                  Competitor A
                </div>
                <div className="p-4 font-semibold text-pitch-gray text-center">
                  Competitor B
                </div>
                <div className="p-4 font-semibold text-pitch-gray text-center">
                  Competitor C
                </div>
              </div>
              
              {/* Rows */}
              <div className="grid grid-cols-5 divide-x border-t">
                <div className="p-4 bg-gray-50 font-medium">
                  Facilità d'uso
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <X className="h-5 w-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
              </div>
              
              <div className="grid grid-cols-5 divide-x border-t">
                <div className="p-4 bg-gray-50 font-medium">
                  Tecnologia avanzata
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <X className="h-5 w-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <X className="h-5 w-5 text-red-400 mx-auto" />
                </div>
              </div>
              
              <div className="grid grid-cols-5 divide-x border-t">
                <div className="p-4 bg-gray-50 font-medium">
                  Prezzo competitivo
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <X className="h-5 w-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <X className="h-5 w-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
              </div>
              
              <div className="grid grid-cols-5 divide-x border-t">
                <div className="p-4 bg-gray-50 font-medium">
                  Supporto clienti 24/7
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <X className="h-5 w-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <X className="h-5 w-5 text-red-400 mx-auto" />
                </div>
              </div>
              
              <div className="grid grid-cols-5 divide-x border-t">
                <div className="p-4 bg-gray-50 font-medium">
                  Integrazioni multiple
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <X className="h-5 w-5 text-red-400 mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <X className="h-5 w-5 text-red-400 mx-auto" />
                </div>
              </div>
              
              <div className="grid grid-cols-5 divide-x border-t">
                <div className="p-4 bg-gray-50 font-medium">
                  Sicurezza avanzata
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <Check className="h-5 w-5 text-pitch-teal mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <X className="h-5 w-5 text-red-400 mx-auto" />
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-pitch-blue/5 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-pitch-blue mb-2">Il nostro vantaggio</h3>
            <p className="text-sm text-pitch-gray">
              Siamo gli unici a offrire una combinazione di tecnologia all'avanguardia, prezzo competitivo e 
              un'interfaccia intuitiva che non richiede formazione tecnica.
            </p>
          </div>
          
          <div className="bg-pitch-teal/5 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-pitch-teal mb-2">Barriere all'ingresso</h3>
            <p className="text-sm text-pitch-gray">
              La nostra tecnologia proprietaria e il know-how del team creano una barriera significativa
              per nuovi concorrenti che vogliono entrare in questo spazio.
            </p>
          </div>
          
          <div className="bg-pitch-accent/5 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-pitch-accent mb-2">Strategia di differenziazione</h3>
            <p className="text-sm text-pitch-gray">
              Continueremo a investire nell'innovazione e nell'esperienza utente per mantenere 
              e ampliare il nostro vantaggio competitivo nel tempo.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Competitors;
