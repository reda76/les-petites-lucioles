const A = "../../assets/";
const NAV = ["Accueil", "La maison des Lucioles", "Une journée chez les Lucioles", "Tarification", "L'équipe des Lucioles"];
const DS = window.LesPetitesLuciolesDesignSystem_2ecf58;

function Section({ children, tone = "page", py = "var(--section-y)", style }) {
  const bg = { page: "var(--surface-page)", card: "var(--surface-card)", jaune: "var(--surface-soft-jaune)", violet: "var(--surface-soft-violet)", sunken: "var(--surface-sunken)" }[tone];
  return (
    <section style={{ background: bg, padding: `${py} var(--page-gutter)`, ...style }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function MobileActionBar({ go, hidden }) {
  if (hidden) return null;
  return (
    <div className="mab">
      <a className="mab-tel" href="tel:+33277730724" aria-label="Appeler la micro-crèche">
        <DS.Icon name="phone" size={18} color="var(--action-secondary-text)" /> Appeler
      </a>
      <button className="mab-cta" type="button" onClick={() => go("Pré-inscription")}>
        <DS.Icon name="clipboard-list" size={18} color="var(--action-accent-text)" /> Pré-inscrire mon enfant
      </button>
    </div>
  );
}

Object.assign(window, { A, NAV, DS, Section, MobileActionBar });
