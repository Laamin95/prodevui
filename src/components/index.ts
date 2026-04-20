import type { App } from 'vue'

// Button components
import Button from './buttons/Button.vue'
import Radio from './buttons/radio/Radio.vue'
import RadioGroup from './buttons/radio/RadioGroup.vue'
import RadioItem from './buttons/radio/RadioItem.vue'
import Switch from './buttons/Switch.vue'

// Default components
import Avatar from './defaults/Avatar.vue'
import AppBar from './defaults/AppBar.vue'
import Badge from './defaults/Badge.vue'
import Banner from './defaults/Banner.vue'
import Breadcrumbs from './defaults/Breadcrumbs.vue'
import Card from './defaults/Card.vue'
import Divider from './defaults/Divider.vue'
import Dropdown from './defaults/Dropdown.vue'
import DropdownItem from './defaults/DropdownItem.vue'
import Expansion from './defaults/Expansion.vue'
import Footer from './defaults/Footer.vue'
import Form from './defaults/Form.vue'
import Layout from './defaults/Layout.vue'
import NavBar from './defaults/NavBar.vue'
import Overlay from './defaults/Overlay.vue'
import Pagination from './defaults/Pagination.vue'
import SideBar from './defaults/Sidebar.vue'
import SideBarItem from './defaults/SidebarItem.vue'
import Snackbar from './defaults/Snackbar.vue'
import Timeline from './defaults/Timeline.vue'
import TimelineItem from './defaults/TimelineItem.vue'
import Tab from './defaults/Tab.vue'
import ThemeToggle from './defaults/ThemeToggle.vue'
import Toolbar from './defaults/Toolbar.vue'
import Table from './defaults/table/Table.vue'
import TableHead from './defaults/table/TableHead.vue'
import TableBody from './defaults/table/TableBody.vue'
import TableRow from './defaults/table/TableRow.vue'
import Th from './defaults/table/Th.vue'
import Td from './defaults/table/Td.vue'
import TableEmpty from './defaults/table/TableEmpty.vue'
import TableSkeleton from './defaults/table/TableSkeleton.vue'

// Field components
import Base from './fields/Base.vue'
import Checkbox from './fields/Checkbox.vue'
import Chip from './fields/Chip.vue'
import ChipGroup from './fields/ChipGroup.vue'
import Datepicker from './fields/DatePicker.vue'
import File from './fields/FileUpload.vue'
import InputNumber from './fields/InputNumber.vue'
import InputText from './fields/InputText.vue'
import SearchInput from './fields/SearchInput.vue'
import Select from './fields/Select.vue'
import Textarea from './fields/Textarea.vue'

// Icon components
import Icon from './icons/Icon.vue'

// Named exports for tree-shaking
export {
  // Buttons
  Button,
  Radio,
  RadioGroup,
  RadioItem,
  Switch,

  // Defaults
  AppBar,
  Avatar,
  Badge,
  Banner,
  Breadcrumbs,
  Card,
  Divider,
  Dropdown,
  DropdownItem,
  Expansion,
  Footer,
  Form,
  Layout,
  NavBar,
  Overlay,
  Pagination,
  SideBar,
  SideBarItem,
  Snackbar,
  ThemeToggle,
  Timeline,
  TimelineItem,
  Tab,
  Toolbar,
  Table,
  TableHead,
  TableBody,
  TableRow,
  Th,
  Td,
  TableEmpty,
  TableSkeleton,

  // Fields
  Base,
  Checkbox,
  Chip,
  ChipGroup,
  Datepicker,
  File,
  InputNumber,
  InputText,
  SearchInput,
  Select,
  Textarea,

  // Icons
  Icon,
}

// All components map for global registration
const components: Record<string, any> = {
  UiButton: Button,
  UiRadio: Radio,
  UiRadioGroup: RadioGroup,
  UiRadioItem: RadioItem,
  UiSwitch: Switch,
  UiAppBar: AppBar,
  UiAvatar: Avatar,
  UiBadge: Badge,
  UiBanner: Banner,
  UiBreadcrumbs: Breadcrumbs,
  UiCard: Card,
  UiDivider: Divider,
  UiDropdown: Dropdown,
  UiDropdownItem: DropdownItem,
  UiExpansion: Expansion,
  UiFooter: Footer,
  UiForm: Form,
  UiLayout: Layout,
  UiNavBar: NavBar,
  UiOverlay: Overlay,
  UiPagination: Pagination,
  UiSideBar: SideBar,
  UiSideBarItem: SideBarItem,
  UiSnackbar: Snackbar,
  UiThemeToggle: ThemeToggle,
  UiTimeline: Timeline,
  UiTimelineItem: TimelineItem,
  UiTab: Tab,
  UiToolbar: Toolbar,
  UiTable: Table,
  UiTableHead: TableHead,
  UiTableBody: TableBody,
  UiTableRow: TableRow,
  UiTh: Th,
  UiTd: Td,
  UiTableEmpty: TableEmpty,
  UiTableSkeleton: TableSkeleton,
  UiBase: Base,
  UiCheckbox: Checkbox,
  UiChip: Chip,
  UiChipGroup: ChipGroup,
  UiDatepicker: Datepicker,
  UiFile: File,
  UiInputNumber: InputNumber,
  UiInputText: InputText,
  UiSearchInput: SearchInput,
  UiSelect: Select,
  UiTextarea: Textarea,
  UiIcon: Icon,
}

// Plugin that registers all components globally
// Registers both prefixed (UiButton) and unprefixed (Button) names
export default {
  install(app: App) {
    for (const [prefixedName, component] of Object.entries(components)) {
      app.component(prefixedName, component)
      // Also register without the Ui prefix for convenience
      const shortName = prefixedName.replace(/^Ui/, '')
      app.component(shortName, component)
    }
  },
}
