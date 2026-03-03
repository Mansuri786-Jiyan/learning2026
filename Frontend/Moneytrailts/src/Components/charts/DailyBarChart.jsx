import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Cell,
} from "recharts";
import { formatCompact } from "../../utils/helpers";

const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <div style={{
            background: "var(--color-surface-2)",
            border: "1px solid var(--color-border)",
            borderRadius: 12, padding: "10px 14px",
            boxShadow: "var(--shadow-card)",
        }}>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.75rem", marginBottom: 6 }}>{label}</p>
            <p style={{ color: "var(--color-primary-light)", fontWeight: 700, fontSize: "0.9rem" }}>
                {formatCompact(payload[0].value)}
            </p>
        </div>
    );
};

function DailyBarChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 0 }} barSize={28}>
                <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity={0.6} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: "#8b8ba0", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={formatCompact} tick={{ fill: "#8b8ba0", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(99,102,241,0.07)", radius: 6 }} />
                <Bar dataKey="amount" name="Spent" radius={[6, 6, 0, 0]}>
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.amount === Math.max(...data.map(d => d.amount)) ? "#6366f1" : "url(#barGrad)"}
                            opacity={entry.amount === Math.max(...data.map(d => d.amount)) ? 1 : 0.7}
                        />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default DailyBarChart;
