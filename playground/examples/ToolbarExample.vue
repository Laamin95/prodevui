<template>
  <div class="p-6 space-y-8">
    <h2 class="text-2xl font-bold mb-6">Toolbar Examples</h2>

    <!-- Basic Toolbar -->
    <section>
      <h3 class="text-lg font-semibold mb-3">Basic Toolbar</h3>
      <Toolbar title="Dashboard" />
    </section>

    <!-- Toolbar with Actions -->
    <section>
      <h3 class="text-lg font-semibold mb-3">Toolbar with Actions</h3>
      <Toolbar title="Products">
        <div class="flex gap-2">
          <Button variant="outline" size="sm" icon-left="funnel">
            Filter
          </Button>
          <Button variant="primary" size="sm" icon-left="plus">
            Add Product
          </Button>
        </div>
      </Toolbar>
    </section>

    <!-- Toolbar with Search -->
    <section>
      <h3 class="text-lg font-semibold mb-3">Toolbar with Search</h3>
      <Toolbar title="Users">
        <div class="flex gap-2 flex-1 max-w-md">
          <SearchInput 
            v-model="searchQuery"
            placeholder="Search users..."
            size="sm"
          />
          <Button variant="primary" size="sm" icon-left="magnifying-glass">
            Search
          </Button>
        </div>
      </Toolbar>
    </section>

    <!-- Toolbar with Tabs -->
    <section>
      <h3 class="text-lg font-semibold mb-3">Toolbar with Tabs</h3>
      <Toolbar>
        <template #title>
          <div class="flex gap-4">
            <button class="px-4 py-2 font-semibold border-b-2 border-primary text-primary">
              All
            </button>
            <button class="px-4 py-2 text-gray-600 hover:text-gray-900">
              Active
            </button>
            <button class="px-4 py-2 text-gray-600 hover:text-gray-900">
              Archived
            </button>
          </div>
        </template>
        <Button variant="primary" size="sm" icon-left="plus">
          New Item
        </Button>
      </Toolbar>
    </section>

    <!-- Elevated Toolbar -->
    <section>
      <h3 class="text-lg font-semibold mb-3">Elevated Toolbar</h3>
      <Toolbar 
        title="Settings" 
        elevation="shadow-md"
        rounded="rounded-lg"
      >
        <div class="flex gap-2">
          <Button variant="outline" size="sm" icon-left="arrow-path">
            Refresh
          </Button>
          <Button variant="primary" size="sm" icon-left="check">
            Save
          </Button>
        </div>
      </Toolbar>
    </section>

    <!-- Colored Toolbar -->
    <section>
      <h3 class="text-lg font-semibold mb-3">Colored Toolbar</h3>
      <Toolbar 
        title="Reports" 
        bg="bg-primary text-white"
        border="border-none"
      >
        <div class="flex gap-2">
          <Button variant="outline" size="sm" class="text-white border-white hover:bg-white/10">
            Export
          </Button>
          <Button variant="secondary" size="sm" icon-left="arrow-down-tray">
            Download
          </Button>
        </div>
      </Toolbar>
    </section>

    <!-- Toolbar with Multiple Actions -->
    <section>
      <h3 class="text-lg font-semibold mb-3">Toolbar with Multiple Actions</h3>
      <Toolbar title="Orders">
        <div class="flex flex-wrap gap-2">
          <Select 
            v-model="statusFilter"
            :options="statusOptions"
            placeholder="Status"
            size="sm"
            class="w-32"
          />
          <Datepicker 
            v-model="dateRange"
            range
            size="sm"
            class="w-64"
          />
          <Button variant="outline" size="sm" icon-left="arrow-path">
            Refresh
          </Button>
          <Button variant="primary" size="sm" icon-left="arrow-down-tray">
            Export
          </Button>
        </div>
      </Toolbar>
    </section>

    <!-- Toolbar with Breadcrumbs -->
    <section>
      <h3 class="text-lg font-semibold mb-3">Toolbar with Breadcrumbs</h3>
      <Toolbar border="border-b-2 border-primary">
        <template #title>
          <Breadcrumbs 
            :items="breadcrumbItems"
            separator-icon="chevron-right"
          />
        </template>
        <div class="flex gap-2">
          <Button variant="outline" size="sm" icon-left="pencil">
            Edit
          </Button>
          <Button variant="error" size="sm" icon-left="trash">
            Delete
          </Button>
        </div>
      </Toolbar>
    </section>

    <!-- Toolbar with Icon Buttons -->
    <section>
      <h3 class="text-lg font-semibold mb-3">Toolbar with Icon Buttons</h3>
      <Toolbar title="Gallery">
        <div class="flex gap-1">
          <Button variant="text" size="sm" icon>
            <Icon name="squares-2x2" :size="20" />
          </Button>
          <Button variant="text" size="sm" icon>
            <Icon name="list-bullet" :size="20" />
          </Button>
          <Divider orientation="vertical" class="mx-2" />
          <Button variant="text" size="sm" icon>
            <Icon name="arrow-up-tray" :size="20" />
          </Button>
          <Button variant="text" size="sm" icon>
            <Icon name="cog-6-tooth" :size="20" />
          </Button>
        </div>
      </Toolbar>
    </section>

    <!-- Compact Toolbar -->
    <section>
      <h3 class="text-lg font-semibold mb-3">Compact Toolbar</h3>
      <Toolbar 
        title="Notifications" 
        padding="p-2"
        height="h-12"
        titleClass="text-base font-medium"
      >
        <Badge content="12" variant="error" />
      </Toolbar>
    </section>

    <!-- No Border Toolbar -->
    <section>
      <h3 class="text-lg font-semibold mb-3">No Border Toolbar</h3>
      <Toolbar 
        title="Analytics" 
        border="border-none"
      >
        <div class="flex gap-2">
          <ChipGroup v-model="selectedPeriod">
            <Chip label="Day" value="day" />
            <Chip label="Week" value="week" />
            <Chip label="Month" value="month" />
          </ChipGroup>
        </div>
      </Toolbar>
    </section>

    <!-- Full Width Toolbar -->
    <section>
      <h3 class="text-lg font-semibold mb-3">Full Width Toolbar</h3>
      <Toolbar 
        title="Projects" 
        width="w-full"
        bg="bg-gradient-to-r from-primary to-secondary text-white"
        border="border-none"
        rounded="rounded-xl"
        padding="p-6"
        elevation="shadow-lg"
      >
        <div class="flex gap-2">
          <Button variant="secondary" size="sm">
            View All
          </Button>
          <Button variant="outline" size="sm" class="text-white border-white hover:bg-white/10">
            Settings
          </Button>
        </div>
      </Toolbar>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Toolbar, 
  Button, 
  SearchInput, 
  Select, 
  Datepicker, 
  Breadcrumbs, 
  Icon, 
  Divider, 
  Badge,
  Chip,
  ChipGroup
} from '../../'

const searchQuery = ref('')
const statusFilter = ref('')
const dateRange = ref(null)
const selectedPeriod = ref('week')

const statusOptions = [
  { label: 'All', value: '' },
  { label: 'Pending', value: 'pending' },
  { label: 'Completed', value: 'completed' },
  { label: 'Cancelled', value: 'cancelled' }
]

const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Products', to: '/products' },
  { text: 'Electronics', to: '/products/electronics' },
  { text: 'Laptops', disabled: true }
]
</script>