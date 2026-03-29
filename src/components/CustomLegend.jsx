/**
 * CustomLegend - A reusable Recharts legend renderer that displays each series
 * as a filled circle icon paired with its label. Designed to be passed as the
 * `content` prop on any Recharts <Legend /> component.
 *
 * @param {Array}  payload  - Injected automatically by Recharts; contains each
 *                            series' color and display value.
 * @param {string} [justify="center"] - CSS justifyContent value for the row
 *                            (e.g. "center", "flex-end", "flex-start").
 * @param {string|number} [paddingTop=0]    - Top padding for the legend container.
 * @param {string|number} [paddingBottom=0] - Bottom padding for the legend container.
 */
const CustomLegend = ({
  payload = [],
  justify = "center",
  paddingTop = 0,
  paddingBottom = 0,
}) => (
  <div
    style={{
      display: "flex",
      gap: "24px",
      justifyContent: justify,
      flexWrap: "wrap",
      fontSize: "15px",
      color: "#6b7280",
      paddingTop,
      paddingBottom,
    }}
  >
    {payload.map((entry, i) => (
      <span
        key={i}
        style={{ display: "flex", alignItems: "center", gap: "6px" }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8" fill={entry.color} />
        </svg>
        {entry.value}
      </span>
    ))}
  </div>
);

export default CustomLegend;
