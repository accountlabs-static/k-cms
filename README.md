# Keystone CMS Tutorial and Blog Website

This project is a CMS tutorial and blog publishing website based on [Keystone](https://keyst.one/), with content managed in [Notion](https://www.notion.so/). The site is built using [Docusaurus](https://docusaurus.io/) and deployed on [Vercel](https://vercel.com/).

## Features

- Content management using Notion
- Docusaurus-powered static site generation
- Multilingual support with i18n (see [usage](https://docusaurus.io/docs/cli#docusaurus-write-translations-sitedir))
- Easy deployment on Vercel
- Regular backups of documentation on the `archive-docs` branch

## Prerequisites

- [Node.js](https://nodejs.org/) 16.x or newer
- [pnpm](https://pnpm.io/) package manager

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/accountlabs-static/k-cms.git
cd k-cms
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up the environment variables:

```bash
# Copy the .env.example file to .env and fill in the required values.
cp .env.example .env
# Then edit .env with your favourite text editor
```

4. Pull content from Notion:

```bash
pnpm run pull
```

5. Start the development server:

```bash
pnpm run start
```

Open your browser and visit http://localhost:3000.

## Known Limitations

- Only standard Markdown formatting is supported in Notion content.
- Specific embeds, such as YouTube and Twitter, are supported. Other embeds might not be rendered correctly.
- Images should be uploaded directly to Notion from your local device. Pasting image links from external sources may cause errors.
- Custom slugs for sub-pages (articles within subdirectories) in Notion are not supported.

[中文版本](README.zh.md)