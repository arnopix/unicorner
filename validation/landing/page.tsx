"use client";

import { useState, FormEvent } from "react";

export default function ValidationLandingPage() {
  const [email, setEmail] = useState("");
  const [freelanceType, setFreelanceType] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !freelanceType) return;
    setLoading(true);
    // TODO: connecter a Supabase ou un endpoint API pour stocker les leads
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight text-white">
            [NomProduit]
          </span>
          <a
            href="#waitlist"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
          >
            Rejoindre la waitlist
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
        <div className="mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-400">
          Bientot disponible — Acces anticipe gratuit
        </div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          La facturation des freelances
          <br />
          <span className="text-indigo-400">qui codent.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          Creez, envoyez et suivez vos factures en 30 secondes.
          <br className="hidden sm:block" />
          API-first. Conforme e-facture 2026. Sans prise de tete.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#waitlist"
            className="rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 hover:shadow-indigo-500/30"
          >
            Rejoindre la liste d'attente
          </a>
          <a
            href="#features"
            className="rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-3.5 text-base font-semibold text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-800"
          >
            Decouvrir les features
          </a>
        </div>
      </section>

      {/* Social proof */}
      <div className="border-y border-zinc-800 bg-zinc-900/50 py-4 text-center">
        <p className="text-sm text-zinc-500">
          Rejoignez{" "}
          <span className="font-semibold text-zinc-300">500+ freelances</span>{" "}
          deja sur la liste d'attente
        </p>
      </div>

      {/* Features */}
      <section id="features" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          Tout ce qu'il vous faut. Rien de superflu.
        </h2>
        <p className="mb-12 text-center text-zinc-400">
          Concu pour les freelances tech qui veulent facturer, pas administrer.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl">
              <span role="img" aria-label="eclair">
                &#9889;
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Facture en 30 secondes
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Interface epuree, auto-completion intelligente, modeles
              pre-remplis. Creez et envoyez une facture conforme en quelques
              clics — ou via l'API.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl">
              <span role="img" aria-label="code">
                &#128187;
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              API-first
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              REST API complete, webhooks, SDK TypeScript. Automatisez votre
              facturation avec vos outils existants — ou construisez vos propres
              integrations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-700">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-2xl">
              <span role="img" aria-label="relance">
                &#128276;
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Relances automatiques
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Fini les relances manuelles genantes. Configurez des sequences de
              rappel automatiques et professionnelles. Vos clients paient, vous
              codez.
            </p>
          </div>
        </div>
      </section>

      {/* E-facture 2026 */}
      <section className="border-y border-zinc-800 bg-zinc-900/40">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
            Conformite integree
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white">
            Pret pour la reforme e-facture 2026.
            <br />
            <span className="text-emerald-400">Vous, non ?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            A partir de septembre 2026, la facturation electronique devient
            obligatoire pour toutes les entreprises en France. Avec [NomProduit],
            la conformite est native et gratuite — pas de module supplementaire,
            pas de surcharge. Vous facturez, on s'occupe du reste.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
              <p className="text-2xl font-bold text-emerald-400">100%</p>
              <p className="mt-1 text-sm text-zinc-500">
                Conforme aux normes Chorus Pro / PDP
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
              <p className="text-2xl font-bold text-emerald-400">0 euros</p>
              <p className="mt-1 text-sm text-zinc-500">
                Surcout pour la conformite e-facture
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
              <p className="text-2xl font-bold text-emerald-400">0 config</p>
              <p className="mt-1 text-sm text-zinc-500">
                Rien a configurer, c'est natif
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          Simple et transparent.
        </h2>
        <p className="mb-12 text-center text-zinc-400">
          Commencez gratuitement. Passez au Pro quand vous etes pret.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {/* Free */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Gratuit</h3>
            <p className="mt-1 text-sm text-zinc-500">Pour demarrer</p>
            <p className="mt-4 text-3xl font-bold text-white">
              0 <span className="text-base font-normal text-zinc-500">euros/mois</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                5 factures / mois
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                3 clients max
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                Conforme e-facture 2026
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                Modeles de factures
              </li>
            </ul>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl border-2 border-indigo-500 bg-zinc-900/60 p-6">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-0.5 text-xs font-semibold text-white">
              Populaire
            </div>
            <h3 className="text-lg font-semibold text-white">Pro</h3>
            <p className="mt-1 text-sm text-zinc-500">Pour les freelances actifs</p>
            <p className="mt-4 text-3xl font-bold text-white">
              9,90 <span className="text-base font-normal text-zinc-500">euros/mois</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                Factures illimitees
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                Clients illimites
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                Relances automatiques
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                API complete + webhooks
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                Export comptable (FEC)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                Tableau de bord financier
              </li>
            </ul>
          </div>

          {/* Business */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <h3 className="text-lg font-semibold text-white">Business</h3>
            <p className="mt-1 text-sm text-zinc-500">Pour les equipes</p>
            <p className="mt-4 text-3xl font-bold text-white">
              19,90 <span className="text-base font-normal text-zinc-500">euros/mois</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                Tout le plan Pro
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                Multi-utilisateurs
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                Support prioritaire
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                Branding personnalise
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-400">&#10003;</span>
                Acces API avance (bulk)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Waitlist form */}
      <section
        id="waitlist"
        className="border-t border-zinc-800 bg-zinc-900/40"
      >
        <div className="mx-auto max-w-xl px-6 py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Soyez parmi les premiers.
          </h2>
          <p className="mb-8 text-zinc-400">
            Inscrivez-vous a la liste d'attente et recevez un acces anticipe
            gratuit avec 3 mois de plan Pro offerts.
          </p>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8">
              <p className="text-lg font-semibold text-emerald-400">
                Vous etes sur la liste !
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Merci pour votre interet. On vous contacte tres vite avec votre
                acces anticipe.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
              <select
                required
                value={freelanceType}
                onChange={(e) => setFreelanceType(e.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-zinc-300 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="" disabled>
                  Votre type d'activite
                </option>
                <option value="dev">Developpeur / Programmeur</option>
                <option value="data">Data / IA / ML</option>
                <option value="design">Designer / UX / UI</option>
                <option value="consulting">Consultant IT / Management</option>
                <option value="marketing">Marketing / SEO / Growth</option>
                <option value="redaction">Redaction / Contenu</option>
                <option value="autre">Autre</option>
              </select>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Inscription..." : "Rejoindre la liste d'attente"}
              </button>
              <p className="text-xs text-zinc-600">
                Pas de spam. Desabonnement en un clic.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-zinc-600">
          <p>
            &copy; 2026 [NomProduit] — La facturation des freelances qui codent.
          </p>
          <p className="mt-1">
            Un projet en cours de validation.{" "}
            <a href="#waitlist" className="text-zinc-500 underline hover:text-zinc-400">
              Inscrivez-vous
            </a>{" "}
            pour etre informe du lancement.
          </p>
        </div>
      </footer>
    </div>
  );
}
