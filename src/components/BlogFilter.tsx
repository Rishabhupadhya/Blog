"use client";
import { useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export type SortOrder = "newest" | "oldest" | "date-range";

interface BlogFilterProps {
  onSortChange: (sortOrder: SortOrder, startDate?: string, endDate?: string) => void;
}

export default function BlogFilter({ onSortChange }: BlogFilterProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dateError, setDateError] = useState("");

  const handleSortChange = (order: SortOrder) => {
    setSortOrder(order);
    if (order === "date-range") {
      setShowDatePicker(true);
    } else {
      setShowDatePicker(false);
      onSortChange(order);
    }
  };

  const applyDateFilter = () => {
    if (startDate && endDate) {
      if (new Date(startDate) > new Date(endDate)) {
        setDateError("Start date must be before or equal to end date");
        return;
      }
      setDateError("");
      onSortChange("date-range", startDate, endDate);
      setShowDatePicker(false);
    }
  };

  const resetDateFilter = () => {
    setStartDate("");
    setEndDate("");
    setDateError("");
    setShowDatePicker(false);
    setSortOrder("newest");
    onSortChange("newest");
  };

  const options = [
    { label: "Newest", value: "newest" as SortOrder },
    { label: "Oldest", value: "oldest" as SortOrder },
    { label: "Date Range", value: "date-range" as SortOrder },
  ];

  return (
    <div className="mb-12">
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:opacity-60 transition-opacity mb-6"
      >
        <HiOutlineFilter className="text-sm" />
        <span>Filter & Sort</span>
      </button>

      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-6">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSortChange(opt.value)}
                  className={`text-xs font-bold uppercase tracking-widest transition-all ${sortOrder === opt.value
                      ? "text-[#1A1A1A] underline underline-offset-4 decoration-2"
                      : "text-[#555555] hover:text-[#1A1A1A]"
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {showDatePicker && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 bg-white border border-[#E5E5E1] rounded-sm max-w-lg"
              >
                {dateError && (
                  <p className="text-red-500 text-xs mb-4 font-medium">{dateError}</p>
                )}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-tighter text-[#555555]">From</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-3 py-2 bg-[#F9F9F8] border border-[#E5E5E1] text-[#1A1A1A] text-xs focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-tighter text-[#555555]">To</label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-3 py-2 bg-[#F9F9F8] border border-[#E5E5E1] text-[#1A1A1A] text-xs focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={applyDateFilter}
                    disabled={!startDate || !endDate}
                    className="px-4 py-2 bg-[#1A1A1A] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#333333] transition-colors disabled:opacity-30"
                  >
                    Apply
                  </button>
                  <button
                    onClick={resetDateFilter}
                    className="px-4 py-2 border border-[#E5E5E1] text-[#555555] text-[10px] font-bold uppercase tracking-widest hover:bg-[#F9F9F8] transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
