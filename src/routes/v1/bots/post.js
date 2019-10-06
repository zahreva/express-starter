function controller(req, res) {
  const { id, name, language, type } = req.body;

  return res.status(201).send({
    status: 201,
    message: 'Successfully created bot!',
    data: { bot: { id, name, language, type } }
  });
}

module.exports = controller;
