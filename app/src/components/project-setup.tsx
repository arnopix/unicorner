"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkflowData } from "@/lib/types";
import { Rocket, Sparkles, Bot } from "lucide-react";

interface ProjectSetupProps {
  onSubmit: (data: WorkflowData) => void;
  defaultData: WorkflowData;
}

export function ProjectSetup({ onSubmit, defaultData }: ProjectSetupProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [market, setMarket] = useState("FR");
  const [model, setModel] = useState("B2B");
  const [language, setLanguage] = useState("fr");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data: WorkflowData = {
      ...defaultData,
      project: {
        name: name.trim() || "",
        description,
        target_market: market,
        business_model: model,
        language,
        created_at: new Date().toISOString(),
        status: "IN_PROGRESS",
      },
    };
    onSubmit(data);
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-6">
            <Rocket className="h-3.5 w-3.5" />
            Startup Launch Orchestrator
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Unicorner
            </span>
          </h1>
          <p className="text-zinc-500 mt-3 max-w-md mx-auto">
            Decrivez votre idee SaaS. Claude Code orchestre tout le reste.
          </p>
        </div>

        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-lg">Nouveau projet</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="description">Votre idee *</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Decrivez votre idee SaaS : quel probleme, pour qui, quelles fonctionnalites cles..."
                  rows={5}
                  required
                  className="bg-zinc-800/50 border-zinc-700"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  Nom du projet
                  <span className="text-xs text-zinc-600 font-normal">optionnel — sera trouve en Phase 1 (Naming)</span>
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Laissez vide si vous ne savez pas encore"
                  className="bg-zinc-800/50 border-zinc-700"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="market">Marche cible</Label>
                  <select
                    id="market"
                    value={market}
                    onChange={(e) => setMarket(e.target.value)}
                    className="w-full h-9 rounded-md border border-zinc-700 bg-zinc-800/50 px-3 text-sm"
                  >
                    <option value="FR">France</option>
                    <option value="EU">Europe</option>
                    <option value="US">USA</option>
                    <option value="INTL">International</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="model">Business Model</Label>
                  <select
                    id="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full h-9 rounded-md border border-zinc-700 bg-zinc-800/50 px-3 text-sm"
                  >
                    <option value="B2B">B2B</option>
                    <option value="B2C">B2C</option>
                    <option value="B2B2C">B2B2C</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Langue</Label>
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full h-9 rounded-md border border-zinc-700 bg-zinc-800/50 px-3 text-sm"
                  >
                    <option value="fr">Francais</option>
                    <option value="en">Anglais</option>
                    <option value="multi">Multi-langue</option>
                  </select>
                </div>
              </div>

              <div className="rounded-lg bg-violet-500/5 border border-violet-500/20 p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-violet-300">
                  <Bot className="h-4 w-4" />
                  Ce qui va se passer automatiquement
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-400">
                  <div className="flex items-center gap-2"><Sparkles className="h-3 w-3 text-violet-400" /> Analyse de marche & concurrents</div>
                  <div className="flex items-center gap-2"><Sparkles className="h-3 w-3 text-violet-400" /> Recherche de noms + domaines</div>
                  <div className="flex items-center gap-2"><Sparkles className="h-3 w-3 text-violet-400" /> CGV, CGU, RGPD, contrats</div>
                  <div className="flex items-center gap-2"><Sparkles className="h-3 w-3 text-violet-400" /> Architecture + setup infra</div>
                  <div className="flex items-center gap-2"><Sparkles className="h-3 w-3 text-violet-400" /> Dev MVP complet + tests</div>
                  <div className="flex items-center gap-2"><Sparkles className="h-3 w-3 text-violet-400" /> SEO, contenu, landing pages</div>
                  <div className="flex items-center gap-2"><Sparkles className="h-3 w-3 text-violet-400" /> Backoffice admin</div>
                  <div className="flex items-center gap-2"><Sparkles className="h-3 w-3 text-violet-400" /> Go-to-market & lancement</div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 h-12 text-base">
                <Rocket className="h-5 w-5 mr-2" />
                Lancer le workflow
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-zinc-600 mt-6">
          10 phases — 55 modules — 336 sous-taches — ~84% automatise par Claude Code
        </p>
      </div>
    </div>
  );
}
