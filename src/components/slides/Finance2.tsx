
import React from 'react';
import Slide from '../Slide';
import { Card } from '@/components/ui/card';
import { LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Finance2: React.FC = () => {
  // Sample data for charts
  const customerData = [
    { month: 'Gen', customers: 120 },
    { month: 'Feb', customers: 150 },
    { month: 'Mar', customers: 190 },
    { month: 'Apr', customers: 240 },
    { month: 'Mag', customers: 300 },
    { month: 'Giu', customers: 380 },
    { month: 'Lug', customers: 450 },
    { month: 'Ago', customers: 510 },
    { month: 'Set', customers: 590 },
    { month: 'Ott', customers: 680 },
    { month: 'Nov', customers: 790 },
    { month: 'Dic', customers: 920 },
  ];

  const metrics = [
    { 
      title: "Ricavi Anno 1", 
      value: "€750K",
      details: [
        { label: "Abbonamenti", value: "€620K" },
        { label: "Servizi", value: "€130K" }
      ] 
    },
    { 
      title: "Spese Anno 1",

      value: "€900K",
      details: [
        { label: "R&D", value: "€350K" },
        { label: "Marketing", value: "€250K" },
        { label: "Operations", value: "€200K" },
        { label: "Admin", value: "€100K" }
      ] 
    },
    { 
      title: "Investimento Iniziale", 
      value: "€1.5M",
      details: [
        { label: "Sviluppo prodotto", value: "€600K" },
        { label: "Go-to-market", value: "€450K" },
        { label: "Buffer", value: "€450K" }
      ] 
    }
  ];

  return (
    <Slide id="finance-2" title="Proiezioni Finanziarie (II)">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-pitch-blue mb-6">Crescita Clienti - Anno 1</h3>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ReLineChart
                  data={customerData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="customers" 
                    name="Clienti attivi" 
                    stroke="#1E3A8A" 
                    activeDot={{ r: 8 }} 
                    strokeWidth={2}
                  />
                </ReLineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6 pt-4 border-t">
              <div className="bg-pitch-blue/5 p-3 rounded">
                <p className="text-xs font-medium text-pitch-gray mb-1">Clienti fine Anno 1</p>
                <p className="text-lg font-bold text-pitch-blue">920</p>
              </div>
              <div className="bg-pitch-teal/5 p-3 rounded">
                <p className="text-xs font-medium text-pitch-gray mb-1">Tasso acquisizione</p>
                <p className="text-lg font-bold text-pitch-teal">+18% mensile</p>
              </div>
              <div className="bg-pitch-accent/5 p-3 rounded">
                <p className="text-xs font-medium text-pitch-gray mb-1">Churn rate</p>
                <p className="text-lg font-bold text-pitch-accent">3.5%</p>
              </div>
              <div className="bg-gray-100 p-3 rounded">
                <p className="text-xs font-medium text-pitch-gray mb-1">ARPU</p>
                <p className="text-lg font-bold text-pitch-blue">€850</p>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <Card className="p-5">
              <h3 className="text-lg font-semibold text-pitch-blue mb-4">Indicatori di Performance</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-pitch-gray">CAC Payback</span>
                    <span className="text-sm font-semibold text-pitch-blue">6 mesi</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pitch-blue h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-pitch-gray">LTV/CAC Ratio</span>
                    <span className="text-sm font-semibold text-pitch-teal">4.1x</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pitch-teal h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-pitch-gray">Gross Margin</span>
                    <span className="text-sm font-semibold text-pitch-accent">84%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pitch-accent h-2 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-5">
              <h3 className="text-lg font-semibold text-pitch-blue mb-4">Efficienza del Capitale</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-pitch-blue mr-3"></div>
                  <div>
                    <p className="font-medium">Runway attuale</p>
                    <p className="text-sm text-pitch-gray">24 mesi con funding attuale</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-pitch-teal mr-3"></div>
                  <div>
                    <p className="font-medium">Burn Rate</p>
                    <p className="text-sm text-pitch-gray">€72K mensili (diminuisce nel Q4)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-pitch-accent mr-3"></div>
                  <div>
                    <p className="font-medium">Return on Capital</p>
                    <p className="text-sm text-pitch-gray">Previsto 2.8x in 5 anni</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="space-y-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-5">
                <h3 className="text-lg font-semibold text-pitch-blue mb-3">{metric.title}</h3>
                <p className="text-2xl font-bold text-pitch-teal mb-4">{metric.value}</p>
                
                <div className="space-y-2">
                  {metric.details.map((detail, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-pitch-gray">{detail.label}</span>
                      <span className="font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Finance2;
