import { TrendingUp, TrendingDown } from "lucide-react";
import { formatCurrency, formatCompact } from "../../utils/helpers";

function StatCard({ title, amount, icon: Icon, color, accent, change, changeLabel, index = 0 }) {
    const isPositive = Number(change) >= 0;

    return (
        <div
            className="card animate-fadeInUp"
            style={{
                padding: "22px 20px",
                position: "relative",
                overflow: "hidden",
                animationDelay: `${index * 0.07}s`,
                cursor: "default",
            }}
        >
            {/* Background Glow */}
            <div style={{
                position: "absolute", top: -20, right: -20,
                width: 100, height: 100, borderRadius: "50%",
                background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
                pointerEvents: "none",
            }} />

            {/* Top Row */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${accent}18`,
                    border: `1px solid ${accent}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: accent,
                }}>
                    <Icon size={20} />
                </div>

                {change !== undefined && (
                    <div style={{
                        display: "flex", alignItems: "center", gap: 4,
                        padding: "4px 10px", borderRadius: 20,
                        background: isPositive ? "rgba(34,197,94,0.12)" : "rgba(244,63,94,0.12)",
                        color: isPositive ? "#22c55e" : "#f43f5e",
                        fontSize: "0.72rem", fontWeight: 600,
                    }}>
                        {isPositive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                        {Math.abs(change)}%
                    </div>
                )}
            </div>

            {/* Amount */}
            <div style={{ marginBottom: 6 }}>
                <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--color-text)", letterSpacing: "-0.5px" }}>
                    {formatCompact(amount)}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--color-text-subtle)", fontWeight: 400, marginTop: 2 }}>
                    {formatCurrency(amount)}
                </div>
            </div>

            {/* Label */}
            <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontWeight: 500 }}>
                {title}
            </div>

            {changeLabel && (
                <div style={{ fontSize: "0.68rem", color: "var(--color-text-subtle)", marginTop: 4 }}>
                    {changeLabel}
                </div>
            )}

            {/* Bottom Bar */}
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: 3,
                background: `linear-gradient(90deg, ${accent}, transparent)`,
                borderRadius: "0 0 var(--radius-lg) var(--radius-lg)",
            }} />
        </div>
    );
}

export default StatCard;
