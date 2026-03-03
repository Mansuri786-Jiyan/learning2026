import { useState, useMemo } from "react";
import { mockTransactions } from "../utils/mockData";

export function useTransactions() {
    const [transactions, setTransactions] = useState(mockTransactions);
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("all"); 
    const [filterCategory, setFilterCategory] = useState("all");
    const [sortBy, setSortBy] = useState("date"); 

    // ===== Derived Stats =====
    const stats = useMemo(() => {
        const totalIncome = transactions.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
        const totalExpense = transactions.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0);
        const balance = totalIncome - totalExpense;
        const savingsRate = totalIncome > 0 ? ((balance / totalIncome) * 100).toFixed(1) : 0;
        return { totalIncome, totalExpense, balance, savingsRate };
    }, [transactions]);

    // ===== Filtered & Sorted =====
    const filtered = useMemo(() => {
        let list = [...transactions];
        if (filterType !== "all") list = list.filter(t => t.type === filterType);
        if (filterCategory !== "all") list = list.filter(t => t.category === filterCategory);
        if (search.trim()) list = list.filter(t =>
            t.title.toLowerCase().includes(search.toLowerCase()) ||
            t.category.toLowerCase().includes(search.toLowerCase())
        );
        if (sortBy === "date") list.sort((a, b) => new Date(b.date) - new Date(a.date));
        if (sortBy === "amount") list.sort((a, b) => b.amount - a.amount);
        return list;
    }, [transactions, filterType, filterCategory, search, sortBy]);

    // ===== All unique categories =====
    const categories = useMemo(() => {
        return ["all", ...new Set(transactions.map(t => t.category))];
    }, [transactions]);

    // ===== Add Transaction =====
    const addTransaction = (txn) => {
        const newTxn = { ...txn, id: Date.now(), date: new Date().toISOString().split("T")[0] };
        setTransactions(prev => [newTxn, ...prev]);
    };

    // ===== Delete Transaction =====
    const deleteTransaction = (id) => {
        setTransactions(prev => prev.filter(t => t.id !== id));
    };

    return {
        transactions: filtered,
        stats,
        categories,
        search, setSearch,
        filterType, setFilterType,
        filterCategory, setFilterCategory,
        sortBy, setSortBy,
        addTransaction,
        deleteTransaction,
    };
}
