const dev = process.env.NODE_ENV === "development";
const port = process.env.PORT;
const type = dev ? "http://" : "https://";
const domain = type + (dev ? `localhost:${port}` : process.env.URL);
const staticfolder = "/dist";
const staticaddr = domain + staticfolder;
const host = dev ? "127.0.0.1" : process.env.IP;
const hosturl = type + host;
const sender = process.env.SENDER;
const receiever = process.env.RECEIEVER;
const smtpuser = process.env.SMTP_LOGIN;
const smtppassword = process.env.SMTP_PASSWORD;
const emailurl = `${domain}/send`;
const smtphost = process.env.SMTP_HOST;
const contactposturl = "/email/contact";
const partnerposturl = "/email/partner";

module.exports.server = {
  dev,
  port,
  domain,
  static: staticfolder,
  hosturl,
  smtpuser,
  smtppassword,
  smtphost,
  contactposturl,
  partnerposturl,
  mail: {
    sender,
    receiever
  }
};

module.exports.client = {
  dev,
  port,
  emailurl,
  contactposturl,
  partnerposturl,
  domain,
  static: staticaddr,
  hosturl
};
