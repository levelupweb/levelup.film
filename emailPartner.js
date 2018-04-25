
const emailServer = require("./emailServer");
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
const config = require('./config').server;

const emailBody = data => `
  <html><body> 
    <h1>Новая заявка на партнера с сайта Film.levelupworlds.com</h1>
    <p>С сайта Film.levelupworlds.com пришло новое сообщение от потенциального партнера</p>
    <ul>
      <li>Имя партнера: ${data.name || 'Не указано'}</li>
      <li>E-mail: ${data.email || 'Не указано'}</li>
      <li>Номер телефона: ${data.phone || 'Не указано'}</li>
      <li>Ссылка на портфолио: ${data.portfolio || 'Не указано'}</li>
      <li>Специализация: ${data.spec || 'Не указано'}</li>
      <li>Город: ${data.city || 'Не указано'}</li>
      <li>Сообщение: ${data.message || 'Не указано'}</li>
    </ul>
  </body></html>
`;



module.exports.checkPartnerData = [
  check('name')
    .exists()
    .withMessage("Не заполнено поле 'Имя'"),
  check('portfolio')
    .exists()
    .withMessage("Не заполнено поле 'Портфолио"),
  check('portfolio')
    .isURL()
    .withMessage("Пожалуйста, в поле 'Портфолио' укажите верный URL-адрес"),
  check('city')
    .exists()
    .withMessage("Не заполнено поле 'Город"),
  check('spec')
    .exists()
    .withMessage("Не заполнено поле 'Специализация"),
  check('email')
    .exists()
    .withMessage("Не заполнено поле 'Email"),
  check('email')
    .isEmail()
    .trim()
    .normalizeEmail()
    .withMessage('Неверный формат Email адреса'),
  check('phone')
    .exists()
    .withMessage('Не заполнено поле "Контактный телефон"'),
  check('message')
    .optional()
    .isLength({
      min: 1,
      max: 1000,
    })
    .withMessage('Сообщение не может быть больше 1000 символов'),
];

module.exports.emailPartnerHandler = (req, res) => {
  const data = matchedData(req);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.mapped(),
    });
  }

  const message	= {
    text: 'Новая заявка на партнера с сайта Film.Levelupworlds.com',
    from: config.mail.sender,
    to: `<${config.mail.receiever}>`,
    subject: 'Новая заявка на партнера с сайта Film.Levelupworlds.com',
    attachment: [{
      data: emailBody(req.body),
      alternative: true,
    }],
  };

  return emailServer.send(message, (err, message) => {
    if (err) {
      console.log('Send Error: ', err);
      return res.status(500).send(err);
    }
    return res.status(200).json({ isSended: true });
  });
};
