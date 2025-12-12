/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { registerValidator } from '#validators/auth'
import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')
router.on('/timeline').renderInertia('timeline')

router.get('/login', (ctx) => {
  return ctx.inertia.render('auth/login')
})

router.get('/register', (ctx) => {
  return ctx.inertia.render('auth/register')
})

router.post('/login', (ctx) => {
  return ctx.inertia.render('auth/login')
})

router.post('/register', async (ctx) => {
  const data = await ctx.request.validateUsing(registerValidator)
  console.log({ data })
  return ctx.response.redirect().back()
})
