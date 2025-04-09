
import React from 'react';
import Slide from '../Slide';
import { Card } from '@/components/ui/card';
import { DollarSign, BarChart4, Clock, RefreshCw } from 'lucide-react';

const BusinessModel: React.FC = () => {
  return (
    <Slide id="business-model" title="Modello di Business">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="p-6 h-full">
            <h3 className="text-xl font-bold text-pitch-blue mb-6">Fonti di Ricavo</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pitch-blue/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-pitch-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-pitch-blue mb-1">Sales Commission </h4>
                  <p className="text-sm text-pitch-gray">
                    Fee percentuale su ogni transazione gestita tramite la piattaforma.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pitch-teal/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <BarChart4 className="h-5 w-5 text-pitch-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-pitch-teal mb-1">Membership & Access Fee</h4>
                  <p className="text-sm text-pitch-gray">
                    Quota annuale o mensile per entrare e restare nel consorzio.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pitch-accent/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <RefreshCw className="h-5 w-5 text-pitch-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-pitch-accent mb-1">Premium Plans for Consumers</h4>
                  <p className="text-sm text-pitch-gray">
                    Abbonamento per funzionalità extra: piani alimentari, accesso anticipato, preferenze AI.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-pitch-blue mb-4">Piani di Prezzo</h3>
              
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h4 className="font-semibold">Starter</h4>
                  <p className="text-2xl font-bold text-pitch-blue">€29<span className="text-sm font-normal text-pitch-gray">/mese</span></p>
                  <p className="text-sm text-pitch-gray mt-1">Per piccoli team fino a 5 utenti</p>
                </div>
                
                <div className="border-b pb-3">
                  <h4 className="font-semibold">Professional</h4>
                  <p className="text-2xl font-bold text-pitch-teal">€99<span className="text-sm font-normal text-pitch-gray">/mese</span></p>
                  <p className="text-sm text-pitch-gray mt-1">Per team in crescita fino a 20 utenti</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Enterprise</h4>
                  <p className="text-2xl font-bold text-pitch-accent">Personalizzato</p>
                  <p className="text-sm text-pitch-gray mt-1">Per aziende con esigenze specifiche</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 flex flex-col">
              <h3 className="text-xl font-bold text-pitch-blue mb-4">Metriche Chiave</h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-pitch-gray">CAC</span>
                    <span className="text-sm font-semibold text-pitch-blue">€300</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pitch-blue h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-pitch-gray">LTV</span>
                    <span className="text-sm font-semibold text-pitch-teal">€1,800</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pitch-teal h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-pitch-gray">Churn Rate</span>
                    <span className="text-sm font-semibold text-pitch-blue">3.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pitch-blue h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-pitch-gray">Margine Lordo</span>
                    <span className="text-sm font-semibold text-pitch-accent">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pitch-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t flex items-center">
                <Clock className="h-5 w-5 text-pitch-blue mr-2" />
                <p className="text-sm text-pitch-gray">
                  <span className="font-semibold">Payback Period:</span> 6 mesi
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default BusinessModel;
