import React, { useState } from 'react'
import * as LucideIcons from 'lucide-react'

const iconOptions = [
  { name: 'Food', icon: LucideIcons.Utensils, color: '#FF5733' },
  { name: 'Travel', icon: LucideIcons.Plane, color: '#3498DB' },
  { name: 'Bills', icon: LucideIcons.CreditCard, color: '#9B59B6' },
  { name: 'Shopping', icon: LucideIcons.ShoppingCart, color: '#E67E22' },
  { name: 'Internet', icon: LucideIcons.Wifi, color: '#1ABC9C' },
  { name: 'Rent', icon: LucideIcons.Home, color: '#2ECC71' },
  { name: 'Health', icon: LucideIcons.Heart, color: '#E74C3C' },
  { name: 'Education', icon: LucideIcons.Book, color: '#F1C40F' },
  { name: 'Entertainment', icon: LucideIcons.Music, color: '#8E44AD' },
  { name: 'Fitness', icon: LucideIcons.Dumbbell, color: '#34495E' },
  { name: 'Savings', icon: LucideIcons.PiggyBank, color: '#27AE60' },
  { name: 'Investment', icon: LucideIcons.LineChart, color: '#2980B9' },
  { name: 'Subscription', icon: LucideIcons.Receipt, color: '#D35400' },
  { name: 'Gift', icon: LucideIcons.Gift, color: '#C0392B' },
  { name: 'Pet', icon: LucideIcons.PawPrint, color: '#16A085' },
  { name: 'Transport', icon: LucideIcons.Bus, color: '#F39C12' },
  { name: 'Phone', icon: LucideIcons.Phone, color: '#BDC3C7' },
  { name: 'Water', icon: LucideIcons.Droplet, color: '#3498DB' },
  { name: 'Electricity', icon: LucideIcons.Bolt, color: '#F1C40F' },
  { name: 'Books', icon: LucideIcons.BookOpen, color: '#9B59B6' },
  { name: 'Charity', icon: LucideIcons.HandHeart, color: '#E74C3C' },
  { name: 'Beauty', icon: LucideIcons.Sparkles, color: '#F39C12' },
  { name: 'Clothing', icon: LucideIcons.Shirt, color: '#2ECC71' },
  { name: 'Kids', icon: LucideIcons.Baby, color: '#E67E22' },
  { name: 'Work', icon: LucideIcons.Briefcase, color: '#34495E' },
  { name: 'Tech', icon: LucideIcons.Cpu, color: '#2980B9' },
  { name: 'Insurance', icon: LucideIcons.ShieldCheck, color: '#27AE60' },
  { name: 'Loan', icon: LucideIcons.Banknote, color: '#C0392B' },
  { name: 'Party', icon: LucideIcons.Cocktail, color: '#8E44AD' },
  { name: 'Medical', icon: LucideIcons.Stethoscope, color: '#E74C3C' },
]

const Icons = ({
  mode = 'picker',
  selectedIcon,
  onSelect,
  setIsPickerOpen,
}) => {
  if (mode === 'render') {
    const match = iconOptions.find((item) => item.name === selectedIcon)
    const Icon = match?.icon || LucideIcons.HelpCircle // Fallback for undefined icons
    const color = match?.color || '#000' // Default color
    return <Icon size={24} color={color} strokeWidth={1.5} />
  }

  const onValueClose = () => {
    setIsPickerOpen(false)
  }

  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Select an Icon</h3>
        <button
          onClick={onValueClose}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <LucideIcons.X size={20} color="#000" />
        </button>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
        {iconOptions.map(({ name, icon: Icon, color }) => (
          <div className="relative group" key={name}>
            <button
              className="flex items-center justify-center p-3 rounded-lg shadow hover:bg-gray-100 transition"
              onClick={() => onSelect(name)}
            >
              {Icon ? (
                <Icon size={32} color={color} strokeWidth={1.5} />
              ) : (
                <LucideIcons.HelpCircle
                  size={32}
                  color="#000"
                  strokeWidth={1.5}
                />
              )}
            </button>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg whitespace-nowrap">
              {name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Icons
