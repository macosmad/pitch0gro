
import React from 'react';
import Slide from '../Slide';
import { LightbulbIcon, ArrowRightCircle, Award, BarChart } from 'lucide-react';

const CompanyOverview: React.FC = () => {
  return (
    <Slide id="company-overview" title="Panoramica Aziendale: La Soluzione">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="slide-paragraph">
            La nostra azienda ha sviluppato una soluzione innovativa che affronta 
            direttamente i problemi identificati, introducendo un nuovo paradigma nel settore.
          </p>
          
          <div className="mt-8">
            <div className="flex items-start mb-6">
              <div className="bg-pitch-teal/10 p-3 rounded-full mr-4">
                <LightbulbIcon className="text-pitch-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-pitch-blue mb-2">Tecnologia Proprietaria</h3>
                <p className="text-pitch-gray">
                  La nostra piattaforma utilizza algoritmi avanzati per ottimizzare 
                  i processi e ridurre drasticamente i tempi di esecuzione.
                </p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-pitch-teal/10 p-3 rounded-full mr-4">
                <Award className="text-pitch-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-pitch-blue mb-2">Esperienza Utente Superiore</h3>
                <p className="text-pitch-gray">
                  Design intuitivo che elimina la curva di apprendimento e rende il nostro 
                  prodotto accessibile a tutti, indipendentemente dal livello tecnico.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-pitch-teal/10 p-3 rounded-full mr-4">
                <BarChart className="text-pitch-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-pitch-blue mb-2">Risultati Misurabili</h3>
                <p className="text-pitch-gray">
                  I nostri utenti vedono un miglioramento del 40% nell'efficienza e 
                  una riduzione del 30% nei costi operativi.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-pitch-blue mb-6">Come Funziona</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-pitch-teal pl-4 py-2">
              <h4 className="font-semibold text-pitch-blue">1. Identificazione</h4>
              <p className="text-pitch-gray text-sm">Analisi automatica delle necessità dell'utente</p>
            </div>
            
            <div className="flex justify-center my-2">
              <ArrowRightCircle className="text-pitch-teal h-6 w-6 transform rotate-90" />
            </div>
            
            <div className="border-l-4 border-pitch-teal pl-4 py-2">
              <h4 className="font-semibold text-pitch-blue">2. Elaborazione</h4>
              <p className="text-pitch-gray text-sm">Algoritmi proprietari ottimizzano i processi</p>
            </div>
            
            <div className="flex justify-center my-2">
              <ArrowRightCircle className="text-pitch-teal h-6 w-6 transform rotate-90" />
            </div>
            
            <div className="border-l-4 border-pitch-teal pl-4 py-2">
              <h4 className="font-semibold text-pitch-blue">3. Implementazione</h4>
              <p className="text-pitch-gray text-sm">Applicazione automatizzata delle soluzioni</p>
            </div>
            
            <div className="flex justify-center my-2">
              <ArrowRightCircle className="text-pitch-teal h-6 w-6 transform rotate-90" />
            </div>
            
            <div className="border-l-4 border-pitch-teal pl-4 py-2">
              <h4 className="font-semibold text-pitch-blue">4. Risultati</h4>
              <p className="text-pitch-gray text-sm">Miglioramento immediato e misurazione KPI</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default CompanyOverview;
