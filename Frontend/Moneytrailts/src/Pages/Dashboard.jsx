import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
import StatCard from "../Components/ui/StatCard";
import TransactionItem from "../Components/ui/TransactionItem";
import IncomeExpenseAreaChart from "../Components/charts/IncomeExpenseAreaChart";
import CategoryPieChart from "../Components/charts/CategoryPieChart";
import DailyBarChart from "../Components/charts/DailyBarChart";
import { useTransactions } from "../Hooks/useTransactions";
import { monthlyData, categoryData, dailySpend } from "../utils/mockData";
import { formatCurrency } from "../utils/helpers";

function Dashboard() {
    const { stats, transactions, deleteTransaction } = useTransactions();
    const recent = transactions.slice(0, 5);

    const cards = [
        {
            title: "Total Balance",
            amount: stats.balance,
            icon: Wallet,
            accent: "#6366f1",
            change: 8.2,
            changeLabel: "vs last month",
        },
        {
            title: "Total Income",
            amount: stats.totalIncome,
            icon: TrendingUp,
            accent: "#22c55e",
            change: 12.5,
            changeLabel: "vs last month",
        },
        {
            title: "Total Expenses",
            amount: stats.totalExpense,
            icon: TrendingDown,
            accent: "#f43f5e",
            change: -3.1,
            changeLabel: "vs last month",
        },
        {
            title: "Savings Rate",
            amount: parseFloat(stats.savingsRate),
            icon: PiggyBank,
            accent: "#f59e0b",
            change: 5.4,
            changeLabel: "of total income",
        },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Welcome Banner */}
            <div className="card animate-fadeInUp" style={{
                padding: "22px 28px",
                background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(56,189,248,0.08))",
                borderColor: "rgba(99,102,241,0.2)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: 12,
            }}>
                <div>
                    <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text)", marginBottom: 4 }}>
                        Good evening, Jiyan 👋
                    </h2>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                        Here's your financial overview for this month.
                    </p>
                </div>
                <div style={{
                    padding: "10px 20px", borderRadius: 12,
                    background: "rgba(99,102,241,0.2)",
                    border: "1px solid rgba(99,102,241,0.3)",
                    textAlign: "center",
                }}>
                    <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginBottom: 2 }}>Savings Rate</div>
                    <div className="gradient-text" style={{ fontSize: "1.6rem", fontWeight: 800 }}>
                        {stats.savingsRate}%
                    </div>
                </div>
            </div>

            {/* Stat Cards */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
            }} className="stagger">
                {cards.map((card, i) => (
                    <StatCard key={card.title} {...card} index={i}
                        amount={card.title === "Savings Rate" ? stats.totalIncome * (stats.savingsRate / 100) : card.amount}
                    />
                ))}
            </div>

            {/* Charts Row */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 380px",
                gap: 16,
            }} className="charts-grid">

                {/* Area Chart */}
                <div className="card animate-fadeInUp" style={{ padding: "22px 20px", animationDelay: "0.2s" }}>
                    <div style={{ marginBottom: 16 }}>
                        <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)" }}>
                            Income vs Expenses
                        </h3>
                        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: 2 }}>
                            Last 6 months trend
                        </p>
                    </div>
                    <IncomeExpenseAreaChart data={monthlyData} />
                </div>

                {/* Pie Chart */}
                <div className="card animate-fadeInUp" style={{ padding: "22px 20px", animationDelay: "0.25s" }}>
                    <div style={{ marginBottom: 12 }}>
                        <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)" }}>
                            Spending by Category
                        </h3>
                        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: 2 }}>
                            This month's breakdown
                        </p>
                    </div>
                    <CategoryPieChart data={categoryData} />
                </div>
            </div>

            {/* Bottom Row: Transactions + Daily Spend */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 340px",
                gap: 16,
            }} className="bottom-grid">

                {/* Recent Transactions */}
                <div className="card animate-fadeInUp" style={{ padding: "22px 20px", animationDelay: "0.3s" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                        <div>
                            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)" }}>
                                Recent Transactions
                            </h3>
                            <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: 2 }}>
                                Last 5 activities
                            </p>
                        </div>
                        <a href="/transactions" style={{
                            fontSize: "0.78rem", color: "var(--color-primary-light)",
                            textDecoration: "none", fontWeight: 600,
                            padding: "5px 12px", borderRadius: 8,
                            background: "rgba(99,102,241,0.1)",
                            border: "1px solid rgba(99,102,241,0.2)",
                            transition: "all 0.2s",
                        }}>
                            View all →
                        </a>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }} className="stagger">
                        {recent.map(txn => (
                            <TransactionItem key={txn.id} txn={txn} onDelete={deleteTransaction} />
                        ))}
                    </div>
                </div>

                {/* Daily Spend */}
                <div className="card animate-fadeInUp" style={{ padding: "22px 20px", animationDelay: "0.35s" }}>
                    <div style={{ marginBottom: 14 }}>
                        <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)" }}>
                            Daily Spending
                        </h3>
                        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: 2 }}>
                            This week
                        </p>
                    </div>
                    <DailyBarChart data={dailySpend} />

                    {/* Summary */}
                    <div style={{
                        marginTop: 16, padding: "12px 14px",
                        background: "var(--color-surface-2)",
                        borderRadius: 10, border: "1px solid var(--color-border)",
                    }}>
                        <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>Weekly Total</div>
                        <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text)", marginTop: 2 }}>
                            {formatCurrency(dailySpend.reduce((s, d) => s + d.amount, 0))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive grid fixes */}
            <style>{`
        @media (max-width: 900px) {
          .charts-grid { grid-template-columns: 1fr !important; }
          .bottom-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}

export default Dashboard;
