/* @ds-bundle: {"format":4,"namespace":"LesPetitesLuciolesDesignSystem_2ecf58","components":[{"name":"AvatarRow","sourcePath":"components/content/AvatarRow.jsx"},{"name":"CTABanner","sourcePath":"components/content/CTABanner.jsx"},{"name":"CrecheCard","sourcePath":"components/content/CrecheCard.jsx"},{"name":"ListItem","sourcePath":"components/content/ListItem.jsx"},{"name":"PhotoBlob","sourcePath":"components/content/PhotoBlob.jsx"},{"name":"ValueCard","sourcePath":"components/content/ValueCard.jsx"},{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Medallion","sourcePath":"components/core/Medallion.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/content/AvatarRow.jsx":"bae2262ddbc9","components/content/CTABanner.jsx":"1a11be89b98b","components/content/CrecheCard.jsx":"3644c6da3b26","components/content/ListItem.jsx":"109d29f312ed","components/content/PhotoBlob.jsx":"9866cdaa3ed7","components/content/ValueCard.jsx":"0cd6cff3c430","components/core/ArrowLink.jsx":"aed4c9bcc9ba","components/core/Badge.jsx":"243082e9c84d","components/core/Button.jsx":"3671370418c8","components/core/Card.jsx":"3b77ae8fd320","components/core/Icon.jsx":"858c01c0b2be","components/core/Medallion.jsx":"73c1daac5c20","components/core/SectionHeading.jsx":"51540b85de03","components/forms/Checkbox.jsx":"4c71335ccbfa","components/forms/Field.jsx":"ca627e88a5c0","components/forms/Input.jsx":"4cde69bdd768","components/forms/RadioGroup.jsx":"34dea0b36c5b","components/forms/Select.jsx":"205e4646cbe6","components/navigation/SiteFooter.jsx":"bad1ff214ea1","components/navigation/SiteHeader.jsx":"585506ecbb17","ui_kits/site/HomeScreen.jsx":"d84f2b33f808","ui_kits/site/MaisonScreen.jsx":"7d3f06447a14","ui_kits/site/PagesScreens.jsx":"39b4afb03047","ui_kits/site/PreinscriptionScreen.jsx":"ddb50f84f44c","ui_kits/site/shared.jsx":"429d32f9ca0b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LesPetitesLuciolesDesignSystem_2ecf58 = window.LesPetitesLuciolesDesignSystem_2ecf58 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/AvatarRow.jsx
try { (() => {
/** Row of overlapping circular portraits — used for the team teaser. */
function AvatarRow({
  photos = [],
  size = 68,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      ...style
    }
  }, photos.map((src, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: src,
    alt: "",
    style: {
      width: size,
      height: size,
      borderRadius: "var(--r-pill)",
      objectFit: "cover",
      border: "3px solid var(--surface-card)",
      marginLeft: i === 0 ? 0 : -12,
      boxShadow: "var(--shadow-xs)"
    }
  })));
}
Object.assign(__ds_scope, { AvatarRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AvatarRow.jsx", error: String((e && e.message) || e) }); }

// components/content/PhotoBlob.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Photography in an organic blob or soft-rounded frame, on a warm mat. */
function PhotoBlob({
  src,
  alt = "",
  shape = "blob",
  height = 420,
  mat = true,
  style,
  ...rest
}) {
  const radii = {
    blob: "var(--blob-hero)",
    soft: "var(--blob-soft)",
    rounded: "var(--r-photo)",
    circle: "var(--r-pill)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "photo-blob",
    style: {
      position: "relative",
      ...style
    }
  }, rest), mat ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-18px -22px -26px -14px",
      background: "var(--surface-photo-mat)",
      borderRadius: radii[shape] || radii.blob,
      opacity: 0.85
    }
  }) : null, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: "relative",
      width: "100%",
      height,
      objectFit: "cover",
      borderRadius: radii[shape] || radii.blob,
      boxShadow: "var(--shadow-photo)"
    }
  }));
}
Object.assign(__ds_scope, { PhotoBlob });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PhotoBlob.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Warm ivory surface with soft radius and warm-tinted shadow. */
function Card({
  tone = "card",
  padding = "var(--sp-8)",
  hoverable = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const backgrounds = {
    card: "var(--surface-card)",
    violet: "var(--surface-soft-violet)",
    jaune: "var(--surface-soft-jaune)",
    sunken: "var(--surface-sunken)",
    inverse: "var(--surface-inverse)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false)
  }, rest, {
    style: {
      background: backgrounds[tone],
      color: tone === "inverse" ? "var(--text-on-inverse)" : "var(--text-body)",
      borderRadius: "var(--r-card)",
      padding,
      boxShadow: hover ? "var(--shadow-card-hover)" : "var(--shadow-card)",
      transform: hover ? "var(--lift-hover)" : "none",
      transition: "var(--transition-interactive)",
      overflow: "hidden",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON_BASE = "https://cdn.jsdelivr.net/npm/lucide-static@0.469.0/icons/";
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeless = false,
  style,
  ...rest
}) {
  const url = `${ICON_BASE}${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: "inline-block",
      flex: "none",
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: `url("${url}")`,
      maskImage: `url("${url}")`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      opacity: strokeless ? 0.9 : 1,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/ListItem.jsx
try { (() => {
/** One line of an included-in-the-price / schedule list, with a check or time marker. */
function ListItem({
  icon = "check",
  time,
  title,
  children,
  tone = "violet",
  style
}) {
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      gap: "var(--sp-4)",
      alignItems: "flex-start",
      padding: "var(--sp-4) 0",
      borderBottom: "1px solid var(--border-soft)",
      listStyle: "none",
      ...style
    }
  }, time ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-body-sm)/1.4 var(--font-body)",
      color: "var(--text-accent)",
      minWidth: 62
    }
  }, time) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 26,
      height: 26,
      borderRadius: "var(--r-pill)",
      background: tone === "jaune" ? "var(--jaune-200)" : "var(--violet-100)",
      flex: "none",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    color: "var(--medallion-icon)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--fs-body-sm)/1.4 var(--font-body)",
      color: "var(--text-strong)"
    }
  }, title), children ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)",
      color: "var(--text-muted)"
    }
  }, children) : null));
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text link with a trailing arrow — the standard "read more" affordance. */
function ArrowLink({
  children,
  href = "#",
  tone = "violet",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color = tone === "inverse" ? "var(--text-on-inverse)" : "var(--text-accent)";
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-2)",
      color,
      font: "var(--fw-semibold) var(--fs-body-sm)/1.3 var(--font-body)",
      textDecoration: "none",
      transition: "var(--transition-interactive)",
      ...style
    }
  }), children, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      transform: hover ? "translateX(3px)" : "none",
      transition: "transform var(--dur-base) var(--ease-soft)"
    }
  }));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small pill label — site names, statuses, categories. */
function Badge({
  tone = "violet",
  icon,
  children,
  style,
  ...rest
}) {
  const tones = {
    violet: {
      background: "var(--violet-200)",
      color: "var(--violet-900)"
    },
    jaune: {
      background: "var(--jaune-200)",
      color: "var(--violet-900)"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--violet-800)",
      boxShadow: "inset 0 0 0 1.5px var(--border-violet)"
    },
    inverse: {
      background: "rgba(255,251,248,.16)",
      color: "var(--text-on-inverse)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-2)",
      padding: "8px 14px",
      borderRadius: "var(--r-pill)",
      font: "var(--fw-semibold) var(--fs-caption)/1.2 var(--font-body)",
      ...tones,
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/CrecheCard.jsx
try { (() => {
/** Photo-topped card presenting one micro-crèche (Bosgouet / Routot). */
function CrecheCard({
  image,
  badge,
  badgeIcon = "house",
  title,
  address,
  children,
  linkLabel = "Découvrir la micro-crèche",
  href,
  onClick,
  ornament,
  style
}) {
  const activate = onClick ? e => {
    e.preventDefault();
    onClick(e);
  } : undefined;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    hoverable: true,
    padding: "0",
    onClick: activate,
    style: {
      display: "flex",
      flexDirection: "column",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: 210,
      objectFit: "cover"
    }
  }), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    icon: badgeIcon,
    style: {
      position: "absolute",
      top: "var(--sp-4)",
      left: "var(--sp-4)",
      padding: "10px 16px",
      boxShadow: "var(--shadow-xs)"
    }
  }, badge) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "var(--sp-8)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-accent)"
    }
  }, title), address ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, address) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)",
      color: "var(--text-body)",
      maxWidth: "42ch"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: href || "#",
    onClick: activate
  }, linkLabel)), ornament ? /*#__PURE__*/React.createElement("img", {
    src: ornament,
    alt: "",
    className: "deco-sm",
    style: {
      position: "absolute",
      right: "var(--sp-5)",
      bottom: "var(--sp-4)",
      width: 74,
      opacity: 0.9,
      pointerEvents: "none"
    }
  }) : null));
}
Object.assign(__ds_scope, { CrecheCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CrecheCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Rounded, generous buttons — the only three treatments used on the site.
 */
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  href,
  as,
  children,
  style,
  disabled = false,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: {
      padding: "10px 16px",
      font: "var(--fw-semibold) var(--fs-caption)/1.2 var(--font-body)",
      radius: "var(--r-sm)",
      icon: 16
    },
    md: {
      padding: "15px 22px",
      font: "var(--type-button)",
      radius: "var(--r-button)",
      icon: 18
    },
    lg: {
      padding: "18px 28px",
      font: "var(--fw-semibold) var(--fs-body)/1.2 var(--font-body)",
      radius: "var(--r-lg)",
      icon: 20
    }
  }[size];
  const variants = {
    primary: {
      background: hover ? "var(--action-primary-hover)" : "var(--action-primary)",
      color: "var(--action-primary-text)",
      border: "1.5px solid transparent",
      boxShadow: hover ? "var(--shadow-button)" : "none"
    },
    secondary: {
      background: hover ? "var(--action-secondary-hover-bg)" : "var(--surface-card)",
      color: "var(--action-secondary-text)",
      border: "1.5px solid var(--action-secondary-border)",
      boxShadow: "none"
    },
    accent: {
      background: hover ? "var(--action-accent-hover)" : "var(--action-accent)",
      color: "var(--action-accent-text)",
      border: "1.5px solid transparent",
      boxShadow: "none"
    },
    ghost: {
      background: hover ? "var(--action-secondary-hover-bg)" : "transparent",
      color: "var(--action-secondary-text)",
      border: "1.5px solid transparent",
      boxShadow: "none"
    }
  }[variant];
  const Tag = as || (href ? "a" : "button");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      padding: sizes.padding,
      borderRadius: sizes.radius,
      font: sizes.font,
      letterSpacing: "var(--ls-button)",
      textDecoration: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? "var(--press-scale)" : "none",
      transition: "var(--transition-interactive)",
      ...variants,
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sizes.icon
  }) : null, /*#__PURE__*/React.createElement("span", null, children), iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: sizes.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/CTABanner.jsx
try { (() => {
/** Full-width violet call-to-action band with a photo on the right. */
function CTABanner({
  title,
  children,
  ctaLabel = "Pré-inscrire votre enfant",
  ctaIcon = "clipboard-list",
  href,
  onClick,
  image,
  ornament,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cta-banner",
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.25fr .9fr",
      alignItems: "stretch",
      gap: "var(--sp-8)",
      background: "var(--surface-inverse)",
      borderRadius: "var(--r-2xl)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sp-16) var(--sp-12)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--fw-regular) var(--fs-display-3)/var(--lh-title) var(--font-display)",
      color: "var(--text-on-inverse)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body)/var(--lh-body) var(--font-body)",
      color: "var(--text-on-inverse-muted)",
      maxWidth: "44ch"
    }
  }, children), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "accent",
    icon: ctaIcon,
    href: href,
    onClick: onClick,
    style: {
      marginTop: "var(--sp-3)"
    }
  }, ctaLabel), ornament ? /*#__PURE__*/React.createElement("img", {
    src: ornament,
    alt: "",
    style: {
      position: "absolute",
      left: "var(--sp-5)",
      top: "var(--sp-6)",
      width: 66,
      opacity: 0.5,
      pointerEvents: "none"
    }
  }) : null), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "var(--blob-soft)",
      transform: "scale(1.04)"
    }
  }) : null);
}
Object.assign(__ds_scope, { CTABanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CTABanner.jsx", error: String((e && e.message) || e) }); }

// components/core/Medallion.jsx
try { (() => {
/** Soft round medallion holding a single icon — the value/feature marker. */
function Medallion({
  icon,
  tone = "violet",
  size = 64,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--r-medallion)",
      background: tone === "jaune" ? "var(--medallion-jaune)" : "var(--medallion-violet)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.42),
    color: "var(--medallion-icon)"
  }));
}
Object.assign(__ds_scope, { Medallion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Medallion.jsx", error: String((e && e.message) || e) }); }

// components/content/ValueCard.jsx
try { (() => {
/** One of the four "façon d'accueillir" values: medallion, title, copy, coloured rule. */
function ValueCard({
  icon,
  tone = "violet",
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--sp-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Medallion, {
    icon: icon,
    tone: tone
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      fontSize: "var(--fs-subtitle)",
      color: "var(--text-accent)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)",
      color: "var(--text-body)",
      maxWidth: "28ch"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 3,
      borderRadius: "var(--r-pill)",
      background: tone === "jaune" ? "var(--rule-jaune)" : "var(--rule-violet)",
      marginTop: "var(--sp-2)"
    }
  }));
}
Object.assign(__ds_scope, { ValueCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ValueCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/** Eyebrow + serif title (+ optional lead paragraph) opening a section. */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "default",
  style
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      maxWidth: align === "center" ? "var(--container-narrow)" : "none",
      marginInline: align === "center" ? "auto" : 0,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: inverse ? "var(--text-on-inverse-muted)" : "var(--text-eyebrow)"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-section)",
      color: inverse ? "var(--text-on-inverse)" : "var(--text-display)"
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-lg)/var(--lh-body) var(--font-body)",
      color: inverse ? "var(--text-on-inverse-muted)" : "var(--text-body)",
      maxWidth: "62ch"
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Rounded checkbox with brand violet fill. */
function Checkbox({
  checked = false,
  onChange,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--sp-3)",
      cursor: "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: e => onChange && onChange(e.target.checked)
  }, rest, {
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 22,
      height: 22,
      flex: "none",
      borderRadius: "var(--r-xs)",
      border: `1.5px solid ${checked ? "var(--action-primary)" : "var(--border-soft)"}`,
      background: checked ? "var(--action-primary)" : "var(--surface-card)",
      transition: "var(--transition-interactive)"
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--action-primary-text)"
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/1.55 var(--font-body)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/** Label + control wrapper with optional hint / error text. */
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: "var(--fw-semibold) var(--fs-body-sm)/1.3 var(--font-body)",
      color: "var(--text-strong)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--violet-600)"
    }
  }, " *") : null), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.4 var(--font-body)",
      color: "#b4443c"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.5 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const inputBase = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "var(--r-sm)",
  border: "1.5px solid var(--border-soft)",
  background: "var(--surface-card)",
  font: "var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-body)",
  color: "var(--text-strong)",
  transition: "var(--transition-interactive)",
  outline: "none"
};

/** Single-line text input (also type="email" / "tel" / "date"). */
function Input({
  multiline = false,
  rows = 4,
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = {
    ...inputBase,
    borderColor: invalid ? "#b4443c" : focus ? "var(--violet-600)" : "var(--border-soft)",
    boxShadow: focus ? "0 0 0 4px var(--violet-50)" : "none",
    ...style
  };
  const handlers = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  };
  return multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, handlers, rest, {
    style: {
      ...s,
      resize: "vertical",
      minHeight: 110
    }
  })) : /*#__PURE__*/React.createElement("input", _extends({}, handlers, rest, {
    style: s
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
/** Segmented radio group — used to pick a crèche (Bosgouet / Routot). */
function RadioGroup({
  options = [],
  value,
  onChange,
  name = "choice",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      flexWrap: "wrap",
      ...style
    }
  }, options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    const selected = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      role: "radio",
      "aria-checked": selected,
      name: name,
      onClick: () => onChange && onChange(val),
      style: {
        padding: "12px 20px",
        borderRadius: "var(--r-pill)",
        border: `1.5px solid ${selected ? "var(--action-primary)" : "var(--border-soft)"}`,
        background: selected ? "var(--violet-100)" : "var(--surface-card)",
        color: selected ? "var(--violet-900)" : "var(--text-body)",
        font: "var(--fw-semibold) var(--fs-body-sm)/1.2 var(--font-body)",
        cursor: "pointer",
        transition: "var(--transition-interactive)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Input. */
function Select({
  options = [],
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "var(--r-sm)",
      border: `1.5px solid ${invalid ? "#b4443c" : focus ? "var(--violet-600)" : "var(--border-soft)"}`,
      background: "var(--surface-card)",
      font: "var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-body)",
      color: "var(--text-strong)",
      boxShadow: focus ? "0 0 0 4px var(--violet-50)" : "none",
      appearance: "none",
      outline: "none",
      transition: "var(--transition-interactive)",
      ...style
    }
  }), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
/** Four-column footer with a violet legal bar underneath. */
function SiteFooter({
  logo,
  columns = [],
  contact = [],
  onNavigate,
  legal = "© 2026 Les Petites Lucioles – Tous droits réservés",
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-page)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid",
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--sp-12) var(--page-gutter)",
      display: "grid",
      gridTemplateColumns: "auto 1.2fr 1fr 1fr 1.1fr",
      gap: "var(--sp-10)",
      alignItems: "start"
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "",
    style: {
      width: 84,
      height: 84,
      objectFit: "contain",
      opacity: 0.9
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--fs-body-sm)/1.4 var(--font-body)",
      color: "var(--text-accent)"
    }
  }, "Les Petites Lucioles"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.7 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, "Micro-cr\xE8ches \xE0 Bosgouet et Routot", /*#__PURE__*/React.createElement("br", null), "en Normandie")), columns.map((col, i) => /*#__PURE__*/React.createElement("ul", {
    key: i,
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, col.map(link => /*#__PURE__*/React.createElement("li", {
    key: link
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(link);
    },
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.4 var(--font-body)",
      color: "var(--text-body)",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, link))))), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, contact.map(({
    icon,
    label
  }) => /*#__PURE__*/React.createElement("li", {
    key: label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      font: "var(--fw-regular) var(--fs-caption)/1.4 var(--font-body)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: "var(--violet-700)"
  }), label)))), /*#__PURE__*/React.createElement("div", {
    className: "footer-legal",
    style: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)",
      padding: "var(--sp-4) var(--page-gutter)",
      display: "flex",
      justifyContent: "space-between",
      font: "var(--fw-regular) var(--fs-caption)/1.4 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--text-on-inverse)",
      textDecoration: "none"
    }
  }, "Mentions l\xE9gales")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
/** Transparent site header: logo left, underlined-active nav right. */
function SiteHeader({
  logo,
  brand = "Les Petites Lucioles",
  items = [],
  active,
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--sp-10)",
      padding: "var(--sp-5) var(--page-gutter)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0]);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      textDecoration: "none"
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: brand,
    style: {
      width: 92,
      height: 92,
      objectFit: "contain"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-display)"
    }
  }, brand)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-8)"
    }
  }, items.map(item => {
    const isActive = item === active;
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(item);
      },
      style: {
        font: `${isActive ? "var(--fw-semibold)" : "var(--fw-regular)"} var(--fs-body-sm)/1.3 var(--font-body)`,
        color: isActive ? "var(--text-accent)" : "var(--text-body)",
        textDecoration: "none",
        paddingBottom: 4,
        borderBottom: isActive ? "2px solid var(--action-primary)" : "2px solid transparent",
        transition: "var(--transition-interactive)"
      }
    }, item);
  })));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/HomeScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  SectionHeading,
  Card,
  ArrowLink,
  Medallion
} = DS;
const {
  ValueCard,
  CrecheCard,
  PhotoBlob,
  CTABanner,
  AvatarRow
} = DS;
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--sp-10) var(--page-gutter) var(--sp-20)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: "var(--sp-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-eyebrow)"
    }
  }, "Micro-cr\xE8ches \xE0 taille humaine"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-hero)",
      color: "var(--encre-900)"
    }
  }, "Des micro-cr\xE8ches \xE0 taille humaine,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-display)"
    }
  }, "o\xF9 chaque enfant grandit \xE0 son rythme.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-lg)/var(--lh-body) var(--font-body)",
      color: "var(--text-body)",
      maxWidth: "46ch"
    }
  }, "Un lieu de vie bienveillant, s\xE9curisant et chaleureux pour accompagner les tout-petits dans leurs d\xE9couvertes et leurs premiers pas vers l'autonomie."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--gap-inline)",
      flexWrap: "wrap",
      marginTop: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "house",
    onClick: () => go("La maison des Lucioles")
  }, "D\xE9couvrir Bosgouet"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "map-pin",
    onClick: () => go("Routot")
  }, "D\xE9couvrir Routot"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: "clipboard-list",
    onClick: () => go("Pré-inscription")
  }, "Pr\xE9-inscription"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "illustrations/abeille-t.png",
    alt: "",
    style: {
      position: "absolute",
      left: -70,
      top: 40,
      width: 70,
      opacity: .95
    }
  }), /*#__PURE__*/React.createElement(PhotoBlob, {
    src: A + "photos/hero-bebe.png",
    height: 470
  }), /*#__PURE__*/React.createElement("img", {
    src: A + "illustrations/feuillage-violet-t.png",
    alt: "",
    style: {
      position: "absolute",
      right: -34,
      bottom: -30,
      width: 120
    }
  }))));
}
function Valeurs() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    py: "var(--section-y-tight)",
    style: {
      borderRadius: "var(--r-2xl)",
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Notre fa\xE7on d'accueillir",
    style: {
      marginBottom: "var(--sp-12)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement(ValueCard, {
    icon: "users",
    title: "\xC0 taille humaine"
  }, "Un petit nombre d'enfants pour un accompagnement individualis\xE9."), /*#__PURE__*/React.createElement(ValueCard, {
    icon: "heart-handshake",
    tone: "jaune",
    title: "Bienveillance"
  }, "Une \xE9quipe attentive aux besoins de chaque enfant et de sa famille."), /*#__PURE__*/React.createElement(ValueCard, {
    icon: "sprout",
    title: "\xC9veil & autonomie"
  }, "Des activit\xE9s adapt\xE9es au rythme et au d\xE9veloppement de chaque enfant."), /*#__PURE__*/React.createElement(ValueCard, {
    icon: "shield-check",
    tone: "jaune",
    title: "S\xE9curit\xE9"
  }, "Un environnement pens\xE9 pour le bien-\xEAtre et la s\xE9curit\xE9 des tout-petits.")));
}
function Creches({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Nos deux micro-cr\xE8ches en Normandie",
    style: {
      marginBottom: "var(--sp-12)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--gap-cards)"
    }
  }, /*#__PURE__*/React.createElement(CrecheCard, {
    image: A + "photos/salle-bosgouet.png",
    badge: "Bosgouet",
    title: "La maison des Lucioles",
    address: "60 rue Guy de Milleville \u2013 27310 Bosgouet",
    ornament: A + "illustrations/feuillage-violet-t.png",
    onClick: () => go("La maison des Lucioles")
  }, "Un lieu chaleureux et familial o\xF9 les enfants s'\xE9panouissent chaque jour."), /*#__PURE__*/React.createElement(CrecheCard, {
    image: A + "photos/salle-routot.png",
    badge: "Routot",
    badgeIcon: "map-pin",
    title: "Micro-cr\xE8che \xE0 Routot",
    address: "Ouverture 2026 \u2013 27350 Routot",
    linkLabel: "D\xE9couvrir Routot",
    ornament: A + "illustrations/feuillage-jaune-t.png",
    onClick: () => go("Routot")
  }, "Un nouvel espace pens\xE9 pour accueillir les enfants dans un cadre doux et s\xE9curis\xE9.")));
}
function RoutotFocus({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "jaune",
    style: {
      borderRadius: "var(--r-2xl)",
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: ".95fr 1.05fr",
      gap: "var(--sp-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PhotoBlob, {
    src: A + "photos/salle-routot.png",
    shape: "soft",
    height: 380,
    mat: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "jaune",
    icon: "sparkles"
  }, "Nouveau \u2014 ouverture 2026"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-section)"
    }
  }, "Notre nouvelle micro-cr\xE8che \xE0 Routot"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "56ch"
    }
  }, "Routot prolonge ce que nous faisons \xE0 Bosgouet : dix places, une \xE9quipe stable, des espaces pens\xE9s pour que chaque enfant trouve sa place. Des mati\xE8res naturelles, beaucoup de lumi\xE8re, des coins doux pour se poser et des espaces ouverts pour explorer."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "56ch"
    }
  }, "Le rythme de l'enfant guide la journ\xE9e : on ne r\xE9veille pas un enfant qui dort, on n'oblige pas un enfant \xE0 jouer. Les familles sont accompagn\xE9es avant l'arriv\xE9e, pendant l'adaptation, puis chaque matin par une transmission tranquille."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--gap-inline)",
      marginTop: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "map-pin",
    onClick: () => go("Routot")
  }, "D\xE9couvrir le projet de Routot"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go("Pré-inscription")
  }, "Pr\xE9-inscrire mon enfant")))));
}
function JourneeTeaser({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-12)",
      alignItems: "center",
      background: "var(--surface-card)",
      borderRadius: "var(--r-2xl)",
      padding: "var(--sp-6)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "photos/enfants-jeux.png",
    alt: "",
    style: {
      width: "100%",
      height: 300,
      objectFit: "cover",
      borderRadius: "var(--r-photo)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      alignItems: "flex-start",
      paddingRight: "var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-section)",
      fontSize: "var(--fs-title)"
    }
  }, "Une journ\xE9e chez les Lucioles"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "48ch"
    }
  }, "Accueil, jeux libres, comptines, activit\xE9s, repas, sieste, go\xFBter\u2026 Chaque moment de la journ\xE9e est pens\xE9 pour respecter les besoins et le rythme de l'enfant."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    onClick: () => go("Une journée chez les Lucioles")
  }, "D\xE9couvrir une journ\xE9e chez les Lucioles"))));
}
function EquipeTarifs({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    py: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--gap-cards)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "violet",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      fontSize: "var(--fs-title)",
      color: "var(--text-accent)",
      marginBottom: "var(--sp-4)"
    }
  }, "Une \xE9quipe engag\xE9e"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "44ch"
    }
  }, "Notre \xE9quipe de professionnelles passionn\xE9es accompagne chaque enfant avec bienveillance, attention et respect de son rythme."), /*#__PURE__*/React.createElement(AvatarRow, {
    photos: [A + "photos/equipe-1.png", A + "photos/equipe-2.png", A + "photos/equipe-3.png", A + "photos/equipe-4.png"],
    style: {
      margin: "var(--sp-6) 0"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    onClick: () => go("L'équipe des Lucioles")
  }, "D\xE9couvrir notre \xE9quipe")), /*#__PURE__*/React.createElement(Card, {
    tone: "jaune",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      fontSize: "var(--fs-title)",
      color: "var(--text-accent)",
      marginBottom: "var(--sp-4)"
    }
  }, "Tarification"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "44ch"
    }
  }, "Le tarif comprend notamment l'accueil, les repas et les produits de soin. Les familles peuvent \xE9galement b\xE9n\xE9ficier d'aides financi\xE8res selon leur situation."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: "arrow-right",
    style: {
      marginTop: "var(--sp-8)"
    },
    onClick: () => go("Tarification")
  }, "D\xE9couvrir nos tarifs et les aides"), /*#__PURE__*/React.createElement("img", {
    src: A + "illustrations/tirelire-t.png",
    alt: "",
    style: {
      position: "absolute",
      right: "var(--sp-6)",
      bottom: "var(--sp-5)",
      width: 96
    }
  }))));
}
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Valeurs, null), /*#__PURE__*/React.createElement(Creches, {
    go: go
  }), /*#__PURE__*/React.createElement(RoutotFocus, {
    go: go
  }), /*#__PURE__*/React.createElement(JourneeTeaser, {
    go: go
  }), /*#__PURE__*/React.createElement(EquipeTarifs, {
    go: go
  }), /*#__PURE__*/React.createElement(Section, {
    py: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement(CTABanner, {
    title: "Et si votre enfant devenait une petite Luciole ?",
    image: A + "photos/enfant-sourire.png",
    ornament: A + "illustrations/abeille-t.png",
    onClick: () => go("Pré-inscription")
  }, "Vous avez une question ou souhaitez pr\xE9-inscrire votre enfant ? \xC9crivez-nous, nous vous r\xE9pondons sous 48 heures.")));
}
Object.assign(window, {
  HomeScreen,
  Hero,
  Valeurs,
  Creches,
  RoutotFocus,
  JourneeTeaser,
  EquipeTarifs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/MaisonScreen.jsx
try { (() => {
const {
  Button: B4,
  Badge: Bg4,
  SectionHeading: SH4,
  Card: C4,
  ListItem: LI4,
  PhotoBlob: PB4,
  CTABanner: CTA4,
  Medallion: M4,
  ArrowLink: AL4
} = DS;
function InfoGrid({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--sp-6)"
    }
  }, items.map(([icon, label, value], i) => /*#__PURE__*/React.createElement(C4, {
    key: label,
    tone: i % 2 ? "jaune" : "violet",
    padding: "var(--sp-6)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement(M4, {
    icon: icon,
    tone: i % 2 ? "jaune" : "violet",
    size: 48
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.4 var(--font-body)",
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--fs-body)/1.5 var(--font-body)",
      color: "var(--text-strong)"
    }
  }, value))));
}
function MaisonScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    py: "var(--sp-12)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr .9fr",
      gap: "var(--sp-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Bg4, {
    icon: "house"
  }, "Bosgouet \u2014 depuis 2021"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-regular) var(--fs-display-2)/var(--lh-display) var(--font-display)",
      color: "var(--text-display)"
    }
  }, "La maison des Lucioles"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-lg)/var(--lh-body) var(--font-body)",
      maxWidth: "52ch"
    }
  }, "Une maison normande transform\xE9e en micro-cr\xE8che : dix places, de grandes fen\xEAtres, un jardin clos et une \xE9quipe qui conna\xEEt chaque enfant par son pr\xE9nom."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--gap-inline)"
    }
  }, /*#__PURE__*/React.createElement(B4, {
    variant: "primary",
    icon: "calendar-heart",
    onClick: () => go("Pré-inscription")
  }, "Demander une visite"), /*#__PURE__*/React.createElement(B4, {
    variant: "secondary",
    onClick: () => go("Une journée chez les Lucioles")
  }, "Voir une journ\xE9e type"))), /*#__PURE__*/React.createElement(PB4, {
    src: A + "photos/salle-bosgouet.png",
    height: 380
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement(SH4, {
    eyebrow: "Informations pratiques",
    title: "L'essentiel en un coup d'\u0153il",
    style: {
      marginBottom: "var(--sp-10)"
    }
  }), /*#__PURE__*/React.createElement(InfoGrid, {
    items: [["map-pin", "Adresse", "60 rue Guy de Milleville, 27310 Bosgouet"], ["clock", "Horaires", "Du lundi au vendredi, 7h30 – 18h30"], ["users", "Capacité", "10 enfants, de 10 semaines à 4 ans"], ["phone", "Contact", "07 67 89 33 21"]]
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: "var(--sp-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-section)",
      marginBottom: "var(--sp-6)"
    }
  }, "Les espaces de la maison"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(LI4, {
    icon: "sun",
    title: "La grande pi\xE8ce de vie"
  }, "Ouverte sur le jardin, avec des coins doux pour se poser et un espace moteur pour grimper."), /*#__PURE__*/React.createElement(LI4, {
    icon: "moon",
    tone: "jaune",
    title: "Deux dortoirs s\xE9par\xE9s"
  }, "Les petits et les grands dorment selon leur propre rythme, sans r\xE9veil forc\xE9."), /*#__PURE__*/React.createElement(LI4, {
    icon: "utensils",
    title: "La cuisine ouverte"
  }, "Repas pr\xE9par\xE9s sur place, produits frais et de saison, servis en petits groupes."), /*#__PURE__*/React.createElement(LI4, {
    icon: "trees",
    tone: "jaune",
    title: "Le jardin clos"
  }, "Sorties quotidiennes d\xE8s que la m\xE9t\xE9o le permet, bac \xE0 sable et carr\xE9 potager."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "photos/enfants-jeux.png",
    alt: "",
    style: {
      width: "100%",
      height: 200,
      objectFit: "cover",
      borderRadius: "var(--r-photo)",
      boxShadow: "var(--shadow-card)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "photos/salle-bosgouet.png",
    alt: "",
    style: {
      width: "100%",
      height: 150,
      objectFit: "cover",
      borderRadius: "var(--r-lg)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: A + "photos/hero-bebe.png",
    alt: "",
    style: {
      width: "100%",
      height: 150,
      objectFit: "cover",
      borderRadius: "var(--r-lg)"
    }
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "jaune",
    style: {
      borderRadius: "var(--r-2xl)",
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SH4, {
    eyebrow: "Le projet p\xE9dagogique",
    title: "Ce que nous d\xE9fendons, tous les jours",
    style: {
      marginBottom: "var(--sp-10)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--sp-8)"
    }
  }, [["sprout", "La motricité libre", "L'enfant n'est jamais installé dans une position qu'il n'a pas acquise seul. Il explore, essaie, recommence."], ["messages-square", "Le langage avant tout", "On nomme, on explique, on prévient avant d'agir : « je vais te prendre dans les bras »."], ["heart-handshake", "La sécurité affective", "Une référente par enfant, des rituels stables, un doudou toujours accessible."]].map(([icon, title, body], i) => /*#__PURE__*/React.createElement(C4, {
    key: title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement(M4, {
    icon: icon,
    tone: i === 1 ? "jaune" : "violet",
    size: 56
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-accent)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)"
    }
  }, body))))), /*#__PURE__*/React.createElement(Section, {
    py: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement(CTA4, {
    title: "Venez pousser la porte de la maison",
    image: A + "photos/enfant-sourire.png",
    ornament: A + "illustrations/abeille-t.png",
    ctaLabel: "R\xE9server une visite",
    ctaIcon: "calendar-heart",
    onClick: () => go("Pré-inscription")
  }, "Les visites ont lieu le mardi et le jeudi en fin de matin\xE9e, en petit comit\xE9.")));
}
Object.assign(window, {
  MaisonScreen,
  InfoGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/MaisonScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/PagesScreens.jsx
try { (() => {
const {
  Button: B2,
  Badge: Bg2,
  SectionHeading: SH2,
  Card: C2,
  ListItem: LI2,
  PhotoBlob: PB2,
  CTABanner: CTA2,
  AvatarRow: AR2,
  Medallion: M2,
  ArrowLink: AL2
} = DS;
function RoutotScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    py: "var(--sp-12)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr .9fr",
      gap: "var(--sp-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Bg2, {
    tone: "jaune",
    icon: "sparkles"
  }, "Ouverture 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--fw-regular) var(--fs-display-2)/var(--lh-display) var(--font-display)",
      color: "var(--text-display)"
    }
  }, "Une micro-cr\xE8che \xE0 Routot, pens\xE9e comme une maison"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-lg)/var(--lh-body) var(--font-body)",
      maxWidth: "52ch"
    }
  }, "Dix places, une \xE9quipe stable et des espaces con\xE7us avec des mati\xE8res naturelles : Routot prolonge \xE0 quelques kilom\xE8tres ce que nous vivons chaque jour \xE0 Bosgouet."), /*#__PURE__*/React.createElement(B2, {
    variant: "accent",
    icon: "clipboard-list",
    onClick: () => go("Pré-inscription")
  }, "Pr\xE9-inscrire votre enfant")), /*#__PURE__*/React.createElement(PB2, {
    src: A + "photos/salle-routot.png",
    height: 380
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "card"
  }, /*#__PURE__*/React.createElement(SH2, {
    eyebrow: "Le projet",
    title: "Ce qui nous guide \xE0 Routot",
    lead: "Un accueil \xE0 taille humaine, le respect du rythme de l'enfant et un accompagnement r\xE9el des familles.",
    style: {
      marginBottom: "var(--sp-12)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--sp-8)"
    }
  }, [["home", "Un accueil à taille humaine", "Dix enfants au maximum, deux à trois professionnelles présentes : chacun est connu, reconnu et accompagné individuellement."], ["moon", "Le rythme de l'enfant d'abord", "On ne réveille pas un enfant qui dort, on ne force pas un enfant à manger. La journée s'ajuste à lui, pas l'inverse."], ["messages-square", "Les familles accompagnées", "Visite avant l'inscription, adaptation progressive, transmissions quotidiennes et rendez-vous réguliers avec la référente."]].map(([icon, title, body], i) => /*#__PURE__*/React.createElement(C2, {
    key: title,
    tone: i === 1 ? "jaune" : "violet",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement(M2, {
    icon: icon,
    tone: i === 1 ? "jaune" : "violet",
    size: 56
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-accent)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)"
    }
  }, body))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: "var(--sp-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PB2, {
    src: A + "photos/enfants-jeux.png",
    shape: "rounded",
    height: 330,
    mat: false
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-section)",
      marginBottom: "var(--sp-6)"
    }
  }, "Les espaces"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(LI2, {
    icon: "sun",
    title: "Une pi\xE8ce de vie lumineuse"
  }, "Ouverte sur le jardin, avec des coins doux pour se poser."), /*#__PURE__*/React.createElement(LI2, {
    icon: "baby",
    title: "Un dortoir calme",
    tone: "jaune"
  }, "Deux dortoirs s\xE9par\xE9s pour respecter les temps de sommeil."), /*#__PURE__*/React.createElement(LI2, {
    icon: "utensils",
    title: "Un espace repas"
  }, "Repas pr\xE9par\xE9s sur place, produits frais et de saison."), /*#__PURE__*/React.createElement(LI2, {
    icon: "trees",
    title: "Un jardin clos",
    tone: "jaune"
  }, "Sorties quotidiennes d\xE8s que la m\xE9t\xE9o le permet."))))), /*#__PURE__*/React.createElement(Section, {
    tone: "jaune",
    py: "var(--section-y-tight)",
    style: {
      borderRadius: "var(--r-2xl)",
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SH2, {
    eyebrow: "Calendrier",
    title: "Les \xE9tapes d'ici l'ouverture",
    style: {
      marginBottom: "var(--sp-8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--sp-6)"
    }
  }, [["Automne 2025", "Travaux et aménagement"], ["Hiver 2026", "Recrutement de l'équipe"], ["Printemps 2026", "Visites des familles"], ["Septembre 2026", "Ouverture des portes"]].map(([when, what], i) => /*#__PURE__*/React.createElement(C2, {
    key: when,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--fs-caption)/1.2 var(--font-body)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: i === 3 ? "var(--jaune-700)" : "var(--text-eyebrow)"
    }
  }, when), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--fs-body)/1.5 var(--font-body)",
      color: "var(--text-strong)"
    }
  }, what))))), /*#__PURE__*/React.createElement(Section, {
    py: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement(CTA2, {
    title: "Envie de visiter Routot avant l'ouverture ?",
    image: A + "photos/enfant-sourire.png",
    ornament: A + "illustrations/abeille-t.png",
    ctaLabel: "Demander une visite",
    ctaIcon: "calendar-heart",
    onClick: () => go("Pré-inscription")
  }, "Nous organisons des visites en petit comit\xE9 pour vous pr\xE9senter les lieux et l'\xE9quipe.")));
}
function JourneeScreen({
  go
}) {
  const moments = [["7h30", "Accueil échelonné", "Retrouvailles douces, transmission avec la famille, jeux libres."], ["9h15", "Le temps du cercle", "Comptines, prénoms, météo du jour : chacun trouve sa place dans le groupe."], ["9h30", "Temps d'éveil", "Peinture, motricité, manipulation, transvasement — au choix de l'enfant."], ["11h15", "Repas", "Repas frais préparé sur place, servi à table en petits groupes."], ["12h30", "Sieste", "Chacun dort selon son besoin, sans réveil forcé."], ["15h00", "Goûter", "Fruits, laitages, pain — un moment convivial."], ["16h00", "Jeux et jardin", "Sortie extérieure, lecture, jeux symboliques."], ["17h00", "Retrouvailles", "Transmission de la journée : repas, sommeil, découvertes, humeur."]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    py: "var(--sp-12)"
  }, /*#__PURE__*/React.createElement(SH2, {
    eyebrow: "Le quotidien",
    title: "Une journ\xE9e chez les Lucioles",
    lead: "Chaque moment est un rep\xE8re. Les horaires donnent le cadre, l'enfant donne le tempo."
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    py: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0
    }
  }, moments.map(([time, title, body]) => /*#__PURE__*/React.createElement(LI2, {
    key: time,
    time: time,
    title: title
  }, body))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement(PB2, {
    src: A + "photos/enfants-jeux.png",
    shape: "rounded",
    height: 230,
    mat: false
  }), /*#__PURE__*/React.createElement(C2, {
    tone: "jaune"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-accent)",
      marginBottom: "var(--sp-3)"
    }
  }, "Et l'adaptation ?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)"
    }
  }, "Une semaine d'adaptation progressive, \xE0 votre rythme : une heure, puis une matin\xE9e, puis une journ\xE9e compl\xE8te.")), /*#__PURE__*/React.createElement(C2, {
    tone: "violet"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-accent)",
      marginBottom: "var(--sp-3)"
    }
  }, "Ce que vous recevez chaque soir"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)"
    }
  }, "Repas, sommeil, couches, activit\xE9s et un mot sur l'humeur du jour \u2014 de vive voix, et dans le carnet num\xE9rique."))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SH2, {
    eyebrow: "Les activit\xE9s",
    title: "Ce que l'on propose au fil des semaines",
    style: {
      marginBottom: "var(--sp-10)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--sp-6)"
    }
  }, [["palette", "Arts plastiques", "violet"], ["music", "Éveil musical", "jaune"], ["book-open", "Lecture et comptines", "violet"], ["footprints", "Motricité libre", "jaune"], ["sprout", "Jardinage", "violet"], ["chef-hat", "Ateliers cuisine", "jaune"], ["bath", "Jeux d'eau", "violet"], ["hand-heart", "Massages et relaxation", "jaune"]].map(([icon, title, tone]) => /*#__PURE__*/React.createElement(C2, {
    key: title,
    padding: "var(--sp-6)",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(M2, {
    icon: icon,
    tone: tone,
    size: 48
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--fs-body-sm)/1.4 var(--font-body)",
      color: "var(--text-strong)"
    }
  }, title))))), /*#__PURE__*/React.createElement(Section, {
    py: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement(CTA2, {
    title: "Envie de voir tout cela de vos yeux ?",
    image: A + "photos/enfant-sourire.png",
    ornament: A + "illustrations/abeille-t.png",
    ctaLabel: "Demander une visite",
    ctaIcon: "calendar-heart",
    onClick: () => go("Pré-inscription")
  }, "Nous vous accueillons en fin de matin\xE9e, au moment o\xF9 la maison est la plus vivante.")));
}
function TarifsScreen({
  go
}) {
  const [revenus, setRevenus] = React.useState(2800);
  const [heures, setHeures] = React.useState(160);
  const brut = heures * 9.5;
  const cmg = Math.min(brut * 0.85, revenus < 2500 ? 950 : revenus < 4000 ? 780 : 560);
  const apresCmg = Math.max(brut - cmg, 0);
  const reste = Math.round(apresCmg * 0.5);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    py: "var(--sp-12)"
  }, /*#__PURE__*/React.createElement(SH2, {
    eyebrow: "Tarification",
    title: "Un tarif clair, des aides r\xE9elles",
    lead: "Le tarif horaire comprend l'accueil, les repas, les go\xFBters et les produits de soin. Aucun suppl\xE9ment cach\xE9."
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    py: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--gap-cards)",
      alignItems: "stretch"
    }
  }, [["Accueil régulier", "9,50 €", "de l'heure", "Contrat mensuel de 80 à 200 h, réservé à l'année.", "violet"], ["Temps partiel", "9,90 €", "de l'heure", "À partir de deux journées par semaine, contrat annuel.", "jaune"], ["Accueil occasionnel", "10,50 €", "de l'heure", "Selon les places disponibles, réservation à la semaine.", "violet"]].map(([titre, prix, unite, desc, tone]) => /*#__PURE__*/React.createElement(C2, {
    key: titre,
    tone: tone,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-accent)"
    }
  }, titre), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--sp-2)",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-display-3)/1.1 var(--font-display)",
      color: "var(--text-display)",
      whiteSpace: "nowrap"
    }
  }, prix), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/1.4 var(--font-body)",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, unite)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)"
    }
  }, desc)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--sp-5)",
      font: "var(--fw-regular) var(--fs-caption)/1.6 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, "Tarifs indicatifs 2026, \xE0 confirmer \u2014 repas, go\xFBters, couches et produits de soin inclus.")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--gap-cards)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(C2, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-accent)",
      marginBottom: "var(--sp-4)"
    }
  }, "Ce que comprend le tarif"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(LI2, {
    icon: "check",
    title: "Les repas et les go\xFBters"
  }), /*#__PURE__*/React.createElement(LI2, {
    icon: "check",
    title: "Les couches et produits de soin"
  }), /*#__PURE__*/React.createElement(LI2, {
    icon: "check",
    title: "Les activit\xE9s et sorties"
  }), /*#__PURE__*/React.createElement(LI2, {
    icon: "check",
    title: "Le suivi avec la r\xE9f\xE9rente de votre enfant"
  }), /*#__PURE__*/React.createElement(LI2, {
    icon: "check",
    title: "Le carnet de transmission num\xE9rique"
  })), /*#__PURE__*/React.createElement("img", {
    src: A + "illustrations/tirelire-t.png",
    alt: "",
    style: {
      position: "absolute",
      right: "var(--sp-5)",
      bottom: "var(--sp-5)",
      width: 84,
      opacity: .9
    }
  })), /*#__PURE__*/React.createElement(C2, {
    tone: "violet"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-accent)",
      marginBottom: "var(--sp-4)"
    }
  }, "Estimer votre reste \xE0 charge"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      font: "var(--fw-semibold) var(--fs-body-sm)/1.3 var(--font-body)",
      color: "var(--text-strong)"
    }
  }, "Revenus mensuels du foyer : ", revenus, " \u20AC", /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1500",
    max: "6000",
    step: "100",
    value: revenus,
    onChange: e => setRevenus(+e.target.value),
    style: {
      accentColor: "var(--violet-800)"
    }
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      font: "var(--fw-semibold) var(--fs-body-sm)/1.3 var(--font-body)",
      color: "var(--text-strong)"
    }
  }, "Heures d'accueil par mois : ", heures, " h", /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "60",
    max: "200",
    step: "5",
    value: heures,
    onChange: e => setHeures(+e.target.value),
    style: {
      accentColor: "var(--violet-800)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      padding: "var(--sp-5)",
      background: "var(--surface-card)",
      borderRadius: "var(--r-md)"
    }
  }, [["Coût de l'accueil", `${brut.toFixed(0)} €`], ["Aide CMG estimée", `– ${cmg.toFixed(0)} €`], ["Après crédit d'impôt (50 %)", `${reste} €`]].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: `${i === 2 ? "var(--fw-bold)" : "var(--fw-regular)"} var(--fs-body-sm)/1.6 var(--font-body)`,
      color: i === 2 ? "var(--text-display)" : "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", null, v)))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.5 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, "Simulation indicative, sans valeur contractuelle."), /*#__PURE__*/React.createElement(B2, {
    variant: "primary",
    iconRight: "arrow-right",
    onClick: () => go("Pré-inscription")
  }, "Demander une simulation pr\xE9cise"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "jaune",
    py: "var(--section-y-tight)",
    style: {
      borderRadius: "var(--r-2xl)",
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SH2, {
    title: "Les aides possibles",
    lead: "Selon votre situation, l'accueil en micro-cr\xE8che revient souvent moins cher qu'il n'y para\xEEt.",
    style: {
      marginBottom: "var(--sp-8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--sp-6)"
    }
  }, [["banknote", "Le CMG « structure »", "Versé par la CAF chaque mois, il couvre une grande partie du coût selon vos revenus et le nombre d'enfants."], ["receipt", "Le crédit d'impôt", "50 % des sommes restant à votre charge, dans la limite du plafond annuel en vigueur."], ["building-2", "Les aides employeur", "Certaines entreprises réservent des places ou participent aux frais de garde : pensez à demander."]].map(([icon, t, b], i) => /*#__PURE__*/React.createElement(C2, {
    key: t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement(M2, {
    icon: icon,
    tone: i === 1 ? "jaune" : "violet",
    size: 52
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      fontSize: "var(--fs-subtitle)",
      color: "var(--text-accent)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)"
    }
  }, b))))));
}
function EquipeScreen({
  go
}) {
  const PORTRAITS = [A + "photos/equipe-1.png", A + "photos/equipe-2.png", A + "photos/equipe-3.png", A + "photos/equipe-4.png"];
  const team = [["Camille", "Référente technique — éducatrice de jeunes enfants", "Dix ans en multi-accueil, passionnée de motricité libre."], ["Sarah", "Auxiliaire de puériculture", "Le calme incarné, spécialiste des premières séparations."], ["Léa", "Accompagnante éducative petite enfance", "Comptines, marionnettes et ateliers cuisine."], ["Manon", "Auxiliaire de puériculture", "Attentive aux tout-petits et aux temps de sommeil."]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    py: "var(--sp-12)"
  }, /*#__PURE__*/React.createElement(SH2, {
    eyebrow: "L'\xE9quipe",
    title: "Les visages des Lucioles",
    lead: "Une \xE9quipe stable, form\xE9e \xE0 la petite enfance, qui conna\xEEt chaque enfant et chaque famille par son pr\xE9nom."
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    py: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--sp-8)"
    }
  }, team.map(([name, role, mot], idx) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--sp-3)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PORTRAITS[idx],
    alt: "",
    style: {
      width: 132,
      height: 132,
      borderRadius: "var(--r-pill)",
      objectFit: "cover",
      boxShadow: "var(--shadow-card)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-accent)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, role), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)"
    }
  }, mot))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: "var(--sp-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PB2, {
    src: A + "photos/hero-bebe.png",
    shape: "soft",
    height: 340
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-section)",
      marginBottom: "var(--sp-6)"
    }
  }, "Notre fa\xE7on de travailler"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(LI2, {
    icon: "user-check",
    title: "Une r\xE9f\xE9rente par enfant"
  }, "Un rep\xE8re stable pour l'enfant, un interlocuteur clair pour la famille."), /*#__PURE__*/React.createElement(LI2, {
    icon: "graduation-cap",
    tone: "jaune",
    title: "Formation continue"
  }, "Chaque professionnelle suit au moins une formation par an (signes, langage, motricit\xE9)."), /*#__PURE__*/React.createElement(LI2, {
    icon: "users-round",
    title: "Analyse de la pratique"
  }, "Une psychologue accompagne l'\xE9quipe tous les deux mois."), /*#__PURE__*/React.createElement(LI2, {
    icon: "heart",
    tone: "jaune",
    title: "Des \xE9quipes stables"
  }, "Peu de turn-over : les enfants retrouvent les m\xEAmes visages toute l'ann\xE9e."))))), /*#__PURE__*/React.createElement(Section, {
    tone: "violet",
    py: "var(--section-y-tight)",
    style: {
      borderRadius: "var(--r-2xl)",
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--sp-10)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-section)",
      fontSize: "var(--fs-title)",
      marginBottom: "var(--sp-3)"
    }
  }, "Vous souhaitez rejoindre l'\xE9quipe ?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      maxWidth: "52ch"
    }
  }, "Nous recrutons r\xE9guli\xE8rement des auxiliaires de pu\xE9riculture et des accompagnantes \xE9ducatives, \xE0 Bosgouet comme \xE0 Routot.")), /*#__PURE__*/React.createElement(B2, {
    variant: "primary",
    icon: "mail",
    onClick: () => go("Pré-inscription")
  }, "Envoyer une candidature"))));
}
Object.assign(window, {
  RoutotScreen,
  JourneeScreen,
  TarifsScreen,
  EquipeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/PagesScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/PreinscriptionScreen.jsx
try { (() => {
const {
  Button: B3,
  Card: C3,
  Field: F3,
  Input: I3,
  Select: S3,
  Checkbox: Ck3,
  RadioGroup: RG3,
  SectionHeading: SH3,
  Medallion: M3,
  ListItem: LI3,
  PhotoBlob: PB3,
  Badge: Bg3,
  ArrowLink: AL3,
  CTABanner: CTA3
} = DS;
function FAQ({
  items
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, items.map(([q, a], i) => /*#__PURE__*/React.createElement(C3, {
    key: q,
    padding: "var(--sp-5) var(--sp-6)",
    style: {
      cursor: "pointer"
    },
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) var(--fs-body)/1.5 var(--font-body)",
      color: "var(--text-strong)"
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) 22px/1 var(--font-body)",
      color: "var(--violet-600)"
    }
  }, open === i ? "–" : "+")), open === i ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--sp-3)",
      font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)",
      maxWidth: "72ch"
    }
  }, a) : null)));
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
    return /*#__PURE__*/React.createElement(Section, {
      py: "var(--sp-24)"
    }, /*#__PURE__*/React.createElement(C3, {
      style: {
        maxWidth: 620,
        margin: "0 auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--sp-5)",
        padding: "var(--sp-16)"
      }
    }, /*#__PURE__*/React.createElement(M3, {
      icon: "heart-handshake",
      tone: "jaune",
      size: 72
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--type-section)"
      }
    }, "Merci ", prenom ? `pour ${prenom}` : "", " !"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--type-body)"
      }
    }, "Votre demande de pr\xE9-inscription pour ", lieu, " est bien enregistr\xE9e. L'\xE9quipe vous recontacte sous 48 heures."), /*#__PURE__*/React.createElement(B3, {
      variant: "secondary",
      onClick: () => setSent(false)
    }, "Envoyer une autre demande")));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    py: "var(--sp-12)"
  }, /*#__PURE__*/React.createElement(SH3, {
    eyebrow: "Pr\xE9-inscription",
    title: "Et si votre enfant devenait une petite Luciole ?",
    lead: "Quelques informations suffisent \u2014 nous revenons vers vous pour convenir d'une visite."
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "card",
    py: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr .6fr",
      gap: "var(--sp-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(C3, {
    style: {
      padding: "var(--sp-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement(F3, {
    label: "Pr\xE9nom de l'enfant",
    required: true
  }, /*#__PURE__*/React.createElement(I3, {
    value: prenom,
    onChange: e => setPrenom(e.target.value),
    placeholder: "Camille"
  })), /*#__PURE__*/React.createElement(F3, {
    label: "Date de naissance (ou terme pr\xE9vu)"
  }, /*#__PURE__*/React.createElement(I3, {
    type: "date"
  })), /*#__PURE__*/React.createElement(F3, {
    label: "Votre nom",
    required: true
  }, /*#__PURE__*/React.createElement(I3, {
    placeholder: "Dupont"
  })), /*#__PURE__*/React.createElement(F3, {
    label: "T\xE9l\xE9phone"
  }, /*#__PURE__*/React.createElement(I3, {
    type: "tel",
    placeholder: "06 12 34 56 78"
  })), /*#__PURE__*/React.createElement(F3, {
    label: "Adresse e-mail",
    required: true,
    style: {
      gridColumn: "span 2"
    },
    error: emailInvalid ? "Merci d'indiquer une adresse valide." : null,
    hint: "Nous vous r\xE9pondons sous 48 h."
  }, /*#__PURE__*/React.createElement(I3, {
    type: "email",
    value: email,
    invalid: emailInvalid,
    onBlur: () => setTouched(true),
    onChange: e => setEmail(e.target.value),
    placeholder: "vous@exemple.fr"
  })), /*#__PURE__*/React.createElement(F3, {
    label: "Micro-cr\xE8che souhait\xE9e",
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement(RG3, {
    options: ["Bosgouet", "Routot", "Peu importe"],
    value: lieu,
    onChange: setLieu
  })), /*#__PURE__*/React.createElement(F3, {
    label: "Type d'accueil"
  }, /*#__PURE__*/React.createElement(S3, {
    options: ["Temps plein", "Temps partiel", "Accueil occasionnel"]
  })), /*#__PURE__*/React.createElement(F3, {
    label: "Date d'entr\xE9e souhait\xE9e"
  }, /*#__PURE__*/React.createElement(I3, {
    type: "date"
  })), /*#__PURE__*/React.createElement(F3, {
    label: "Votre message",
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement(I3, {
    multiline: true,
    rows: 4,
    placeholder: "Parlez-nous de votre enfant, de vos horaires, de vos questions\u2026"
  })), /*#__PURE__*/React.createElement(Ck3, {
    checked: ok,
    onChange: setOk,
    label: "J'accepte d'\xEAtre recontact\xE9(e) par l'\xE9quipe des Lucioles au sujet de ma demande.",
    style: {
      gridColumn: "span 2"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2",
      display: "flex",
      gap: "var(--gap-inline)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(B3, {
    variant: "accent",
    icon: "clipboard-list",
    disabled: !ok,
    onClick: () => ok && setSent(true)
  }, "Envoyer ma pr\xE9-inscription"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--fs-caption)/1.5 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, "Sans engagement.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement(C3, {
    tone: "violet"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-accent)",
      marginBottom: "var(--sp-4)"
    }
  }, "Comment \xE7a se passe ?"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(LI3, {
    icon: "send",
    title: "1. Vous envoyez le formulaire"
  }), /*#__PURE__*/React.createElement(LI3, {
    icon: "phone-call",
    title: "2. Nous vous appelons sous 48 h"
  }), /*#__PURE__*/React.createElement(LI3, {
    icon: "calendar-heart",
    title: "3. Vous venez visiter"
  }), /*#__PURE__*/React.createElement(LI3, {
    icon: "check",
    title: "4. La place est confirm\xE9e"
  }))), /*#__PURE__*/React.createElement(C3, {
    tone: "jaune"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-accent)",
      marginBottom: "var(--sp-3)"
    }
  }, "Besoin de nous parler ?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)"
    }
  }, "07 67 89 33 21", /*#__PURE__*/React.createElement("br", null), "contact@les-petites-lucioles.fr"))))), /*#__PURE__*/React.createElement(Section, {
    py: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement(SH3, {
    title: "Les questions que l'on nous pose souvent",
    style: {
      marginBottom: "var(--sp-8)"
    }
  }), /*#__PURE__*/React.createElement(FAQ, {
    items: [["À partir de quel âge accueillez-vous les enfants ?", "Dès 10 semaines, et jusqu'à l'entrée à l'école maternelle. Les deux micro-crèches accueillent des enfants d'âges mélangés, ce qui nourrit beaucoup les apprentissages."], ["Peut-on s'inscrire avant la naissance ?", "Oui, et c'est même conseillé. Indiquez simplement le terme prévu dans le formulaire ; nous confirmons la place une fois l'enfant né."], ["Faut-il fournir les repas et les couches ?", "Non. Les repas, les goûters, les couches et les produits de soin sont compris dans le tarif horaire."], ["Comment se passe l'adaptation ?", "Sur une semaine, progressivement : une heure avec vous, puis une heure sans vous, puis une matinée, puis une journée complète. Nous nous adaptons au rythme de votre enfant."]]
  })));
}
Object.assign(window, {
  PreinscriptionScreen,
  FAQ
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/PreinscriptionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/shared.jsx
try { (() => {
const A = "../../assets/";
const NAV = ["Accueil", "La maison des Lucioles", "Une journée chez les Lucioles", "Tarification", "L'équipe des Lucioles"];
const DS = window.LesPetitesLuciolesDesignSystem_2ecf58;
function Section({
  children,
  tone = "page",
  py = "var(--section-y)",
  style
}) {
  const bg = {
    page: "var(--surface-page)",
    card: "var(--surface-card)",
    jaune: "var(--surface-soft-jaune)",
    violet: "var(--surface-soft-violet)",
    sunken: "var(--surface-sunken)"
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: `${py} var(--page-gutter)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto"
    }
  }, children));
}
Object.assign(window, {
  A,
  NAV,
  DS,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AvatarRow = __ds_scope.AvatarRow;

__ds_ns.CTABanner = __ds_scope.CTABanner;

__ds_ns.CrecheCard = __ds_scope.CrecheCard;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.PhotoBlob = __ds_scope.PhotoBlob;

__ds_ns.ValueCard = __ds_scope.ValueCard;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Medallion = __ds_scope.Medallion;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
