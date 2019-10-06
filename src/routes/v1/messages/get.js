const messages = [
  { id: 1, text: 'Hello World' },
  { id: 2, text: 'another message' },
  { id: 3, text: 'one more message' }
];

function controller(req, res) {
  return res.send({
    message: 'Success.',
    data: { messages },
    status: 200
  });
}

module.exports = controller;
