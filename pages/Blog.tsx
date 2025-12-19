
import React from 'react';
import { Search, ChevronRight, BookOpen, Clock, Tag as TagIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const categories = [
    { name: "Santé & Nutrition", count: 12 },
    { name: "Comportement & Dressage", count: 8 },
    { name: "Sécurité & Lois", count: 5 },
    { name: "Communauté", count: 14 }
  ];

  const articles = [
    {
      id: "vaccins",
      title: "Calendrier des Vaccins pour Chiens et Chats en Tunisie : Tout ce qu'il faut savoir.",
      excerpt: "Un dossier complet sur les prix des vaccins, les rappels obligatoires et leur importance pour protéger votre animal et votre famille.",
      image: "https://picsum.photos/id/1062/800/600",
      category: "Santé",
      date: "12 Mars 2024"
    },
    {
      id: "comparatif",
      title: "Puce Électronique ou Médaille QR Intelligente : Quelle est la meilleure option ?",
      excerpt: "Découvrez pourquoi le double système (Puce + QR Tag) est la solution de sécurité ultime en Tunisie.",
      image: "https://picsum.photos/id/1074/800/600",
      category: "Comparatif",
      date: "5 Mars 2024"
    },
    {
      id: "erreurs",
      title: "5 Erreurs Fréquentes des Nouveaux Propriétaires de Chats.",
      excerpt: "Évitez ces erreurs courantes pour garantir la santé de votre chat et... la survie de vos meubles !",
      image: "https://picsum.photos/id/40/800/600",
      category: "Astuces",
      date: "28 Fev 2024"
    },
    {
      id: "rocky",
      title: "L'Histoire du Retour de 'Rocky' : Comment un QR Code a sauvé un chien volé.",
      excerpt: "Une histoire vraie de l'un de nos clients qui prouve l'efficacité de l'identité numérique en situation réelle.",
      image: "https://picsum.photos/id/237/800/600",
      category: "Communauté",
      date: "15 Fev 2024"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Blog Header */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4 font-rounded">Notre Blog : Conseils Utiles</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Votre Guide Complet de l'Univers des Animaux de Compagnie en Tunisie. Conseils vétérinaires, astuces de sécurité et histoires inspirantes.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Featured Post */}
            <div className="bg-[#5D4A99] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img src="https://picsum.photos/id/659/800/800" className="w-full h-full object-cover" alt="Emergency Guide" />
                </div>
                <div className="p-10 text-white flex flex-col justify-center">
                  <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase w-fit mb-4 tracking-widest">Article à la Une</span>
                  <h2 className="text-3xl font-bold mb-4 font-rounded leading-tight">Guide d'Urgence : Que faire si votre animal se perd en Tunisie ?</h2>
                  <p className="text-purple-100 text-sm mb-8 leading-relaxed">
                    Les premières minutes sont décisives. Découvrez les étapes pratiques pour organiser les recherches, comment utiliser les groupes Facebook intelligemment...
                  </p>
                  <button className="flex items-center gap-2 bg-white text-[#5D4A99] px-6 py-3 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all w-fit group">
                    Lire l'article complet <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((art) => (
                <div key={art.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group">
                  <div className="h-52 overflow-hidden">
                    <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                      <span className="text-[#5D4A99]">{art.category}</span>
                      <span>•</span>
                      <span>{art.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 font-rounded text-gray-900 group-hover:text-[#5D4A99] transition-colors">{art.title}</h3>
                    <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">{art.excerpt}</p>
                    <button className="text-[#5D4A99] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Lire la suite <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Search */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold mb-6 font-rounded">Recherche</h4>
              <div className="relative">
                <input type="text" placeholder="Rechercher un conseil..." className="w-full bg-gray-50 border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-[#5D4A99] outline-none" />
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold mb-6 font-rounded">Rubriques</h4>
              <ul className="space-y-4">
                {categories.map((c, i) => (
                  <li key={i}>
                    <a href="#" className="flex items-center justify-between text-gray-600 hover:text-[#5D4A99] transition-colors font-medium">
                      <span>{c.name}</span>
                      <span className="bg-gray-100 text-gray-400 text-xs px-2 py-1 rounded-lg">{c.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Box */}
            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
              <h4 className="text-lg font-bold mb-4 font-rounded text-orange-800">Le Saviez-vous ?</h4>
              <p className="text-sm text-orange-700 leading-relaxed">
                <strong>80%</strong> des animaux perdus sans identification ne retrouvent jamais leur foyer. À l'inverse, ce taux grimpe à <strong>90%</strong> lorsqu'un moyen de contact est présent.
              </p>
            </div>

            {/* Guest Posting */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold mb-4 font-rounded">Partagez votre histoire !</h4>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Vous avez de l'expérience dans l'élevage ou une anecdote inspirante ? Écrivez-nous !
              </p>
              <button className="w-full bg-[#5D4A99] text-white py-3 rounded-xl font-bold hover:bg-[#4a3a7a] transition-all">
                Contacter l'équipe de rédaction
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 mt-20">
        <div className="bg-[#5D4A99] rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 font-rounded">Ne vous contentez pas de lire... Agissez !</h2>
            <p className="text-purple-100 mb-8 max-w-xl mx-auto">Mieux vaut prévenir que guérir. Commandez votre Carte PETICA aujourd'hui et assurez la sécurité de votre animal.</p>
            <Link to="/pricing" className="bg-[#F59E0B] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all inline-block shadow-xl shadow-orange-900/40">
              Commander la Carte Maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
