import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingDown } from "lucide-react";

import Card from "./Card";
import CustomLegend from "./CustomLegend";
import useIsMobile from "../hooks/useIsMobile";

import { SEVERITIES } from "../constants/severities";

import { vulnerabilitiesOverTime } from "../data/dummyData";

const SEVERITY_LINES = SEVERITIES.map(({ key, label, color }) => ({
  dataKey: key,
  name: label,
  stroke: color,
}));

/**
 * VulnerabilitiesOverTime - Renders a multi-line chart tracking the number of
 * vulnerabilities per severity level (Critical, High, Medium, Low) across
 * consecutive days. Consumes the `vulnerabilitiesOverTime` dataset from
 * dummyData and displays it inside a Card using Recharts' LineChart.
 * Useful for spotting trends, spikes, or remediation progress over time.
 */
const VulnerabilitiesOverTime = () => {
  const isMobile = useIsMobile();

  return (
    <Card
      title="Vulnerabilities Over Time"
      subtitle="Daily open vulnerability counts over the past 30 days by severity"
      icon={TrendingDown}
    >
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={vulnerabilitiesOverTime}>
          <XAxis dataKey="date" tick={{ fontSize: 11 }} interval={4} />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign={isMobile ? "bottom" : "top"}
            content={(props) => (
              <CustomLegend
                {...props}
                justify={isMobile ? "center" : "flex-end"}
                paddingBottom={isMobile ? 0 : "6px"}
              />
            )}
          />
          {SEVERITY_LINES.map(({ dataKey, name, stroke }) => (
            <Line
              key={dataKey}
              type="monotone"
              dataKey={dataKey}
              name={name}
              stroke={stroke}
              dot={false}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default VulnerabilitiesOverTime;
