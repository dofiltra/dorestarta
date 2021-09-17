# Default Node Module

git init
git add . && git commit -m "Initial commit"

git remote add origin <Git Repository Url>
git push -u origin master

npm init -y
npm install --save-dev typescript prettier tslint tslint-config-prettier
npm install --save-dev jest ts-jest @types/jest

git add -A && git commit -m "Setup Package"
git push

npm publish

---
npm version patch
npm publish


Details: https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c


