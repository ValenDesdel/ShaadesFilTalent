
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://ValenDesdel.github.io/ShaadesFilTalent
git push -f git@github.com:ValenDesdel/ShaadesFilTalent.git master:gh-pages

cd -