
import React from 'react';
import Slide from '../Slide';
import { Card } from '@/components/ui/card';
import { CircleDollarSign, TrendingUp, ArrowRight } from 'lucide-react';

const Finance3: React.FC = () => {
  const fundingRounds = [
    {
      round: "Seed",
      amount: "€1.5M",
      timeline: "Completato",
      valuation: "€6M",
      purpose: "Sviluppo prodotto e validazione mercato",
      status: "completed"
    },
    {
      round: "Series A",
      amount: "€5M",
      timeline: "Q3 2026",
      valuation: "€25M",
      purpose: "Espansione team, marketing e internazionalizzazione",
      status: "upcoming"
    },
    {
      round: "Series B",
      amount: "€15M",
      timeline: "2028",
      valuation: "€75-100M",
      purpose: "Accelerazione crescita e potenziali acquisizioni",
      status: "future"
    }
  ];

  return (
    <Slide id="finance-3" title="Piano di Investimento">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-pitch-blue mb-6">Round di Finanziamento</h3>
          
          <div className="space-y-6">
            {fundingRounds.map((round, index) => (
              <Card 
                key={index} 
                className={`p-5 border-l-4 ${
                  round.status === 'completed' 
                    ? 'border-pitch-teal' 
                    : round.status === 'upcoming' 
                      ? 'border-pitch-blue' 
                      : 'border-pitch-gray'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-pitch-blue text-lg mb-1">{round.round}</h4>
                    <p className="text-pitch-gray text-sm mb-3">{round.timeline}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-pitch-gray">Importo</p>
                        <p className="font-semibold">{round.amount}</p>
                      </div>
                      <div>
                        <p className="text-xs text-pitch-gray">Valutazione</p>
                        <p className="font-semibold">{round.valuation}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-pitch-gray">{round.purpose}</p>
                  </div>
                  
                  <div 
                    className={`p-2 rounded-full ${
                      round.status === 'completed' 
                        ? 'bg-pitch-teal/10' 
                        : round.status === 'upcoming' 
                          ? 'bg-pitch-blue/10' 
                          : 'bg-gray-100'
                    }`}
                  >
                    <CircleDollarSign 
                      className={`h-6 w-6 ${
                        round.status === 'completed' 
                          ? 'text-pitch-teal' 
                          : round.status === 'upcoming' 
                            ? 'text-pitch-blue' 
                            : 'text-pitch-gray'
                      }`} 
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <Card className="p-6 bg-gradient-to-br from-pitch-blue to-pitch-teal text-white mb-6">
            <h3 className="text-xl font-bold mb-4">Utilizzo Fondi - Round Attuale</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Sviluppo Prodotto (35%)</span>
                  <span>€525K</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Sales & Marketing (30%)</span>
                  <span>€450K</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Operations (15%)</span>
                  <span>€225K</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Espansione Team (10%)</span>
                  <span>€150K</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span>Riserva (10%)</span>
                  <span>€150K</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="p-5">
              <h3 className="text-lg font-semibold text-pitch-blue mb-4">Strategie di Exit</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-pitch-blue/10 p-2 rounded-full mr-3 flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-pitch-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Acquisizione Strategica</h4>
                    <p className="text-sm text-pitch-gray mt-1">
                      Potenziale acquisizione da parte di un player del settore interessato alla 
                      nostra tecnologia e base clienti (timeline: 5-7 anni).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pitch-teal/10 p-2 rounded-full mr-3 flex-shrink-0">
                    <ArrowRight className="h-5 w-5 text-pitch-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold">IPO</h4>
                    <p className="text-sm text-pitch-gray mt-1">
                      Potenziale offerta pubblica iniziale dopo aver raggiunto una scala significativa 
                      e redditività sostenibile (timeline: 7-10 anni).
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-5 bg-pitch-blue/5">
              <h3 className="text-lg font-semibold text-pitch-blue mb-3">I Nostri Investitori Attuali</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-gray-100">
                  <p className="font-medium">Venture Capital</p>
                  <p className="text-sm text-pitch-gray">60% dell'investimento</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-100">
                  <p className="font-medium">Angel Investors</p>
                  <p className="text-sm text-pitch-gray">25% dell'investimento</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-100">
                  <p className="font-medium">Founders</p>
                  <p className="text-sm text-pitch-gray">10% dell'investimento</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-100">
                  <p className="font-medium">Sovvenzioni</p>
                  <p className="text-sm text-pitch-gray">5% dell'investimento</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Finance3;
