
import React from 'react';
import Slide from '../Slide';
import { Card } from '@/components/ui/card';
import { Target, MessageSquare, Users, LineChart } from 'lucide-react';

const MarketStrategies: React.FC = () => {
  return (
    <Slide id="market-strategies" title="Strategie di Mercato">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card className="p-6 bg-gradient-to-br from-pitch-blue to-pitch-teal text-white h-full">
            <h3 className="text-xl font-bold mb-6">Dimensioni del Mercato</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-white/80 mb-1">Mercato Totale (TAM)</p>
                <p className="text-3xl font-bold">€8.5B</p>
                <div className="w-full bg-white/20 h-2 rounded-full mt-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <p className="text-white/80 mb-1">Mercato Indirizzabile (SAM)</p>
                <p className="text-2xl font-bold">€2.3B</p>
                <div className="w-full bg-white/20 h-2 rounded-full mt-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '27%' }}></div>
                </div>
              </div>
              
              <div>
                <p className="text-white/80 mb-1">Mercato Ottenibile (SOM)</p>
                <p className="text-xl font-bold">€320M</p>
                <div className="w-full bg-white/20 h-2 rounded-full mt-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '14%' }}></div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-white/80">
                  Ci aspettiamo di catturare il 10-15% del mercato ottenibile nei prossimi 5 anni, 
                  con un tasso di crescita annuo del 40%.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-pitch-blue mb-6">La Nostra Strategia Go-to-Market</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-5 border-l-4 border-pitch-blue hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-blue/10 p-2 rounded-full">
                  <Target className="h-5 w-5 text-pitch-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-pitch-blue mb-2">Marketing Digitale</h4>
                  <p className="text-sm text-pitch-gray">
                    Campagne mirate sui canali B2B con contenuti di valore e casi di studio
                    che dimostrano il ROI della nostra soluzione.
                  </p>
                  <div className="mt-3 text-xs text-pitch-gray">
                    <span className="inline-block bg-pitch-blue/10 rounded-full px-2 py-1 mr-1 mb-1">SEO</span>
                    <span className="inline-block bg-pitch-blue/10 rounded-full px-2 py-1 mr-1 mb-1">SEM</span>
                    <span className="inline-block bg-pitch-blue/10 rounded-full px-2 py-1 mr-1 mb-1">LinkedIn</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-5 border-l-4 border-pitch-teal hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-teal/10 p-2 rounded-full">
                  <MessageSquare className="h-5 w-5 text-pitch-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-pitch-teal mb-2">Content Marketing</h4>
                  <p className="text-sm text-pitch-gray">
                    Blog, whitepaper, webinar e podcast che affrontano le sfide del settore 
                    e presentano la nostra soluzione come risposta.
                  </p>
                  <div className="mt-3 text-xs text-pitch-gray">
                    <span className="inline-block bg-pitch-teal/10 rounded-full px-2 py-1 mr-1 mb-1">Blog</span>
                    <span className="inline-block bg-pitch-teal/10 rounded-full px-2 py-1 mr-1 mb-1">Webinar</span>
                    <span className="inline-block bg-pitch-teal/10 rounded-full px-2 py-1 mr-1 mb-1">Newsletter</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-5 border-l-4 border-pitch-accent hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-accent/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-pitch-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-pitch-accent mb-2">Partnership Strategiche</h4>
                  <p className="text-sm text-pitch-gray">
                    Alleanze con piattaforme e servizi complementari per ampliare 
                    la reach e offrire soluzioni integrate.
                  </p>
                  <div className="mt-3 text-xs text-pitch-gray">
                    <span className="inline-block bg-pitch-accent/10 rounded-full px-2 py-1 mr-1 mb-1">Co-marketing</span>
                    <span className="inline-block bg-pitch-accent/10 rounded-full px-2 py-1 mr-1 mb-1">API</span>
                    <span className="inline-block bg-pitch-accent/10 rounded-full px-2 py-1 mr-1 mb-1">Referral</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-5 border-l-4 border-pitch-blue hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-blue/10 p-2 rounded-full">
                  <LineChart className="h-5 w-5 text-pitch-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-pitch-blue mb-2">Sales Development</h4>
                  <p className="text-sm text-pitch-gray">
                    Team specializzato in outreach e qualificazione di lead per
                    costruire una pipeline di vendita solida.
                  </p>
                  <div className="mt-3 text-xs text-pitch-gray">
                    <span className="inline-block bg-pitch-blue/10 rounded-full px-2 py-1 mr-1 mb-1">Demo</span>
                    <span className="inline-block bg-pitch-blue/10 rounded-full px-2 py-1 mr-1 mb-1">Sales Funnel</span>
                    <span className="inline-block bg-pitch-blue/10 rounded-full px-2 py-1 mr-1 mb-1">CRM</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h4 className="font-semibold text-pitch-blue mb-2">KPI di Marketing</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded border border-gray-100">
                <p className="text-sm font-medium text-pitch-gray">Costo per Lead (CPL)</p>
                <p className="text-lg font-bold text-pitch-blue">€45</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-100">
                <p className="text-sm font-medium text-pitch-gray">Conversione Trial → Paid</p>
                <p className="text-lg font-bold text-pitch-teal">28%</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-100">
                <p className="text-sm font-medium text-pitch-gray">CAC Payback</p>
                <p className="text-lg font-bold text-pitch-accent">6 mesi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default MarketStrategies;
