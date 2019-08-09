const jsonServer = require('json-server');
const $db = require('./db'); // 'db.json
const rewriterList = require('./src/rewriter');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router($db);

// middlewares
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser);

// rewriter
server.use(jsonServer.rewriter(rewriterList));

// @see https://github.com/typicode/json-server#custom-output-example
router.render = (req, res) => {
  // 分页设置.
  const pageCount = JSON.stringify(res.getHeader('X-Total-Count'));
  if (pageCount) {
    res.jsonp({
      code: 200,
      data: res.locals.data,
      pagination: {
        total: parseInt(pageCount)
      },
      msg: '',
      status: true
    });
    return;
  }
  res.jsonp({
    code: 200,
    data: res.locals.data,
    msg: '',
    status: true
  });
}

// router
server.use(router);

const serverConfig = {
  PORT: 3000
}
server.listen(serverConfig.PORT, () => {
  console.log(`JSON Server is running at ${serverConfig.PORT}`);
});