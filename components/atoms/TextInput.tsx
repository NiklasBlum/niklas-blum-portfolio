import React, { InputHTMLAttributes } from "react";
import SvgIcon from "./SvgIcon";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconType?: "user" | "mail";
  error?: string;
}

export default function TextInput({
  label,
  iconType,
  error,
  ...props
}: TextInputProps) {
  return (
    <div className="relative">
      <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          {...props}
        />
        {iconType && (
          <div className="absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center">
            <SvgIcon
              type={iconType}
              size="md"
              className="text-gray-500 dark:text-gray-400"
            />
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-xs sm:text-sm text-red-500">{error}</p>}
    </div>
  );
}
