const { Button: B2, Badge: Bg2, SectionHeading: SH2, Card: C2, ListItem: LI2, PhotoBlob: PB2, CTABanner: CTA2, AvatarRow: AR2, Medallion: M2, ArrowLink: AL2 } = DS;

function RoutotScreen({ go }) {
  return (
    <div>
      <Section py="var(--sp-12)">
        <div className="rgrid-hero" style={{ display: "grid", gap: "var(--sp-16)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)", alignItems: "flex-start" }}>
            <Bg2 tone="jaune" icon="sparkles">Ouverture mars 2027</Bg2>
            <h1 style={{ font: "var(--fw-regular) var(--fs-display-2)/var(--lh-display) var(--font-display)", color: "var(--text-display)" }}>Une micro-crèche à Routot, pensée comme une maison</h1>
            <p style={{ font: "var(--fw-regular) var(--fs-body-lg)/var(--lh-body) var(--font-body)", maxWidth: "52ch" }}>
              Dix places, une équipe stable et des espaces conçus avec des matières naturelles : Routot prolonge à quelques
              kilomètres ce que nous vivons chaque jour à Bosgouet.
            </p>
            <B2 variant="accent" icon="clipboard-list" onClick={() => go("Pré-inscription")}>Pré-inscrire votre enfant</B2>
          </div>
          <PB2 src={A + "photos/salle-routot.png"} height={380} />
        </div>
      </Section>
      <Section tone="card">
        <SH2 eyebrow="Le projet" title="Ce qui nous guide à Routot" lead="Un accueil à taille humaine, le respect du rythme de l'enfant et un accompagnement réel des familles." style={{ marginBottom: "var(--sp-12)" }} />
        <div className="rgrid-3" style={{ display: "grid", gap: "var(--sp-8)" }}>
          {[
            ["house", "Un accueil à taille humaine", "Dix enfants au maximum, deux à trois professionnelles présentes : chacun est connu, reconnu et accompagné individuellement."],
            ["moon", "Le rythme de l'enfant d'abord", "On ne réveille pas un enfant qui dort, on ne force pas un enfant à manger. La journée s'ajuste à lui, pas l'inverse."],
            ["messages-square", "Les familles accompagnées", "Visite avant l'inscription, adaptation progressive, transmissions quotidiennes et rendez-vous réguliers avec la référente."],
          ].map(([icon, title, body], i) => (
            <C2 key={title} tone={i === 1 ? "jaune" : "violet"} style={{ display: "flex", flexDirection: "column", gap: "var(--sp-4)" }}>
              <M2 icon={icon} tone={i === 1 ? "jaune" : "violet"} size={56} />
              <h3 style={{ font: "var(--type-card-title)", color: "var(--text-accent)" }}>{title}</h3>
              <p style={{ font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)" }}>{body}</p>
            </C2>
          ))}
        </div>
      </Section>
      <Section>
        <div className="rgrid-split" style={{ display: "grid", gap: "var(--sp-16)", alignItems: "center" }}>
          <PB2 src={A + "photos/enfants-jeux.png"} shape="rounded" height={330} mat={false} />
          <div>
            <h2 style={{ font: "var(--type-section)", marginBottom: "var(--sp-6)" }}>Les espaces</h2>
            <ul style={{ margin: 0, padding: 0 }}>
              <LI2 icon="sun" title="Une pièce de vie lumineuse">Ouverte sur le jardin, avec des coins doux pour se poser.</LI2>
              <LI2 icon="baby" title="Un dortoir calme" tone="jaune">Deux dortoirs séparés pour respecter les temps de sommeil.</LI2>
              <LI2 icon="utensils" title="Un espace repas">Repas préparés sur place, produits frais et de saison.</LI2>
              <LI2 icon="trees" title="Un jardin clos" tone="jaune">Sorties quotidiennes dès que la météo le permet.</LI2>
            </ul>
          </div>
        </div>
      </Section>
      <Section tone="jaune" py="var(--section-y-tight)" style={{ borderRadius: "var(--r-2xl)", maxWidth: 1240, margin: "0 auto" }}>
        <SH2 eyebrow="Calendrier" title="Les étapes d'ici l'ouverture" style={{ marginBottom: "var(--sp-8)" }} />
        <div className="rgrid-4" style={{ display: "grid", gap: "var(--sp-6)" }}>
          {[["Été 2026", "Travaux et aménagement"], ["Automne 2026", "Recrutement de l'équipe"], ["Début 2027", "Visites des familles"], ["Mars 2027", "Ouverture des portes"]].map(([when, what], i) => (
            <C2 key={when} style={{ display: "flex", flexDirection: "column", gap: "var(--sp-2)" }}>
              <span style={{ font: "var(--fw-bold) var(--fs-caption)/1.2 var(--font-body)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: i === 3 ? "var(--jaune-700)" : "var(--text-eyebrow)" }}>{when}</span>
              <span style={{ font: "var(--fw-semibold) var(--fs-body)/1.5 var(--font-body)", color: "var(--text-strong)" }}>{what}</span>
            </C2>
          ))}
        </div>
      </Section>
      <Section py="var(--section-y-tight)">
        <CTA2 title="Envie de visiter Routot avant l'ouverture ?" image={A + "photos/enfant-sourire.png"} ornament={A + "illustrations/abeille-t.png"} ctaLabel="Demander une visite" ctaIcon="calendar-heart" onClick={() => go("Pré-inscription")}>
          Nous organisons des visites en petit comité pour vous présenter les lieux et l'équipe.
        </CTA2>
      </Section>
    </div>
  );
}

function JourneeScreen({ go }) {
  const moments = [
    ["7h30", "Accueil échelonné", "Retrouvailles douces, transmission avec la famille, jeux libres."],
    ["9h15", "Le temps du cercle", "Comptines, prénoms, météo du jour : chacun trouve sa place dans le groupe."],
    ["9h30", "Temps d'éveil", "Peinture, motricité, manipulation, transvasement — au choix de l'enfant."],
    ["11h15", "Repas", "Repas frais préparé sur place, servi à table en petits groupes."],
    ["12h30", "Sieste", "Chacun dort selon son besoin, sans réveil forcé."],
    ["15h00", "Goûter", "Fruits, laitages, pain — un moment convivial."],
    ["16h00", "Jeux et jardin", "Sortie extérieure, lecture, jeux symboliques."],
    ["17h00", "Retrouvailles", "Transmission de la journée : repas, sommeil, découvertes, humeur."],
  ];
  return (
    <div>
      <Section py="var(--sp-12)">
        <SH2 eyebrow="Le quotidien" title="Une journée chez les Lucioles" lead="Chaque moment est un repère. Les horaires donnent le cadre, l'enfant donne le tempo." />
      </Section>
      <Section tone="card" py="var(--section-y-tight)">
        <div className="rgrid-2" style={{ display: "grid", gap: "var(--sp-16)", alignItems: "start" }}>
          <ul style={{ margin: 0, padding: 0 }}>
            {moments.map(([time, title, body]) => <LI2 key={time} time={time} title={title}>{body}</LI2>)}
          </ul>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-6)" }}>
            <PB2 src={A + "photos/enfants-jeux.png"} shape="rounded" height={230} mat={false} />
            <C2 tone="jaune">
              <h3 style={{ font: "var(--type-card-title)", color: "var(--text-accent)", marginBottom: "var(--sp-3)" }}>Et l'adaptation ?</h3>
              <p style={{ font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)" }}>Une semaine d'adaptation progressive, à votre rythme : une heure, puis une matinée, puis une journée complète.</p>
            </C2>
            <C2 tone="violet">
              <h3 style={{ font: "var(--type-card-title)", color: "var(--text-accent)", marginBottom: "var(--sp-3)" }}>Ce que vous recevez chaque soir</h3>
              <p style={{ font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)" }}>Repas, sommeil, couches, activités et un mot sur l'humeur du jour — de vive voix, au moment des retrouvailles.</p>
            </C2>
          </div>
        </div>
      </Section>
      <Section>
        <SH2 eyebrow="Les activités" title="Ce que l'on propose au fil des semaines" style={{ marginBottom: "var(--sp-10)" }} />
        <div className="rgrid-4" style={{ display: "grid", gap: "var(--sp-6)" }}>
          {[["palette", "Arts plastiques", "violet"], ["music", "Éveil musical", "jaune"], ["book-open", "Lecture et comptines", "violet"], ["footprints", "Motricité libre", "jaune"], ["sprout", "Jardinage", "violet"], ["chef-hat", "Ateliers cuisine", "jaune"], ["bath", "Jeux d'eau", "violet"], ["hand-heart", "Massages et relaxation", "jaune"]].map(([icon, title, tone]) => (
            <C2 key={title} padding="var(--sp-6)" style={{ display: "flex", flexDirection: "column", gap: "var(--sp-3)", alignItems: "flex-start" }}>
              <M2 icon={icon} tone={tone} size={48} />
              <span style={{ font: "var(--fw-semibold) var(--fs-body-sm)/1.4 var(--font-body)", color: "var(--text-strong)" }}>{title}</span>
            </C2>
          ))}
        </div>
      </Section>
      <Section py="var(--section-y-tight)">
        <CTA2 title="Envie de voir tout cela de vos yeux ?" image={A + "photos/enfant-sourire.png"} ornament={A + "illustrations/abeille-t.png"} ctaLabel="Demander une visite" ctaIcon="calendar-heart" onClick={() => go("Pré-inscription")}>
          Nous vous accueillons en fin de matinée, au moment où la maison est la plus vivante.
        </CTA2>
      </Section>
    </div>
  );
}

function TarifsScreen({ go }) {
  const [revenus, setRevenus] = React.useState(2800);
  const [heures, setHeures] = React.useState(160);
  const brut = heures * 9.5;
  const cmg = Math.min(brut * 0.85, revenus < 2500 ? 950 : revenus < 4000 ? 780 : 560);
  const apresCmg = Math.max(brut - cmg, 0);
  const reste = Math.round(apresCmg * 0.5);
  return (
    <div>
      <Section py="var(--sp-12)">
        <SH2 eyebrow="Tarification" title="Un tarif clair, des aides réelles" lead="Le tarif horaire comprend l'accueil, les repas, les goûters et les produits de soin. La grille tarifaire vous est communiquée lors de votre visite ou sur simple demande." />
      </Section>
      <Section>
        <div className="rgrid-2" style={{ display: "grid", gap: "var(--gap-cards)", alignItems: "start" }}>
          <C2 style={{ position: "relative" }}>
            <h3 style={{ font: "var(--type-card-title)", color: "var(--text-accent)", marginBottom: "var(--sp-4)" }}>Ce que comprend le tarif</h3>
            <ul style={{ margin: 0, padding: 0 }}>
              <LI2 icon="check" title="Les repas et les goûters" />
              <LI2 icon="check" title="Les couches et produits de soin" />
              <LI2 icon="check" title="Les activités et sorties" />
              <LI2 icon="check" title="Le suivi avec la référente de votre enfant" />
            </ul>
            <img src={A + "illustrations/tirelire-t.png"} alt="" className="deco-sm" style={{ position: "absolute", right: "var(--sp-5)", bottom: "var(--sp-5)", width: 84, opacity: .9 }} />
          </C2>
          <C2 tone="violet">
            <h3 style={{ font: "var(--type-card-title)", color: "var(--text-accent)", marginBottom: "var(--sp-4)" }}>Estimer votre reste à charge</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "var(--sp-2)", font: "var(--fw-semibold) var(--fs-body-sm)/1.3 var(--font-body)", color: "var(--text-strong)" }}>
                Revenus mensuels du foyer : {revenus} €
                <input type="range" min="1500" max="6000" step="100" value={revenus} onChange={(e) => setRevenus(+e.target.value)} style={{ accentColor: "var(--violet-800)" }} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "var(--sp-2)", font: "var(--fw-semibold) var(--fs-body-sm)/1.3 var(--font-body)", color: "var(--text-strong)" }}>
                Heures d'accueil par mois : {heures} h
                <input type="range" min="60" max="200" step="5" value={heures} onChange={(e) => setHeures(+e.target.value)} style={{ accentColor: "var(--violet-800)" }} />
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-2)", padding: "var(--sp-5)", background: "var(--surface-card)", borderRadius: "var(--r-md)" }}>
                {[["Coût de l'accueil", `${brut.toFixed(0)} €`], ["Aide CMG estimée", `– ${cmg.toFixed(0)} €`], ["Après crédit d'impôt (50 %)", `${reste} €`]].map(([l, v], i) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", font: `${i === 2 ? "var(--fw-bold)" : "var(--fw-regular)"} var(--fs-body-sm)/1.6 var(--font-body)`, color: i === 2 ? "var(--text-display)" : "var(--text-body)" }}>
                    <span>{l}</span><span>{v}</span>
                  </div>
                ))}
              </div>
              <span style={{ font: "var(--fw-regular) var(--fs-caption)/1.5 var(--font-body)", color: "var(--text-muted)" }}>Simulation indicative, sans valeur contractuelle.</span>
              <B2 variant="primary" iconRight="arrow-right" onClick={() => go("Pré-inscription")}>Demander une simulation précise</B2>
            </div>
          </C2>
        </div>
      </Section>
      <Section tone="jaune" py="var(--section-y-tight)" style={{ borderRadius: "var(--r-2xl)", maxWidth: 1240, margin: "0 auto" }}>
        <SH2 title="Les aides possibles" lead="Selon votre situation, l'accueil en micro-crèche revient souvent moins cher qu'il n'y paraît." style={{ marginBottom: "var(--sp-8)" }} />
        <div className="rgrid-3" style={{ display: "grid", gap: "var(--sp-6)" }}>
          {[["banknote", "Le CMG « structure »", "Versé par la CAF chaque mois, il couvre une grande partie du coût selon vos revenus et le nombre d'enfants."],
            ["receipt", "Le crédit d'impôt", "50 % des sommes restant à votre charge, dans la limite du plafond annuel en vigueur."],
            ["building-2", "Les aides employeur", "Certaines entreprises réservent des places ou participent aux frais de garde : pensez à demander."]].map(([icon, t, b], i) => (
            <C2 key={t} style={{ display: "flex", flexDirection: "column", gap: "var(--sp-3)" }}>
              <M2 icon={icon} tone={i === 1 ? "jaune" : "violet"} size={52} />
              <h3 style={{ font: "var(--type-card-title)", fontSize: "var(--fs-subtitle)", color: "var(--text-accent)" }}>{t}</h3>
              <p style={{ font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)" }}>{b}</p>
            </C2>
          ))}
        </div>
      </Section>
    </div>
  );
}

function EquipeScreen({ go }) {
  const PORTRAITS = [A+"photos/equipe-1.png",A+"photos/equipe-2.png",A+"photos/equipe-3.png",A+"photos/equipe-4.png"];
  const team = [
    ["Camille", "Référente technique — éducatrice de jeunes enfants", "Dix ans en multi-accueil, passionnée de motricité libre."],
    ["Sarah", "Auxiliaire de puériculture", "Le calme incarné, spécialiste des premières séparations."],
    ["Léa", "Accompagnante éducative petite enfance", "Comptines, marionnettes et ateliers cuisine."],
    ["Manon", "Auxiliaire de puériculture", "Attentive aux tout-petits et aux temps de sommeil."],
  ];
  return (
    <div>
      <Section py="var(--sp-12)">
        <SH2 eyebrow="L'équipe" title="Les visages des Lucioles" lead="Une équipe stable, formée à la petite enfance, qui connaît chaque enfant et chaque famille par son prénom." />
      </Section>
      <Section tone="card" py="var(--section-y-tight)">
        <div className="rgrid-4" style={{ display: "grid", gap: "var(--sp-8)" }}>
          {team.map(([name, role, mot], idx) => (
            <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--sp-3)", textAlign: "center" }}>
              <img src={PORTRAITS[idx]} alt="" style={{ width: 132, height: 132, borderRadius: "var(--r-pill)", objectFit: "cover", boxShadow: "var(--shadow-card)" }} />
              <span style={{ font: "var(--type-card-title)", color: "var(--text-accent)" }}>{name}</span>
              <span style={{ font: "var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-body)", color: "var(--text-muted)" }}>{role}</span>
              <span style={{ font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)" }}>{mot}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="rgrid-split" style={{ display: "grid", gap: "var(--sp-16)", alignItems: "center" }}>
          <PB2 src={A + "photos/hero-bebe.png"} shape="soft" height={340} />
          <div>
            <h2 style={{ font: "var(--type-section)", marginBottom: "var(--sp-6)" }}>Notre façon de travailler</h2>
            <ul style={{ margin: 0, padding: 0 }}>
              <LI2 icon="user-check" title="Une référente par enfant">Un repère stable pour l'enfant, un interlocuteur clair pour la famille.</LI2>
              <LI2 icon="graduation-cap" tone="jaune" title="Formation continue">Les professionnelles suivent des formations pour enrichir leurs pratiques (signes, langage, motricité).</LI2>
              <LI2 icon="users-round" title="Analyse de la pratique">Une infirmière de puériculture accompagne l'équipe dans sa pratique.</LI2>
              <LI2 icon="heart" tone="jaune" title="Des équipes stables">Peu de turn-over : les enfants retrouvent les mêmes visages toute l'année.</LI2>
            </ul>
          </div>
        </div>
      </Section>
      <Section tone="violet" py="var(--section-y-tight)" style={{ borderRadius: "var(--r-2xl)", maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--sp-10)", flexWrap: "wrap" }}>
          <div>
            <h2 style={{ font: "var(--type-section)", fontSize: "var(--fs-title)", marginBottom: "var(--sp-3)" }}>Vous souhaitez rejoindre l'équipe ?</h2>
            <p style={{ font: "var(--type-body)", maxWidth: "52ch" }}>Nous recrutons régulièrement des auxiliaires de puériculture et des accompagnantes éducatives, à Bosgouet comme à Routot.</p>
          </div>
          <B2 variant="primary" icon="mail" onClick={() => go("Pré-inscription")}>Envoyer une candidature</B2>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { RoutotScreen, JourneeScreen, TarifsScreen, EquipeScreen });
