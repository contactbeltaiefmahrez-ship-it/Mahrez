
import React from 'react';
import { Shield, Award, Lightbulb, Users, Heart, Target, Sparkles } from 'lucide-react';
import { COLORS } from '../constants';

const About = () => {
  const values = [
    { 
      title: "Sécurité", 
      desc: "La sécurité de votre animal est notre priorité absolue dans chaque produit que nous concevons.",
      icon: <Shield size={28} className="text-[#5D4A99]" />
    },
    { 
      title: "Responsabilité", 
      desc: "Nous offrons la tranquillité d'esprit et un engagement éthique envers le règne animal.",
      icon: <Heart size={28} className="text-[#5D4A99]" />
    },
    { 
      title: "Innovation", 
      desc: "Nous recherchons constamment des solutions technologiques intelligentes et économiques.",
      icon: <Lightbulb size={28} className="text-[#5D4A99]" />
    },
    { 
      title: "Communauté", 
      desc: "Nous sommes une grande famille d'amoureux des animaux, unis pour se soutenir.",
      icon: <Users size={28} className="text-[#5D4A99]" />
    }
  ];

  const team = [
    { name: "Mahrez", role: "Fondateur & Visionnaire", desc: "L'esprit et le cœur du projet. Il veille à transformer le rêve en réalité tangible.", color: "bg-purple-100" },
    { name: "Anis", role: "Cofondateur", desc: "Le pilier qui a cru dès le premier jour en la valeur humaine et au potentiel d'investissement.", color: "bg-orange-100" },
    { name: "Hamza", role: "Marketing Digital", desc: "La voix qui porte le message jusqu'à vous. Responsable de bâtir notre communauté numérique.", color: "bg-blue-100" },
    { name: "Faouzi", role: "Développement Web & Technique", desc: "L'architecte de la plateforme, garantissant que les données sont sécurisées.", color: "bg-green-100" }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black text-[#5D4A99] mb-6 font-rounded">
            Plus qu’un projet… Une mission pour protéger ceux qui n’ont pas de voix.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed italic">
            "Depuis la Tunisie, nous écrivons un nouveau chapitre dans l’histoire du bien-être animal et de l'identification numérique."
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/id/1025/800/1000" 
                alt="Pet history" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#F59E0B] p-8 rounded-3xl shadow-xl text-white max-w-xs hidden lg:block">
                <p className="text-lg font-bold">"Tout a commencé par la douleur de la perte..."</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-rounded text-gray-900 border-l-4 border-[#5D4A99] pl-6">Notre Histoire</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Dans nos rues tunisiennes, un scénario tragique se répète chaque jour : un animal de compagnie s'égare, perd son chemin et ne trouve personne pour le ramener à sa famille. De l'autre côté, un propriétaire désespéré cherche sans relâche.
                </p>
                <p>
                  Nous avons réalisé que le problème ne venait pas du manque d'amour, mais de l'absence d'une <strong>« Identité Officielle »</strong>. Jusqu'ici, nos animaux n'étaient que des numéros anonymes, sans voix.
                </p>
                <p className="font-bold text-[#5D4A99] text-lg">
                  C’est ainsi qu’est née PETICA. Nous voulions offrir à chaque animal une Carte d'Identité propre à lui, tout comme les humains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#5D4A99] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><Target /></div>
                <h3 className="text-2xl font-bold font-rounded">Notre Mission</h3>
              </div>
              <h4 className="text-xl font-bold text-orange-400">Transformer la « Possession » en « Responsabilité »</h4>
              <p className="text-purple-100 leading-relaxed">
                Notre mission est simple mais fondamentale : aucun animal ne doit rester anonyme. Nous œuvrons à la création du premier Registre National Numérique des Animaux en Tunisie. Un système où chaque chien et chaque chat possède un dossier médical et juridique qui le protège.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><Sparkles /></div>
                <h3 className="text-2xl font-bold font-rounded">Notre Vision</h3>
              </div>
              <h4 className="text-xl font-bold text-orange-400">The Billion Movement</h4>
              <p className="text-purple-100 leading-relaxed">
                Notre ambition ne s'arrête pas aux frontières de la Tunisie. PETICA est l'étincelle d'une initiative mondiale visant à atteindre un milliard d'animaux identifiés numériquement. Nous croyons fermement que la planète sera un endroit plus sûr et bienveillant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-rounded">Nos Valeurs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-[#5D4A99]/30 transition-all hover:shadow-lg text-center">
                <div className="inline-flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 font-rounded">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-rounded mb-4">L'Équipe derrière PETICA</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Une équipe tunisienne passionnée qui a cru en cette idée et a décidé de la transformer en réalité.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className={`h-64 ${m.color} flex items-center justify-center`}>
                  <Users size={64} className="text-white/40" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 font-rounded group-hover:text-[#5D4A99] transition-colors">{m.name}</h3>
                  <p className="text-[#5D4A99] text-xs font-bold uppercase tracking-wider mb-4">{m.role}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 font-rounded">Soyez acteur du changement</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Ne restez pas spectateur. Rejoignez-nous aujourd'hui et contribuez à bâtir une société plus organisée et plus bienveillante envers les animaux.
          </p>
          <a href="#/pricing" className="bg-[#5D4A99] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#4a3a7a] transition-all inline-block shadow-lg">
            Découvrir nos produits maintenant
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
