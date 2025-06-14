import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeClosed, User } from 'lucide-react';
import { SocialLoginButtons } from './SocialLoginButtons';
import { AuthButton } from './AuthButton';

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-2xl p-6 md:p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-900 font-medium mb-2"
            >
              First Name
            </label>
            <div className="relative">
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 bg-transparent text-gray-900"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <User className="w-5 h-5" />
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-900 font-medium mb-2"
            >
              Last Name
            </label>
            <div className="relative">
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 bg-transparent text-gray-900"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <User className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="username"
            className="block text-gray-900 font-medium mb-2"
          >
            Username
          </label>
          <div className="relative">
            <input
              id="username"
              name="username"
              type="text"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 bg-transparent text-gray-900"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-900 font-medium mb-2"
          >
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 bg-transparent text-gray-900"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-gray-900 font-medium mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 bg-transparent text-gray-900"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              {showPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeClosed className="w-5 h-5" />
              )}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Minimum length is 8 characters.
          </p>
        </div>

        <AuthButton type="submit" variant="primary">
          Sign Up
        </AuthButton>

        <div className="text-center text-sm text-gray-600">
          By creating an account, you agree to the{' '}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>
          . We'll occasionally send you account-related emails.
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <SocialLoginButtons />

        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};
