import { motion } from "framer-motion";

/**
 * KPI - Displays a single Key Performance Indicator as a compact metric card.
 * Shows a labelled title and an animated numeric value styled with a severity
 * color. Used in the top row of the dashboard to surface high-level counts
 * (Total, Critical, High, Medium, Low vulnerabilities).
 *
 * @param {string} title - Label describing the metric (e.g. "Critical").
 * @param {number} value - Numeric value to display.
 * @param {string} color - Tailwind text-color class applied to the value (e.g. "text-red-500").
 */
const KPI = ({ title, value, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow p-4  grid grid-rows-2"
    >
<span className="text-xs sm:text-sm text-gray-500">{title}</span>
      <motion.span
        className={`text-xl sm:text-2xl font-bold ${color}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {value}
      </motion.span>
    </motion.div>
  );
};

export default KPI;