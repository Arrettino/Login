import express from 'express';
import got from 'got';

function proxy(app) {
  const router = express.Router();
  app.use('/server', router);
  const { BASE_URL_SERVER, GITHUB, GOOGLE } = process.env;

  router.get('/login/github', async (req, res, next) => {
    const { code } = req.query;
    const { clientId, clientSecret } = JSON.parse(GITHUB);
    console.log(code);
    try {
      let response = await got.post(`https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`, {
        headers: {
          Accept: 'application/json',
        },
      });
      let body = JSON.parse(response.body);
      response = await got('https://api.github.com/user/emails', {
        headers: {
          'Authorization': `Bearer ${body.access_token}`,
        },
      });
      body = JSON.parse(response.body);
      console.log(body);
      res.send(body);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  });

  router.get('/login/google', async (req, res, next) => {
    const { code } = req.query;
    const { clientId, clientSecret } = JSON.parse(GOOGLE);
    const redirectUri = `${BASE_URL_SERVER}/login/google`;
    console.log(code);
    try {
      let response = await got.post(`https://oauth2.googleapis.com/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirectUri}`, {
        headers: {
          Accept: 'application/json',
        },
      });
      let body = await JSON.parse(response.body);
      const personFields = 'names,emailAddresses,photos,ageRanges';
      response = await got(`https://people.googleapis.com/v1/people/me?personFields=${personFields}`, {
        headers: {
          'Authorization': `Bearer ${body.access_token}`,
        },
      });
      body = JSON.parse(response.body);
      console.log(body);
      const { names, photos, emailAddresses } = body;
      const resp = { names: names[0].displayName, photos: photos[0].url, emailAddresses: emailAddresses[0].value };
      console.log(resp);
      res.send(resp);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  });
}

export default proxy;
