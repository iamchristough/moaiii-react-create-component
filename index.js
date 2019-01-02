#!/usr/bin/env node

const fs = require('fs');
const argv = require('yargs').argv;
var glob = require("glob");

const baseFilePaths = {
  'action': '/base/action.txt',
  'index': '/base/index.txt',
  'jsx-stateful': '/base/jsx-stateful.txt',
  'jsx-stateless': '/base/jsx-stateless.txt',
  'middleware': '/base/middleware.txt',
  'reducer': '/base/reducer.txt',
  'scss': '/base/scss.txt',
  'test': '/base/test.txt'
};

const $ = Object.keys(argv);
const $where = $[1];
const $name = $[2];
const $type = $[3];
const $redux = $[4];

let componentFolderPaths = {};

function createComponent() {
  // create folder
  fs.mkdirSync(`${componentFolderPaths[$where]}/${$name}`);

  writeIntoFile( `${baseFilePaths.index}`, `${componentFolderPaths[$where]}/${$name}/index.js` );
  writeIntoFile( `${baseFilePaths.scss}`, `${componentFolderPaths[$where]}/${$name}/${$name}.scss` );
  writeIntoFile( `${baseFilePaths.test}`, `${componentFolderPaths[$where]}/${$name}/${$name}.test.js` );

  if( $type === 'stateful' ) {
    writeIntoFile( `${baseFilePaths['jsx-stateful']}`, `${componentFolderPaths[$where]}/${$name}/${$name}.jsx` );
  } else if ( $type === 'stateless' ) {
    writeIntoFile( `${baseFilePaths['jsx-stateless']}`, `${componentFolderPaths[$where]}/${$name}/${$name}.jsx` );
  }

  if( $redux !== '$0' ) {
    writeIntoFile( `${baseFilePaths.middleware}`, `${componentFolderPaths[$where]}/${$name}/${$name}.middleware.js` );
    writeIntoFile( `${baseFilePaths.reducer}`, `${componentFolderPaths[$where]}/${$name}/${$name}.reducer.js` );
    writeIntoFile( `${baseFilePaths.action}`, `${componentFolderPaths[$where]}/${$name}/${$name}.action.js` );
  }
}

// automatically get folder paths
glob("./src/**", {}, function (er, folders) {
  folders.forEach( folder => {
    const pathParts = folder.split('/');
    const name = pathParts[pathParts.length - 1];
    componentFolderPaths[name] = folder;
  });
  createComponent(componentFolderPaths);
});

// write to file
function writeIntoFile( baseFilePath, path ) {
  let _path = path.replace('.', '');

  var rl = require('readline')
    .createInterface({
      input: fs.createReadStream(__dirname + baseFilePath),
      output: fs.createWriteStream(__dirname + _path)
    });

    rl.on('line', function (line) {
      let _line = line.replace(/_COMPONENT_NAME_/g, $name);
      rl.output.write(_line + '\n');
    })
}

module.exports = {createComponent};
