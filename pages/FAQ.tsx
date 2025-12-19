
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Changed to React.FC to correctly handle standard props like 'key'
const AccordionItem: React.FC<{ question: string, answer: any, isOpen: boolean, onClick: () => void }> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-100 last:border-none">
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between py-6 text-left hover:text-[#5D4A99] transition-colors"
    >
      <span className="font-bold text-gray-900 pr-8">{question}</span>
      {isOpen ? <ChevronUp size={20} className="text-[#5D4A99]" /> : <ChevronDown size={20} className="text-gray-400" />}
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
      <div className="text-gray-600 text-sm leading-relaxed space-y-4">
        {Array.isArray(answer) ? (
          <ul className="list-disc pl-5 space-y-2">
            {answer.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        ) : <p>{answer}</p>}
      </div>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>("gen-0");

  const sections = [
    {
      title: "Générales",
      id: "gen",
      items: [
        {
          q: "Qu'est-ce que PETICA ?",
          a: "PETICA est un projet tunisien innovant visant à créer le premier Registre National Numérique pour les animaux de compagnie. Nous fournissons des Cartes d'Identité officielles et des Médailles Intelligentes (QR Tags) qui lient votre animal à un profil numérique contenant ses données."
        },
        {
          q: "La carte PETICA remplace-t-elle le Carnet de Santé ou la Puce (Microchip) ?",
          a: [
            "Non, la carte PETICA est un complément indispensable, pas un remplaçant.",
            "Le Carnet de Santé : Contient l'historique médical détaillé et doit être conservé.",
            "La Puce (Microchip) : Excellente, mais nécessite un lecteur spécifique disponible uniquement chez les vétérinaires.",
            "PETICA : Son avantage est qu'elle est visible par tous. N'importe qui peut scanner le code pour vous appeler immédiatement."
          ]
        },
        {
          q: "Ce service est-il réservé uniquement aux chiens ?",
          a: "Absolument pas ! PETICA est destiné à tous les animaux de compagnie (chiens, chats, et même les lapins). Tant que l'animal peut porter un collier, il peut porter une identité PETICA."
        }
      ]
    },
    {
      title: "Produits & Technologie",
      id: "prod",
      items: [
        {
          q: "Comment fonctionne le QR Code ?",
          a: "C'est très simple. La personne qui trouve votre animal n'a pas besoin d'installer d'application. Il lui suffit d'ouvrir l'appareil photo de son téléphone, de viser le code, et le profil de l'animal s'affichera instantanément avec un bouton pour vous appeler."
        },
        {
          q: "Que faire si je change de numéro de téléphone ou d'adresse ?",
          a: "C'est notre plus grand avantage ! Vous n'aurez pas besoin d'acheter une nouvelle carte. Connectez-vous simplement à votre compte PETICA, modifiez vos coordonnées en quelques secondes, et les informations seront mises à jour automatiquement."
        },
        {
          q: "La Médaille QR a-t-elle besoin de batterie ou de recharge ?",
          a: "Non, nos produits actuels (ID Card et QR Tag) fonctionnent à vie, sans batterie ni recharge. (Seul le futur traceur GPS nécessitera une recharge)."
        }
      ]
    },
    {
      title: "Commandes & Livraison",
      id: "comm",
      items: [
        {
          q: "Comment puis-je payer ?",
          a: "Votre confiance est notre priorité. C'est pourquoi nous proposons le Paiement à la Livraison. Vous ne payez votre commande qu'une fois le produit reçu et entre vos mains."
        },
        {
          q: "Livrez-vous sur tout le territoire tunisien ?",
          a: "Oui, nous assurons la livraison dans les 24 gouvernorats de la Tunisie grâce à nos partenaires logistiques de confiance."
        },
        {
          q: "Quel est le délai de livraison ?",
          a: "En général, le processus (conception + impression + livraison) prend entre 2 à 4 jours ouvrables, selon votre ville ou gouvernorat."
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-black text-gray-900 mb-4 font-rounded">Des questions ? Nous avons les réponses.</h1>
          <p className="text-gray-600 text-lg">
            Nous avons regroupé ici les questions les plus fréquentes sur PETICA, le fonctionnement des cartes et nos services de livraison.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-4xl">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-8 py-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-[#5D4A99] font-rounded">{section.title}</h2>
              </div>
              <div className="px-8">
                {section.items.map((item, idx) => (
                  <AccordionItem 
                    key={idx}
                    question={item.q}
                    answer={item.a}
                    isOpen={openIndex === `${section.id}-${idx}`}
                    onClick={() => setOpenIndex(openIndex === `${section.id}-${idx}` ? null : `${section.id}-${idx}`)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-[#5D4A99] rounded-[2.5rem] p-10 text-center text-white">
          <HelpCircle size={48} className="mx-auto mb-6 text-orange-400" />
          <h2 className="text-2xl font-bold mb-4 font-rounded">Vous n'avez pas trouvé votre réponse ?</h2>
          <p className="text-purple-100 mb-8">Notre équipe est prête à répondre à toutes vos interrogations. N'hésitez pas à nous écrire.</p>
          <Link to="/contact" className="bg-white text-[#5D4A99] px-10 py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all inline-block shadow-lg">
            Contactez-nous
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
