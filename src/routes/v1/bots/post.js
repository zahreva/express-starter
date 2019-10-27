const bots = require('#database/helpers/bots');

async function controller(req, res) {
  const { name, platformId } = req.body;

  const bot = await bots.create({ name, platformId });

  return res.status(201).send({
    status: 201,
    message: 'Successfully created bot!',
    data: { bot }
  });
}

module.exports = controller;
