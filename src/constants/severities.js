/**
 * SEVERITIES - Canonical ordered list of vulnerability severity levels used
 * throughout the dashboard. Acts as the single source of truth for severity
 * keys, display labels, hex colours, and Tailwind text-colour classes.
 */
export const SEVERITIES = [
  {
    key: "critical",
    label: "Critical",
    color: "#ef4444",
    tailwind: "text-red-500",
  },
  { key: "high", label: "High", color: "#f97316", tailwind: "text-orange-500" },
  {
    key: "medium",
    label: "Medium",
    color: "#eab308",
    tailwind: "text-yellow-500",
  },
  { key: "low", label: "Low", color: "#22c55e", tailwind: "text-green-500" },
];
