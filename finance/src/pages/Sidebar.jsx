import {
  ArrowRightLeft,
  BanknoteArrowDown,
  BanknoteArrowUp,
  BotMessageSquare,
  ChartLine,
  Coins,
  CreditCardIcon,
  HandCoins,
  icons,
  LayoutDashboard,
  LibraryIcon,
  Settings,
  ShieldUser,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true }, // Add 'end' to ensure exact matching
  {
    to: '/dashboard/transactions',
    label: 'Transactions',
    icon: ArrowRightLeft,
  },
  { to: '/dashboard/budget', label: 'Budget', icon: LibraryIcon },
  { to: '/dashboard/analysis', label: 'Analysis', icon: ChartLine },
  { to: '/dashboard/savings', label: 'Saving', icon: HandCoins },
  {
    to: '/dashboard/debt',
    label: 'Loan Tracker ',
    icon: BanknoteArrowDown,
  },
  {
    to: '/dashboard/ai-chat',
    label: 'AI Chat',
    icon: BotMessageSquare,
  },
]
const bottomItems = [
  { to: '/dashboard/admin', label: 'Admin', icon: ShieldUser },
  { to: '/dashboard/setting', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <div className="sidebar light-green-tint ">
      <div></div>
      <div>
        {items.map(({ to, label, icon: Icon, end }) => (
          <div className="" key={to}>
            <NavLink
              key={to}
              to={to}
              end={end} // Only Dashboard gets 'end'
              className={({ isActive }) =>
                isActive ? 'sidebar-item highlight-selection ' : 'sidebar-item'
              }
              style={{
                display: 'block',
                padding: '8px 4px',
                textDecoration: 'none',
                color: '#333',
                margin: '15px',
                borderRadius: '25px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '10px',
                transition: 'color 0.3s ease',
              }}
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={16}
                    className={`${
                      isActive ? 'dark-color' : 'inactive-color'
                    } relative left-[10px]`}
                  />
                  <span
                    className={`${
                      isActive ? 'dark-color' : 'inactive-color'
                    } relative left-[10px]`}
                  >
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          </div>
        ))}
      </div>
      <div>
        {bottomItems.map(({ to, label, icon: Icon }) => (
          <div key={to}>
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? 'sidebar-item highlight-selection ' : 'sidebar-item'
              }
              style={{
                display: 'block',
                padding: '8px 4px',
                textDecoration: 'none',
                color: '#333',
                margin: '15px',
                borderRadius: '25px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '10px',
                transition: 'color 0.3s ease',
              }}
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={16}
                    className={`${
                      isActive ? 'dark-color' : 'inactive-color'
                    } relative left-[10px]`}
                  />
                  <span
                    className={`${
                      isActive ? 'dark-color' : 'inactive-color'
                    } relative left-[10px]`}
                  >
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}
