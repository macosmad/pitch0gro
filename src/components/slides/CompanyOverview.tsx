
import React from 'react';
import Slide from '../Slide';
import { LightbulbIcon, ArrowRightCircle, Award, BarChart } from 'lucide-react';

const CompanyOverview: React.FC = () => {
  return (
    <Slide id="company-overview" title="La Soluzione">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="slide-paragraph">
            La piattaforma alimentare intelligente che connette produttori e persone senza sprechi, attraverso un sistema di distribuzione alimentare decentralizzato che rivoluziona l'approccio al cibo.
          </p>
          
          <div className="mt-8">
            <div className="flex items-start mb-6">
              <div className="bg-pitch-teal/10 p-3 rounded-full mr-4">
                <LightbulbIcon className="text-pitch-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-pitch-blue mb-2">Personal Shopper AI</h3>
                <p className="text-pitch-gray">
                  Un assistente virtuale basato su intelligenza artificiale che elabora piani di spesa settimanali 
                  personalizzati in base alle preferenze e alle diete degli utenti.
                </p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="bg-pitch-teal/10 p-3 rounded-full mr-4">
                <Award className="text-pitch-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-pitch-blue mb-2">Rete di Produttori Selezionati</h3>
                <p className="text-pitch-gray">
                  Una rete attentamente curata di piccoli e medi produttori che offrono materie prime di alta qualità,
                  inseriti in un carrello intelligiente.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-pitch-teal/10 p-3 rounded-full mr-4">
                <BarChart className="text-pitch-teal h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-pitch-blue mb-2">Impatto Misurabile</h3>
                <p className="text-pitch-gray">
                  Niente più sprechi: compri solo ciò che serve per i pasti della settimana.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
          <h3 className="text-2xl font-bold text-pitch-blue mb-6">Come Funziona</h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-pitch-teal pl-4 py-2">
              <h4 className="font-semibold text-pitch-blue">1. Profilazione</h4>
              <p className="text-pitch-gray text-sm">L'utente inserisce preferenze, diete, allergie e obiettivi.</p>
            </div>
            
            <div className="flex justify-center my-2">
              <ArrowRightCircle className="text-pitch-teal h-6 w-6 transform rotate-90" />
            </div>
            
            <div className="border-l-4 border-pitch-teal pl-4 py-2">
              <h4 className="font-semibold text-pitch-blue">2. Pianificazione</h4>
              <p className="text-pitch-gray text-sm">L'AI genera un piano pasti settimanale con lista ottimizzata degli ingredienti</p>
            </div>
            
            <div className="flex justify-center my-2">
              <ArrowRightCircle className="text-pitch-teal h-6 w-6 transform rotate-90" />
            </div>
            
            <div className="border-l-4 border-pitch-teal pl-4 py-2">
              <h4 className="font-semibold text-pitch-blue">3. Selezione</h4>
              <p className="text-pitch-gray text-sm">Il sistema seleziona i prodotti dai produttori locali e organizza la consegna</p>
            </div>
            
            <div className="flex justify-center my-2">
              <ArrowRightCircle className="text-pitch-teal h-6 w-6 transform rotate-90" />
            </div>
            
            <div className="border-l-4 border-pitch-teal pl-4 py-2">
              <h4 className="font-semibold text-pitch-blue">4. Consegna</h4>
              <p className="text-pitch-gray text-sm">Distribuzione efficiente degli ingredienti necessari per i pasti pianificati</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default CompanyOverview;
