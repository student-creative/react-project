/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'appearance-none',
    'bg-[#F4F9FC]',
    'text-slate-500',
    'text-gray-700',
    'border',
    'rounded',
    'text-sm',
    'py-3',
    'px-3',
    'w-full',
    'py-4',
    'text-xs',
    'text-[13px]',
    'font-exo',
    'font-roboto'
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
