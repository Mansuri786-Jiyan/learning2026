import { CATEGORY_COLORS } from "./helpers";

// ===== Mock User =====
export const mockUser = {
    name: "Jiyan Mansuri",
    email: "jiyan@moneytraits.app",
    avatar: null,
};

// ===== Helper to generate dates =====
const daysAgo = (n) => {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return d.toISOString().split("T")[0];
};

// ===== Mock Transactions =====
export const mockTransactions = [
    { id: 1, title: "Monthly Salary", amount: 75000, type: "income", category: "Salary", date: daysAgo(1), note: "April salary credited" },
    { id: 2, title: "Burger King", amount: 450, type: "expense", category: "Food", date: daysAgo(1), note: "Lunch with friends" },
    { id: 3, title: "Uber Ride", amount: 180, type: "expense", category: "Transport", date: daysAgo(2), note: "Office commute" },
    { id: 4, title: "Netflix", amount: 649, type: "expense", category: "Entertainment", date: daysAgo(2), note: "Monthly subscription" },
    { id: 5, title: "Freelance Project", amount: 15000, type: "income", category: "Freelance", date: daysAgo(3), note: "UI design project" },
    { id: 6, title: "Grocery Shopping", amount: 2100, type: "expense", category: "Shopping", date: daysAgo(3), note: "Monthly groceries" },
    { id: 7, title: "Electricity Bill", amount: 1200, type: "expense", category: "Utilities", date: daysAgo(4), note: "March bill" },
    { id: 8, title: "Mutual Fund SIP", amount: 5000, type: "expense", category: "Investment", date: daysAgo(5), note: "Auto-debit SIP" },
    { id: 9, title: "Zomato Order", amount: 380, type: "expense", category: "Food", date: daysAgo(5), note: "Dinner delivery" },
    { id: 10, title: "House Rent", amount: 12000, type: "expense", category: "Rent", date: daysAgo(6), note: "March rent" },
    { id: 11, title: "Udemy Course", amount: 499, type: "expense", category: "Education", date: daysAgo(7), note: "React masterclass" },
    { id: 12, title: "Doctor Visit", amount: 800, type: "expense", category: "Health", date: daysAgo(8), note: "General checkup" },
    { id: 13, title: "Dividend Income", amount: 2300, type: "income", category: "Investment", date: daysAgo(9), note: "Q1 dividends" },
    { id: 14, title: "Swiggy", amount: 290, type: "expense", category: "Food", date: daysAgo(10), note: "Breakfast" },
    { id: 15, title: "Amazon Purchase", amount: 3200, type: "expense", category: "Shopping", date: daysAgo(10), note: "Headphones" },
    { id: 16, title: "Internet Bill", amount: 699, type: "expense", category: "Utilities", date: daysAgo(11), note: "Broadband monthly" },
    { id: 17, title: "Gym Membership", amount: 1500, type: "expense", category: "Health", date: daysAgo(12), note: "Monthly gym fee" },
    { id: 18, title: "Part-time Tutoring", amount: 8000, type: "income", category: "Freelance", date: daysAgo(13), note: "Online tutoring" },
    { id: 19, title: "Rapido Bike", amount: 60, type: "expense", category: "Transport", date: daysAgo(14), note: "Quick ride" },
    { id: 20, title: "Movie Tickets", amount: 700, type: "expense", category: "Entertainment", date: daysAgo(15), note: "Weekend movie" },
    { id: 21, title: "Freelance Payment", amount: 22000, type: "income", category: "Freelance", date: daysAgo(20), note: "Backend project" },
    { id: 22, title: "Furniture", amount: 8500, type: "expense", category: "Shopping", date: daysAgo(22), note: "New study chair" },
    { id: 23, title: "Phone Recharge", amount: 239, type: "expense", category: "Utilities", date: daysAgo(24), note: "Monthly plan" },
    { id: 24, title: "Books", amount: 650, type: "expense", category: "Education", date: daysAgo(26), note: "Programming books" },
    { id: 25, title: "Salary Bonus", amount: 10000, type: "income", category: "Salary", date: daysAgo(28), note: "Performance bonus" },
];

// ===== Monthly Chart Data =====
export const monthlyData = [
    { month: "Oct", income: 80000, expense: 38000 },
    { month: "Nov", income: 72000, expense: 42000 },
    { month: "Dec", income: 95000, expense: 55000 },
    { month: "Jan", income: 78000, expense: 40000 },
    { month: "Feb", income: 85000, expense: 37000 },
    { month: "Mar", income: 100000, expense: 45000 },
];

// ===== Category Breakdown =====
export const categoryData = Object.entries(
    mockTransactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + t.amount;
            return acc;
        }, {})
).map(([name, value]) => ({
    name,
    value,
    color: CATEGORY_COLORS[name] || "#64748b",
}));

// ===== Daily Spend (last 7 days) =====
export const dailySpend = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const label = d.toLocaleDateString("en-IN", { weekday: "short" });
    const dayTxn = mockTransactions.filter(
        (t) =>
            t.date === d.toISOString().split("T")[0] && t.type === "expense"
    );
    return {
        day: label,
        amount: dayTxn.reduce((s, t) => s + t.amount, 0),
    };
});
