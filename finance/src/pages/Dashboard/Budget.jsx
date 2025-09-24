import React, { useState } from 'react'
import Icons from '../../components/common/Icons'

const Budget = () => {
  const [categoryName, setCategoryName] = useState('')
  const [selectedIcon, setSelectedIcon] = useState('')
  const saveCategoryToDB = () => {
    console.log(categoryName)
  }
  return (
    <div className="w-full max-w-xl  px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Categorize Your Budget
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Create a new category to track your spending more effectively.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="e.g. Travel, Groceries, Bills"
            className="flex-1 max-w-[220px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Icons
            mode="picker"
            selectedIcon={selectedIcon}
            onSelect={(name) => setSelectedIcon(name)}
          />
          {/* <Icons mode="render" selectedIcon="Travel" /> */}

          <button
            onClick={saveCategoryToDB}
            className="bg-emerald-700 text-white px-2 py-2 rounded-md hover:bg-emerald-900 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Budget
