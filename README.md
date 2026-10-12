# Flova Docs

Public bilingual documentation for the Flova platform, built with Fumadocs,
Next.js, and static export.

The site is available in Persian and English:

- Persian: `https://docs.flova.ir/fa/docs`
- English: `https://docs.flova.ir/en/docs`

Machine-readable documentation:

- Index: `https://docs.flova.ir/llms.txt`
- Full text: `https://docs.flova.ir/llms-full.txt`

## Local development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm ci
npm run types:check
npm run build
```

The build writes the static site to `out/`.

## Content

Each page has a Persian and English file with the same slug:

- `content/docs/app/overview.fa.mdx`
- `content/docs/app/overview.en.mdx`
- `content/docs/console/overview.fa.mdx`
- `content/docs/console/overview.en.mdx`
- `content/docs/console/quickstart.fa.mdx`
- `content/docs/console/quickstart.en.mdx`
- `content/docs/sdk/overview.fa.mdx`
- `content/docs/sdk/overview.en.mdx`
- `content/docs/studio/overview.fa.mdx`
- `content/docs/studio/overview.en.mdx`

Technical identifiers, protocol strings, API paths, and code remain exact in
both languages. Public documentation must not contain credentials, private
endpoints, internal schemas, or broker contracts.

## Deployment

GitHub Actions builds an immutable GHCR image and deploys it through
`docker-compose.production.yml`. The image serves the static export on the
`flova_edge` network at port `8080`; shared Caddy routes `docs.flova.ir` to
that service.
