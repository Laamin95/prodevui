<template>
  <div class="p-6 max-w-4xl mx-auto space-y-8">
    <h1 class="text-3xl font-bold ui-text-color mb-2">ConfirmDialog Component</h1>
    <p class="text-sm text-ui-text-secondary mb-6">
      A Promise-based confirmation dialog. <code class="font-mono text-primary">await confirm()</code>
      resolves <code class="font-mono text-success">true</code> on confirm and
      <code class="font-mono text-error">false</code> on cancel or backdrop click.
    </p>

    <!-- Variants -->
    <Card title="Variants">
      <p class="text-sm text-ui-text-secondary mb-4">
        Three built-in variants — each changes the icon, icon background colour, and confirm button colour.
      </p>
      <div class="flex flex-wrap gap-3">
        <Button color="danger"  label="Danger (delete)"  prepend-icon="trash"                @click="tryDanger" />
        <Button color="warning" label="Warning"          prepend-icon="exclamation-triangle"  @click="tryWarning" />
        <Button color="primary" label="Info"             prepend-icon="information-circle"    @click="tryInfo" />
      </div>

      <!-- Live result badge -->
      <div v-if="lastResult !== null" class="mt-4 flex items-center gap-2">
        <span class="text-sm text-ui-text-secondary">Last result:</span>
        <Chip
          :label="lastResult ? 'Confirmed' : 'Cancelled'"
          :color="lastResult ? 'success' : 'error'"
          variant="tonal"
          size="small"
        />
      </div>
    </Card>

    <!-- With Title -->
    <Card title="With & Without Title">
      <p class="text-sm text-ui-text-secondary mb-4">
        The <code class="font-mono text-primary">title</code> field is optional.
        When omitted only the message is shown.
      </p>
      <div class="flex flex-wrap gap-3">
        <Button color="danger" variant="outlined" label="With title"    @click="tryWithTitle" />
        <Button color="danger" variant="outlined" label="Without title" @click="tryWithoutTitle" />
      </div>
    </Card>

    <!-- Custom Labels -->
    <Card title="Custom Button Labels">
      <p class="text-sm text-ui-text-secondary mb-4">
        Override the default <em>Cancel</em> / <em>Confirm</em> labels with
        <code class="font-mono text-primary">cancelLabel</code> and
        <code class="font-mono text-primary">confirmLabel</code>.
      </p>
      <Button color="warning" label="Archive item" prepend-icon="archive-box" @click="tryCustomLabels" />
    </Card>

    <!-- Async workflow demo -->
    <Card title="Async Workflow">
      <p class="text-sm text-ui-text-secondary mb-4">
        Shows the typical usage inside an async function — the confirm dialog awaits user input
        before proceeding with an API call (simulated here with a loading state).
      </p>
      <div class="flex items-center gap-4 flex-wrap">
        <Button
          color="danger"
          label="Delete record"
          prepend-icon="trash"
          :loading="deleting"
          @click="tryDeleteWorkflow"
        />
        <span v-if="deleteStatus" class="text-sm" :class="deleteStatus.ok ? 'text-success' : 'text-ui-text-secondary'">
          {{ deleteStatus.msg }}
        </span>
      </div>
    </Card>

    <!-- API Reference -->
    <Card title="API Reference">
      <div class="space-y-6">

        <!-- Setup -->
        <div>
          <h3 class="font-semibold text-sm mb-3 ui-text-color">1 — Mount once in your root layout</h3>
          <pre class="text-xs bg-color-1 p-4 rounded-lg border border-color overflow-x-auto"><code>&lt;!-- AppLayout.vue or App.vue --&gt;
&lt;ConfirmDialog /&gt;   &lt;!-- globally registered by prodevui --&gt;</code></pre>
        </div>

        <!-- Import -->
        <div>
          <h3 class="font-semibold text-sm mb-3 ui-text-color">2 — Call from any component</h3>
          <pre class="text-xs bg-color-1 p-4 rounded-lg border border-color overflow-x-auto"><code>import { useConfirm } from 'prodevui'

const { confirm } = useConfirm()

async function onDelete(item) {
  const ok = await confirm({
    title: 'Delete item',
    message: `Remove "${item.name}"? This cannot be undone.`,
    confirmLabel: 'Delete',
    variant: 'danger',          // 'danger' | 'warning' | 'info'
  })

  if (!ok) return               // user cancelled

  await api.delete(item.id)     // proceed
}</code></pre>
        </div>

        <!-- Options table -->
        <div>
          <h3 class="font-semibold text-sm mb-3 ui-text-color">ConfirmOptions</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full text-xs border border-color rounded-lg overflow-hidden">
              <thead class="bg-color-1">
                <tr>
                  <th class="text-left p-3 font-semibold ui-text-color border-b border-color">Prop</th>
                  <th class="text-left p-3 font-semibold ui-text-color border-b border-color">Type</th>
                  <th class="text-left p-3 font-semibold ui-text-color border-b border-color">Default</th>
                  <th class="text-left p-3 font-semibold ui-text-color border-b border-color">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-color bg-color-2">
                <tr>
                  <td class="p-3 font-mono text-primary">message</td>
                  <td class="p-3 text-ui-text-secondary">string</td>
                  <td class="p-3 text-ui-text-secondary">—</td>
                  <td class="p-3 text-ui-text-secondary">Required. The body text shown below the icon.</td>
                </tr>
                <tr>
                  <td class="p-3 font-mono text-primary">title</td>
                  <td class="p-3 text-ui-text-secondary">string</td>
                  <td class="p-3 text-ui-text-secondary">undefined</td>
                  <td class="p-3 text-ui-text-secondary">Optional heading above the message.</td>
                </tr>
                <tr>
                  <td class="p-3 font-mono text-primary">variant</td>
                  <td class="p-3 text-ui-text-secondary">'danger' | 'warning' | 'info'</td>
                  <td class="p-3 text-ui-text-secondary">'danger'</td>
                  <td class="p-3 text-ui-text-secondary">Controls icon, icon background, and confirm button colour.</td>
                </tr>
                <tr>
                  <td class="p-3 font-mono text-primary">confirmLabel</td>
                  <td class="p-3 text-ui-text-secondary">string</td>
                  <td class="p-3 text-ui-text-secondary">'Confirm'</td>
                  <td class="p-3 text-ui-text-secondary">Label for the confirm button.</td>
                </tr>
                <tr>
                  <td class="p-3 font-mono text-primary">cancelLabel</td>
                  <td class="p-3 text-ui-text-secondary">string</td>
                  <td class="p-3 text-ui-text-secondary">'Cancel'</td>
                  <td class="p-3 text-ui-text-secondary">Label for the cancel button.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Shorthand -->
        <div>
          <h3 class="font-semibold text-sm mb-3 ui-text-color">String shorthand</h3>
          <pre class="text-xs bg-color-1 p-4 rounded-lg border border-color overflow-x-auto"><code>// Pass a plain string for a quick one-liner confirm
const ok = await confirm('Are you sure you want to continue?')</code></pre>
        </div>

      </div>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useConfirm } from '../../src/lib/useConfirm'
import { useSnackbar } from '../../src/lib/useSnackbar'

const { confirm } = useConfirm()
const snackbar = useSnackbar()

// ── Variants ─────────────────────────────────────────────────────────────────
const lastResult = ref(null)

async function tryDanger() {
  const ok = await confirm({
    title: 'Delete item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmLabel: 'Delete',
    variant: 'danger',
  })
  lastResult.value = ok
  if (ok) snackbar.success('Item deleted.')
  else    snackbar.info('Deletion cancelled.')
}

async function tryWarning() {
  const ok = await confirm({
    title: 'Disable feature',
    message: 'Disabling this feature may affect other users. Are you sure?',
    confirmLabel: 'Disable',
    variant: 'warning',
  })
  lastResult.value = ok
  if (ok) snackbar.warning('Feature disabled.')
  else    snackbar.info('Cancelled.')
}

async function tryInfo() {
  const ok = await confirm({
    title: 'Publish changes',
    message: 'Your changes will be visible to all users immediately.',
    confirmLabel: 'Publish',
    variant: 'info',
  })
  lastResult.value = ok
  if (ok) snackbar.success('Changes published!')
  else    snackbar.info('Publish cancelled.')
}

// ── Title variants ────────────────────────────────────────────────────────────
async function tryWithTitle() {
  const ok = await confirm({
    title: 'Remove member',
    message: 'This member will lose access to all projects in this workspace.',
    confirmLabel: 'Remove',
    variant: 'danger',
  })
  if (ok) snackbar.success('Member removed.')
  else    snackbar.info('Cancelled.')
}

async function tryWithoutTitle() {
  const ok = await confirm({
    message: 'Remove this member from the workspace?',
    confirmLabel: 'Remove',
    variant: 'danger',
  })
  if (ok) snackbar.success('Member removed.')
  else    snackbar.info('Cancelled.')
}

// ── Custom labels ─────────────────────────────────────────────────────────────
async function tryCustomLabels() {
  const ok = await confirm({
    title: 'Archive item',
    message: 'Archived items can be restored later from the archive section.',
    confirmLabel: 'Archive',
    cancelLabel: 'Keep active',
    variant: 'warning',
  })
  if (ok) snackbar.warning('Item archived.')
  else    snackbar.info('Item kept active.')
}

// ── Async workflow ────────────────────────────────────────────────────────────
const deleting = ref(false)
const deleteStatus = ref(null)

async function tryDeleteWorkflow() {
  const ok = await confirm({
    title: 'Delete record',
    message: 'This will permanently delete the record and all associated data.',
    confirmLabel: 'Delete',
    variant: 'danger',
  })

  if (!ok) {
    deleteStatus.value = { ok: false, msg: 'Cancelled — no changes made.' }
    return
  }

  // Simulate API call
  deleting.value = true
  deleteStatus.value = null
  await new Promise(r => setTimeout(r, 1500))
  deleting.value = false
  deleteStatus.value = { ok: true, msg: 'Record deleted successfully.' }
  snackbar.success('Record deleted.')
}
</script>
