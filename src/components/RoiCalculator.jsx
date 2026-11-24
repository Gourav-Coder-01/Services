import { useState } from "react";
import { Calculator, Sliders, ArrowRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function RoiCalculator({ openEnquiry }) {
  const [dailyKm, setDailyKm] = useState(85);
  const [workingDays, setWorkingDays] = useState(26);
  const [fuelType, setFuelType] = useState("diesel");

  const evCostPerKm = 0.75;
  const iceCostPerKm = fuelType === "diesel" ? 4.6 : 3.4;
  const monthlyKm = dailyKm * workingDays;
  const monthlyEvCost = Math.round(monthlyKm * evCostPerKm);
  const monthlyIceCost = Math.round(monthlyKm * iceCostPerKm);
  const monthlySavings = Math.max(0, monthlyIceCost - monthlyEvCost);
  const annualSavings = monthlySavings * 12;
  const evCostRatio =
    monthlyIceCost > 0
      ? Math.min(
          100,
          Math.max(4, Math.round((monthlyEvCost / monthlyIceCost) * 100)),
        )
      : 0;

  return (
    <section
      id="calculator"
      className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 items-center">
          {/* Left Controls Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0">
            <RevealOnScroll delay={0}>
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider leading-snug">
                  <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>Fleet TCO &amp; Fuel Savings Estimator</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Calculate Your Monthly EV Fuel Savings
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Compare running costs of Mayuri L5 EV (~₹0.75/km) against
                  Diesel or CNG three-wheelers.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 sm:p-6 space-y-5 sm:space-y-6 shadow-xl">
                {/* Fuel Comparison Toggle */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Compare Mayuri L5 EV Against:
                  </label>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => setFuelType("diesel")}
                      className={`py-3 px-3.5 sm:px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 active:scale-[0.98] cursor-pointer text-center ${
                        fuelType === "diesel"
                          ? "bg-sky-600 border-sky-400 text-white shadow-sm"
                          : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"
                      }`}
                    >
                      Diesel (~₹4.60/km)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFuelType("cng")}
                      className={`py-3 px-3.5 sm:px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 active:scale-[0.98] cursor-pointer text-center ${
                        fuelType === "cng"
                          ? "bg-sky-600 border-sky-400 text-white shadow-sm"
                          : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"
                      }`}
                    >
                      CNG (~₹3.40/km)
                    </button>
                  </div>
                </div>

                {/* Daily Distance Slider */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <label
                      htmlFor="daily-km-range"
                      className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-2"
                    >
                      <Sliders className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>Daily Distance</span>
                    </label>
                    <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-slate-900 text-sky-400 text-xs sm:text-sm font-black tabular-nums">
                      {dailyKm} km / day
                    </span>
                  </div>
                  <div className="py-1.5">
                    <input
                      id="daily-km-range"
                      type="range"
                      min="30"
                      max="160"
                      step="5"
                      value={dailyKm}
                      onChange={(e) => setDailyKm(Number(e.target.value))}
                      className="w-full accent-sky-500 h-2.5 sm:h-2 bg-slate-700 rounded-lg cursor-pointer touch-pan-y"
                    />
                  </div>
                  <div className="flex justify-between text-[11px] font-medium text-slate-400 mt-1 tabular-nums">
                    <span>30 km</span>
                    <span>95 km</span>
                    <span>160 km</span>
                  </div>
                </div>

                {/* Operating Days Slider */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <label
                      htmlFor="working-days-range"
                      className="text-xs sm:text-sm font-bold text-slate-200"
                    >
                      Operating Days per Month
                    </label>
                    <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-slate-900 text-emerald-400 text-xs sm:text-sm font-black tabular-nums">
                      {workingDays} days
                    </span>
                  </div>
                  <div className="py-1.5">
                    <input
                      id="working-days-range"
                      type="range"
                      min="20"
                      max="30"
                      step="1"
                      value={workingDays}
                      onChange={(e) => setWorkingDays(Number(e.target.value))}
                      className="w-full accent-emerald-500 h-2.5 sm:h-2 bg-slate-700 rounded-lg cursor-pointer touch-pan-y"
                    />
                  </div>
                  <div className="flex justify-between text-[11px] font-medium text-slate-400 mt-1 tabular-nums">
                    <span>20 days</span>
                    <span>25 days</span>
                    <span>30 days</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Results Card */}
          <div className="lg:col-span-5 min-w-0">
            <RevealOnScroll delay={180} direction="right">
              <div className="bg-linear-to-br from-slate-800 to-slate-950 border border-slate-700 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl">
                <div className="flex items-start justify-between gap-3 pb-4 sm:pb-5 border-b border-slate-800">
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                      Monthly Distance
                    </p>
                    <p className="text-lg sm:text-xl font-black text-white tabular-nums mt-0.5">
                      {monthlyKm.toLocaleString("en-IN")} km
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                      Fuel Benchmark
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-sky-400 uppercase mt-0.5">
                      {fuelType}
                    </p>
                  </div>
                </div>

                {/* Cost Bars */}
                <div className="py-5 sm:py-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-bold mb-1.5">
                      <span className="text-slate-300 uppercase truncate">
                        {fuelType} Monthly Cost
                      </span>
                      <span className="text-red-400 tabular-nums shrink-0">
                        ₹{monthlyIceCost.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full w-full transition-all duration-300" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-bold mb-1.5">
                      <span className="text-slate-300 truncate">
                        Mayuri L5 EV Monthly Cost
                      </span>
                      <span className="text-emerald-400 tabular-nums shrink-0">
                        ₹{monthlyEvCost.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${evCostRatio}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Savings Callout */}
                <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-4 sm:p-5 text-center transition-colors duration-300">
                  <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                    Estimated Net Fuel Savings
                  </p>
                  <p className="text-3xl xs:text-4xl sm:text-5xl font-black text-white mt-1.5 tabular-nums tracking-tight wrap-break-word">
                    ₹{monthlySavings.toLocaleString("en-IN")}
                    <span className="text-sm sm:text-base font-bold text-emerald-300 ml-0.5">
                      /mo
                    </span>
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-emerald-300 mt-1.5 tabular-nums">
                    ₹{annualSavings.toLocaleString("en-IN")} saved per year!
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    openEnquiry(
                      `Mayuri L5 EV (${dailyKm} km/day Fleet Plan)`,
                      "Custom ROI & EMI Quote",
                    )
                  }
                  className="w-full mt-5 sm:mt-6 bg-sky-500 hover:bg-sky-400 active:scale-[0.99] text-slate-950 font-extrabold py-3.5 px-5 sm:px-6 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get Detailed EMI Quote</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
