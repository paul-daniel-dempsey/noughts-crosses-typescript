Node.JS Project Create using Test Driven Framework TDD (Jest) ->
Cd dev
mkdir <project name>
{ Open project in VS Studio, create src folder, add <file>.js & <file>.test.js }
npm i –save-dev jest
{ VsStudio -> create top-level .gitignore containing node_modules }
{ Vstudio -> package.json add ‘“scripts : { “test”: “jest”}, …rest…”
->npm test

TypeScript Project Upgrade
npm i ts-node nodemon {nodemon watches files and recompiles when change)
npm i --save-dev jest typescript ts-jest @types/jest
npx ts-jest config:init
{ Vstudio -> package.json add ‘“scripts : { “start”: “npx jest noughtCross.test.ts”}, …rest…”
->npm start

GitHub Setup 
cd roman-numerals
git init
git add . (possibly git add README.md)
git commit -m "initial commit"
git branch -M main
{GitHub - Press New Repository Button roman-numerals }
git remote add origin https://github.com/paul-daniel-dempsey/roman-numerals.git
git push -u origin main
{ VS Studio should now identify changes}
