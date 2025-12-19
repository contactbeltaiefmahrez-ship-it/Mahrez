
import React from 'react';
// Added Link to imports from react-router-dom
import { Link } from 'react-router-dom';
import { Check, Info, Star, ShieldCheck, Zap, RefreshCw, Truck } from 'lucide-react';
import { COLORS } from '../constants';

const Pricing = () => {
  const plans = [
    {
      name: "Pack Protection Pratique",
      product: "Smart QR Tag",
      price: "XX TND",
      desc: "La solution quotidienne idéale pour les chats et les chiens actifs.",
      features: [
        "Médaille robuste (Métal/Plastique renforcé)",
        "QR Code intelligent lié au profil numérique",
        "Résistant à l'eau et aux rayures",
        "Activation instantanée du profil",
        "0% Abonnement mensuel (Gratuit à vie)"
      ],
      cta: "Commander la Médaille",
      accent: COLORS.accent
    },
    {
      name: "Pack Identité Officielle",
      product: "Official ID Card",
      price: "XX TND",
      desc: "Offrez à votre animal le statut officiel qu'il mérite avec une carte PVC professionnelle.",
      features: [
        "Carte PVC Haute Qualité (Format & matière bancaire)",
        "Design officiel avec photo et données de l'animal",
        "QR Code inclus pour le dossier médical",
        "Idéal pour les déplacements et visites",
        "0% Abonnement mensuel (Gratuit à vie)"
      ],
      cta: "Créer la Carte de mon animal",
      isPopular: true,
      accent: COLORS.primary
    },
    {
      name: "Pack Sécurité Maximale",
      product: "Combo",
      price: "Prix Spécial",
      desc: "Obtenez la Carte (pour vous) et la Médaille (pour votre animal) à prix réduit.",
      features: [
        "Économisez 20% en achetant le duo",
        "Médaille pour une protection immédiate",
        "Carte pour votre portefeuille (preuve de propriété)",
        "Les deux produits liés au même dossier",
        "Toutes les fonctionnalités incluses"
      ],
      cta: "Commander le Pack Combo",
      accent: "#10B981" // Emerald-500
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-black text-gray-900 mb-4 font-rounded">
            La tranquillité d'esprit n'a pas de prix... mais nous l'avons rendue accessible.
          </h1>
          <p className="text-gray-600 text-lg">
            Choisissez la protection adaptée à votre animal. Paiement unique, validité à vie, et sans aucun frais caché.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="pb-24 -mt-10 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((p, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-[2.5rem] p-8 shadow-xl transition-all relative flex flex-col border-2 ${
                  p.isPopular ? 'border-[#5D4A99] scale-105 z-10' : 'border-transparent'
                }`}
              >
                {p.isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#5D4A99] text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    <Star size={16} fill="currentColor" /> Best Seller / La Plus Vendue
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">{p.name}</h3>
                  <h4 className="text-2xl font-bold font-rounded text-gray-900 mb-4">{p.product}</h4>
                  <div className="text-4xl font-black text-[#5D4A99] mb-4">{p.price}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex gap-3 text-sm text-gray-700">
                      <div className="mt-0.5"><Check size={18} className="text-green-500" /></div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className="w-full py-4 rounded-2xl font-bold transition-all text-white shadow-lg"
                  style={{ backgroundColor: p.accent }}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gratis section */}
      <section className="py-24 bg-[#5D4A99] text-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 font-rounded text-center">Pourquoi nos services sont Gratuits à vie ? (Transparence)</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
                <ShieldCheck className="text-orange-400 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4 font-rounded">Pas d'abonnements</h3>
                <p className="text-sm text-purple-100 leading-relaxed">Vous achetez le produit une seule fois, le dossier numérique de votre animal est gratuit à vie.</p>
              </div>
              <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
                <RefreshCw className="text-orange-400 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4 font-rounded">Mises à jour Gratuites</h3>
                <p className="text-sm text-purple-100 leading-relaxed">Changez de numéro ou d'adresse ? Mettez à jour les données instantanément sans racheter de carte.</p>
              </div>
              <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
                <Truck className="text-orange-400 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4 font-rounded">Livraison Nationale</h3>
                <p className="text-sm text-purple-100 leading-relaxed">Un tarif symbolique et fixe, où que vous soyez en Tunisie grâce à nos partenaires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantie */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 text-green-600 rounded-full mb-6">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-4 font-rounded">La Garantie PETICA (Confiance)</h2>
          <p className="text-gray-600 italic">
            "Nous garantissons la qualité. En cas d'erreur d'impression ou de dysfonctionnement du scan à la réception, nous remplaçons la carte ou la médaille immédiatement et gratuitement."
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6 font-rounded">Prêt à offrir une identité officielle à votre animal ?</h2>
        <Link to="/contact" className="bg-[#5D4A99] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#4a3a7a] transition-all inline-block">
          Accéder à la Boutique
        </Link>
      </section>
    </div>
  );
};

export default Pricing;
