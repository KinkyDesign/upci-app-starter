# Upci-App-Starter

Schematic scaffolding of future apps' (basic project implementations) 

### Build and Run
Navigate to schematics project: 

```bash
npm run build
schematics .:upci-app-starter < new-project-name > --debug=false --force 
```
e.g. `schematics .:upci-app-starter nanopot --debug=false --force `

Navigate to < new-project-name >
```bash
npm run update:packages

ng serve
```

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
 