const bots = [
  { id: 1, name: 'Watson', type: 'small talk', language: 'en' },
  { id: 2, name: 'Ivan', type: 'presale', language: 'ua' },
  { id: 3, name: 'Milka', type: 'small talk', language: 'uk' }
];

function controller(req, res) {
  return res.send({
    message: 'Seccessfully retrieved bot list.',
    data: { bots },
    status: 200
  });
}

module.exports = controller;
