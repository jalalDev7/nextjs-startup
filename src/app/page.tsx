"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LandingNavbar from "@/components/LandingNavbar";

export default function Home() {
  return (
    <main className="flex flex-col w-full mx-auto relative overflow-hidden bg-white text-slate-800">
      <LandingNavbar />

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-12 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-40 right-16 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-12 left-1/2 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-25 translate-x-[-50%]" />
      </div>

      <section id="hero" className="pt-24 lg:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                #1 Plateforme freelance au Maroc
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                Trouvez un freelancer au{" "}
                <span className="text-blue-600">Maroc</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl">
                Déposez votre mission et recevez des devis immédiatement. Le
                meilleur moyen de réaliser votre projet avec des talents
                fiables.
              </p>

              <div className="rounded-full bg-white border border-blue-100 shadow-sm flex items-center overflow-hidden max-w-2xl">
                <input
                  className="flex-1 px-5 py-4 text-base outline-none"
                  placeholder="Ex: Etablir un plan de comm"
                />
                <button className="px-6 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                  ➜
                </button>
              </div>
              <p className="text-sm text-green-600 font-semibold">
                GRATUIT - Déposer une mission
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative h-72 sm:h-80 lg:h-96 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                  alt="Freelance collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white/95 border border-blue-100 rounded-2xl px-4 py-2 text-sm font-medium text-slate-700 shadow-md">
                +55,000 Freelancers
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Comment ça marche
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-blue-500/15 border border-white/20 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-3">
                Recruteur dépose une mission
              </h3>
              <p className="text-sm text-blue-100">
                Un email est automatiquement envoyé à tous les freelancers de la
                catégorie.
              </p>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-blue-500/15 border border-white/20 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-3">
                Freelancers envoient des devis
              </h3>
              <p className="text-sm text-blue-100">
                Facile et rapide pour envoyer un devis estimatif au Recruteur et
                établir un premier contact.
              </p>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-blue-500/15 border border-white/20 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-3">
                Recruteur choisit un freelancer
              </h3>
              <p className="text-sm text-blue-100">
                Le Recruteur contacte les freelances par téléphone ou par email
                pour choisir un gagnant.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pourquoi nous aimer ?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            {
              title: "#1 au Maroc",
              description:
                "Meilleure et plus grande plateforme de freelance au Maroc",
            },
            {
              title: "Beaucoup de missions",
              description:
                "Plus grand nombre de missions en freelance déposées par jour",
            },
            {
              title: "Sur place & à distance",
              description:
                "Travaillez à distance ou sur place chez le client selon la mission",
            },
            {
              title: "Pas de commission",
              description:
                "0%, aucune commission prélevée sur le budget de la mission",
            },
            {
              title: "Moins de concurrence",
              description:
                "Un système de devis payants pour filtrer les personnes non sérieuses",
            },
            {
              title: "Très facile",
              description:
                "Très facile à utiliser et agréable pour en faire un usage quotidien",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm text-center"
            >
              <h3 className="font-semibold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="categories" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trouvez une mission maintenant
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            "Développement",
            "E-commerce, CMS & ERP",
            "BDD, Réseau & Cloud",
            "Graphisme",
            "Marketing & Vente",
            "Rédaction & Traduction",
            "Autres services",
            "+ Tout parcourir",
          ].map((category) => (
            <div
              key={category}
              className="bg-white p-4 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-blue-600 mb-1">{category}</h3>
              <p className="text-sm text-slate-500">
                Catégorie populare à parcourir
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/auth/register">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
              Créer mon profil
            </Button>
          </Link>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Devenez PRO & envoyez vos devis
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Starter",
              price: "290 DH",
              accent: "from-green-400 to-emerald-500",
            },
            {
              name: "Pro",
              price: "490 DH",
              accent: "from-blue-500 to-indigo-500",
            },
            {
              name: "Expert",
              price: "690 DH",
              accent: "from-violet-500 to-fuchsia-500",
            },
            {
              name: "Agency",
              price: "4900 DH",
              accent: "from-rose-500 to-orange-500",
            },
          ].map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-transform"
            >
              <div
                className={`h-2 mb-4 rounded-full bg-gradient-to-r ${plan.accent}`}
              />
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-extrabold mb-3">{plan.price}</p>
              <p className="text-sm text-slate-500 mb-5">
                Pack pour booster vos devis et visibilité
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Comparer les packs
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="support" className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Support 5 étoiles</h3>
          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-6">
            Vous êtes entre les mains d’une excellente équipe de support
          </p>
          <Button className="bg-white text-blue-600 hover:bg-slate-100">
            Contactez-nous
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase mb-2">
              Freelancer.ma
            </p>
            <h2 className="text-4xl font-bold mb-4">Entreprise</h2>
            <p className="text-slate-600 mb-6">
              Vous n’avez pas le temps de recruter & vous voulez sous-traiter ça
              à un expert ?
            </p>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white">
              DÉCOUVREZ NOTRE OFFRE
            </Button>
          </div>
          <div className="rounded-3xl bg-blue-50 p-8 border border-blue-100">
            <div className="space-y-4">
              <p className="text-blue-700 font-semibold">
                SOUS-TRAITEZ VOTRE RECHERCHE DE FREELANCE
              </p>
              <p className="text-slate-600">
                Plus grand réseau de freelances au Maroc & process de recherche
                très rapide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-3">À propos</h4>
            <p className="text-sm text-slate-300">
              Qui sommes-nous, Jobs, Presse, CGU/CGV, Méthode de paiement,
              Support
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Guides</h4>
            <p className="text-sm text-slate-300">
              Comment ça marche, Freelances FAQ, Recruteur FAQ, Centre de
              recherche
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Réseau</h4>
            <p className="text-sm text-slate-300">
              Événements & Networking, Freelances, Missions freelance,
              Partenariats, Blog
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm text-slate-300">
              2020, Bd Zerktouni, Casablanca, Maroc
            </p>
            <p className="text-sm text-slate-300">
              Email: contact@freelancer.ma
            </p>
            <p className="text-sm text-slate-300">Tél: +212 5 22 00 00 00</p>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-400">
          © 2026 Freelancer.ma - Tous droits réservés
        </div>
      </footer>
    </main>
  );
}
