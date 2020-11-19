# Upci-App-Starter

Schematic scaffolding of future apps' (basic project implementations) 


### Build and Run

Make sure schematics are installed to your workspace. 
```bash
  npm install -g @angular-devkit/schematics-cli
  npm i @schematics/angular	
```
Into schematic's project path:

```bash
npm run build
schematics .:upci-app-starter < new-project-name > --debug=false --force 
```
e.g. `schematics .:upci-app-starter nanopot --debug=false --force `

Navigate to the newly generated project:
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


That's it!
 