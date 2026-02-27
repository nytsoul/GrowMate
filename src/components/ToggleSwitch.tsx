import React from 'react';

interface ToggleSwitchProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function ToggleSwitch({ label, checked, onChange }: ToggleSwitchProps) {
  return (
    <label className="flex items-center gap-3">
      {label && <span className="text-sm text-dark-900 dark:text-white">{label}</span>}
      <div
        className={`relative w-10 h-5 rounded-full transition-colors ${
          checked ? 'bg-brand-green' : 'bg-gray-300 dark:bg-dark-500'
        }`}
      >
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </div>
    </label>
  );
}
