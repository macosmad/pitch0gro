
import React from 'react';
import Slide from '../Slide';
import { Card } from '@/components/ui/card';
import { DollarSign, ArrowUp, BarChart, LineChart } from 'lucide-react';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Finance1: React.FC = () => {
  // Sample data for the chart
  const revenueData = [
    { year: 'Anno 1', revenue: 750000, expenses: 900000 },
    { year: 'Anno 2', revenue: 2400000, expenses: 2100000 },
    { year: 'Anno 3', revenue: 5300000, expenses: 3800000 },
    { year: 'Anno 4', revenue: 9800000, expenses: 6200000 },
    { year: 'Anno 5', revenue: 15500000, expenses: 9100000 },
  ];

  return (
    <Slide id="finance-1" title="Proiezioni Finanziarie (I)">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card className="p-6 h-full flex flex-col">
            <h3 className="text-xl font-bold text-pitch-blue mb-6">Metriche Chiave</h3>
            
            <div className="space-y-6 flex-grow">
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-blue/10 p-3 rounded-full flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-pitch-blue" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-semibold text-pitch-blue">Ricavi al 5° anno</h4>
                    <div className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full flex items-center">
                      <ArrowUp className="h-3 w-3 mr-0.5" />
                      125%
                    </div>
                  </div>
                  <p className="text-2xl font-bold mt-1">€15.5M</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-teal/10 p-3 rounded-full flex-shrink-0">
                  <BarChart className="h-6 w-6 text-pitch-teal" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-semibold text-pitch-teal">Margine Operativo</h4>
                    <div className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full flex items-center">
                      <ArrowUp className="h-3 w-3 mr-0.5" />
                      32%
                    </div>
                  </div>
                  <p className="text-2xl font-bold mt-1">42%</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-pitch-accent/10 p-3 rounded-full flex-shrink-0">
                  <LineChart className="h-6 w-6 text-pitch-accent" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-semibold text-pitch-accent">CAGR</h4>
                  </div>
                  <p className="text-2xl font-bold mt-1">83%</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-pitch-gray">
                Le nostre proiezioni si basano su un modello conservativo che riflette le metriche di 
                mercato attuali e la risposta iniziale dei potenziali clienti.
              </p>
            </div>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-pitch-blue mb-6">Ricavi vs Spese (5 anni)</h3>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart
                  data={revenueData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => {
                      // Cast value to number to ensure compatibility with Intl.NumberFormat
                      return `€ ${new Intl.NumberFormat('it-IT').format(Number(value))}`;
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="revenue" name="Ricavi" fill="#1E3A8A" />
                  <Bar dataKey="expenses" name="Spese" fill="#0D9488" />
                </ReBarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t">
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm font-medium text-pitch-gray">Break-even</p>
                <p className="text-lg font-bold text-pitch-blue">Anno 2, Q3</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm font-medium text-pitch-gray">Free Cash Flow</p>
                <p className="text-lg font-bold text-pitch-teal">€6.4M (Anno 5)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm font-medium text-pitch-gray">Valore Terminale</p>
                <p className="text-lg font-bold text-pitch-accent">€77M</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
};

export default Finance1;
