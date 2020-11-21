import { Rule, SchematicContext, Tree, externalSchematic, apply, url, template, chain, mergeWith, MergeStrategy } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


export function newRepo(_options: any): Rule {
  const name = _options.name
  return (tree: Tree, _context: SchematicContext) => {

    const templateSource = apply(url('./files'), [
      template({ ..._options, ...strings }),
    ]);
    const merged = mergeWith(templateSource, MergeStrategy.Overwrite)

    const rule = chain([
      generateRepo(name),
      merged,
      updatePackages(name)
    ]);

    return rule(tree, _context) as Rule;
  }
}

function generateRepo(name: string): Rule {
  return externalSchematic('@schematics/angular', 'ng-new', {
    name,
    version: '11.0.2',
    directory: name,
    routing: true,
    style: 'scss',
    inlineStyle: false,
    inlineTemplate: false
  });
}

function updatePackages(name: string): Rule {
  return (tree: Tree, _: SchematicContext): Tree => {

    const path = `/${name}/package.json`;
    const file = tree.read(path);
    const json = JSON.parse(file!.toString());

    json.scripts = {
      ...json.scripts,
      "update:packages": "npm i && npm i @angular/material && npm install angular-auth-oidc-client --force && ncu -u"
    };
    tree.overwrite(path, JSON.stringify(json, null, 2));

    return tree;
  }
}