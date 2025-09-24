import React, { useState } from 'react'
import * as LucideIcons from 'lucide-react'

const iconOptions = [
  { name: 'Food', icon: LucideIcons.Utensils },
  { name: 'Travel', icon: LucideIcons.Plane },
  { name: 'Bills', icon: LucideIcons.CreditCard },
  { name: 'Shopping', icon: LucideIcons.ShoppingCart },
  { name: 'Internet', icon: LucideIcons.Wifi },
  { name: 'Rent', icon: LucideIcons.Home },
  { name: 'Health', icon: LucideIcons.Heart },
  { name: 'Education', icon: LucideIcons.Book },
  { name: 'Entertainment', icon: LucideIcons.Music },
  { name: 'Fitness', icon: LucideIcons.Dumbbell },
  { name: 'Savings', icon: LucideIcons.PiggyBank },
  { name: 'Investment', icon: LucideIcons.LineChart },
  { name: 'Subscription', icon: LucideIcons.Receipt },
  { name: 'Gift', icon: LucideIcons.Gift },
  { name: 'Pet', icon: LucideIcons.PawPrint },
  { name: 'Transport', icon: LucideIcons.Bus },
  { name: 'Phone', icon: LucideIcons.Phone },
  { name: 'Water', icon: LucideIcons.Droplet },
  { name: 'Electricity', icon: LucideIcons.Bolt },
  { name: 'Books', icon: LucideIcons.BookOpen },
  { name: 'Charity', icon: LucideIcons.HandHeart },
  { name: 'Beauty', icon: LucideIcons.Sparkles },
  { name: 'Clothing', icon: LucideIcons.Shirt },
  { name: 'Kids', icon: LucideIcons.Baby },
  { name: 'Work', icon: LucideIcons.Briefcase },
  { name: 'Tech', icon: LucideIcons.Cpu },
  { name: 'Insurance', icon: LucideIcons.ShieldCheck },
  { name: 'Loan', icon: LucideIcons.Banknote },
  { name: 'Party', icon: LucideIcons.Cocktail },
  { name: 'Medical', icon: LucideIcons.Stethoscope },
  // Add more if needed
]

const Icons = ({ mode = 'picker', selectedIcon, onSelect }) => {
  if (mode === 'render') {
    const match = iconOptions.find((item) => item.name === selectedIcon)
    const Icon = match?.icon || LucideIcons.HelpCircle // Fallback for undefined icons
    return <Icon size={24} />
  }

  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 max-h-[300px] overflow-y-auto">
      {iconOptions.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => onSelect(name)}
          className={`flex flex-col items-center p-2 border rounded-lg hover:bg-gray-100 transition ${
            selectedIcon === name
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300'
          }`}
        >
          {Icon ? <Icon size={24} /> : <LucideIcons.HelpCircle size={24} />}{' '}
          {/* Fallback */}
          <span className="text-xs mt-1 text-gray-600">{name}</span>
        </button>
      ))}
    </div>
  )
}

export default Icons
