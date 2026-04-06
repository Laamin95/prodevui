import { shallowRef, triggerRef, ref, type Ref, type ShallowRef } from 'vue'

export interface SnackbarOptions {
  message?: string
  title?: string
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info'
  icon?: string
  action?: string
  timeout?: number
  position?: 'top' | 'bottom'
  closeable?: boolean
  showProgress?: boolean
  multiline?: boolean
  onAction?: (() => void) | null
}

export interface SnackbarEntry {
  id: number
  isVisible: Ref<boolean>
  options: Required<SnackbarOptions>
  close: () => void
}

export interface SnackbarInstance {
  snackbars: ShallowRef<SnackbarEntry[]>
  show: (options: SnackbarOptions) => SnackbarEntry
  success: (message: string, options?: SnackbarOptions) => SnackbarEntry
  error: (message: string, options?: SnackbarOptions) => SnackbarEntry
  warning: (message: string, options?: SnackbarOptions) => SnackbarEntry
  info: (message: string, options?: SnackbarOptions) => SnackbarEntry
}

const snackbars = shallowRef<SnackbarEntry[]>([])
let instanceId = 0

let snackbarInstance: SnackbarInstance | null = null

export function useSnackbar(): SnackbarInstance {
  if (snackbarInstance) {
    return snackbarInstance
  }

  const show = (options: SnackbarOptions): SnackbarEntry => {
    const id = ++instanceId
    const isVisible = ref(true)

    const close = () => {
      isVisible.value = false
      setTimeout(() => {
        const index = snackbars.value.findIndex(s => s.id === id)
        if (index > -1) {
          snackbars.value.splice(index, 1)
          triggerRef(snackbars)
        }
      }, 300)
    }

    const snackbar: SnackbarEntry = {
      id,
      isVisible,
      options: {
        message: '',
        title: '',
        variant: 'default',
        icon: '',
        action: '',
        timeout: 5000,
        position: 'bottom',
        closeable: true,
        showProgress: false,
        multiline: false,
        onAction: null,
        ...options,
      },
      close,
    }

    snackbars.value.push(snackbar)
    triggerRef(snackbars)

    if (snackbar.options.timeout > 0) {
      setTimeout(() => {
        close()
      }, snackbar.options.timeout)
    }

    return snackbar
  }

  const success = (message: string, options: SnackbarOptions = {}) => {
    return show({ message, variant: 'success', icon: 'success', ...options })
  }

  const error = (message: string, options: SnackbarOptions = {}) => {
    return show({ message, variant: 'error', icon: 'error', ...options })
  }

  const warning = (message: string, options: SnackbarOptions = {}) => {
    return show({ message, variant: 'warning', icon: 'warning', ...options })
  }

  const info = (message: string, options: SnackbarOptions = {}) => {
    return show({ message, variant: 'info', icon: 'info', ...options })
  }

  const instance: SnackbarInstance = {
    snackbars,
    show,
    success,
    error,
    warning,
    info,
  }

  snackbarInstance = instance
  return instance
}

export const snackbar = {
  show: (...args: Parameters<SnackbarInstance['show']>) => useSnackbar().show(...args),
  success: (...args: Parameters<SnackbarInstance['success']>) => useSnackbar().success(...args),
  error: (...args: Parameters<SnackbarInstance['error']>) => useSnackbar().error(...args),
  warning: (...args: Parameters<SnackbarInstance['warning']>) => useSnackbar().warning(...args),
  info: (...args: Parameters<SnackbarInstance['info']>) => useSnackbar().info(...args),
}
