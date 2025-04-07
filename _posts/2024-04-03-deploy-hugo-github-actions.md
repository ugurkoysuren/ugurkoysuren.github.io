---
layout: post
title: Deploying Hugo Sites with GitHub Actions
date: 2024-04-03 11:15:00
description: A step-by-step guide to automating the deployment of Hugo static sites using GitHub Actions for continuous integration and deployment.
tags: Hugo GitHub-Actions CI/CD Deployment Automation
categories: tutorials
---

## Automating Hugo Site Deployment with GitHub Actions

Deploying a Hugo static site manually can be tedious, especially when you make frequent updates. GitHub Actions provides an excellent solution for automating this process, allowing you to focus on creating content while the deployment happens automatically. In this guide, I'll walk you through setting up GitHub Actions to deploy your Hugo site.

### Why Use GitHub Actions for Hugo Deployment?

Before diving into the implementation, let's understand why GitHub Actions is a great choice for Hugo deployment:

* **Automation** - Eliminate manual deployment steps
* **Consistency** - Ensure your site is built the same way every time
* **Integration** - Seamlessly connect with GitHub repositories
* **Flexibility** - Deploy to various hosting platforms (GitHub Pages, Netlify, Vercel, etc.)
* **Cost-effective** - Free for public repositories with generous limits

### Prerequisites

To follow this guide, you'll need:

* A Hugo site stored in a GitHub repository
* Basic familiarity with GitHub and Hugo
* Access to your GitHub repository settings

### Step 1: Create a GitHub Actions Workflow File

First, create a workflow file in your repository at `.github/workflows/hugo.yml`:

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0
      
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true
      
      - name: Build with Hugo
        run: hugo --minify
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

This workflow will:
1. Trigger on pushes to the main branch or manual workflow dispatch
2. Check out your repository with submodules (if you're using themes as submodules)
3. Set up Hugo with the extended version
4. Build your site with minification
5. Upload the built site as an artifact
6. Deploy to GitHub Pages

### Step 2: Configure GitHub Pages

To enable GitHub Pages for your repository:

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Save the changes

### Step 3: Customize the Workflow (Optional)

Depending on your specific needs, you might want to customize the workflow:

#### Adding Environment Variables

If your Hugo site requires environment variables (like API keys), you can add them securely:

```yaml
- name: Build with Hugo
  env:
    HUGO_ENV: production
    MY_API_KEY: ${{ secrets.MY_API_KEY }}
  run: hugo --minify
```

#### Using a Specific Hugo Version

Instead of using the latest version, you can specify a particular Hugo version:

```yaml
- name: Setup Hugo
  uses: peaceiris/actions-hugo@v2
  with:
    hugo-version: '0.121.1'
    extended: true
```

#### Adding Caching for Faster Builds

To speed up your builds, you can add caching for Hugo resources:

```yaml
- name: Cache
  uses: actions/cache@v3
  with:
    path: /tmp/hugo_cache
    key: ${{ runner.os }}-hugomod-${{ hashFiles('**/go.sum') }}
    restore-keys: |
      ${{ runner.os }}-hugomod-

- name: Build with Hugo
  env:
    HUGO_CACHEDIR: /tmp/hugo_cache
  run: hugo --minify
```

### Step 4: Deploying to Other Platforms

While the example above uses GitHub Pages, you can easily adapt the workflow for other platforms:

#### Netlify

```yaml
- name: Deploy to Netlify
  uses: nwtgck/actions-netlify@v2.0
  with:
    publish-dir: './public'
    production-branch: main
    github-token: ${{ secrets.GITHUB_TOKEN }}
    deploy-message: "Deploy from GitHub Actions"
  env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

#### Vercel

```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.ORG_ID}}
    vercel-project-id: ${{ secrets.PROJECT_ID}}
    working-directory: ./
```

### Troubleshooting Common Issues

#### Missing Theme

If your build fails with a theme-related error, ensure you've properly set up your theme as a Git submodule:

```bash
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
git submodule update --init --recursive
```

And make sure your workflow includes `submodules: recursive` in the checkout step.

#### Build Failures

If your build fails, check the GitHub Actions logs for specific error messages. Common issues include:

* Missing dependencies
* Incorrect Hugo version
* Syntax errors in your content
* Missing environment variables

### Conclusion

Setting up GitHub Actions for your Hugo site deployment streamlines your workflow and ensures consistent deployments. The configuration provided in this guide should work for most Hugo sites, but feel free to customize it based on your specific requirements.

With this automation in place, you can focus on creating great content while GitHub Actions handles the deployment process automatically.

Have you set up GitHub Actions for your Hugo site? What challenges did you face, and how did you overcome them? Share your experience in the comments! 