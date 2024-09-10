import ContactService from '../services/ContactService'

declare module 'h3' {
  interface H3EventContext {
    service: ContactService
  }
}

export default defineNitroPlugin(async (app) => {
  const apiKey = 'd00073d2-baa6-4d86-829b-f62d1d1e55bb'
  const service = new ContactService(apiKey)

  app.hooks.hook('request', async (event) => {
    event.context.service = service
  })
})
