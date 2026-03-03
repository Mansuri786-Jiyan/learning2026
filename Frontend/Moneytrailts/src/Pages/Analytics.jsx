import {
    AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, LineChart, Line, Legend,
} from "recharts";
import CategoryPieChart from "../Components/charts/CategoryPieChart";
import { categoryData, monthlyData } from "../utils/mockData";
import { useTransactions } from "../Hooks/useTransactions";
import { formatCurrency, formatCompact, CATEGORY_COLORS } from "../utils/helpers";

const TooltipBase = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <div style={{
            background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
            borderRadius: 12, padding: "10px 14px", boxShadow: "var(--shadow-card)",
        }}>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.72rem", marginBottom: 6 }}>{label}</p>
            {payload.map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 2 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color }} />
                    <span style={{ color: "var(--color-text)", fontSize: "0.82rem", fontWeight: 600 }}>
                        {p.name}: {formatCompact(p.value)}
                    </span>
                </div>
            ))}
        </div>
    );
};

function Analytics() {
    const { stats, transactions } = useTransactions();

    // Net Savings per month
    const netSavings = monthlyData.map(m => ({
        month: m.month,
        savings: m.income - m.expense,
        rate: (((m.income - m.expense) / m.income) * 100).toFixed(1),
    }));

    // Top spending categories
    const topCategories = [...categoryData].sort((a, b) => b.value - a.value).slice(0, 5);

    const totalExpense = transactions.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Header */}
            <div className="card animate-fadeInUp" style={{
                padding: "20px 24px",
                background: "linear-gradient(135deg, rgba(56,189,248,0.1), rgba(99,102,241,0.08))",
                borderColor: "rgba(56,189,248,0.2)",
            }}>
                <h2 style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--color-text)", marginBottom: 4 }}>
                    Financial Analytics
                </h2>
                <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
                    Deep insights into your income, spending patterns and savings goals.
                </p>
            </div>

            {/* Row 1: Monthly Overview + Savings Trend */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="analytics-grid-1">

                {/* Monthly Income vs Expense */}
                <div className="card animate-fadeInUp" style={{ padding: "22px 20px", animationDelay: "0.1s" }}>
                    <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--color-text)", marginBottom: 4 }}>
                        Monthly Overview
                    </h3>
                    <p style={{ fontSize: "0.73rem", color: "var(--color-text-muted)", marginBottom: 16 }}>Income vs Expenses — 6 months</p>
                    <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={monthlyData} barGap={4}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                            <XAxis dataKey="month" tick={{ fill: "#8b8ba0", fontSize: 12 }} axisLine={false} tickLine={false} />
                            <YAxis tickFormatter={formatCompact} tick={{ fill: "#8b8ba0", fontSize: 11 }} axisLine={false} tickLine={false} />
                            <Tooltip content={<TooltipBase />} />
                            <Legend wrapperStyle={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }} />
                            <Bar dataKey="income" name="Income" fill="#22c55e" radius={[6, 6, 0, 0]} />
                            <Bar dataKey="expense" name="Expense" fill="#f43f5e" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Savings Trend */}
                <div className="card animate-fadeInUp" style={{ padding: "22px 20px", animationDelay: "0.15s" }}>
                    <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--color-text)", marginBottom: 4 }}>
                        Savings Trend
                    </h3>
                    <p style={{ fontSize: "0.73rem", color: "var(--color-text-muted)", marginBottom: 16 }}>Monthly net savings</p>
                    <ResponsiveContainer width="100%" height={220}>
                        <AreaChart data={netSavings}>
                            <defs>
                                <linearGradient id="savingsGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                            <XAxis dataKey="month" tick={{ fill: "#8b8ba0", fontSize: 12 }} axisLine={false} tickLine={false} />
                            <YAxis tickFormatter={formatCompact} tick={{ fill: "#8b8ba0", fontSize: 11 }} axisLine={false} tickLine={false} />
                            <Tooltip content={<TooltipBase />} />
                            <Area type="monotone" dataKey="savings" name="Savings"
                                stroke="#6366f1" strokeWidth={2.5} fill="url(#savingsGrad)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Row 2: Pie + Top Categories */}
            <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 16 }} className="analytics-grid-2">

                {/* Pie Chart */}
                <div className="card animate-fadeInUp" style={{ padding: "22px 20px", animationDelay: "0.2s" }}>
                    <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--color-text)", marginBottom: 4 }}>
                        Expense Breakdown
                    </h3>
                    <p style={{ fontSize: "0.73rem", color: "var(--color-text-muted)", marginBottom: 4 }}>By category this month</p>
                    <CategoryPieChart data={categoryData} />
                </div>

                {/* Top Categories */}
                <div className="card animate-fadeInUp" style={{ padding: "22px 20px", animationDelay: "0.25s" }}>
                    <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--color-text)", marginBottom: 4 }}>
                        Top Spending Categories
                    </h3>
                    <p style={{ fontSize: "0.73rem", color: "var(--color-text-muted)", marginBottom: 20 }}>Where your money is going</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        {topCategories.map((cat, i) => {
                            const pct = ((cat.value / totalExpense) * 100).toFixed(1);
                            return (
                                <div key={cat.name}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-text)" }}>
                                                #{i + 1} {cat.name}
                                            </span>
                                        </div>
                                        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                                            <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{pct}%</span>
                                            <span style={{ fontSize: "0.85rem", fontWeight: 700, color: cat.color }}>
                                                {formatCurrency(cat.value)}
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{
                                        height: 7, borderRadius: 10,
                                        background: "var(--color-surface-2)",
                                        overflow: "hidden",
                                    }}>
                                        <div style={{
                                            height: "100%", borderRadius: 10,
                                            width: `${pct}%`,
                                            background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                                            transition: "width 0.8s ease",
                                        }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Total */}
                    <div style={{
                        marginTop: 20, padding: "12px 16px", borderRadius: 12,
                        background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}>
                        <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>Total Expenses</span>
                        <span style={{ fontWeight: 800, fontSize: "1rem", color: "#f43f5e" }}>{formatCurrency(totalExpense)}</span>
                    </div>
                </div>
            </div>

            {/* Savings Rate Line Chart */}
            <div className="card animate-fadeInUp" style={{ padding: "22px 20px", animationDelay: "0.3s" }}>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--color-text)", marginBottom: 4 }}>
                    Savings Rate Over Time
                </h3>
                <p style={{ fontSize: "0.73rem", color: "var(--color-text-muted)", marginBottom: 16 }}>Percentage of income saved each month</p>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={netSavings}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                        <XAxis dataKey="month" tick={{ fill: "#8b8ba0", fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis tickFormatter={v => `${v}%`} tick={{ fill: "#8b8ba0", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <Tooltip formatter={(v) => [`${v}%`, "Savings Rate"]}
                            contentStyle={{
                                background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
                                borderRadius: 12, color: "var(--color-text)",
                            }}
                        />
                        <Line type="monotone" dataKey="rate" name="Savings Rate"
                            stroke="#f59e0b" strokeWidth={2.5} dot={{ fill: "#f59e0b", r: 5 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Responsive */}
            <style>{`
        @media (max-width: 900px) {
          .analytics-grid-1 { grid-template-columns: 1fr !important; }
          .analytics-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}

export default Analytics;
