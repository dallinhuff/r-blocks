import ContactInfo from '~/domain/data/ContactInfo'

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactInfo>(event)
  const { service } = event.context
  const validationResult = service.validate(body)
  if (!validationResult.valid) {
    throw createError({
      status: 400,
      message: 'Could not send email: Bad contact info',
      data: validationResult.errors
    })
  }
  return await service.sendMessage(body)
})
