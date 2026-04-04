import React from "react";

/**
 * Reusable StatusToggle component.
 *
 * Props:
 *  - isActive  {boolean}  Current active state
 *  - onToggle  {function} Called when the button is clicked
 *  - size      {string}   "sm" (default) | "md"
 */
const StatusToggle = ({ isActive, onToggle, size = "sm" }) => {
  const active = isActive !== false; // treat undefined / null as active (backward compat)

  const track = size === "md"
    ? "w-12 h-6"
    : "w-9 h-5";

  const knob = size === "md"
    ? "w-5 h-5"
    : "w-4 h-4";

  const knobTranslate = size === "md"
    ? active ? "translate-x-6" : "translate-x-0.5"
    : active ? "translate-x-4" : "translate-x-0.5";

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={onToggle}
        title={active ? "Click to deactivate" : "Click to activate"}
        style={{ backgroundColor: active ? "#4A3B2A" : "#C8B8A2" }}
        className={`relative inline-flex items-center ${track} rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#4A3B2A]`}
        type="button"
      >
        <span
          className={`inline-block ${knob} bg-[#F3EFE9] rounded-full shadow-sm transform transition-transform duration-300 ${knobTranslate}`}
        />
      </button>
      <span
        className="text-xs font-medium"
        style={{ color: active ? "#4A3B2A" : "#C8B8A2" }}
      >
        {active ? "Active" : "Inactive"}
      </span>
    </div>
  );
};

export default StatusToggle;
