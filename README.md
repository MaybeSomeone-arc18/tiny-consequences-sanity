# The Department of Tiny Consequences

An interactive fictional city story for the DEV x Sanity challenge, Path 2. Pick one small act, trace its unexpected effect through a city, and read the underlying linked Sanity records. Prototype only; no public submission or deployment yet.

Each consequence is a document, not an answer generated on the fly. The app reads a Sanity dataset with a server-side viewer token. The graph edges explain the causality; the visitor can step back through the choices they made. The editorial schema separates draft, reviewed, and published records so a human can approve a branch before it appears. This is fiction, not a forecast.

Local setup: `SANITY_VIEWER_TOKEN=<viewer token> npm run dev`. The token stays on the server. Sanity project ID is `7i4i5k0j`, dataset `production`; fixture records use the `tiny.` prefix and are distinct from the tax app.
