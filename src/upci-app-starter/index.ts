import { Rule, SchematicContext, Tree, externalSchematic, apply, url, template, chain, mergeWith, MergeStrategy  } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


export function newRepo(_options: any): Rule {
const name = _options.name
return (tree: Tree, _context: SchematicContext) => {
 
   const templateSource = apply(url('./files'), [
     template({..._options, ...strings}),
   ]);
   const merged = mergeWith(templateSource, MergeStrategy.Overwrite)
 
   const rule = chain([
     generateRepo(name),
     merged,
    //  updatePackageJson(name)
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

// function updatePackageJson(name: string): Rule {
//  return (tree: Tree, _: SchematicContext): Tree => {
//    const path = `/${name}/package.json`;
//    const file = tree.read(path);
//    if (file == null) {
//     throw new SchematicsException('Could not read package.json');
//   }
//    const json = JSON.parse(file!.toString());
 
//    if (json === null || typeof json !== 'object' || Array.isArray(json)) {
//     throw new SchematicsException('Error reading package.json');
//   }
//   if (!json.dependencies) {
//     json.dependencies = {};
//   }
//   if (json.dependencies['frontal']) {
//     json.dependencies['frontal'] = `2.0.0-beta.1`;
//     tree.overwrite(json, JSON.stringify(json, null, 2));
//   }
//    return tree;
//  }
// }