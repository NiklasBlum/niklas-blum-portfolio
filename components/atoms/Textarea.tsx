import React, { TextareaHTMLAttributes } from "react";
import SvgIcon from "./SvgIcon";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function Textarea({ label, error, ...props }: TextareaProps) {
  return (
    <div className="relative">
      <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative">
        <textarea
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base pl-3 sm:pl-4 pr-8 sm:pr-10 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none disabled:opacity-60 disabled:cursor-not-allowed"
          {...props}
        />
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
          <SvgIcon
            type="message"
            size="md"
            className="text-gray-500 dark:text-gray-400"
          />
        </div>
      </div>
      {error && <p className="mt-2 text-xs sm:text-sm text-red-500">{error}</p>}
    </div>
  );
}
