import {
  CircleDollarSign,
  ArrowDownCircle,
  ArrowUpCircle,
  Repeat,
  Utensils,
  Plane,
  Lightbulb,
  HeartPulse,
  Gamepad2,
  Gem,
  RefreshCcw,
  AlertTriangle,
  Tag,
  Ban,
  CalendarDays,
  CalendarCheck,
  CreditCard,
  Wallet,
} from 'lucide-react'

export const transactionFilterList = [
  {
    id: 1,
    label: 'All',
    icon: <CircleDollarSign color="#6B7280" size={14} />,
    type: 'general',
    color: '#6B7280',
  }, // gray
  {
    id: 2,
    label: 'Received',
    icon: <ArrowDownCircle color="#22C55E" size={14} />,
    type: 'transaction',
    color: '#22C55E',
  }, // green
  {
    id: 3,
    label: 'Spending',
    icon: <ArrowUpCircle color="#EF4444" size={14} />,
    type: 'transaction',
    color: '#EF4444',
  }, // red
  {
    id: 4,
    label: 'Recurring Payment',
    icon: <Repeat color="#F59E0B" size={14} />,
    type: 'behavior',
    color: '#F59E0B',
  }, // amber
  {
    id: 5,
    label: 'Food',
    icon: <Utensils color="#F97316" size={14} />,
    type: 'category',
    color: '#F97316',
  }, // orange
  {
    id: 6,
    label: 'Travel',
    icon: <Plane color="#3B82F6" size={14} />,
    type: 'category',
    color: '#3B82F6',
  }, // blue
  {
    id: 7,
    label: 'Bills & Utilities',
    icon: <Lightbulb color="#A855F7" size={14} />,
    type: 'category',
    color: '#A855F7',
  }, // purple
  {
    id: 8,
    label: 'Health & Wellness',
    icon: <HeartPulse color="#10B981" size={14} />,
    type: 'category',
    color: '#10B981',
  }, // emerald
  {
    id: 9,
    label: 'Entertainment',
    icon: <Gamepad2 color="#E11D48" size={14} />,
    type: 'category',
    color: '#E11D48',
  }, // rose
  {
    id: 10,
    label: 'High Value',
    icon: <Gem color="#64748B" size={14} />,
    type: 'smart',
    color: '#64748B',
  }, // slate
  {
    id: 11,
    label: 'Frequent',
    icon: <RefreshCcw color="#8B5CF6" size={14} />,
    type: 'smart',
    color: '#8B5CF6',
  }, // violet
  {
    id: 12,
    label: 'Unusual',
    icon: <AlertTriangle color="#F43F5E" size={14} />,
    type: 'smart',
    color: '#F43F5E',
  }, // pink
  {
    id: 13,
    label: 'Tagged',
    icon: <Tag color="#14B8A6" size={12} />,
    type: 'meta',
    color: '#14B8A6',
  }, // teal
  {
    id: 14,
    label: 'Untagged',
    icon: <Ban color="#9CA3AF" size={14} />,
    type: 'meta',
    color: '#9CA3AF',
  }, // cool gray
  {
    id: 15,
    label: 'Today',
    icon: <CalendarDays color="#6366F1" size={14} />,
    type: 'time',
    color: '#6366F1',
  }, // indigo
  {
    id: 16,
    label: 'This Month',
    icon: <CalendarCheck color="#2563EB" size={14} />,
    type: 'time',
    color: '#2563EB',
  }, // blue
  {
    id: 17,
    label: 'Credit Card',
    icon: <CreditCard color="#7C3AED" size={14} />,
    type: 'method',
    color: '#7C3AED',
  }, // deep violet
  {
    id: 18,
    label: 'Cash',
    icon: <Wallet color="#FACC15" size={14} />,
    type: 'method',
    color: '#FACC15',
  }, // yellow
]
