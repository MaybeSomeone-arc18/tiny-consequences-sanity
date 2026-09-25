# The Department of Tiny Consequences

An interactive fictional city story for the DEV x Sanity challenge, Path 2. Pick one small act, trace its unexpected effect through a city, and read the underlying linked Sanity records. Live demo at https://tiny-consequences-sanity.vercel.app/; challenge submission is prepared for review and publication.

Each consequence is a document, not an answer generated on the fly. The app reads a Sanity dataset with a server-side viewer token. The graph edges explain the causality; the visitor can step back through the choices they made. The editorial schema separates draft, reviewed, and published records so a human can approve a branch before it appears. This is fiction, not a forecast.

Local setup: `SANITY_VIEWER_TOKEN=<viewer token> npm run dev`. The token stays on the server. Sanity project ID is `7i4i5k0j`, dataset `production`; fixture records use the `tiny.` prefix and are distinct from the tax app.

Studio (authenticated editors): https://tiny-consequences.sanity.studio/ . Visitor scene submissions become `tinyVisitorScene` drafts in Sanity and are not shown publicly without human review. Do not commit token files.

## How to try it

Open the demo, choose "Draw a bench inside the chalk outline", then watch the map open and trace the new route in red. Select "Read the scene" to continue. One short path: sketch → office → ledger → ballot → last tram → morning notice. The scene graph is finite; all choices reach an ending.

## Content and review

Run `npm install` and `SANITY_VIEWER_TOKEN=<read token> npm run dev` to use the live dataset, or examine `data.mjs` for a local snapshot of the published story. Seed writes require an authorized Sanity token and should not be run casually against production. The public app reads only published scenes. Visitor form submissions enter private draft documents; an editor reviews and publishes them through Studio. A browser route is session-local and is not saved across visits.

## Technical notes

`app/page.tsx` queries the scenario, places, consequences and approved visitor scenes from Sanity. `app/experience.tsx` renders the branching story, map and ledger. The schema in `studio/schemaTypes/index.ts` models references between scenes, places, choices and editor-reviewed visitor scenes. `app/api/contribute/route.ts` validates visitor input and writes drafts with a server-only token. Secrets and build artifacts are ignored by Git.
