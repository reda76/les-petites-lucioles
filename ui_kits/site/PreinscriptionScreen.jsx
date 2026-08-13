const { Button: B3, Card: C3, Field: F3, Input: I3, Select: S3, Checkbox: Ck3, RadioGroup: RG3, SectionHeading: SH3, Medallion: M3, ListItem: LI3, PhotoBlob: PB3, Badge: Bg3, ArrowLink: AL3, CTABanner: CTA3 } = DS;

const GERTRUDE = "https://lespetiteslucioles.gertrude-logiciel.org/preinscription";

function FAQ({ items }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-3)" }}>
      {items.map(([q, a], i) => (
        <C3 key={q} padding="var(--sp-5) var(--sp-6)" style={{ cursor: "pointer" }} onClick={() => setOpen(open === i ? -1 : i)}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--sp-4)" }}>
            <span style={{ font: "var(--fw-semibold) var(--fs-body)/1.5 var(--font-body)", color: "var(--text-strong)" }}>{q}</span>
            <span style={{ font: "var(--fw-bold) 22px/1 var(--font-body)", color: "var(--violet-600)" }}>{open === i ? "–" : "+"}</span>
          </div>
          {open === i ? <p style={{ marginTop: "var(--sp-3)", font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)", maxWidth: "72ch" }}>{a}</p> : null}
        </C3>
      ))}
    </div>
  );
}

function PreinscriptionScreen() {
  return (
    <div>
      <Section py="var(--sp-12)">
        <SH3 eyebrow="Pré-inscription" title="Et si votre enfant devenait une petite Luciole ?" lead="La pré-inscription se fait en ligne, en quelques minutes — nous revenons vers vous pour convenir d'une visite." />
      </Section>
      <Section tone="card" py="var(--section-y-tight)">
        <div className="rgrid-form-layout" style={{ display: "grid", gap: "var(--sp-10)", alignItems: "start" }}>
          <C3 style={{ padding: "var(--sp-12)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--sp-5)" }}>
            <M3 icon="clipboard-list" tone="jaune" size={64} />
            <h3 style={{ font: "var(--type-card-title)", fontSize: "var(--fs-title)", color: "var(--text-accent)" }}>Pré-inscrivez votre enfant en ligne</h3>
            <p style={{ font: "var(--type-body)", maxWidth: "52ch" }}>
              Renseignez vos coordonnées, celles de votre enfant et vos besoins d'accueil sur notre
              portail sécurisé. Quelques minutes suffisent, et c'est sans engagement : l'équipe vous
              recontacte sous 48 heures pour convenir d'une visite.
            </p>
            <div className="btn-row" style={{ display: "flex", gap: "var(--gap-inline)", flexWrap: "wrap", marginTop: "var(--sp-2)" }}>
              <B3 variant="accent" icon="clipboard-list" href={GERTRUDE} target="_blank" rel="noreferrer">Remplir la pré-inscription</B3>
            </div>
            <span style={{ font: "var(--fw-regular) var(--fs-caption)/1.5 var(--font-body)", color: "var(--text-muted)" }}>
              Le formulaire s'ouvre dans un nouvel onglet, sur Gertrude — notre outil sécurisé de gestion des pré-inscriptions.
            </span>
          </C3>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)" }}>
            <C3 tone="violet">
              <h3 style={{ font: "var(--type-card-title)", color: "var(--text-accent)", marginBottom: "var(--sp-4)" }}>Comment ça se passe ?</h3>
              <ul style={{ margin: 0, padding: 0 }}>
                <LI3 icon="send" title="1. Vous remplissez le formulaire en ligne" />
                <LI3 icon="phone-call" title="2. Nous vous appelons sous 48 h" />
                <LI3 icon="calendar-heart" title="3. Vous venez visiter" />
                <LI3 icon="check" title="4. La place est confirmée" />
              </ul>
            </C3>
            <C3 tone="jaune">
              <h3 style={{ font: "var(--type-card-title)", color: "var(--text-accent)", marginBottom: "var(--sp-3)" }}>Besoin de nous parler ?</h3>
              <p style={{ font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)" }}><a href="tel:+33277730724" style={{ color: "inherit" }}>02 77 73 07 24</a><br /><a href="mailto:lespetiteslucioles27@gmail.com" style={{ color: "inherit" }}>lespetiteslucioles27@gmail.com</a></p>
            </C3>
          </div>
        </div>
      </Section>
      <Section py="var(--section-y-tight)">
        <SH3 title="Les questions que l'on nous pose souvent" style={{ marginBottom: "var(--sp-8)" }} />
        <FAQ items={[
          ["À partir de quel âge accueillez-vous les enfants ?", "Dès 10 semaines, et jusqu'à l'entrée à l'école maternelle. Les deux micro-crèches accueillent des enfants d'âges mélangés, ce qui nourrit beaucoup les apprentissages."],
          ["Peut-on s'inscrire avant la naissance ?", "Oui, et c'est même conseillé. Indiquez simplement le terme prévu dans le formulaire ; nous confirmons la place une fois l'enfant né."],
          ["Faut-il fournir les repas et les couches ?", "Non. Les repas, les goûters, les couches et les produits de soin sont compris dans le tarif horaire."],
          ["Comment se passe l'adaptation ?", "Sur une semaine, progressivement : une heure avec vous, puis une heure sans vous, puis une matinée, puis une journée complète. Nous nous adaptons au rythme de votre enfant."],
        ]} />
      </Section>
    </div>
  );
}

Object.assign(window, { PreinscriptionScreen, FAQ });
