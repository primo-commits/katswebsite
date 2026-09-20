import type { Content } from "./types";

export const fr: Content = {
  nav: { inventory: "Inventaire", mods: "Modifications", delivery: "Livraison", faq: "Questions", quote: "Soumission" },
  hero: {
    eyebrow: "En stock — 6 formats",
    title: "Conteneurs maritimes, configurés et livrés.",
    lede: "De 10 à 40 pieds, neufs ou usagés. Tels quels ou modifiés dans notre cour, puis livrés sur votre terrain partout au Québec.",
    ctaPrimary: "Voir l'inventaire",
    ctaSecondary: "Appeler maintenant",
  },
  about: {
    eyebrow: "À propos",
    title: "Un conteneur préparé, pas seulement vendu.",
    body: "Chaque conteneur est inspecté un par un et modifié dans notre cour avant le départ. Vous recevez des photos avant la livraison, et vous payez une fois que vous l'avez vu sur votre terrain.",
    statValue: "5/5",
    statLabel: "sur Facebook Marketplace",
  },
  inventory: {
    eyebrow: "Notre inventaire",
    title: "En stock maintenant",
    updated: "Inventaire mis à jour le 19 septembre 2026",
    quoteLabel: "Prix sur demande",
    cta: "Demander une soumission",
  },
  useCases: {
    eyebrow: "Applications",
    title: "Qu'est-ce que vous voulez en faire?",
    items: [
      { id: "bureau", title: "Bureau de chantier", blurb: "Chauffé, éclairé, sécurisé.", detail: "Isolation à l'uréthane giclé, panneau électrique et éclairage posés par un maître électricien, fenêtres avec barreaux et porte piétonne verrouillable. Prêt à brancher en arrivant sur le chantier.", sizes: "20 et 40 pieds", fits: ["Isolation quatre saisons", "Électricité et éclairage", "Fenêtres et porte piétonne", "Chauffage ou climatisation"] },
      { id: "chalet", title: "Chalet et habitation", blurb: "Isolé, fenêtré, aménagé.", detail: "Isolation complète, grandes ouvertures, finition intérieure et raccords pour la plomberie. Plusieurs conteneurs peuvent être jumelés pour agrandir la surface habitable.", sizes: "20, 40 et 40 pieds High Cube", fits: ["Isolation et pare-vapeur", "Grandes fenêtres", "Finition intérieure", "Jumelage possible"] },
      { id: "kiosque", title: "Kiosque et point de vente", blurb: "Comptoir, vitrine, image de marque.", detail: "Ouverture comptoir avec volet relevable, comptoir de service, éclairage et peinture aux couleurs de votre entreprise. Se déplace d'un site à l'autre selon la saison.", sizes: "10 et 20 pieds", fits: ["Volet comptoir", "Éclairage de service", "Peinture personnalisée", "Déplaçable"] },
      { id: "entreposage", title: "Entreposage", blurb: "Étanche, verrouillable, prêt à livrer.", detail: "Aucune modification requise : un conteneur étanche au vent et à l'eau, verrouillable, livré tel quel. C'est l'usage le plus fréquent et le plus rapide à obtenir.", sizes: "10, 20 et 40 pieds", fits: ["Étanche au vent et à l'eau", "Verrouillable", "Aucune modification requise", "Livraison rapide"] },
      { id: "modulaire", title: "Bâtiment modulaire", blurb: "Plusieurs conteneurs assemblés.", detail: "Deux conteneurs ou plus assemblés côte à côte ou empilés, avec ouvertures pratiquées entre les caissons pour créer un seul espace continu.", sizes: "20 et 40 pieds, assemblés", fits: ["Assemblage côte à côte", "Empilage", "Ouvertures entre caissons", "Sur mesure"] },
      { id: "atelier", title: "Atelier et garage", blurb: "Porte roll-up, électricité, établi.", detail: "Porte roll-up pleine largeur pour entrer de la machinerie, plancher renforcé, prises et éclairage. Le format High Cube donne un pied de dégagement supplémentaire.", sizes: "20, 40 et 40 pieds High Cube", fits: ["Porte roll-up", "Prises et éclairage", "Plancher renforcé", "Dégagement High Cube"] }
    ],
  },
  mods: {
    eyebrow: "Modifications",
    title: "Tout se fait dans notre cour",
    note: "Les modifications sont optionnelles. Beaucoup de clients achètent le conteneur tel quel, sans aucune modification.",
    items: [
      { id: "rollup", title: "Porte roll-up", blurb: "Ouverture large, idéale pour un atelier ou un garage." },
      { id: "pietonne", title: "Porte piétonne", blurb: "Entrée de service isolée, avec serrure." },
      { id: "fenetres", title: "Fenêtres", blurb: "Lumière naturelle, avec ou sans barreaux de sécurité." },
      { id: "electricite", title: "Électricité", blurb: "Panneau, prises et éclairage par un maître électricien." },
      { id: "isolation", title: "Isolation", blurb: "Uréthane giclé pour un usage quatre saisons." },
      { id: "peinture", title: "Peinture", blurb: "Couleur de votre choix ou aux couleurs de votre entreprise." },
    ],
  },
  steps: {
    eyebrow: "Comment ça marche",
    title: "Trois étapes, aucune surprise",
    items: [
      { n: "01", title: "Vous choisissez", blurb: "Grandeur, état, modifications. On confirme le prix tout inclus, livraison comprise." },
      { n: "02", title: "On prépare", blurb: "Inspection complète et modifications dans notre cour. Photos envoyées avant le départ." },
      { n: "03", title: "On livre", blurb: "Déposé à l'endroit convenu. Paiement à la livraison, une fois que vous l'avez vu." },
    ],
  },
  delivery: {
    eyebrow: "Livraison",
    title: "Où nous livrons",
    zones: "Partout au Québec. Notre cour est à Gatineau, en Outaouais, et nous livrons dans toute la province.",
    elsewhere: "Le transport varie selon la distance depuis Gatineau. Donnez-nous votre code postal et nous confirmons un montant fixe.",
    requirements: "Terrain de niveau, accès pour un camion de 60 pi et environ 100 pi de dégagement pour décharger.",
  },
  testimonial: {
    eyebrow: "Témoignages",
    title: "Ce que nos clients disent",
    quote: "Je recommande fortement Katiana, vraiment un excellent service rapide et un vrai beau conteneur impeccable !",
    author: "François",
    role: "septembre 2026",
    rating: "Note de 5 sur 5",
  },
  faq: {
    eyebrow: "Questions fréquentes",
    title: "Les questions qu'on nous pose chaque semaine",
    items: [
      { q: "Quelle est la différence entre un conteneur neuf et un usagé?", a: "Un conteneur « neuf » (one-trip) n'a fait qu'une seule traversée depuis l'usine : peinture intacte, plancher propre, aucune bosse. Un usagé a navigué plusieurs années. Nous ne vendons que des usagés étanches au vent et à l'eau, inspectés un par un." },
      { q: "De quoi ai-je besoin sur mon terrain pour recevoir la livraison?", a: "Un terrain de niveau, assez ferme pour supporter le camion, un accès dégagé et environ 100 pi en ligne droite. Nous recommandons quatre blocs de béton aux coins pour garder le conteneur hors du sol." },
      { q: "Ai-je besoin d'un permis municipal?", a: "Cela dépend de votre municipalité et de l'usage prévu. Pour de l'entreposage temporaire, souvent non ; pour une installation permanente ou habitable, presque toujours oui. Vérifiez auprès de votre service d'urbanisme avant de commander." },
      { q: "Dois-je faire modifier mon conteneur?", a: "Non. Beaucoup de clients achètent un conteneur tel quel, pour de l'entreposage par exemple. Les modifications sont offertes, jamais obligatoires." },
      { q: "Combien coûte la livraison?", a: "Le coût dépend de la distance depuis notre cour et de l'accès à votre terrain. Donnez-nous votre code postal et nous confirmons un montant fixe, sans surprise à l'arrivée." },
      { q: "Est-ce qu'un conteneur peut servir à l'année?", a: "Oui, avec de l'isolation. Sans isolation, la condensation s'installe dès les premiers écarts de température. Nous isolons à l'uréthane giclé, ce qui règle à la fois l'isolation et l'étanchéité à l'air." },
    ],
  },
  contact: {
    title: "Parlez-nous de votre projet",
    body: "Grandeur, usage, modifications, endroit de livraison. On vous revient avec un prix clair en moins de 24 h ouvrables.",
    phone: "873-682-5954",
    hours: ["Lundi au vendredi : 8 h à 17 h", "Samedi : 9 h à 13 h", "Dimanche : fermé"],
  },
  containers: [
    { id: "10-neuf", size: "10 pieds", condition: "Neuf", isNew: true, dimensions: "10 × 8 × 8,5 pi", availability: "Sur demande", blurb: "Parfait comme cabanon ou petit rangement verrouillable." },
    { id: "20-usage", size: "20 pieds", condition: "Usagé", isNew: false, dimensions: "20 × 8 × 8,5 pi", availability: "Sur demande", blurb: "Étanche au vent et à l'eau, inspecté, prêt à livrer." },
    { id: "20-neuf", size: "20 pieds", condition: "Neuf", isNew: true, dimensions: "20 × 8 × 8,5 pi", availability: "Sur demande", blurb: "Un seul voyage (one-trip) : aspect et étanchéité du neuf." },
    { id: "40-usage", size: "40 pieds", condition: "Usagé", isNew: false, dimensions: "40 × 8 × 8,5 pi", availability: "Sur demande", blurb: "Le plus grand volume au meilleur coût au pied carré." },
    { id: "40hc-neuf", size: "40 pi High Cube", condition: "Neuf", isNew: true, dimensions: "40 × 8 × 9,5 pi", availability: "Sur demande", blurb: "9,5 pi de haut : un pied de plus pour la machinerie." },
    { id: "40hc-usage", size: "40 pi High Cube", condition: "Usagé", isNew: false, dimensions: "40 × 8 × 9,5 pi", availability: "Sur demande", blurb: "Hauteur supplémentaire, bon état général." },
  ],
};
