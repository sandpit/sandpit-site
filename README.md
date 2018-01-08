⛱ sandpitjs.com
==========

The site for the playground for creative coding using JavaScript and the canvas element, built using [create-react-app](https://github.com/facebookincubator/create-react-app), which is great.

## Getting Started

First up, clone the repo:

```
git clone https://github.com/sandpit/sandpit-site.git
cd sandpit-site
```

If you don't have cairo, you'll need it:

```
brew update
brew install cairo
```

Then:

```
yarn
```

Maybe make a cup of tea? You've earned it.

Once everything is done, fire it up with:

```
yarn start
```

## Adding a demo

If you have a demo to contribute, you should 100% [open a pull request](https://github.com/sandpit/sandpit-site/pulls).

First up, duplicate `/src/demos/template.js` and rename it to something appropriate.

Then, in `index.js`, `import` your demo and add it to the `export default` definition.

It'll automatically be added to the navigation. Yayayayay.

## ⛱ Sandpit

You can find out more about [Sandpit at sandpitjs.com](https://sandpitjs.com), or via the [Github repo](https://github.com/sandpit/sandpit).
