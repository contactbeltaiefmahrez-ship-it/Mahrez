
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Added Award to the imports from lucide-react
import { ChevronRight, ArrowRight, Scan, CreditCard, Bell, MapPin, Search, ShieldCheck, Award } from 'lucide-react';

const Counter = ({ target, duration = 2000 }: { target: number, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gray-50">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/237/1920/1080?grayscale" 
            alt="Happy pet owner" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#5D4A99]/10 text-[#5D4A99] text-xs font-bold uppercase tracking-wider mb-6">
              Officiel & Numérique en Tunisie
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#5D4A99] leading-tight mb-6">
              La Première Identité Numérique & Officielle pour Animaux de Compagnie en Tunisie.
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Protégez votre compagnon contre la perte et offrez-lui une Carte d'Identité Nationale Intelligente. Rejoignez dès aujourd'hui le premier Registre National des Animaux en Tunisie et devenez un propriétaire responsable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/pricing" className="bg-[#5D4A99] text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-[#4a3a7a] transition-all shadow-xl shadow-purple-200">
                Commander la Carte d'Identité
              </Link>
              <div className="flex items-center gap-2 text-gray-500 text-sm italic sm:mt-0 mt-2 self-center">
                <MapPin size={16} className="text-[#F59E0B]" />
                Livraison rapide sur tout le territoire tunisien.
              </div>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#5D4A99]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#F59E0B]/10 rounded-full blur-3xl"></div>
            <img 
              src="https://picsum.photos/id/659/800/800" 
              alt="Pet Identification" 
              className="relative rounded-3xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-rounded">
                Avez-vous peur de perdre votre meilleur ami ?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  En Tunisie, des centaines d'animaux domestiques se perdent chaque jour. Les partages sur les groupes Facebook ne suffisent pas toujours pour les retrouver.
                </p>
                <p className="font-semibold text-gray-800">
                  Votre animal n'est pas qu'un numéro, c'est un membre de la famille qui mérite une identité officielle pour garantir sa sécurité et son retour.
                </p>
              </div>
              <div className="p-6 bg-[#5D4A99]/5 rounded-2xl border border-purple-100">
                <h3 className="text-[#5D4A99] font-bold mb-2 flex items-center gap-2">
                  <Scan size={20} /> La Solution
                </h3>
                <p className="text-gray-700">
                  Avec PETICA, votre animal porte son identité partout avec lui. Un simple <strong>Scan du QR Code</strong> permet de vous contacter instantanément.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md bg-gray-100 rounded-[3rem] p-8 shadow-inner overflow-hidden flex flex-col items-center gap-6">
                <div className="w-64 h-64 bg-white rounded-3xl shadow-lg p-6 flex items-center justify-center border-4 border-[#5D4A99]/20">
                  <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center gap-3">
                    <Scan size={80} className="text-[#5D4A99]" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Scannez ici</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-[#5D4A99] font-bold mb-1">
                    <ChevronRight className="animate-bounce-x" />
                    <span>Scan Mobile Instantané</span>
                  </div>
                  <p className="text-xs text-gray-500">Fonctionne with n'importe quel smartphone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-rounded mb-4">Nos Packs de Protection</h2>
            <div className="w-20 h-1.5 bg-[#F59E0B] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* ID CARD */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col">
              <div className="bg-[#5D4A99]/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="text-[#5D4A99]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-rounded">PETICA ID CARD</h3>
              <p className="text-gray-600 text-sm mb-8 flex-grow">
                Une carte PVC professionnelle (format bancaire), robuste, étanche et incassable. Elle affiche la photo, le nom et le N° d'Identité National de votre animal, avec un QR Code intelligent lié à son dossier médical.
              </p>
              <Link to="/pricing" className="bg-[#5D4A99] text-white py-3 rounded-xl font-bold text-center hover:bg-[#4a3a7a] transition-colors">
                Créer ma Carte Maintenant
              </Link>
            </div>

            {/* QR TAG */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col border-t-4 border-t-[#F59E0B]">
              <div className="bg-[#F59E0B]/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="text-[#F59E0B]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-rounded">PETICA QR TAG</h3>
              <p className="text-gray-600 text-sm mb-8 flex-grow">
                Une médaille élégante à accrocher directement au collier. Légère, durable et dotée d'un QR Code menant directement au profil numérique de votre animal. La solution idéale au quotidien.
              </p>
              <Link to="/pricing" className="bg-[#F59E0B] text-white py-3 rounded-xl font-bold text-center hover:bg-orange-600 transition-colors">
                Commander la Médaille
              </Link>
            </div>

            {/* TRACKER */}
            <div className="bg-white rounded-3xl p-8 shadow-xl transition-all border border-gray-100 flex flex-col opacity-75 relative">
              <div className="absolute top-4 right-4 bg-gray-200 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Bientôt Disponible</div>
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 grayscale">
                <Bell className="text-gray-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-rounded text-gray-400 italic">PETICA TAG TRACKER</h3>
              <p className="text-gray-400 text-sm mb-8 flex-grow">
                La nouvelle génération de sécurité. Un dispositif intelligent (Tracker GPS/BLE) pour géolocaliser votre animal avec précision. En cours de développement.
              </p>
              <button className="bg-gray-100 text-gray-400 py-3 rounded-xl font-bold cursor-not-allowed">
                M'alerter de la disponibilité
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 font-rounded">3 étapes simples pour protéger votre animal</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                step: "1", 
                title: "Enregistrez les données", 
                desc: "Créez le Dossier Numérique (Nom, âge, vaccins et contact) sur notre plateforme en quelques secondes.",
                icon: <Search className="text-[#5D4A99]" />
              },
              { 
                step: "2", 
                title: "Recevez l'Identité", 
                desc: "Choisissez le produit adapté (Carte ou Médaille). Il sera livré directement à votre porte, prêt à l'emploi.",
                icon: <CreditCard className="text-[#5D4A99]" />
              },
              { 
                step: "3", 
                title: "Sécurité Permanente", 
                desc: "Si votre animal se perd, toute personne qui le trouve peut scanner le code pour vous appeler instantanément.",
                icon: <ShieldCheck className="text-[#5D4A99]" />
              }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border-2 border-dashed border-[#5D4A99]/30 group-hover:border-[#5D4A99] transition-colors">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#F59E0B] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 font-rounded">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Billion Movement */}
      <section className="py-24 bg-[#5D4A99] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-400 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-orange-300 font-bold uppercase tracking-widest text-xs mb-4 inline-block">The Billion Movement (La Vision)</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 font-rounded">De la Tunisie au Monde : Le Mouvement du Milliard</h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-purple-100 leading-relaxed">
              Le projet PETICA n'est pas seulement une boutique, c'est le point de départ d'un mouvement mondial visant à offrir une identité officielle à un milliard d'animaux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center justify-center max-w-5xl mx-auto mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <div className="text-6xl font-black mb-2 text-white">
                <Counter target={150} />
              </div>
              <div className="text-purple-300 font-bold uppercase tracking-widest text-sm">Animaux Inscrits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <div className="text-6xl font-black mb-2 text-orange-400">
                1B
              </div>
              <div className="text-purple-300 font-bold uppercase tracking-widest text-sm">Objectif Final</div>
            </div>
          </div>

          <p className="text-lg mb-10 text-purple-100 italic">
            "Votre inscription aujourd'hui est une voix de plus pour changer l'avenir des animaux."
          </p>

          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#F59E0B] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-orange-600 transition-all shadow-2xl shadow-orange-900/40 transform hover:scale-105 active:scale-100">
            Rejoindre le Mouvement & Inscrire mon animal <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-rounded">N'attendez pas qu'il soit trop tard</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            La sécurité de votre animal commence par une simple décision. Protégez-le maintenant pour moins que le prix d'un déjeuner !
          </p>
          <Link to="/pricing" className="bg-[#5D4A99] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#4a3a7a] transition-all inline-block shadow-lg">
            Enregistrer mon animal maintenant
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
