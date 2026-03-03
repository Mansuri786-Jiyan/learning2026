// ===== Currency Formatter =====
export const formatCurrency = (amount, currency = "INR") => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(amount);
};

// ===== Date Formatters =====
export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(date);
};

export const formatDateShort = (dateStr) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "short",
    }).format(date);
};

export const formatMonth = (dateStr) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-IN", {
        month: "short",
        year: "numeric",
    }).format(date);
};

// ===== Number Helpers =====
export const formatCompact = (num) => {
    if (num >= 1_00_000) return `₹${(num / 1_00_000).toFixed(1)}L`;
    if (num >= 1_000) return `₹${(num / 1_000).toFixed(1)}K`;
    return `₹${num}`;
};

// ===== Percentage Change =====
export const calcChange = (current, previous) => {
    if (!previous) return 0;
    return (((current - previous) / previous) * 100).toFixed(1);
};

// ===== Category Color Map =====
export const CATEGORY_COLORS = {
    Food: "#f59e0b",
    Transport: "#38bdf8",
    Shopping: "#a78bfa",
    Entertainment: "#fb7185",
    Health: "#34d399",
    Education: "#60a5fa",
    Rent: "#f472b6",
    Utilities: "#94a3b8",
    Salary: "#22c55e",
    Freelance: "#6366f1",
    Investment: "#10b981",
    Other: "#64748b",
};

// ===== Get initials for avatar =====
export const getInitials = (name = "") => {
    return name
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join("");
};

// ===== Truncate text =====
export const truncate = (str, length = 30) =>
    str?.length > length ? str.slice(0, length) + "…" : str;
