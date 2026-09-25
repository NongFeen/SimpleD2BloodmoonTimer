# D2BloodmoonTimer

A Blood Moon countdown timer for The Division 2, built with React + TypeScript + Vite.

- Countdown starts at 1 hour and ticks down every second.
- **Landmark Clear** reduces the remaining time by 20% and increments a counter.
- **Boss Clear** resets the timer to 1 hour and resets the Landmark Clear counter to 0.

Deployed as a static build to `nongfeen.github.io/tools/division/bloodmoontimer` via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
