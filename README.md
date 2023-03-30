# Chai Stack ☕

This is an opinionated react-native stack with Typescript, Expo Router, Tailwind(Nativewind) & Zustand

## 🚀 Quickstart

```sh
npx degit aviavinav/chai my-project

cd my-project && yarn install

yarn start
```

## 🛠️ Tools

- [Expo Router](https://github.com/expo/router): The File-based router for universal React Native apps.

- [Typescript](https://www.typescriptlang.org/): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

- [Nativewind](https://www.nativewind.dev/): NativeWind uses [Tailwind CSS](https://tailwindcss.com/) as scripting language to create a universal style system for React Native.

- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction): A small, fast, and scalable bearbones state management solution.

## 🪴 How to use

### 📂 Folder Structure

```
├───app
├───assets
│   └───images
├───components
└───lib
```

### ❓ What & Where

The `app` directory will contain your routes, for example, if I name a file `hello.tsx`, I can access it with the `Link` component like `<Link href="/hello">Go to Hello</Link>`, See [Expo Router docs](https://github.com/expo/router) for more.

The `app/_layout.tsx` defines a layout for your screens, edit this if you want a constant header.

You can edit the splash screen at `components/loadingscreen.tsx`. To change the time for which it is showed or make it wait for fonts to be loaded, edit `app/_layout.tsx`.

### 🧭 Path Aliases

The path aliases are as follows:

- `@assets`: `./assets`
- `@app`: `./app`
- `@components`: `./components`
- `@lib`: `./lib`

If you edit them make sure to edit both `tsconfig.json` as well as `babel.config.js`, and run your app with `yarn start -c`.
