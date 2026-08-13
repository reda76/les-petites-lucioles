const { Button, Badge, SectionHeading, Card, ArrowLink, Medallion } = DS;
const { ValueCard, CrecheCard, PhotoBlob, CTABanner, AvatarRow } = DS;

function Hero({ go }) {
  return (
    <section style={{ padding: "var(--sp-10) var(--page-gutter) var(--sp-20)", position: "relative" }}>
      <div className="rgrid-hero" style={{ maxWidth: "var(--container)", margin: "0 auto", display: "grid", gap: "var(--sp-16)", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-6)", alignItems: "flex-start" }}>
          <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "var(--text-eyebrow)" }}>Micro-crèches à taille humaine</span>
          <h1 style={{ font: "var(--type-hero)", color: "var(--encre-900)" }}>
            Des micro-crèches à taille humaine,<br />
            <span style={{ color: "var(--text-display)" }}>où chaque enfant grandit à son rythme.</span>
          </h1>
          <p style={{ font: "var(--fw-regular) var(--fs-body-lg)/var(--lh-body) var(--font-body)", color: "var(--text-body)", maxWidth: "46ch" }}>
            Un lieu de vie bienveillant, sécurisant et chaleureux pour accompagner les tout-petits dans leurs découvertes et leurs premiers pas vers l'autonomie.
          </p>
          <div style={{ display: "flex", gap: "var(--gap-inline)", flexWrap: "wrap", marginTop: "var(--sp-3)" }}>
            <Button variant="primary" icon="house" onClick={() => go("La maison des Lucioles")}>Découvrir Bosgouet</Button>
            <Button variant="secondary" icon="map-pin" onClick={() => go("Routot")}>Découvrir Routot</Button>
            <Button variant="accent" icon="clipboard-list" onClick={() => go("Pré-inscription")}>Pré-inscription</Button>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img className="deco" src={A + "illustrations/abeille-t.png"} alt="" style={{ position: "absolute", left: -70, top: 40, width: 70, opacity: .95 }} />
          <PhotoBlob src={A + "photos/hero-bebe.png"} height={470} />
          <img className="deco" src={A + "illustrations/feuillage-violet-t.png"} alt="" style={{ position: "absolute", right: -34, bottom: -30, width: 120 }} />
        </div>
      </div>
    </section>
  );
}

function Valeurs() {
  return (
    <Section tone="card" py="var(--section-y-tight)" style={{ borderRadius: "var(--r-2xl)", maxWidth: 1240, margin: "0 auto" }}>
      <SectionHeading title="Notre façon d'accueillir" style={{ marginBottom: "var(--sp-12)" }} />
      <div className="rgrid-4" style={{ display: "grid", gap: "var(--sp-8)" }}>
        <ValueCard icon="users" title="À taille humaine">Un petit nombre d'enfants pour un accompagnement individualisé.</ValueCard>
        <ValueCard icon="heart-handshake" tone="jaune" title="Bienveillance">Une équipe attentive aux besoins de chaque enfant et de sa famille.</ValueCard>
        <ValueCard icon="sprout" title="Éveil & autonomie">Des activités adaptées au rythme et au développement de chaque enfant.</ValueCard>
        <ValueCard icon="shield-check" tone="jaune" title="Sécurité">Un environnement pensé pour le bien-être et la sécurité des tout-petits.</ValueCard>
      </div>
    </Section>
  );
}

function Creches({ go }) {
  return (
    <Section>
      <SectionHeading title="Nos deux micro-crèches en Normandie" style={{ marginBottom: "var(--sp-12)" }} />
      <div className="rgrid-2" style={{ display: "grid", gap: "var(--gap-cards)" }}>
        <CrecheCard image={A + "photos/salle-bosgouet.png"} badge="Bosgouet" title="La maison des Lucioles" address="60 rue Guy de Milleville – 27310 Bosgouet" ornament={A + "illustrations/feuillage-violet-t.png"} onClick={() => go("La maison des Lucioles")}>
          Un lieu chaleureux et familial où les enfants s'épanouissent chaque jour.
        </CrecheCard>
        <CrecheCard image={A + "photos/salle-routot.png"} badge="Routot" badgeIcon="map-pin" title="Micro-crèche à Routot" address="Ouverture mars 2027 – 27350 Routot" linkLabel="Découvrir Routot" ornament={A + "illustrations/feuillage-jaune-t.png"} onClick={() => go("Routot")}>
          Un nouvel espace pensé pour accueillir les enfants dans un cadre doux et sécurisé.
        </CrecheCard>
      </div>
    </Section>
  );
}

function RoutotFocus({ go }) {
  return (
    <Section tone="jaune" style={{ borderRadius: "var(--r-2xl)", maxWidth: 1240, margin: "0 auto" }}>
      <div className="rgrid-split" style={{ display: "grid", gap: "var(--sp-16)", alignItems: "center" }}>
        <PhotoBlob src={A + "photos/salle-routot.png"} shape="soft" height={380} mat={false} />
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)", alignItems: "flex-start" }}>
          <Badge tone="jaune" icon="sparkles">Nouveau — ouverture mars 2027</Badge>
          <h2 style={{ font: "var(--type-section)" }}>Notre nouvelle micro-crèche à Routot</h2>
          <p style={{ font: "var(--type-body)", maxWidth: "56ch" }}>
            Routot prolonge ce que nous faisons à Bosgouet : dix places, une équipe stable, des espaces pensés
            pour que chaque enfant trouve sa place. Des matières naturelles, beaucoup de lumière, des coins doux
            pour se poser et des espaces ouverts pour explorer.
          </p>
          <p style={{ font: "var(--type-body)", maxWidth: "56ch" }}>
            Le rythme de l'enfant guide la journée : on ne réveille pas un enfant qui dort, on n'oblige pas un enfant
            à jouer. Les familles sont accompagnées avant l'arrivée, pendant l'adaptation, puis chaque matin par une
            transmission tranquille.
          </p>
          <div style={{ display: "flex", gap: "var(--gap-inline)", marginTop: "var(--sp-2)" }}>
            <Button variant="primary" icon="map-pin" onClick={() => go("Routot")}>Découvrir le projet de Routot</Button>
            <Button variant="secondary" onClick={() => go("Pré-inscription")}>Pré-inscrire mon enfant</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function JourneeTeaser({ go }) {
  return (
    <Section>
      <div className="rgrid-2" style={{ display: "grid", gap: "var(--sp-12)", alignItems: "center", background: "var(--surface-card)", borderRadius: "var(--r-2xl)", padding: "var(--sp-6)", boxShadow: "var(--shadow-card)" }}>
        <img src={A + "photos/enfants-jeux.png"} alt="" style={{ width: "100%", height: 300, objectFit: "cover", borderRadius: "var(--r-photo)" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)", alignItems: "flex-start", paddingRight: "var(--sp-8)" }}>
          <h2 style={{ font: "var(--type-section)", fontSize: "var(--fs-title)" }}>Une journée chez les Lucioles</h2>
          <p style={{ font: "var(--type-body)", maxWidth: "48ch" }}>
            Accueil, jeux libres, comptines, activités, repas, sieste, goûter… Chaque moment de la journée est pensé
            pour respecter les besoins et le rythme de l'enfant.
          </p>
          <Button variant="primary" iconRight="arrow-right" onClick={() => go("Une journée chez les Lucioles")}>Découvrir une journée chez les Lucioles</Button>
        </div>
      </div>
    </Section>
  );
}

function EquipeTarifs({ go }) {
  return (
    <Section py="var(--section-y-tight)">
      <div className="rgrid-2" style={{ display: "grid", gap: "var(--gap-cards)" }}>
        <Card tone="violet" style={{ position: "relative" }}>
          <h3 style={{ font: "var(--type-card-title)", fontSize: "var(--fs-title)", color: "var(--text-accent)", marginBottom: "var(--sp-4)" }}>Une équipe engagée</h3>
          <p style={{ font: "var(--type-body)", maxWidth: "44ch" }}>Notre équipe de professionnelles passionnées accompagne chaque enfant avec bienveillance, attention et respect de son rythme.</p>
          <AvatarRow photos={[A + "photos/equipe-1.png", A + "photos/equipe-2.png", A + "photos/equipe-3.png", A + "photos/equipe-4.png"]} style={{ margin: "var(--sp-6) 0" }} />
          <Button variant="primary" iconRight="arrow-right" onClick={() => go("L'équipe des Lucioles")}>Découvrir notre équipe</Button>
        </Card>
        <Card tone="jaune" style={{ position: "relative" }}>
          <h3 style={{ font: "var(--type-card-title)", fontSize: "var(--fs-title)", color: "var(--text-accent)", marginBottom: "var(--sp-4)" }}>Tarification</h3>
          <p style={{ font: "var(--type-body)", maxWidth: "44ch" }}>Le tarif comprend notamment l'accueil, les repas et les produits de soin. Les familles peuvent également bénéficier d'aides financières selon leur situation.</p>
          <Button variant="accent" iconRight="arrow-right" style={{ marginTop: "var(--sp-8)" }} onClick={() => go("Tarification")}>Découvrir nos tarifs et les aides</Button>
          <img src={A + "illustrations/tirelire-t.png"} alt="" className="deco-sm" style={{ position: "absolute", right: "var(--sp-6)", bottom: "var(--sp-5)", width: 96 }} />
        </Card>
      </div>
    </Section>
  );
}

function Partenaires() {
  const logos = [
    [A + "partenaires/caf-eure.png", "Caf de l'Eure"],
    [A + "partenaires/region-normandie.png", "Région Normandie"],
    [A + "partenaires/pont-audemer-val-de-risle.png", "Communauté de communes Pont-Audemer Val de Risle"],
    [A + "partenaires/roumois-seine.png", "Communauté de communes Roumois Seine"],
  ];
  return (
    <Section py="var(--section-y-tight)">
      <SectionHeading eyebrow="Ils nous accompagnent" title="Nos partenaires" style={{ marginBottom: "var(--sp-10)" }} />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "stretch", gap: "var(--gap-cards)", flexWrap: "wrap" }}>
        {logos.map(([src, name]) => (
          <div key={name} style={{ background: "var(--surface-card)", borderRadius: "var(--r-lg)", boxShadow: "var(--shadow-card)", padding: "var(--sp-5) var(--sp-8)", display: "flex", alignItems: "center", justifyContent: "center", width: 250, height: 120 }}>
            <img src={src} alt={name} title={name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
          </div>
        ))}
      </div>
    </Section>
  );
}

function HomeScreen({ go }) {
  return (
    <div>
      <Hero go={go} />
      <Valeurs />
      <Creches go={go} />
      <RoutotFocus go={go} />
      <JourneeTeaser go={go} />
      <EquipeTarifs go={go} />
      <Partenaires />
      <Section py="var(--section-y-tight)">
        <CTABanner title="Et si votre enfant devenait une petite Luciole ?" image={A + "photos/enfant-sourire.png"} ornament={A + "illustrations/abeille-t.png"} onClick={() => go("Pré-inscription")}>
          Vous avez une question ou souhaitez pré-inscrire votre enfant ? Écrivez-nous, nous vous répondons sous 48 heures.
        </CTABanner>
      </Section>
    </div>
  );
}

Object.assign(window, { HomeScreen, Hero, Valeurs, Creches, RoutotFocus, JourneeTeaser, EquipeTarifs, Partenaires });
