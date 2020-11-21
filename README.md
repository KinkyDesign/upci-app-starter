# Upci-App-Starter

Implemented with Angular Schematics


### Build and Run

Make sure schematics are installed to your workspace: 
```bash
> npm install -g @angular-devkit/schematics-cli
> npm i @schematics/angular	
```
Into schematic's project path:

```bash
> npm run build
> schematics .:upci-app-starter <new-project-name> --debug=false --force 
e.g. schematics .:upci-app-starter nanopot --debug=false --force 
```
If you’d rather not create a new project from inside your current project, you can also `run your schematic from a different directory`, but the syntax is slightly different:
```bash
> schematics ./path/to/collection.json:upci-app-starter nanopot --debug=false --force 
```

Navigate to the newly generated project:
```bash
> npm run update:packages

> ng serve
```

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

 