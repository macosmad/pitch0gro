
import React from 'react';
import Slide from '../Slide';
import { Card } from '@/components/ui/card';
import { Users, ShoppingBag, Building } from 'lucide-react';

const TargetMarket: React.FC = () => {
  return (
    <Slide id="target-market" title="Mercato Italiano del Grocery Online">
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
                <span className="text-pitch-gray">Crescita del mercato e-commerce Food & Grocery: da €0.8 miliardi nel 2017 d €4.4 miliardi nel 2023 (+450%)</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-pitch-teal mr-2"></span>
                <span className="text-pitch-gray">Valore stimato per il 2029 (solo segmento "food): €9.4 miliardi</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-pitch-teal mr-2"></span>
                <span className="text-pitch-gray">Utenti attivi in crescita: da 8.2 milioni nel 2021 a 14.17 milioni nel 2029</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-pitch-teal mr-2"></span>
                <span className="text-pitch-gray">Il bio online vale solo €75 milioni su 1.6 miliardi: grande potenziale per un'offerta locale, trasparente e sostenibile </span>
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
                  <h3 className="text-xl font-semibold text-pitch-blue mb-1">L'acquirente consapevole</h3>
                  <p className="text-pitch-gray mb-2">Vuole acquistare prodotti locali, sani, biologici e trasparenti nella filiera.</p>
                  <ul className="text-pitch-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-blue mr-2"></span>
                      <span>Le vendite di biologico in italia nel 2024: €1.6 miliardi </span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-blue mr-2"></span>
                      <span>Solo €75 milioni sono via e-commerce -> enorme gap e opportunità</span>
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
                  <h3 className="text-xl font-semibold text-pitch-teal mb-1">Digital explorer</h3>
                  <p className="text-pitch-gray mb-2">Aperto a nuove piattaforme, amamnte della tecnologia e della personalizzazione</p>
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
                  <h3 className="text-xl font-semibold text-pitch-accent mb-1">Efficiency seeker</h3>
                  <p className="text-pitch-gray mb-2">Cerca efficienza, semplicità e risparmio di tempo</p>
                  <ul className="text-pitch-gray space-y-1">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-pitch-accent mr-2"></span>
                      <span>Tra gli acquirenti dell'E-Grocery il: 
                        - 60% sceglie l'online per comodità
                        - 51% per risparmiare tempo
                        - 27% usa regolarmente il canale online
                      </span>
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
