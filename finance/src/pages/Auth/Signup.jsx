import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import { validateEmail } from '../../utils/helper'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import { useToast } from '../../context/ToasterContext'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { addToast } = useToast()
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const validateForm = () => {
    if (!formData.name) {
      setError('Name is required.')
      return
    } else if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.')
      return
    } else if (!formData.password) {
      setError('Password cannot be empty.')
      return
    } else {
      setError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    validateForm()
    // return
    try {
      const response = await axiosInstance.post(API_PATHS.Auth.SIGN_UP, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
      addToast('User Created Sucessfully!!! you can login Now', 'success')
      console.log('User Created Sucessfully!!! you can login Now')
    } catch (error) {
      addToast('Not able to create User Please try again', 'error')
      console.log('Not able to create User Please try again', error)
    }
  }

  return (
    <div className="flex items-stretch justify-start min-h-screen bg-gray-100">
      <div className="w-full min-w-[500px] m-6 max-w-md p-8 space-y-6 bg-white rounded-4xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Create an account
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Input
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              type="text"
              label="Full Name"
              name="name"
            />
          </div>
          <div>
            <Input
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              type="email"
              label="Email Address"
              name="email"
            />
          </div>
          <div>
            <Input
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              type="password"
              label="Password"
              name="password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
        {error && <p className="text-red-500 text-xs pb-2.5"> {error} </p>}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
