"use client";

import { useState } from "react";
import { translations, type Language } from "@/lib/translations";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { StatsBar } from "./StatsBar";
import { Benefits } from "./Benefits";
import { ProblemSolution } from "./ProblemSolution";
import { Applications } from "./Applications";
import { TechnicalData } from "./TechnicalData";
import { Gallery } from "./Gallery";
import { Comparison } from "./Comparison";
import { Inquiry } from "./Inquiry";
import { Footer } from "./Footer";

export function LandingPage() {
  const [language, setLanguage] = useState<Language>("de");
  const t = translations[language];

  return (
    <>
      <Header language={language} setLanguage={setLanguage} t={t.header} />
      <main>
        <Hero t={t.hero} />
        <StatsBar stats={t.stats} />
        <Benefits t={t.benefits} />
        <ProblemSolution t={t.problemSolution} />
        <Applications t={t.applications} />
        <TechnicalData t={t.technicalData} />
        <Gallery t={t.gallery} />
        <Comparison t={t.comparison} />
        <Inquiry t={t.inquiry} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
