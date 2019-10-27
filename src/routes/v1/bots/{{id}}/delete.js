const Bots = require('#database/helpers/bots');

async function controller(req, res) {
  const { id } = req.params;

  const botExists = await Bots.destroy(id);

  if (!botExists) {
    return res.status(404).send({
      message: 'Bot was not found',
      status: 404
    });
  }
  return res.status(200).send({
    message: 'Successfully deleted bot!',
    status: 200
  });
}

module.exports = controller;
