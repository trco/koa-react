const router = require('koa-router')();
const request = require('superagent');

router.get('/stories', async (ctx, next) => {
  await request
    .get('https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=1000')
    .then(res => {
      ctx.body = res.body;
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/story/:id', async (ctx, next) => {
  const fetchUrl = 'https://hn.algolia.com/api/v1/items/' + ctx.params.id;
  await request
    .get(fetchUrl)
    .then(res => {
      ctx.body = res.body;
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
