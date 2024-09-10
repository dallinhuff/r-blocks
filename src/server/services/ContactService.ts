import type { ContactError } from '~/domain/data/ContactError'
import ContactInfo from '~/domain/data/ContactInfo'

export type ValidationResult =
  | { valid: true }
  | { valid: false, errors: ContactError }

export default class ContactService {
  private readonly apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async sendMessage(info: ContactInfo) {
    const formData = this.getFormData(info)
    const result = await $fetch('/submit', {
      baseURL: 'https://api.web3forms.com',
      method: 'POST',
      body: formData
    })

    return info
  }
  
  validate(info: ContactInfo): ValidationResult {
    const errors: ContactError = {}

    if (!info.name) {
      errors.name = 'Name is required'
    }

    if (!info.email) {
      errors.email = 'Email is required'
    }

    if (!info.phone) {
      errors.phone = 'Phone is required'
    }

    if (!info.message) {
      errors.message = 'Message is required'
    }
    
    return Object.keys(errors).length > 0 ?
      { valid: false, errors }
    : { valid: true }
  }

  getFormData(info: ContactInfo): FormData {
    const formData = new FormData()

    formData.append('access_key', this.apiKey)
    formData.append('subject', 'Quote Request')
    formData.append('from_name', `${info.name} via R-Blocks Website`)

    for (const key of Object.keys(info)) {
      formData.append(key, info[key])
    }

    return formData
  }
}