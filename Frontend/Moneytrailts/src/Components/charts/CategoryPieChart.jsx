import {
    PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { formatCurrency } from "../../utils/helpers";

const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const d = payload[0];
    return (
        <div style={{
            background: "var(--color-surface-2)",
            border: "1px solid var(--color-border)",
            borderRadius: 12, padding: "10px 14px",
            boxShadow: "var(--shadow-card)",
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: d.payload.color }} />
                <span style={{ color: "var(--color-text)", fontSize: "0.82rem", fontWeight: 600 }}>{d.name}</span>
            </div>
            <div style={{ color: "var(--color-text-muted)", fontSize: "0.75rem", marginTop: 4 }}>
                {formatCurrency(d.value)} · {((d.percent || 0) * 100).toFixed(1)}%
            </div>
        </div>
    );
};

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    if (percent < 0.05) return null;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function CategoryPieChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={280}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="48%"
                    innerRadius={65}
                    outerRadius={110}
                    paddingAngle={3}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomLabel}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ fontSize: "0.75rem", color: "var(--color-text-muted)", paddingTop: 8 }}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default CategoryPieChart;
