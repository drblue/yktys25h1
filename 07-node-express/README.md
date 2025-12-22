# Express web server with Node and TypeScript

## Installation

```bash
npm init --init-type module
npm install express
npm install -D typescript tsx @types/node @types/express
```

## TypeScript Config

Create `tsconfig.json` with the following content:

```json
{
  "compilerOptions": {
    /* Basic settings */
    "target": "ES2023",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ES2023"],
    "skipLibCheck": true,

    /* Convenience (makes it feel like Vite/React) */
    "allowImportingTsExtensions": true, // Allows .ts in imports if desired
    "noEmit": true,                     // Let tsx or Node handle execution
    "isolatedModules": true,            // Required for fast transpilers like esbuild/tsx
    "allowJs": true,
    "checkJs": false,

    /* Strict code quality */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
