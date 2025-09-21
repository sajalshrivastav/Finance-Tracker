import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
// import { faRegEye, faRegEyeSlash } from 'react-icons/fa6'

const Input = ({ value, onChange, placeholder, label, type, name }) => {
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="input-box">
        <input
          type={
            type == 'password' ? (showPassword ? 'text' : 'password') : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent outline-none"
          name={name}
        />

        {type === 'password' && (
          <>
            {showPassword ? (
              <Eye
                onClick={() => {
                  toggleShowPassword()
                }}
                className="text-purple-500 cursor-pointer"
                size={22}
              />
            ) : (
              <EyeOff
                onClick={() => {
                  toggleShowPassword()
                }}
                className="text-slate-500 cursor-pointer"
                size={22}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Input
