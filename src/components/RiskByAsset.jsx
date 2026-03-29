import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarChart2 } from "lucide-react";

import Card from "./Card";
import CustomLegend from "./CustomLegend";

import { SEVERITIES } from "../constants/severities";

import { riskByAsset } from "../data/dummyData";

const SEVERITY_BARS = SEVERITIES.map(({ key, label, color }, i) => ({
  dataKey: key,
  name: label,
  fill: color,
  ...(i === 0 && { barSize: 25 }),
  ...(i === SEVERITIES.length - 1 && { radius: [6, 6, 0, 0] }),
}));

/**
 * RiskByAsset - Renders a stacked bar chart showing how vulnerabilities are
 * distributed across different asset types (Servers, Endpoints, Cloud, Network,
 * Applications), broken down by severity (Critical, High, Medium, Low).
 * Each bar segment uses the same severity colour scheme as the rest of the
 * dashboard, allowing analysts to quickly spot which asset categories carry
 * the most critical risk and where remediation effort should be prioritised.
 */
const RiskByAsset = () => {
  return (
    <Card
      title="Risk Concentration by Asset Type"
      subtitle="Vulnerability distribution across asset categories broken down by severity"
      icon={BarChart2}
    >
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={riskByAsset}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip cursor={false} />
          <Legend
            content={(props) => <CustomLegend {...props} paddingTop="10px" />}
          />
          {SEVERITY_BARS.map(({ dataKey, name, fill, barSize, radius }) => (
            <Bar
              key={dataKey}
              dataKey={dataKey}
              name={name}
              stackId="a"
              fill={fill}
              {...(barSize && { barSize })}
              {...(radius && { radius })}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default RiskByAsset;
