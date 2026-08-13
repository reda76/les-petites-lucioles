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

Object.assign(window, { A, NAV, DS, Section });
