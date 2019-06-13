const router = require('koa-router')()

router.get('/users', async (ctx, next) => {
  ctx.body = [{
      id: 1,
      name: "John Doe"
    }, {
      id: 2,
      name: "Jane Doe"
    }
  ]
})

module.exports = router
