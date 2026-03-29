import { motion } from "framer-motion";

import KPI from "../components/KPI";
import RiskByAsset from "../components/RiskByAsset";
import VulnerabilitySummary from "../components/VulnerabilitySummary";
import VulnerabilitiesOverTime from "../components/VulnerabilitiesOverTime";

import { SEVERITIES } from "../constants/severities";

import { vulnerabilitySummary } from "../data/dummyData";

const STAGGER_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const KPI_COL_SPANS = [
  "md:col-span-2 lg:col-span-1",
  "md:col-span-2 lg:col-span-1",
  "md:col-span-2 lg:col-span-1",
  "md:col-span-3 lg:col-span-1",
  "sm:col-span-2 md:col-span-3 lg:col-span-1",
];

/**
 * Dashboard - The top-level page component that composes the full security
 * dashboard view. Derives KPI values from the summary dataset and renders:
 *   1. A staggered row of KPI cards (Total + one per severity level).
 *   2. A VulnerabilitySummary donut chart and a RiskByAsset bar chart side-by-side.
 *   3. A VulnerabilitiesOverTime line chart spanning the full width.
 * Layout is fully responsive using a Tailwind CSS grid and Framer Motion
 * stagger animations on the KPI row.
 */
const Dashboard = () => {
  const severityValues = Object.fromEntries(
    vulnerabilitySummary.map(({ name, value }) => [name.toLowerCase(), value]),
  );
  const total = vulnerabilitySummary.reduce((acc, { value }) => acc + value, 0);

  const kpiItems = [
    { title: "Total Vulnerabilities", value: total, color: "text-gray-800" },
    ...SEVERITIES.map(({ key, label, tailwind }) => ({
      title: label,
      value: severityValues[key] ?? 0,
      color: tailwind,
    })),
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Security Dashboard</h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-4 mb-6"
        initial="hidden"
        animate="visible"
        variants={STAGGER_VARIANTS}
      >
        {kpiItems.map((item, i) => (
          <motion.div
            key={item.title}
            className={KPI_COL_SPANS[i]}
            variants={ITEM_VARIANTS}
          >
            <KPI {...item} />
          </motion.div>
        ))}
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VulnerabilitySummary />
        <RiskByAsset />
      </div>
      <div className="mt-6">
        <VulnerabilitiesOverTime />
      </div>
    </div>
  );
};

export default Dashboard;
