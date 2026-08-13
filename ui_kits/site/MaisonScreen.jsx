const { Button: B4, Badge: Bg4, SectionHeading: SH4, Card: C4, ListItem: LI4, PhotoBlob: PB4, CTABanner: CTA4, Medallion: M4, ArrowLink: AL4 } = DS;

function InfoGrid({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--sp-6)" }}>
      {items.map(([icon, label, value], i) => (
        <C4 key={label} tone={i % 2 ? "jaune" : "violet"} padding="var(--sp-6)" style={{ display: "flex", flexDirection: "column", gap: "var(--sp-3)" }}>
          <M4 icon={icon} tone={i % 2 ? "jaune" : "violet"} size={48} />
          <span style={{ font: "var(--fw-regular) var(--fs-caption)/1.4 var(--font-body)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "var(--ls-eyebrow)" }}>{label}</span>
          <span style={{ font: "var(--fw-semibold) var(--fs-body)/1.5 var(--font-body)", color: "var(--text-strong)" }}>{value}</span>
        </C4>
      ))}
    </div>
  );
}

function MaisonScreen({ go }) {
  return (
    <div>
      <Section py="var(--sp-12)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr .9fr", gap: "var(--sp-16)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)", alignItems: "flex-start" }}>
            <Bg4 icon="house">Bosgouet — depuis février 2024</Bg4>
            <h1 style={{ font: "var(--fw-regular) var(--fs-display-2)/var(--lh-display) var(--font-display)", color: "var(--text-display)" }}>La maison des Lucioles</h1>
            <p style={{ font: "var(--fw-regular) var(--fs-body-lg)/var(--lh-body) var(--font-body)", maxWidth: "52ch" }}>
              Une maison normande transformée en micro-crèche : dix places, de grandes fenêtres, un jardin clos
              et une équipe qui connaît chaque enfant par son prénom.
            </p>
            <div style={{ display: "flex", gap: "var(--gap-inline)" }}>
              <B4 variant="primary" icon="calendar-heart" onClick={() => go("Pré-inscription")}>Demander une visite</B4>
              <B4 variant="secondary" onClick={() => go("Une journée chez les Lucioles")}>Voir une journée type</B4>
            </div>
          </div>
          <PB4 src={A + "photos/salle-bosgouet.png"} height={380} />
        </div>
      </Section>

      <Section tone="card">
        <SH4 eyebrow="Informations pratiques" title="L'essentiel en un coup d'œil" style={{ marginBottom: "var(--sp-10)" }} />
        <InfoGrid items={[
          ["map-pin", "Adresse", "60 rue Guy de Milleville, 27310 Bosgouet"],
          ["clock", "Horaires", "Du lundi au vendredi, 7h30 – 18h30"],
          ["users", "Capacité", "10 enfants, de 10 semaines à 4 ans"],
          ["phone", "Contact", "02 77 73 07 24"],
        ]} />
      </Section>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "var(--sp-16)", alignItems: "center" }}>
          <div>
            <h2 style={{ font: "var(--type-section)", marginBottom: "var(--sp-6)" }}>Les espaces de la maison</h2>
            <ul style={{ margin: 0, padding: 0 }}>
              <LI4 icon="sun" title="La grande pièce de vie">Ouverte sur le jardin, avec des coins doux pour se poser et un espace moteur pour grimper.</LI4>
              <LI4 icon="moon" tone="jaune" title="Deux dortoirs séparés">Les petits et les grands dorment selon leur propre rythme, sans réveil forcé.</LI4>
              <LI4 icon="utensils" title="La cuisine ouverte">Repas préparés sur place, produits frais et de saison, servis en petits groupes.</LI4>
              <LI4 icon="trees" tone="jaune" title="Le jardin clos">Sorties quotidiennes dès que la météo le permet, bac à sable et carré potager.</LI4>
            </ul>
          </div>
          <div style={{ display: "grid", gap: "var(--sp-4)" }}>
            <img src={A + "photos/enfants-jeux.png"} alt="" style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: "var(--r-photo)", boxShadow: "var(--shadow-card)" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-4)" }}>
              <img src={A + "photos/salle-bosgouet.png"} alt="" style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: "var(--r-lg)" }} />
              <img src={A + "photos/hero-bebe.png"} alt="" style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: "var(--r-lg)" }} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="jaune" style={{ borderRadius: "var(--r-2xl)", maxWidth: 1240, margin: "0 auto" }}>
        <SH4 eyebrow="Le projet pédagogique" title="Ce que nous défendons, tous les jours" style={{ marginBottom: "var(--sp-10)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--sp-8)" }}>
          {[
            ["sprout", "La motricité libre", "L'enfant n'est jamais installé dans une position qu'il n'a pas acquise seul. Il explore, essaie, recommence."],
            ["messages-square", "Le langage avant tout", "On nomme, on explique, on prévient avant d'agir : « je vais te prendre dans les bras »."],
            ["heart-handshake", "La sécurité affective", "Une référente par enfant, des rituels stables, un doudou toujours accessible."],
          ].map(([icon, title, body], i) => (
            <C4 key={title} style={{ display: "flex", flexDirection: "column", gap: "var(--sp-4)" }}>
              <M4 icon={icon} tone={i === 1 ? "jaune" : "violet"} size={56} />
              <h3 style={{ font: "var(--type-card-title)", color: "var(--text-accent)" }}>{title}</h3>
              <p style={{ font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)" }}>{body}</p>
            </C4>
          ))}
        </div>
      </Section>

      <Section py="var(--section-y-tight)">
        <CTA4 title="Venez pousser la porte de la maison" image={A + "photos/enfant-sourire.png"} ornament={A + "illustrations/abeille-t.png"} ctaLabel="Réserver une visite" ctaIcon="calendar-heart" onClick={() => go("Pré-inscription")}>
          Les visites ont lieu le mardi et le jeudi en fin de matinée, en petit comité.
        </CTA4>
      </Section>
    </div>
  );
}

Object.assign(window, { MaisonScreen, InfoGrid });
