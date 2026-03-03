import { ArrowUpRight, ArrowDownRight, Trash2 } from "lucide-react";
import { formatCurrency, formatDateShort, CATEGORY_COLORS } from "../../utils/helpers";

function TransactionItem({ txn, onDelete, compact = false }) {
    const isIncome = txn.type === "income";
    const color = CATEGORY_COLORS[txn.category] || "#64748b";

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: compact ? "12px 14px" : "14px 18px",
                borderRadius: 12,
                background: "var(--color-surface-2)",
                border: "1px solid var(--color-border)",
                transition: "all 0.2s",
                cursor: "default",
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)";
                e.currentTarget.style.background = "var(--color-surface-3)";
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.background = "var(--color-surface-2)";
            }}
        >
            {/* Category Dot + Icon */}
            <div style={{
                width: 42, height: 42,
                borderRadius: 12,
                background: `${color}18`,
                border: `1px solid ${color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
            }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: color }} />
            </div>

            {/* Title + Category */}
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                    fontSize: "0.875rem", fontWeight: 600, color: "var(--color-text)",
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                }}>
                    {txn.title}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 2 }}>
                    <span style={{
                        fontSize: "0.68rem", fontWeight: 500, color,
                        background: `${color}15`, padding: "1px 8px", borderRadius: 20,
                        border: `1px solid ${color}25`,
                    }}>
                        {txn.category}
                    </span>
                    {!compact && txn.note && (
                        <span style={{ fontSize: "0.68rem", color: "var(--color-text-subtle)" }}>
                            {txn.note}
                        </span>
                    )}
                </div>
            </div>

            {/* Date */}
            {!compact && (
                <div style={{ fontSize: "0.72rem", color: "var(--color-text-subtle)", flexShrink: 0 }}>
                    {formatDateShort(txn.date)}
                </div>
            )}

            {/* Amount */}
            <div style={{
                display: "flex", alignItems: "center", gap: 6,
                flexShrink: 0,
            }}>
                <div style={{
                    width: 24, height: 24, borderRadius: 6,
                    background: isIncome ? "rgba(34,197,94,0.12)" : "rgba(244,63,94,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                    {isIncome
                        ? <ArrowUpRight size={13} style={{ color: "#22c55e" }} />
                        : <ArrowDownRight size={13} style={{ color: "#f43f5e" }} />
                    }
                </div>
                <span style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: isIncome ? "#22c55e" : "#f43f5e",
                }}>
                    {isIncome ? "+" : "-"}{formatCurrency(txn.amount)}
                </span>
            </div>

            {/* Delete */}
            {onDelete && (
                <button
                    onClick={() => onDelete(txn.id)}
                    style={{
                        background: "none", border: "none", cursor: "pointer",
                        color: "var(--color-text-subtle)", padding: 4, borderRadius: 6,
                        display: "flex", transition: "color 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "#f43f5e"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--color-text-subtle)"}
                >
                    <Trash2 size={14} />
                </button>
            )}
        </div>
    );
}

export default TransactionItem;
