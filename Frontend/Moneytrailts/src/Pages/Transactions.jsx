import { useState } from "react";
import { Plus, Search, SlidersHorizontal, ArrowUpDown, X, Check } from "lucide-react";
import { useTransactions } from "../Hooks/useTransactions";
import TransactionItem from "../Components/ui/TransactionItem";
import { formatCurrency } from "../utils/helpers";
import { motion, AnimatePresence } from "framer-motion";

const TYPES = ["all", "income", "expense"];

function AddModal({ onClose, onAdd }) {
    const [form, setForm] = useState({ title: "", amount: "", type: "expense", category: "Food", note: "" });
    const categories = ["Food", "Transport", "Shopping", "Entertainment", "Health", "Education", "Rent", "Utilities", "Salary", "Freelance", "Investment", "Other"];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.amount) return;
        onAdd({ ...form, amount: parseFloat(form.amount) });
        onClose();
    };

    const inputStyle = {
        width: "100%", padding: "10px 14px", borderRadius: 10,
        fontSize: "0.875rem", color: "var(--color-text)",
        fontFamily: "var(--font-sans)",
    };

    return (
        <div style={{
            position: "fixed", inset: 0, zIndex: 100,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 16,
        }}>
            <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }} />
            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                style={{
                    position: "relative", zIndex: 1,
                    background: "var(--color-surface)", border: "1px solid var(--color-border)",
                    borderRadius: 20, padding: "28px 24px", width: "100%", maxWidth: 440,
                    boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                    <h2 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--color-text)" }}>Add Transaction</h2>
                    <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)" }}>
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {/* Type Toggle */}
                    <div style={{ display: "flex", gap: 8, background: "var(--color-surface-2)", padding: 4, borderRadius: 12 }}>
                        {["income", "expense"].map(t => (
                            <button key={t} type="button"
                                onClick={() => setForm(f => ({ ...f, type: t }))}
                                style={{
                                    flex: 1, padding: "8px", borderRadius: 8, border: "none", cursor: "pointer",
                                    fontWeight: 600, fontSize: "0.82rem", transition: "all 0.2s",
                                    fontFamily: "var(--font-sans)",
                                    background: form.type === t
                                        ? t === "income" ? "rgba(34,197,94,0.2)" : "rgba(244,63,94,0.2)"
                                        : "transparent",
                                    color: form.type === t
                                        ? t === "income" ? "#22c55e" : "#f43f5e"
                                        : "var(--color-text-muted)",
                                }}
                            >
                                {t === "income" ? "↑ Income" : "↓ Expense"}
                            </button>
                        ))}
                    </div>

                    <input className="input-dark" style={inputStyle} placeholder="Transaction title"
                        value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />

                    <input className="input-dark" style={inputStyle} type="number" placeholder="Amount (₹)"
                        value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} required min="1" />

                    <select className="input-dark" style={{ ...inputStyle, cursor: "pointer" }}
                        value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                        {categories.map(c => <option key={c} value={c} style={{ background: "#18181f" }}>{c}</option>)}
                    </select>

                    <input className="input-dark" style={inputStyle} placeholder="Note (optional)"
                        value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} />

                    <button type="submit" className="btn-primary" style={{
                        padding: "12px", borderRadius: 12, fontWeight: 700, fontSize: "0.9rem",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                    }}>
                        <Check size={16} /> Add Transaction
                    </button>
                </form>
            </motion.div>
        </div>
    );
}

function Transactions() {
    const {
        transactions, stats, categories,
        search, setSearch,
        filterType, setFilterType,
        filterCategory, setFilterCategory,
        sortBy, setSortBy,
        addTransaction, deleteTransaction,
    } = useTransactions();

    const [showModal, setShowModal] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Summary Strip */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} className="stagger">
                {[
                    { label: "Total Income", val: formatCurrency(stats.totalIncome), color: "#22c55e" },
                    { label: "Total Expense", val: formatCurrency(stats.totalExpense), color: "#f43f5e" },
                    { label: "Net Balance", val: formatCurrency(stats.balance), color: "#6366f1" },
                ].map(s => (
                    <div key={s.label} className="card animate-fadeInUp" style={{
                        flex: "1 1 160px", padding: "14px 18px",
                        borderLeft: `3px solid ${s.color}`,
                    }}>
                        <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginBottom: 4 }}>{s.label}</div>
                        <div style={{ fontWeight: 800, fontSize: "1.1rem", color: s.color }}>{s.val}</div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="card" style={{ padding: "16px 18px" }}>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>

                    {/* Search */}
                    <div style={{
                        flex: "1 1 200px", display: "flex", alignItems: "center", gap: 8,
                        background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
                        borderRadius: 10, padding: "0 12px", height: 40,
                    }}>
                        <Search size={14} style={{ color: "var(--color-text-muted)", flexShrink: 0 }} />
                        <input className="input-dark" style={{
                            background: "transparent", border: "none", outline: "none",
                            color: "var(--color-text)", fontSize: "0.85rem", flex: 1,
                            fontFamily: "var(--font-sans)",
                        }}
                            placeholder="Search transactions..."
                            value={search} onChange={e => setSearch(e.target.value)}
                        />
                        {search && (
                            <button onClick={() => setSearch("")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)" }}>
                                <X size={13} />
                            </button>
                        )}
                    </div>

                    {/* Type Filter */}
                    <div style={{ display: "flex", gap: 4, background: "var(--color-surface-2)", padding: 4, borderRadius: 10 }}>
                        {TYPES.map(t => (
                            <button key={t} onClick={() => setFilterType(t)}
                                style={{
                                    padding: "5px 12px", borderRadius: 7, border: "none", cursor: "pointer",
                                    fontSize: "0.78rem", fontWeight: 600, transition: "all 0.2s",
                                    fontFamily: "var(--font-sans)",
                                    background: filterType === t ? "var(--color-primary)" : "transparent",
                                    color: filterType === t ? "#fff" : "var(--color-text-muted)",
                                }}
                            >
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Category Filter */}
                    <select
                        value={filterCategory}
                        onChange={e => setFilterCategory(e.target.value)}
                        style={{
                            padding: "0 12px", height: 40, borderRadius: 10,
                            background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
                            color: "var(--color-text)", fontSize: "0.82rem", cursor: "pointer",
                            fontFamily: "var(--font-sans)", outline: "none",
                        }}
                    >
                        {categories.map(c => (
                            <option key={c} value={c} style={{ background: "#18181f" }}>
                                {c === "all" ? "All Categories" : c}
                            </option>
                        ))}
                    </select>

                    {/* Sort */}
                    <button
                        onClick={() => setSortBy(s => s === "date" ? "amount" : "date")}
                        style={{
                            display: "flex", alignItems: "center", gap: 6,
                            padding: "0 14px", height: 40, borderRadius: 10,
                            background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
                            color: "var(--color-text-muted)", fontSize: "0.8rem", cursor: "pointer",
                            fontFamily: "var(--font-sans)",
                        }}
                    >
                        <ArrowUpDown size={13} /> Sort: {sortBy === "date" ? "Date" : "Amount"}
                    </button>

                    {/* Add Button */}
                    <button
                        onClick={() => setShowModal(true)}
                        style={{
                            display: "flex", alignItems: "center", gap: 6,
                            padding: "0 16px", height: 40, borderRadius: 10,
                            background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                            border: "none", color: "#fff", cursor: "pointer",
                            fontSize: "0.82rem", fontWeight: 700, fontFamily: "var(--font-sans)",
                            boxShadow: "0 4px 12px rgba(99,102,241,0.4)",
                        }}
                    >
                        <Plus size={15} /> Add New
                    </button>
                </div>
            </div>

            {/* Transaction Count */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                    Showing <strong style={{ color: "var(--color-text)" }}>{transactions.length}</strong> transactions
                </p>
                <div style={{ display: "flex", gap: 10 }}>
                    {filterType !== "all" && (
                        <span style={{
                            padding: "3px 10px", borderRadius: 20,
                            background: "rgba(99,102,241,0.15)", color: "var(--color-primary-light)",
                            fontSize: "0.72rem", fontWeight: 600,
                            border: "1px solid rgba(99,102,241,0.25)",
                        }}>
                            {filterType} <X size={10} style={{ cursor: "pointer" }}
                                onClick={() => setFilterType("all")} />
                        </span>
                    )}
                </div>
            </div>

            {/* Transaction List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <AnimatePresence>
                    {transactions.length === 0 ? (
                        <div style={{
                            textAlign: "center", padding: "60px 20px",
                            color: "var(--color-text-muted)", fontSize: "0.9rem",
                        }}>
                            <div style={{ fontSize: "3rem", marginBottom: 12 }}>🔍</div>
                            No transactions found. Try adjusting your filters.
                        </div>
                    ) : (
                        transactions.map((txn, i) => (
                            <motion.div key={txn.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ delay: i * 0.03 }}
                            >
                                <TransactionItem txn={txn} onDelete={deleteTransaction} />
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>

            {/* Add Modal */}
            <AnimatePresence>
                {showModal && <AddModal onClose={() => setShowModal(false)} onAdd={addTransaction} />}
            </AnimatePresence>
        </div>
    );
}

export default Transactions;
