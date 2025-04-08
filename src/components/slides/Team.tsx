
import React from 'react';
import Slide from '../Slide';
import { Card } from '@/components/ui/card';
import { Linkedin, Mail, Award } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Marco Rossi",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
      background: "15+ anni di esperienza in startup SaaS. Ex-dirigente in aziende tech.",
      expertise: ["Leadership", "Strategia", "Fundraising"]
    },
    {
      name: "Laura Bianchi",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format",
      background: "Ingegnere software con esperienza in architetture cloud. Ex-tech lead in una unicorn.",
      expertise: ["Sviluppo Software", "Architettura", "Machine Learning"]
    },
    {
      name: "Alessandro Verdi",
      role: "CMO",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&auto=format",
      background: "Precedentemente responsabile marketing in scale-up B2B con exit di successo.",
      expertise: ["Growth Hacking", "Marketing Digitale", "Branding"]
    },
    {
      name: "Giulia Neri",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&auto=format",
      background: "Product Manager con focus su UX. Ha guidato team di prodotto in contesti internazionali.",
      expertise: ["Product Strategy", "User Experience", "Agile"]
    }
  ];

  const advisors = [
    {
      name: "Prof. Roberto Marino",
      role: "Technical Advisor",
      background: "Professore di Computer Science, esperto in algoritmi e AI."
    },
    {
      name: "Dott.ssa Elena Conti",
      role: "Financial Advisor",
      background: "Partner in un fondo VC con 20+ investimenti in tech."
    }
  ];

  return (
    <Slide id="team" title="Il Nostro Team">
      <div className="space-y-8">
        <p className="slide-paragraph mx-auto text-center max-w-3xl">
          La nostra forza risiede nelle persone. Abbiamo costruito un team di professionisti 
          con esperienza comprovata nel settore e una visione condivisa per il futuro.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-pitch-blue text-lg">{member.name}</h3>
                <p className="text-pitch-teal font-medium text-sm mb-3">{member.role}</p>
                <p className="text-pitch-gray text-sm mb-3">
                  {member.background}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {member.expertise.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-pitch-blue/10 text-pitch-blue px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2 mt-3">
                  <button className="text-pitch-blue hover:text-pitch-blue/80">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="text-pitch-blue hover:text-pitch-blue/80">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-pitch-blue mb-4">Advisory Board</h3>
            
            <div className="space-y-4">
              {advisors.map((advisor, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-pitch-teal/10 p-2 rounded-full mr-3">
                    <Award className="h-5 w-5 text-pitch-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{advisor.name}</h4>
                    <p className="text-pitch-teal text-sm">{advisor.role}</p>
                    <p className="text-pitch-gray text-sm mt-1">{advisor.background}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold text-pitch-blue mb-4">Posizioni Aperte</h3>
            
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h4 className="font-semibold">Senior Full-Stack Developer</h4>
                <p className="text-pitch-gray text-sm">
                  Cerchiamo un dev con esperienza in React e Node.js per accelerare lo sviluppo del prodotto.
                </p>
              </div>
              
              <div className="border-b pb-3">
                <h4 className="font-semibold">Sales Development Representative</h4>
                <p className="text-pitch-gray text-sm">
                  Figura chiave per la costruzione della pipeline commerciale e l'acquisizione clienti.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold">UX/UI Designer</h4>
                <p className="text-pitch-gray text-sm">
                  Designer con esperienza in prodotti SaaS B2B per elevare l'esperienza utente.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="bg-pitch-blue/5 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-pitch-blue mb-4 text-center">I Nostri Valori</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-pitch-blue mb-2">Innovazione</h4>
              <p className="text-pitch-gray text-sm">
                Cerchiamo costantemente nuovi approcci per risolvere problemi complessi con soluzioni eleganti.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-pitch-teal mb-2">Eccellenza</h4>
              <p className="text-pitch-gray text-sm">
                Non ci accontentiamo della mediocrità. Puntiamo sempre al massimo in tutto ciò che facciamo.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-pitch-accent mb-2">Integrità</h4>
              <p className="text-pitch-gray text-sm">
                Costruiamo relazioni basate sulla fiducia, con trasparenza e onestà verso clienti e investitori.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Team;
