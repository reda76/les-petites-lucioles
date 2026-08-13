# Mise en ligne — les-petites-lucioles.fr

Le site est hébergé sur GitHub Pages (`reda76/les-petites-lucioles`) et servi sur
https://reda76.github.io/les-petites-lucioles/. Le domaine `les-petites-lucioles.fr`
est chez OVH et sert pour l'instant l'ancien site WordPress.

⚠️ La bascule DNS **remplace l'ancien site WordPress** par le nouveau. Avant de la faire,
confirmer avec le client qu'il n'y a plus rien à récupérer sur le WordPress (textes,
photos, autre contenu). Les e-mails ne sont **pas** concernés : on ne touche pas aux
enregistrements MX.

## Étape 1 — Chez OVH (5 minutes, par le client ou avec un accès délégué)

Espace client OVH → **Noms de domaine** → `les-petites-lucioles.fr` → **Zone DNS** :

1. **Modifier** l'enregistrement **A** de la racine (champ « sous-domaine » vide)
   qui pointe aujourd'hui vers l'hébergement WordPress. Nouvelle cible :
   `185.199.108.153`
   Puis **ajouter** trois autres enregistrements A identiques vers :
   `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2. **Modifier** (ou créer) l'enregistrement du sous-domaine **www** :
   type **CNAME**, cible `reda76.github.io.`
   (supprimer un éventuel ancien A/CNAME `www` pointant vers WordPress)
3. **Ne rien toucher d'autre** — en particulier les enregistrements **MX**
   (courrier) et **TXT** (SPF, vérifications) existants.

## Étape 2 — Côté GitHub (fait par le développeur, sur signal)

Dès que les DNS sont posés :
- Settings → Pages → Custom domain : `les-petites-lucioles.fr` → Save
- Attendre l'émission du certificat (15 min à 1 h), puis cocher **Enforce HTTPS**
- Mettre à jour `og:image`/`og:url` du build vers `https://les-petites-lucioles.fr/`

## Étape 3 — Vérifications finales

- `https://les-petites-lucioles.fr` s'ouvre en HTTPS avec le cadenas
- `https://www.les-petites-lucioles.fr` redirige vers la racine
- L'ancien lien `reda76.github.io/les-petites-lucioles` redirige vers le domaine
- Partage du lien sur WhatsApp : l'aperçu montre la photo + logo (Open Graph)

Propagation DNS : de quelques minutes à quelques heures selon les résolveurs.
