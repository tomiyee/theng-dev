# THeng Dev

This repository hosts the React code for my website portfolio. Below are notes to myself on maintaining and contributing to my portfolio.

## Development

The process for development is as follows:

1. Create a new branch for the feature.
2. Make the appropriate changes scoped for that feature to the branch.
3. Run ESLint and Prettier to lint and style the changes.
4. Open a PR. Provide a brief description of the changes.
5. Review the changes one last time.
6. Squash and Merge the PR with semantic commit message conventions.

## Deployment

Once the feature is merged into the `main` branch, checkout the `main` branch and run this command to deploy the project to GitHub Pages.

```
npm run deploy
```

It may take time for the deploment to happen and for GitHub Pages to update "theng.dev".
