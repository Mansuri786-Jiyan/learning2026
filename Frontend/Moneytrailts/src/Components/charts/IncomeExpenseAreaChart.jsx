import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { formatCompact } from "../../utils/helpers";

const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <div style={{
            background: "var(--color-surface-2)",
            border: "1px solid var(--color-border)",
            borderRadius: 12, padding: "12px 16px",
            boxShadow: "var(--shadow-card)",
        }}>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.75rem", marginBottom: 8 }}>{label}</p>
            {payload.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color }} />
                    <span style={{ color: "var(--color-text)", fontSize: "0.82rem", fontWeight: 600 }}>
                        {p.name}: {formatCompact(p.value)}
                    </span>
                </div>
            ))}
        </div>
    );
};

function IncomeExpenseAreaChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" tick={{ fill: "#8b8ba0", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={formatCompact} tick={{ fill: "#8b8ba0", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                    wrapperStyle={{ paddingTop: 12, fontSize: "0.8rem", color: "var(--color-text-muted)" }}
                />
                <Area type="monotone" dataKey="income" name="Income"
                    stroke="#22c55e" strokeWidth={2.5} fill="url(#incomeGrad)" dot={false} />
                <Area type="monotone" dataKey="expense" name="Expense"
                    stroke="#f43f5e" strokeWidth={2.5} fill="url(#expenseGrad)" dot={false} />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default IncomeExpenseAreaChart;
