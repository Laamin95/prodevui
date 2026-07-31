import { ref } from 'vue'

export interface ConfirmOptions {
  title?: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
  /** Controls icon colour and confirm button colour. Defaults to 'danger'. */
  variant?: 'danger' | 'warning' | 'info'
}

interface ConfirmState {
  options: ConfirmOptions
  resolve: (value: boolean) => void
}

// Module-level singleton — one dialog at a time across the whole app
const pending = ref<ConfirmState | null>(null)

export function useConfirm() {
  /**
   * Show a confirmation dialog.
   * Returns a Promise that resolves `true` (confirmed) or `false` (cancelled).
   *
   * Usage:
   *   const ok = await confirm({ title: 'Delete?', message: 'Remove this item?', variant: 'danger' })
   *   if (!ok) return
   */
  function confirm(options: ConfirmOptions | string): Promise<boolean> {
    const opts: ConfirmOptions =
      typeof options === 'string' ? { message: options } : options
    return new Promise((resolve) => {
      pending.value = { options: opts, resolve }
    })
  }

  function accept() {
    pending.value?.resolve(true)
    pending.value = null
  }

  function dismiss() {
    pending.value?.resolve(false)
    pending.value = null
  }

  return { pending, confirm, accept, dismiss }
}
