/* eslint-disable import/no-dynamic-require */
const glob = require('glob');

function createRouter(app) {
  glob
    .sync('**/router.js', { cwd: `${__dirname}/` })
    .sort((a, b) => (b.split('/').length > a.split('/').length ? 1 : -1))
    .forEach(path => {
      const parsedPath = path
        .replace('{{', ':')
        .replace(new RegExp('}}|router.js'), '');
      const routePath = `/${parsedPath.replace('/router.js', '')}`;
      const filePath = `./${path}`;

      app.use(routePath, require(filePath));
    });
}

module.exports = createRouter;
