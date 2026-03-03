import { useState } from "react";
import { Bot, Send, Sparkles, TrendingDown, Lightbulb, ShieldCheck, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTransactions } from "../Hooks/useTransactions";
import { formatCurrency } from "../utils/helpers";

const tips = [
    {
        icon: TrendingDown,
        color: "#f43f5e",
        title: "Reduce Food Spending",
        description: "You've spent ₹1,120 on food this month. Meal prepping could save up to 40% of food costs.",
        saving: "Save ~₹448/month",
    },
    {
        icon: Sparkles,
        color: "#6366f1",
        title: "50/30/20 Rule",
        description: "Allocate 50% to needs, 30% to wants, 20% to savings. Currently your savings rate is above average!",
        saving: "Healthy balance",
    },
    {
        icon: ShieldCheck,
        color: "#22c55e",
        title: "Emergency Fund Goal",
        description: "You're on track! Aim for 6 months of expenses (~₹2.7L) as your emergency buffer.",
        saving: "Progress: 68%",
    },
    {
        icon: Lightbulb,
        color: "#f59e0b",
        title: "Automate Your SIP",
        description: "You're already investing via SIP. Consider increasing by ₹1,000/month to hit ₹50L in 15 years.",
        saving: "₹50L goal",
    },
];

const suggestedQuestions = [
    "How can I save more this month?",
    "What's my biggest expense category?",
    "Am I on track with my savings goal?",
    "How to reduce my entertainment spend?",
];

const botReplies = {
    "How can I save more this month?": "Based on your spending, I see you spent **₹1,120 on Food** and **₹700 on Entertainment** this week. Cutting back by 25% on each could save you **₹455/month**. Also, consider switching to a monthly grocery plan instead of daily orders!",
    "What's my biggest expense category?": "Your **top 3 expense categories** are:\n1. 🏠 Rent – ₹12,000\n2. 🎵 Entertainment + Food – ₹8,000+\n3. 🛍️ Shopping – ₹11,700\n\nConsider reviewing your shopping habits — that's where you can save the most!",
    "Am I on track with my savings goal?": "Great news! Your **savings rate is 29.4%** which is above the recommended 20% benchmark. You're saving ~₹30K/month. Keep it up and you'll build a solid corpus! 🎉",
    "How to reduce my entertainment spend?": "This month you spent ₹1,349 on entertainment (Netflix + Movie tickets). Here are 3 tips:\n✅ Share streaming subscriptions with family\n✅ Use weekend offers for movie tickets\n✅ Explore free events in your city\nThis could save you **₹600–800/month**!",
};

function AiMentor() {
    const { stats } = useTransactions();
    const [messages, setMessages] = useState([
        {
            role: "bot",
            text: `Hello! 👋 I'm your AI Financial Mentor. Your current balance is **${formatCurrency(stats.balance)}** with a savings rate of **${stats.savingsRate}%**. How can I help you today?`,
        }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = (text) => {
        const msg = text || input.trim();
        if (!msg) return;
        setInput("");
        setMessages(prev => [...prev, { role: "user", text: msg }]);
        setLoading(true);
        setTimeout(() => {
            const reply = botReplies[msg] || `Great question! Based on your financial data, here's my insight: **${msg}** needs deeper analysis. Your spending pattern shows you're doing well overall! Keep monitoring your expenses and I'll give you more personalized tips as you go.`;
            setMessages(prev => [...prev, { role: "bot", text: reply }]);
            setLoading(false);
        }, 1200);
    };

    const renderText = (text) => {
        return text.split("**").map((part, i) =>
            i % 2 === 1 ? <strong key={i} style={{ color: "var(--color-primary-light)" }}>{part}</strong> : part
        );
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Header */}
            <div className="card animate-fadeInUp" style={{
                padding: "20px 24px",
                background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(167,139,250,0.08))",
                borderColor: "rgba(99,102,241,0.25)",
                display: "flex", alignItems: "center", gap: 16,
            }}>
                <div style={{
                    width: 50, height: 50, borderRadius: 14,
                    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(99,102,241,0.4)",
                }}>
                    <Bot size={24} color="#fff" />
                </div>
                <div>
                    <h2 style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--color-text)" }}>AI Financial Mentor</h2>
                    <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                        Powered by your real financial data · Always learning from your habits
                    </p>
                </div>
                <div style={{ marginLeft: "auto" }}>
                    <div style={{
                        padding: "6px 14px", borderRadius: 20,
                        background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)",
                        color: "#22c55e", fontSize: "0.72rem", fontWeight: 600,
                        display: "flex", alignItems: "center", gap: 6,
                    }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                        Online
                    </div>
                </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 16 }} className="ai-grid">

                {/* Chat */}
                <div className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", minHeight: 520 }}>
                    {/* Messages */}
                    <div style={{ flex: 1, padding: "20px 16px", display: "flex", flexDirection: "column", gap: 14, overflowY: "auto" }}>
                        <AnimatePresence>
                            {messages.map((msg, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        display: "flex",
                                        justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                                        gap: 10,
                                        alignItems: "flex-end",
                                    }}
                                >
                                    {msg.role === "bot" && (
                                        <div style={{
                                            width: 30, height: 30, borderRadius: 10, flexShrink: 0,
                                            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                        }}>
                                            <Bot size={15} color="#fff" />
                                        </div>
                                    )}
                                    <div style={{
                                        maxWidth: "75%", padding: "12px 16px", borderRadius: 14,
                                        fontSize: "0.85rem", lineHeight: 1.7,
                                        background: msg.role === "user"
                                            ? "linear-gradient(135deg, #6366f1, #4f46e5)"
                                            : "var(--color-surface-2)",
                                        color: msg.role === "user" ? "#fff" : "var(--color-text)",
                                        border: msg.role === "user" ? "none" : "1px solid var(--color-border)",
                                        borderBottomRightRadius: msg.role === "user" ? 4 : 14,
                                        borderBottomLeftRadius: msg.role === "bot" ? 4 : 14,
                                    }}>
                                        {renderText(msg.text)}
                                    </div>
                                </motion.div>
                            ))}
                            {loading && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
                                    <div style={{ width: 30, height: 30, borderRadius: 10, background: "linear-gradient(135deg, #6366f1, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Bot size={15} color="#fff" />
                                    </div>
                                    <div style={{ padding: "12px 18px", borderRadius: 14, background: "var(--color-surface-2)", border: "1px solid var(--color-border)", display: "flex", gap: 4, alignItems: "center" }}>
                                        {[0, 1, 2].map(i => (
                                            <div key={i} style={{
                                                width: 7, height: 7, borderRadius: "50%", background: "var(--color-primary)",
                                                animation: `pulse 1.2s infinite ${i * 0.2}s`,
                                            }} />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Suggested */}
                    <div style={{ padding: "12px 16px", borderTop: "1px solid var(--color-border)", display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {suggestedQuestions.map(q => (
                            <button key={q} onClick={() => sendMessage(q)}
                                style={{
                                    padding: "5px 12px", borderRadius: 20, border: "1px solid var(--color-border)",
                                    background: "var(--color-surface-2)", color: "var(--color-text-muted)",
                                    fontSize: "0.72rem", cursor: "pointer", transition: "all 0.2s",
                                    fontFamily: "var(--font-sans)",
                                }}
                                onMouseEnter={e => { e.target.style.borderColor = "rgba(99,102,241,0.4)"; e.target.style.color = "var(--color-primary-light)"; }}
                                onMouseLeave={e => { e.target.style.borderColor = "var(--color-border)"; e.target.style.color = "var(--color-text-muted)"; }}
                            >
                                {q}
                            </button>
                        ))}
                    </div>

                    {/* Input */}
                    <div style={{ padding: "14px 16px", borderTop: "1px solid var(--color-border)", display: "flex", gap: 10 }}>
                        <input
                            value={input} onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && sendMessage()}
                            placeholder="Ask me anything about your finances..."
                            className="input-dark"
                            style={{
                                flex: 1, padding: "10px 16px", borderRadius: 12,
                                fontSize: "0.875rem", fontFamily: "var(--font-sans)",
                            }}
                        />
                        <button onClick={() => sendMessage()}
                            style={{
                                width: 44, height: 44, borderRadius: 12,
                                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                                border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                                boxShadow: "0 4px 12px rgba(99,102,241,0.4)",
                            }}>
                            <Send size={17} color="#fff" />
                        </button>
                    </div>
                </div>

                {/* Tips Sidebar */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }} className="stagger">
                    <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-text)" }}>💡 Smart Tips</h3>
                    {tips.map((tip, i) => (
                        <div key={tip.title} className="card animate-fadeInUp"
                            style={{ padding: "16px", cursor: "pointer", animationDelay: `${i * 0.08}s` }}
                            onMouseEnter={e => e.currentTarget.style.transform = "translateX(4px)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
                        >
                            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                <div style={{
                                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                                    background: `${tip.color}18`, border: `1px solid ${tip.color}30`,
                                    display: "flex", alignItems: "center", justifyContent: "center", color: tip.color,
                                }}>
                                    <tip.icon size={17} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-text)", marginBottom: 4 }}>
                                        {tip.title}
                                    </div>
                                    <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: 6 }}>
                                        {tip.description}
                                    </div>
                                    <div style={{
                                        fontSize: "0.7rem", fontWeight: 700, color: tip.color,
                                        background: `${tip.color}15`, padding: "2px 8px", borderRadius: 20,
                                        display: "inline-block", border: `1px solid ${tip.color}25`,
                                    }}>
                                        {tip.saving}
                                    </div>
                                </div>
                                <ChevronRight size={14} style={{ color: "var(--color-text-subtle)", flexShrink: 0, marginTop: 2 }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes pulse { 0%,100% { opacity:0.3; transform:scale(0.8); } 50% { opacity:1; transform:scale(1.2); } }
        @media (max-width: 900px) { .ai-grid { grid-template-columns: 1fr !important; } }
      `}</style>
        </div>
    );
}

export default AiMentor;
