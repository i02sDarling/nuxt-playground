# Nuxt Tutorial Playground

> [!WARNING]
> This projct is forked from [learn-nuxt-com](https://github.com/nuxt/learn.nuxt.com) by antfu.

### Development

To run this project locally, you need to have [Node.js v20.0+](https://nodejs.org/en/) and [pnpm](https://pnpm.io/) installed.

After cloning the repo, run the following commands to install dependencies:

```bash
pnpm install
```

Then, run the following command to start the development server:

```bash
pnpm dev
```

The development server will be running at [http://localhost:3000](http://localhost:3000).

### Content Structure

The tutorial content is located in the `content/` directory. Each route contains a number prefix (`1.`) to indicate the order and will be removed in the final URL. For each route, we use a folder with an `index.md` to serve the extra files. A `.template` folder can be placed with the `index.md` file to provide the template for the playground.

- `.template/index.ts` - Indicates the metadata for that guide, like enabling/disabling features, file filters, etc.
- `.template/files/**` - The files that will be copied to the playground when the user navigates to that guide, merged with the basic template under `template/basic/`
- `.template/solutions/**` - Optional solutions for the tasks in that guide, merged with the guide files.


## License

[MIT](./LICENSE)
