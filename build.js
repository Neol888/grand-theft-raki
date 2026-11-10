// Сборка: бандлит src/ в game.js и обновляет версию в index.html (сброс кэша).
const { execSync } = require('child_process'); const fs = require('fs');
execSync('node node_modules/esbuild/bin/esbuild src/main.js --bundle --minify --format=iife --target=es2019 --outfile=game.js', { stdio: 'inherit' });
const v = Date.now().toString(36);
fs.writeFileSync('index.html', fs.readFileSync('index.html', 'utf8').replace(/game.js?v=w+/, 'game.js?v=' + v));
console.log('version', v);
