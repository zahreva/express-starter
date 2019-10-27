const bots = require('#database/helpers/bots');

async function controller(req, res) {
  return res.send({
    message: 'Seccessfully retrieved bot list.',
    data: await bots.getAll(),
    status: 200
  });
}

module.exports = controller;
