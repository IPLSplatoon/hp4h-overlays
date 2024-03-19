# hp4h-overlays

Broadcast graphics for the [HP for Heroes](https://www.start.gg/tournament/hp-for-heroes/details) Splatoon tournament.

## Setup

- Set up `ipl-overlay-controls` using the [installation guide.](https://ipl-overlay-controls.readthedocs.io/en/latest/users-guide/#installation)

### Pre-built version (For production use)

- Clone the `build` branch of this repository to `[nodecg]/bundles/hp4h-overlays`
- All done!

### Build manually

- Ensure you have access to the private GSAP registry: [Guide](https://greensock.com/docs/v3/Installation#private)
- Clone this repository to `[nodecg]/bundles/hp4h-overlays`
- Install dependencies: `npm i`
- Run build: `npm run build`

#### Other npm commands

- `build`: Create a production-ready build.
- `build:dev`: Create a development build with better debugging options.
- `build:clean`: Combines `build` and `clean` tasks.
- `clean`: Removes built files.
- `start`: Starts NodeCG.
- `watch`: Runs a build and rebuilds when changes are found.
- `lint`: Checks for linter errors
- `fix`: Automatically fixes some linter errors
- `schema-types`: Create or update type definitions for replicant schemas found in the `schemas` directory

## Usage

### Background graphic

The background graphic can be adjusted by adding query parameters to the URL. Possible options are:
- `brightness`: The brightness of the graphic.

Example: `localhost:9090/bundles/hp4h-overlays/graphics/background.html?brightness=0.75`

## CI

This repository includes a GitHub Actions script that automatically lints and builds the overlays.
It requires two secrets to function:

- `GH_SSH`: An SSH key with permissions to push to the package's GitHub repository. Used for pushing the build result.
- `GSAP_AUTH`: The GSAP authorization token, used to pull packages from npm.
