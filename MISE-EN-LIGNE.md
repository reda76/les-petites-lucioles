# Mise en ligne — les-petites-lucioles.fr

Dépôt canonique : `lespetiteslucioles/website` (compte GitHub du client), servi par
GitHub Pages avec le domaine personnalisé `les-petites-lucioles.fr`.
Copie de travail historique : `reda76/les-petites-lucioles`.
Le domaine est géré chez OVH (compte du client) et servait auparavant un WordPress.

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
   type **CNAME**, cible `lespetiteslucioles.github.io.`
   (supprimer d'abord tout autre enregistrement `www` — A, AAAA, TXT — un CNAME doit être seul)
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
