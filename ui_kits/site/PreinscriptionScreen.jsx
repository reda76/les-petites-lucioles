const { Button: B3, Card: C3, Field: F3, Input: I3, Select: S3, Checkbox: Ck3, RadioGroup: RG3, SectionHeading: SH3, Medallion: M3, ListItem: LI3, PhotoBlob: PB3, Badge: Bg3, ArrowLink: AL3, CTABanner: CTA3 } = DS;

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
  const [sent, setSent] = React.useState(false);
  const [lieu, setLieu] = React.useState("Bosgouet");
  const [ok, setOk] = React.useState(false);
  const [prenom, setPrenom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const emailInvalid = touched && !/.+@.+\..+/.test(email);

  if (sent) {
    return (
      <Section py="var(--sp-24)">
        <C3 style={{ maxWidth: 620, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--sp-5)", padding: "var(--sp-16)" }}>
          <M3 icon="heart-handshake" tone="jaune" size={72} />
          <h2 style={{ font: "var(--type-section)" }}>Merci {prenom ? `pour ${prenom}` : ""} !</h2>
          <p style={{ font: "var(--type-body)" }}>Votre demande de pré-inscription pour {lieu} est bien enregistrée. L'équipe vous recontacte sous 48 heures.</p>
          <B3 variant="secondary" onClick={() => setSent(false)}>Envoyer une autre demande</B3>
        </C3>
      </Section>
    );
  }

  return (
    <div>
      <Section py="var(--sp-12)">
        <SH3 eyebrow="Pré-inscription" title="Et si votre enfant devenait une petite Luciole ?" lead="Quelques informations suffisent — nous revenons vers vous pour convenir d'une visite." />
      </Section>
      <Section tone="card" py="var(--section-y-tight)">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr .6fr", gap: "var(--sp-10)", alignItems: "start" }}>
          <C3 style={{ padding: "var(--sp-12)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--sp-6)" }}>
              <F3 label="Prénom de l'enfant" required><I3 value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Camille" /></F3>
              <F3 label="Date de naissance (ou terme prévu)"><I3 type="date" /></F3>
              <F3 label="Votre nom" required><I3 placeholder="Dupont" /></F3>
              <F3 label="Téléphone"><I3 type="tel" placeholder="06 12 34 56 78" /></F3>
              <F3 label="Adresse e-mail" required style={{ gridColumn: "span 2" }} error={emailInvalid ? "Merci d'indiquer une adresse valide." : null} hint="Nous vous répondons sous 48 h.">
                <I3 type="email" value={email} invalid={emailInvalid} onBlur={() => setTouched(true)} onChange={(e) => setEmail(e.target.value)} placeholder="vous@exemple.fr" />
              </F3>
              <F3 label="Micro-crèche souhaitée" style={{ gridColumn: "span 2" }}><RG3 options={["Bosgouet", "Routot", "Peu importe"]} value={lieu} onChange={setLieu} /></F3>
              <F3 label="Type d'accueil"><S3 options={["Temps plein", "Temps partiel", "Accueil occasionnel"]} /></F3>
              <F3 label="Date d'entrée souhaitée"><I3 type="date" /></F3>
              <F3 label="Votre message" style={{ gridColumn: "span 2" }}><I3 multiline rows={4} placeholder="Parlez-nous de votre enfant, de vos horaires, de vos questions…" /></F3>
              <Ck3 checked={ok} onChange={setOk} label="J'accepte d'être recontacté(e) par l'équipe des Lucioles au sujet de ma demande." style={{ gridColumn: "span 2" }} />
              <div style={{ gridColumn: "span 2", display: "flex", gap: "var(--gap-inline)", alignItems: "center" }}>
                <B3 variant="accent" icon="clipboard-list" disabled={!ok} onClick={() => ok && setSent(true)}>Envoyer ma pré-inscription</B3>
                <span style={{ font: "var(--fw-regular) var(--fs-caption)/1.5 var(--font-body)", color: "var(--text-muted)" }}>Sans engagement.</span>
              </div>
            </div>
          </C3>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)" }}>
            <C3 tone="violet">
              <h3 style={{ font: "var(--type-card-title)", color: "var(--text-accent)", marginBottom: "var(--sp-4)" }}>Comment ça se passe ?</h3>
              <ul style={{ margin: 0, padding: 0 }}>
                <LI3 icon="send" title="1. Vous envoyez le formulaire" />
                <LI3 icon="phone-call" title="2. Nous vous appelons sous 48 h" />
                <LI3 icon="calendar-heart" title="3. Vous venez visiter" />
                <LI3 icon="check" title="4. La place est confirmée" />
              </ul>
            </C3>
            <C3 tone="jaune">
              <h3 style={{ font: "var(--type-card-title)", color: "var(--text-accent)", marginBottom: "var(--sp-3)" }}>Besoin de nous parler ?</h3>
              <p style={{ font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)" }}>02 77 73 07 24<br />lespetiteslucioles27@gmail.com</p>
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
