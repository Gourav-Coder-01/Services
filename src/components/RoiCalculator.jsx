import { useState } from 'react';
import { Calculator, Sliders, ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function RoiCalculator({ openEnquiry }) {
  const [dailyKm, setDailyKm] = useState(85);
  const [workingDays, setWorkingDays] = useState(26);
  const [fuelType, setFuelType] = useState('diesel');

  const evCostPerKm = 0.75;
  const iceCostPerKm = fuelType === 'diesel' ? 4.6 : 3.4;
  const monthlyKm = dailyKm * workingDays;
  const monthlyEvCost = Math.round(monthlyKm * evCostPerKm);
  const monthlyIceCost = Math.round(monthlyKm * iceCostPerKm);
  const monthlySavings = Math.max(0, monthlyIceCost - monthlyEvCost);
  const annualSavings = monthlySavings * 12;
  const evCostRatio =
    monthlyIceCost > 0
      ? Math.min(100, Math.max(4, Math.round((monthlyEvCost / monthlyIceCost) * 100)))
      : 0;

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll delay={0}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase">
                  <Calculator className="w-4 h-4" /> Fleet TCO &amp; Fuel Savings Estimator
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                  Calculate Your Monthly EV Fuel Savings
                </h2>
                <p className="text-slate-300 text-sm sm:text-base">
                  Compare running costs of Mayuri L5 EV (~₹0.75/km) against Diesel or CNG
                  three-wheelers.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-6 shadow-xl">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2.5">
                    Compare Mayuri L5 EV Against:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setFuelType('diesel')}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all duration-200 cursor-pointer ${
                        fuelType === 'diesel'
                          ? 'bg-sky-600 border-sky-400 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      Diesel (~₹4.60/km)
                    </button>
                    <button
                      onClick={() => setFuelType('cng')}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all duration-200 cursor-pointer ${
                        fuelType === 'cng'
                          ? 'bg-sky-600 border-sky-400 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      CNG (~₹3.40/km)
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-sky-400" /> Daily Distance
                    </label>
                    <span className="px-3 py-1 rounded-lg bg-slate-900 text-sky-400 font-black tabular-nums">
                      {dailyKm} km / day
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="160"
                    step="5"
                    value={dailyKm}
                    onChange={(e) => setDailyKm(Number(e.target.value))}
                    className="w-full accent-sky-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold text-slate-200">
                      Operating Days per Month
                    </label>
                    <span className="px-3 py-1 rounded-lg bg-slate-900 text-emerald-400 font-black tabular-nums">
                      {workingDays} days
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="30"
                    step="1"
                    value={workingDays}
                    onChange={(e) => setWorkingDays(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-5">
            <RevealOnScroll delay={180} direction="right">
              <div className="bg-linear-to-br from-slate-800 to-slate-950 border border-slate-700 rounded-3xl p-7 shadow-2xl">
                <div className="flex justify-between pb-5 border-b border-slate-800">
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">Monthly Distance</p>
                    <p className="text-xl font-black text-white tabular-nums">
                      {monthlyKm.toLocaleString('en-IN')} km
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold uppercase text-slate-400">Fuel Benchmark</p>
                    <p className="text-sm font-bold text-sky-400 uppercase">{fuelType}</p>
                  </div>
                </div>

                <div className="py-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-slate-300 uppercase">{fuelType} Monthly Cost</span>
                      <span className="text-red-400 tabular-nums">
                        ₹{monthlyIceCost.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full w-full transition-all duration-300" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-slate-300">Mayuri L5 EV Monthly Cost</span>
                      <span className="text-emerald-400 tabular-nums">
                        ₹{monthlyEvCost.toLocaleString('en-IN')}
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

                <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-5 text-center transition-colors duration-300">
                  <p className="text-xs font-extrabold uppercase text-emerald-300">
                    Estimated Net Fuel Savings
                  </p>
                  <p className="text-4xl sm:text-5xl font-black text-white mt-1 tabular-nums">
                    ₹{monthlySavings.toLocaleString('en-IN')}
                    <span className="text-base text-emerald-300">/mo</span>
                  </p>
                  <p className="text-sm font-bold text-emerald-300 mt-1 tabular-nums">
                    ₹{annualSavings.toLocaleString('en-IN')} saved per year!
                  </p>
                </div>

                <button
                  onClick={() =>
                    openEnquiry(
                      `Mayuri L5 EV (${dailyKm} km/day Fleet Plan)`,
                      'Custom ROI & EMI Quote'
                    )
                  }
                  className="w-full mt-6 bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Get Detailed EMI Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}