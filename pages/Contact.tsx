
import React from 'react';
import { Phone, Mail, MessageCircle, Instagram, Facebook, Send, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-black text-gray-900 mb-4 font-rounded">Nous sommes à votre écoute !</h1>
          <p className="text-gray-600 text-lg">
            Que ce soit pour une question sur votre commande, une suggestion pour améliorer nos services, ou simplement pour nous saluer.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left side: Coordinates */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold font-rounded text-[#5D4A99]">Nos Coordonnées</h2>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-[#5D4A99] shrink-0 group-hover:bg-[#5D4A99] group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Téléphone (Appel Direct)</h3>
                    <p className="text-[#5D4A99] font-bold text-xl">(+216) 29 345 067</p>
                    <p className="text-sm text-gray-500 mt-1">Du Lundi au Samedi : 09h00 - 18h00</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">WhatsApp (Réponse Rapide)</h3>
                    <p className="text-green-600 font-bold text-xl">(+216) 56 224 498</p>
                    <p className="text-sm text-gray-500 mt-1">Envoyez-nous la photo et les infos de votre animal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">E-mail (Courriel)</h3>
                    <p className="text-orange-600 font-bold text-xl">contact@petica.pet</p>
                    <p className="text-sm text-gray-500 mt-1">Support technique et partenariats.</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg font-bold mb-6 font-rounded">Rejoignez la famille digitale PETICA</h3>
                <div className="flex gap-6">
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-[#5D4A99] transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-[#5D4A99] transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-[#5D4A99] transition-colors">
                    <Globe size={24} />
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-6 italic">@petica.pet sur tous les réseaux.</p>
              </div>

              {/* Vector Map Simulation */}
              <div className="bg-[#5D4A99]/5 p-8 rounded-3xl border border-purple-100 flex flex-col items-center text-center">
                <MapPin size={40} className="text-[#5D4A99] mb-4" />
                <h3 className="font-bold mb-2">Livraison Nationale 🇹🇳</h3>
                <p className="text-sm text-gray-600">Nous livrons dans les 24 gouvernorats de la Tunisie.</p>
                <div className="mt-4 w-full h-24 bg-purple-100/50 rounded-xl relative overflow-hidden flex items-center justify-center opacity-50">
                   <span className="text-xs font-bold text-purple-300 tracking-widest uppercase">Carte de Tunisie</span>
                </div>
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-50">
              <h2 className="text-2xl font-bold mb-8 font-rounded">Envoyez-nous un message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nom Complet</label>
                    <input type="text" placeholder="Entrez votre nom" className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#5D4A99] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Adresse E-mail</label>
                    <input type="email" placeholder="Votre adresse e-mail" className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#5D4A99] outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Numéro de Téléphone (Optionnel)</label>
                  <input type="tel" placeholder="+216 -- --- ---" className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#5D4A99] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Sujet</label>
                  <select className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#5D4A99] outline-none appearance-none">
                    <option>Suivi de commande</option>
                    <option>Problème technique</option>
                    <option>Suggestion</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Votre Message</label>
                  <textarea rows={5} placeholder="Écrivez votre message ici..." className="w-full bg-gray-50 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#5D4A99] outline-none resize-none"></textarea>
                </div>
                <button className="w-full bg-[#F59E0B] text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-3">
                  Envoyer le message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / B2B */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-6 font-rounded">Vétérinaires & Animaleries</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Vous souhaitez devenir un partenaire agréé PETICA et proposer nos cartes d'identification à vos clients ? Nous serions ravis de collaborer avec vous pour élargir le réseau de protection en Tunisie.
          </p>
          <button className="text-[#5D4A99] font-bold underline underline-offset-8">
            Contactez-nous par e-mail avec l'objet : « Partenariat »
          </button>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 border-t border-gray-100 text-center">
         <p className="text-sm text-gray-400">Siège : Tunis, République Tunisienne 🇹🇳 | Site Officiel : www.petica.pet</p>
      </section>
    </div>
  );
};

export default Contact;
