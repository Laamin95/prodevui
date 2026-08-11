# prodevui

Vue 3 component library for Prodev apps. Tailwind CSS, heroicons, dark-mode built in.

## Install

```bash
# Install a specific release
npm install github:Laamin95/prodevui#v1.0.0

# Required peer dependencies
npm install @heroicons/vue @vueuse/core @vueuse/components
```

## Setup

### 1. Register the plugin — `main.ts`

```ts
import { createApp } from 'vue'
import App from './App.vue'
import ProDevUI, { defineUiConfig } from 'prodevui'
import 'prodevui/style.css'

const app = createApp(App)
app.use(ProDevUI, defineUiConfig({
  defaults: {
    rounded: 'lg',  // default border-radius for all components
    // size: 'md',  // default size for all fields
  }
}))
app.mount('#app')
```

### 2. Tailwind config — `tailwind.config.js`

```js
export default {
  darkMode: 'class',   // prodevui uses :root.dark — must be 'class' mode
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/prodevui/dist/**/*.{js,cjs}',  // required — prodevui uses Tailwind classes internally
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#368B76',   // your brand color
        error:     '#ef4444',
        warning:   '#f59e0b',
        success:   '#10b981',
        info:      '#0ea5e9',
        // ProDevUI surface tokens — map to CSS variables defined in your style.css
        'ui-text-primary':   'var(--text-color)',
        'ui-text-secondary': 'var(--text-secondary)',
        'ui-surface':        'var(--bg-color)',
        'ui-surface-2':      'var(--color-1)',
        'ui-surface-3':      'var(--color-2)',
        'color-1': 'var(--color-1)',
        'color-2': 'var(--color-2)',
        'color-3': 'var(--color-3)',
        'color-4': 'var(--color-4)',
      },
    },
  },
}
```

### 3. CSS variables — `src/style.css`

ProDevUI reads CSS variables for theming. Copy this block into your app's global CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --primary: #368B76;

    --bg-color:       #ffffff;
    --text-color:     #262626;
    --text-secondary: #64748b;
    --border-color:   rgba(0, 0, 0, 0.1);
    --card-bg:        #f8fafc;
    --button-bg:      #f1f5f9;
    --hover-bg:       rgba(0, 0, 0, 0.05);

    /* Surface scale — used by NavBar, AppBar, Card, Dropdown, etc. */
    --color-1: #f9fafb;
    --color-2: #f3f4f6;
    --color-3: #e5e7eb;
    --color-4: #d1d5db;
  }

  :root.dark {
    --bg-color:       #0b1220;
    --text-color:     rgba(255, 255, 255, 0.87);
    --text-secondary: hsl(215 20.2% 65.1%);
    --border-color:   rgba(255, 255, 255, 0.1);
    --card-bg:        #1e293b;
    --button-bg:      #334155;
    --hover-bg:       rgba(255, 255, 255, 0.05);

    --color-1: #111827;
    --color-2: #151d2e;
    --color-3: #1a2233;
    --color-4: #1e2635;
  }
}

/* Required by the Icon component — controls heroicon SVG sizing */
.hero-icon { display: block; flex-shrink: 0; overflow: hidden; }
.hero-icon > svg { display: block; width: 100%; height: 100%; }

/* ProDevUI utility classes (not included in the dist CSS) */
.ui-bg-color     { background-color: var(--bg-color); }
.ui-text-color   { color: var(--text-color); }
.ui-text-primary { color: var(--text-color); }
.ui-text-secondary { color: var(--text-secondary); }
.ui-border-color { border-color: var(--border-color); }
.ui-card-bg      { background-color: var(--card-bg); }
.ui-button-bg    { background-color: var(--button-bg); }
```

### 4. Mount global UI providers — `App.vue`

```vue
<template>
  <Snackbar />
  <ConfirmDialog />
  <RouterView />
</template>
```

`Snackbar` and `ConfirmDialog` are globally registered and must be present in the component tree for `useSnackbar` and `useConfirm` to work.

---

## Global usage

All components are globally registered — no imports needed in templates. Use either the bare name or the `Ui`-prefixed alias:

```html
<Button label="Save" />        <!-- same as <UiButton> -->
<Select v-model="role" ... />  <!-- same as <UiSelect> -->
```

Dark mode: toggle the class `dark` on `<html>`. Use `<ThemeToggle />` or call `document.documentElement.classList.toggle('dark')`.

---

## Components

### Button

```html
<Button label="Save" color="primary" variant="contained" size="md" :loading="saving" @click="save" />
<Button prepend-icon="plus" label="Add" variant="tonal" color="primary" />
<Button icon="trash" color="danger" variant="text" />
```

| Prop | Type | Default | Values |
|---|---|---|---|
| `label` | string | — | — |
| `icon` | string | — | heroicon name (icon-only, no label) |
| `prepend-icon` | string | — | heroicon name |
| `append-icon` | string | — | heroicon name |
| `color` | string | `primary` | `primary` `secondary` `success` `warning` `danger` `gray` |
| `variant` | string | `contained` | `contained` `tonal` `outlined` `text` `plain` |
| `size` | string | config default | `xs` `sm` `md` `lg` `xl` |
| `rounded` | string | config default | `none` `sm` `md` `lg` `xl` `full` |
| `block` | boolean | `false` | full-width |
| `loading` | boolean | `false` | — |
| `disabled` | boolean | `false` | — |

---

### InputText

```html
<InputText v-model="name" label="Full Name" />
<InputText v-model="email" label="Email" type="email" prepend="envelope" clearable />
<InputText v-model="code" label="Code" :rules="[v => !!v || 'Required']" />
```

| Prop | Type | Default |
|---|---|---|
| `v-model` | string | — |
| `label` | string | — |
| `placeholder` | string | — |
| `type` | string | `text` |
| `prepend` | string | — | heroicon name |
| `append` | string | — | heroicon name |
| `clearable` | boolean | `true` |
| `size` | string | config default |
| `rounded` | string | config default |
| `disabled` | boolean | `false` |
| `readonly` | boolean | `false` |
| `required` | boolean | `false` |
| `rules` | `((v: any) => true \| string)[]` | `[]` |
| `error-messages` | string \| string[] | — |

Emits: `update:modelValue`, `input`, `change`, `focus`, `blur`, `clear`, `enter`

---

### SearchInput

Like InputText with a built-in magnifier prepend icon and a debounced `search` event.

```html
<SearchInput v-model="q" placeholder="Search…" @search="loadResults" />
```

---

### Select

```html
<Select v-model="role" label="Role" :items="roles" item-title="label" item-value="value" clearable />
<Select v-model="tags" label="Tags" :items="tagList" multiple searchable clearable />
```

| Prop | Type | Default |
|---|---|---|
| `v-model` | any \| any[] | — |
| `items` | array | `[]` |
| `item-title` | string | `text` |
| `item-value` | string | `value` |
| `label` | string | — |
| `placeholder` | string | — |
| `multiple` | boolean | `false` |
| `clearable` | boolean | `false` |
| `searchable` | boolean | `false` |
| `size` | string | config default |

When `multiple: true`, `v-model` is an array. Clear emits `''` (empty string) — coerce back to `[]` when needed: `:model-value="val || []"`.

---

### Checkbox

```html
<Checkbox v-model="agree" label="I agree" />
<Checkbox v-model="status" :true-value="1" :false-value="0" label="Active" />
```

| Prop | Type | Default |
|---|---|---|
| `v-model` | any | — |
| `label` | string | — |
| `true-value` | any | `true` |
| `false-value` | any | `false` |
| `disabled` | boolean | `false` |
| `readonly` | boolean | `false` |

---

### InputNumber

```html
<InputNumber v-model="qty" label="Quantity" :min="1" :max="100" :step="1" />
```

Same props as InputText, plus `min`, `max`, `step`.

---

### Textarea

```html
<Textarea v-model="notes" label="Notes" :rows="4" clearable />
```

Same props as InputText, plus `rows` (default `3`) and `maxlength`.

---

### DatePicker

```html
<DatePicker v-model="date" label="Date" />
```

| Prop | Type |
|---|---|
| `v-model` | string |
| `label` | string |
| `type` | string (`date`) |

---

### Chip

```html
<Chip label="Active" color="success" variant="tonal" size="small" />
<Chip label="Tag" closable @close="removeTag" />
```

| Prop | Type | Default | Values |
|---|---|---|---|
| `label` | string | — | — |
| `color` | string | `primary` | Tailwind color or `primary` `success` `warning` `danger` `gray` |
| `variant` | string | `tonal` | `tonal` `contained` `outlined` |
| `size` | string | — | `small` `medium` `large` |
| `closable` | boolean | `false` | — |

Emits: `close`

---

### ChipGroup

Multi-select chip group. `v-model` is an array of selected values.

```html
<ChipGroup v-model="selected" :items="options" item-title="label" item-value="id" />
```

---

### Icon

Loads heroicons asynchronously. Shows a spinner while loading, a warning icon if the name is not found.

```html
<Icon name="plus" size="20" />
<Icon name="check-circle" type="outline" size="24" class="text-success" />
<Icon name="trash" size="16" color="text-danger" />
```

| Prop | Type | Default | Notes |
|---|---|---|---|
| `name` | string | required | kebab-case heroicon name, e.g. `arrow-path` |
| `type` | `solid \| outline` | `solid` | — |
| `size` | number \| string | `24` | Plain number = px. CSS string (`1.5rem`) passed through. |
| `color` | string | `currentColor` | Tailwind class (`text-primary`) or raw CSS color |

---

### Dropdown

Handles positioning, click-outside, and keyboard events internally. Do not hand-roll open/close state.

```html
<Dropdown align="right" close-on-content-click>
  <template #trigger>
    <Button icon="ellipsis-vertical" variant="text" size="sm" />
  </template>
  <DropdownItem prepend-icon="pencil" @click="edit">Edit</DropdownItem>
  <DropdownItem prepend-icon="trash" @click="remove">Delete</DropdownItem>
</Dropdown>
```

| Prop | Type | Default | Values |
|---|---|---|---|
| `align` | string | `left` | `left` `right` `center` |
| `close-on-content-click` | boolean | `false` | — |
| `open-on-hover` | boolean | `false` | — |

Slots: `trigger` (the clickable element), default (menu items).

---

### Overlay (Modal)

```html
<Overlay v-model="open" title="Edit User" width="md:w-[520px] w-[90vw]" closebutton>
  <p>Modal body content</p>
  <template #footer>
    <Button label="Cancel" variant="text" @click="open = false" />
    <Button label="Save" color="primary" :loading="saving" @click="save" />
  </template>
</Overlay>
```

| Prop | Type | Default |
|---|---|---|
| `model-value` | boolean | — |
| `title` | string | — |
| `width` | string | — |
| `rounded` | string | config default |
| `closebutton` | boolean | `false` |
| `persistent` | boolean | `false` (click-outside closes) |

---

### Table

```html
<Table>
  <TableHead>
    <Th>Name</Th>
    <Th>Status</Th>
    <Th />
  </TableHead>
  <TableBody>
    <TableSkeleton v-if="loading" :cols="3" :rows="5" />
    <TableEmpty v-else-if="!rows.length" :cols="3" label="No records." />
    <TableRow v-else v-for="row in rows" :key="row.id">
      <Td>{{ row.name }}</Td>
      <Td><Chip :label="row.status" color="success" variant="tonal" size="small" /></Td>
      <Td class="text-right">
        <Button icon="pencil" variant="text" size="sm" @click="edit(row)" />
      </Td>
    </TableRow>
  </TableBody>
</Table>
```

---

### Pagination

```html
<Pagination v-model:page="page" :total="totalItems" :per-page="15" />
```

---

### Avatar

```html
<Avatar name="John Doe" size="md" />
<Avatar :src="user.photo" name="Jane Smith" />
```

---

### Badge

Wraps content and shows a count indicator.

```html
<Badge :count="notifications" color="danger">
  <Icon name="bell" size="20" />
</Badge>
```

---

### Banner

```html
<Banner color="warning" closable>Session expires in 5 minutes.</Banner>
<Banner color="info">Read-only mode is active.</Banner>
```

---

### Card

```html
<Card title="Monthly Revenue" subtitle="Last 30 days">
  <!-- content -->
</Card>
```

---

### Tab

```html
<Tab v-model="active" :items="['Details', 'History', 'Notes']">
  <template #Details> ... </template>
  <template #History> ... </template>
  <template #Notes> ... </template>
</Tab>
```

---

### Expansion (Accordion)

```html
<Expansion title="Advanced Options">
  <!-- revealed on expand -->
</Expansion>
```

---

### Divider

```html
<Divider />
<Divider label="OR" />
```

---

### Breadcrumbs

```html
<Breadcrumbs :items="[{ label: 'Home', to: '/' }, { label: 'Users' }]" />
```

---

### ThemeToggle

Toggles `.dark` on `<html>`.

```html
<ThemeToggle />
```

---

### Toolbar

Horizontal toolbar row, typically sits above a table or list.

```html
<Toolbar>
  <SearchInput v-model="q" />
  <template #right>
    <Button label="Add" prepend-icon="plus" color="primary" />
  </template>
</Toolbar>
```

---

## Composables

All composables are imported from `'prodevui'`.

### useSnackbar

```ts
import { useSnackbar } from 'prodevui'

const snackbar = useSnackbar()

snackbar.success('Saved successfully.')
snackbar.error('Failed to save.')
snackbar.warning('Check the form.')
snackbar.info('Loading data…')
snackbar.show({ message: 'Custom toast', color: 'primary', duration: 4000 })
```

Requires `<Snackbar />` in `App.vue`.

---

### useConfirm

```ts
import { useConfirm } from 'prodevui'

const { confirm } = useConfirm()

async function deleteRecord(id: number) {
  const ok = await confirm({
    title: 'Delete record?',
    message: 'This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    variant: 'danger',    // 'danger' | 'warning' | 'info'
  })
  if (ok) await api.delete(id)
}
```

Requires `<ConfirmDialog />` in `App.vue`.

---

### defineUiConfig

Sets global prop defaults for all components:

```ts
import { defineUiConfig } from 'prodevui'

app.use(ProDevUI, defineUiConfig({
  defaults: {
    rounded: 'lg',
    size: 'md',
  }
}))
```

---

## Tooltip directive

Registered globally as `v-tooltip`:

```html
<Icon name="information-circle" v-tooltip="'More info'" size="16" />
<Button label="Save" v-tooltip="'Ctrl+S'" />
```

---

## Validation

Field components accept a `rules` prop. Rules run on blur.

```html
<InputText
  v-model="email"
  label="Email"
  :rules="[
    v => !!v || 'Email is required',
    v => /.+@.+/.test(v) || 'Invalid email format',
  ]"
/>
```

---

## CSS variable tokens

These CSS variables control the component theme. Redefine them in your app's CSS to change the look:

| Variable | Used for |
|---|---|
| `--primary` | Primary accent color |
| `--bg-color` | Page/overlay background |
| `--text-color` | Primary text |
| `--text-secondary` | Muted text, labels |
| `--border-color` | Borders, dividers |
| `--card-bg` | Card backgrounds |
| `--button-bg` | Default button background |
| `--hover-bg` | Hover state backgrounds |
| `--color-1` | Surface level 1 (sidebars, navbars) |
| `--color-2` | Surface level 2 |
| `--color-3` | Surface level 3 |
| `--color-4` | Surface level 4 (borders, separators) |

Token colors (`bg-ui-surface-2`, `text-ui-text-secondary`, etc.) are driven by CSS variables and do **not** support Tailwind opacity modifiers (`/50`). Standard palette colors (`primary`, `gray`, `green`, etc.) are hex values and do support opacity modifiers.

---

## Updating the package

**In the prodevui repo:**
1. Make your changes in `src/`
2. Bump `version` in `package.json`
3. `npm run build`
4. `git add -A && git commit -m "vX.Y.Z"`
5. `git tag vX.Y.Z && git push origin main --tags`

**In each consuming app:**
1. Update `package.json`: `"prodevui": "github:Laamin95/prodevui#vX.Y.Z"`
2. `npm install`

---

## Tech stack

- Vue 3 (Composition API, `<script setup>`)
- Tailwind CSS 3
- `@heroicons/vue` 2
- `@vueuse/core` + `@vueuse/components`
- Vite + `vite-plugin-dts`
- TypeScript
