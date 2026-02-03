"use client";
import { useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";

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

  return (
    <div className="mb-8">
      {/* Hamburger Filter Button */}
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all mb-4"
      >
        <HiOutlineFilter className="text-xl" />
        <span>Filter Posts</span>
      </button>

      {/* Filter Options - Only visible when isFilterOpen is true */}
      {isFilterOpen && (
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleSortChange("newest")}
              className={`px-4 py-2 rounded-lg transition-all ${
                sortOrder === "newest"
                  ? "bg-cyan-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              Newest First
            </button>
            <button
              onClick={() => handleSortChange("oldest")}
              className={`px-4 py-2 rounded-lg transition-all ${
                sortOrder === "oldest"
                  ? "bg-cyan-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              Oldest First
            </button>
            <button
              onClick={() => handleSortChange("date-range")}
              className={`px-4 py-2 rounded-lg transition-all ${
                sortOrder === "date-range"
                  ? "bg-cyan-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              Date Range
            </button>
          </div>

          {showDatePicker && (
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center p-4 bg-white/5 rounded-lg border border-white/10">
              {dateError && (
                <p className="text-red-400 text-sm w-full">{dateError}</p>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400">From</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400">To</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-2 sm:mt-6">
                <button
                  onClick={applyDateFilter}
                  disabled={!startDate || !endDate}
                  className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  Apply
                </button>
                <button
                  onClick={resetDateFilter}
                  className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20 transition-all text-sm"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
