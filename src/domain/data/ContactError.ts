import type ContactInfo from './ContactInfo'

export type ContactError = Partial<Record<keyof ContactInfo, string>>
