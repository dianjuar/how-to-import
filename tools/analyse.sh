echo "nx build $1 --prod --source-map --stats-json --skip-nx-cache"
nx build $1 --prod --source-map --stats-json --skip-nx-cache

echo "source-map-explorer dist/apps/$1/**/*.js"
source-map-explorer dist/apps/$1/**/*.js
