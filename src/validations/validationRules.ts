type ValidationResult = true | string | Record<string, string>

const rules = {
  required: (value: unknown): ValidationResult => {
    const msg = {
      en: 'This field is required.',
      dv: 'ފުރަންޖެހޭ',
    }
    return !!value || msg
  },
  email: (value: string): ValidationResult => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) || 'Invalid email address.'
  },
  min: (min: number) => {
    return (value: string): ValidationResult => {
      return (value && value.length >= min) || `Minimum length is ${min} characters.`
    }
  },
  max: (max: number) => {
    return (value: string): ValidationResult => {
      return (value && value.length <= max) || `Maximum length is ${max} characters.`
    }
  },
  numeric: (value: unknown): ValidationResult => {
    return (!isNaN(parseFloat(value as string)) && isFinite(value as number)) || 'This field must be a number.'
  },
  nid: (country: string) => {
    return (value: string): ValidationResult => {
      if (country === 'mv') {
        const pattern = /^A\d{6}$/
        return pattern.test(value) || 'NID must start with A followed by 6 digits for Maldives'
      }
      return true
    }
  },
  customPattern: (conditionFn: () => boolean, pattern: string, errorMsg = 'Invalid format.') => {
    return (value: string): ValidationResult => {
      if (conditionFn()) {
        const regex = new RegExp(pattern)
        return regex.test(value) || errorMsg
      }
      return true
    }
  },
}

export default rules
