import { motion } from "framer-motion";

/**
 * Card - A reusable wrapper component that renders a styled panel with a title
 * and optional subtitle and icon. Used as the base layout container for all dashboard
 * chart and data sections. Animates in on mount using Framer Motion.
 *
 * @param {string}   title    - Heading text displayed at the top of the card.
 * @param {string}   [subtitle] - Optional secondary text shown beneath the title.
 * @param {React.ElementType} [icon] - Optional Lucide icon component rendered next to the title.
 * @param {React.ReactNode} children - Content rendered inside the card body.
 */
const Card = ({ title, subtitle, icon: Icon, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-5 hover:shadow-md transition-shadow duration-300"
    >
      <div className="mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          {Icon && <Icon size={18} className="text-gray-600" />}
          {title}
        </h2>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      {children}
    </motion.div>
  );
};

export default Card;
