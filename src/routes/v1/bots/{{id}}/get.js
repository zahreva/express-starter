const AppError = require('#error');
const Bots = require('#database/helpers/bots');

async function controller(req, res) {
  const { id } = req.params;

  const bot = await Bots.getOne(id);

  if (!bot) {
    throw new AppError({
      status: AppError.ERROR_STATUS.NOT_FOUND,
      message: AppError.ERROR_MESSAGES.botNotFound
    });
  }

  return res.send({
    message: 'Successfully deleted bot!',
    data: { bot },
    status: 204
  });
}

module.exports = controller;
