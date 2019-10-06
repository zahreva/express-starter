const AppError = require('#error');

const bots = [
  { id: 1, name: 'Watson', type: 'small talk', language: 'en' },
  { id: 2, name: 'Ivan', type: 'presale', language: 'ua' },
  { id: 3, name: 'Milka', type: 'big talk', language: 'ru' }
];

function controller(req, res) {
  const { id } = req.params;

  const bot = bots.find(x => x.id === +id);

  if (!bot) {
    throw new AppError({
      status: AppError.ERROR_STATUS.NOT_FOUND,
      message: AppError.ERROR_MESSAGES.botNotFound
    });
  }

  return res.send({
    message: 'Successfully retrieved bot!',
    data: { bot },
    status: 200
  });
}

module.exports = controller;
