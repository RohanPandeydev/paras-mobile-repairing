"use client";

import { useEffect, useState, useCallback } from "react";

export default function PhoneAssembly() {
  const [stage, setStage] = useState(0);
  // stage 0: nothing, 1: frame, 2: motherboard, 3: battery, 4: camera, 5: speaker+sensors, 6: screen, 7: labels+complete

  const runAnimation = useCallback(() => {
    setStage(0);
    const timings = [300, 800, 1600, 2400, 3000, 3600, 4500];
    timings.forEach((t, i) => {
      setTimeout(() => setStage(i + 1), t);
    });
  }, []);

  useEffect(() => {
    runAnimation();
    const interval = setInterval(runAnimation, 12000);
    return () => clearInterval(interval);
  }, [runAnimation]);

  return (
    <div className="relative w-[420px] h-[540px] flex items-center justify-center select-none">
      {/* Background glow */}
      <div className={`absolute w-[250px] h-[400px] rounded-[3rem] transition-all duration-1000 ${
        stage >= 1 ? "bg-primary/10 blur-[80px] opacity-100" : "opacity-0"
      }`} />

      {/* Ambient particles */}
      {stage >= 2 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-primary/60 rounded-full"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${5 + Math.random() * 90}%`,
                animation: `particleBurst ${1 + Math.random() * 2}s ease-out ${Math.random() * 3}s infinite`,
                ["--tx" as string]: `${(Math.random() - 0.5) * 60}px`,
                ["--ty" as string]: `${(Math.random() - 0.5) * 60}px`,
              }}
            />
          ))}
        </div>
      )}

      {/* ==================== PHONE FRAME ==================== */}
      <div className={`relative w-[220px] h-[450px] transition-all duration-700 ${
        stage >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}>
        {/* Phone outer shell */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-[#2a3040] to-[#1a2030] border border-[#3a4555] shadow-2xl">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-transparent" />
        </div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0d1117] rounded-b-2xl z-30 border-b border-x border-[#2a3545]">
          <div className="flex items-center justify-center gap-2 h-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2a3545]" />
            <div className="w-10 h-1 rounded-full bg-[#2a3545]" />
          </div>
        </div>

        {/* Inner screen area */}
        <div className="absolute inset-[4px] rounded-[2.2rem] bg-[#0d1117] overflow-hidden">

          {/* ====== MOTHERBOARD - flies from BOTTOM ====== */}
          <div
            className={`absolute inset-x-2 top-[15%] bottom-[10%] z-[2] ${
              stage >= 2 ? "fly-from-bottom" : "opacity-0 translate-y-[600px]"
            }`}
            style={{ animationDelay: "0s" }}
          >
            {stage === 2 && (
              <div className="absolute inset-0 bg-green-400/20 rounded-xl animate-ping pointer-events-none" style={{ animationDuration: "0.5s", animationIterationCount: 1 }} />
            )}

            <div className="w-full h-full bg-gradient-to-b from-[#0a2618] to-[#071a10] rounded-xl border border-green-900/40 relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 300" fill="none">
                <line x1="10" y1="40" x2="190" y2="40" stroke="#166534" strokeWidth="0.8" opacity="0.5" />
                <line x1="30" y1="80" x2="170" y2="80" stroke="#166534" strokeWidth="0.5" opacity="0.4" />
                <line x1="20" y1="120" x2="180" y2="120" stroke="#166534" strokeWidth="0.8" opacity="0.5" />
                <line x1="40" y1="160" x2="160" y2="160" stroke="#166534" strokeWidth="0.5" opacity="0.4" />
                <line x1="10" y1="200" x2="190" y2="200" stroke="#166534" strokeWidth="0.8" opacity="0.5" />
                <line x1="25" y1="240" x2="175" y2="240" stroke="#166534" strokeWidth="0.5" opacity="0.4" />
                <line x1="60" y1="10" x2="60" y2="290" stroke="#166534" strokeWidth="0.5" opacity="0.3" />
                <line x1="100" y1="10" x2="100" y2="290" stroke="#166534" strokeWidth="0.5" opacity="0.3" />
                <line x1="140" y1="10" x2="140" y2="290" stroke="#166534" strokeWidth="0.5" opacity="0.3" />
                {[[40,40],[100,40],[160,40],[60,80],[140,80],[50,120],[100,120],[150,120],[80,160],[120,160],[60,200],[100,200],[140,200],[80,240],[120,240]].map(([cx,cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="2.5" fill="#22c55e" opacity="0.25" />
                ))}
              </svg>

              {/* CPU Chip */}
              <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-16 h-16">
                <div className="w-full h-full bg-[#1a1a2e] rounded-lg border border-[#333] shadow-inner flex items-center justify-center relative">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#222] to-[#1a1a1a] rounded border border-[#444] flex items-center justify-center">
                    <span className="text-[7px] font-mono text-green-500/60 font-bold">SNAPDRAGON</span>
                  </div>
                  {[...Array(8)].map((_, i) => (
                    <div key={`t${i}`} className="absolute -top-1 w-0.5 h-1 bg-[#555] rounded-sm" style={{ left: `${10 + i * 11}%` }} />
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <div key={`b${i}`} className="absolute -bottom-1 w-0.5 h-1 bg-[#555] rounded-sm" style={{ left: `${10 + i * 11}%` }} />
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <div key={`l${i}`} className="absolute -left-1 h-0.5 w-1 bg-[#555] rounded-sm" style={{ top: `${12 + i * 14}%` }} />
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <div key={`r${i}`} className="absolute -right-1 h-0.5 w-1 bg-[#555] rounded-sm" style={{ top: `${12 + i * 14}%` }} />
                  ))}
                </div>
              </div>

              {/* IC chips */}
              <div className="absolute top-[8%] left-[12%] w-9 h-5 bg-[#1a1a28] rounded-sm border border-[#333]">
                <span className="text-[5px] text-[#555] flex items-center justify-center h-full font-mono">RAM 8GB</span>
              </div>
              <div className="absolute top-[8%] right-[12%] w-9 h-5 bg-[#1a1a28] rounded-sm border border-[#333]">
                <span className="text-[5px] text-[#555] flex items-center justify-center h-full font-mono">WIFI IC</span>
              </div>
              <div className="absolute top-[55%] left-[10%] w-7 h-4 bg-[#1a1a28] rounded-sm border border-[#333]">
                <span className="text-[5px] text-[#555] flex items-center justify-center h-full font-mono">PWR</span>
              </div>
              <div className="absolute top-[55%] right-[10%] w-7 h-4 bg-[#1a1a28] rounded-sm border border-[#333]">
                <span className="text-[5px] text-[#555] flex items-center justify-center h-full font-mono">NFC</span>
              </div>
              <div className="absolute bottom-[20%] left-[25%] w-3 h-2 bg-[#333] rounded-sm" />
              <div className="absolute bottom-[20%] right-[25%] w-3 h-2 bg-[#333] rounded-sm" />
              <div className="absolute bottom-[12%] left-[40%] w-2 h-2 bg-[#444] rounded-sm" />
              <div className="absolute bottom-[12%] right-[40%] w-2 h-2 bg-[#444] rounded-sm" />
              <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-12 h-2 bg-[#2a2a35] rounded-sm border border-[#444]" />
            </div>
          </div>

          {/* ====== BATTERY - flies from LEFT ====== */}
          <div
            className={`absolute left-2 right-2 bottom-2 h-[28%] z-[3] ${
              stage >= 3 ? "fly-from-left" : "opacity-0 -translate-x-[600px]"
            }`}
          >
            {stage === 3 && (
              <div className="absolute inset-0 bg-green-400/15 rounded-xl animate-ping pointer-events-none" style={{ animationDuration: "0.5s", animationIterationCount: 1 }} />
            )}
            <div className="w-full h-full bg-gradient-to-b from-[#1a2030] to-[#151c28] rounded-xl border border-[#2a3545] relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400/70">
                    <rect x="1" y="6" width="18" height="12" rx="2" />
                    <line x1="23" y1="13" x2="23" y2="11" />
                  </svg>
                  <span className="text-green-400/70 text-[11px] font-bold font-mono">4500 mAh</span>
                </div>
                <div className="w-24 h-1.5 bg-[#1a2530] rounded-full mt-2.5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500/70 to-green-400/70 rounded-full"
                    style={{
                      animation: stage >= 3 ? "batteryFill 2.5s ease-out 0.5s forwards" : "none",
                      width: "0%",
                    }}
                  />
                </div>
                <span className={`text-[9px] text-green-400/40 mt-1.5 font-mono transition-opacity duration-500 ${stage >= 3 ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "2s" }}>
                  Li-Po • Fast Charging
                </span>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-[#2a3545] rounded-b-sm" />
            </div>
          </div>

          {/* ====== CAMERA MODULE - flies from TOP-RIGHT ====== */}
          <div
            className={`absolute top-10 right-2 z-[4] ${
              stage >= 4 ? "fly-from-right" : "opacity-0 translate-x-[600px]"
            }`}
          >
            {stage === 4 && (
              <div className="absolute inset-0 bg-primary/20 rounded-2xl animate-ping pointer-events-none" style={{ animationDuration: "0.5s", animationIterationCount: 1 }} />
            )}
            <div className="w-[65px] h-[85px] bg-[#1a2030] rounded-2xl border border-[#2a3545] p-1.5 relative">
              <div className="w-full aspect-square rounded-xl bg-[#0d1117] border border-[#333] flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#111828] to-[#0a0f18] border-2 border-[#333] flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#444] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-[#555]">
                      <div className="w-1 h-1 rounded-full bg-white/15 mt-0.5 ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0d1117] border border-[#333] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#1a1a2e] border border-[#444]" />
              </div>
              <div className={`absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                stage >= 4 ? "bg-amber-300/60 shadow-lg shadow-amber-300/30" : "bg-[#333]"
              }`} style={{ transitionDelay: "0.8s" }} />
            </div>
          </div>

          {/* ====== SPEAKER + SENSORS - fly from TOP ====== */}
          <div
            className={`absolute top-2 left-1/2 -translate-x-1/2 z-[5] ${
              stage >= 5 ? "fly-from-top" : "opacity-0 -translate-y-[600px]"
            }`}
          >
            <div className="flex gap-0.5 justify-center">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1 h-0.5 bg-[#2a3545] rounded-full" />
              ))}
            </div>
          </div>

          {/* Bottom speaker + port */}
          <div
            className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 z-[5] ${
              stage >= 5 ? "fly-from-bottom" : "opacity-0 translate-y-[600px]"
            }`}
            style={{ animationDelay: "0.15s" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-px">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-0.5 h-0.5 bg-[#2a3545] rounded-full" />
                ))}
              </div>
              <div className="w-5 h-1.5 bg-[#2a3545] rounded-full border border-[#333]" />
              <div className="flex gap-px">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-0.5 h-0.5 bg-[#2a3545] rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* ====== SCREEN DISPLAY - flies from TOP-LEFT ====== */}
          <div
            className={`absolute inset-0 z-[6] ${
              stage >= 6 ? "fly-from-top-left" : "opacity-0 -translate-x-[500px] -translate-y-[500px]"
            }`}
          >
            {stage === 6 && (
              <div className="absolute inset-0 bg-primary/10 rounded-[2.2rem] animate-ping pointer-events-none" style={{ animationDuration: "0.6s", animationIterationCount: 1 }} />
            )}
            <div className="absolute inset-0 bg-[#0d1117]/97 rounded-[2.2rem] flex flex-col">
              <div className="flex justify-between items-center px-8 pt-9 text-[8px] text-[#4a5568]">
                <span className="font-mono">11:00</span>
                <div className="flex gap-1.5 items-center">
                  <div className="flex gap-px items-end">
                    {[3, 5, 7, 9].map((h, i) => (
                      <div key={i} className="w-[2px] rounded-full bg-[#4a5568]" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                  <svg width="10" height="6" viewBox="0 0 24 12" className="text-green-500/60">
                    <rect x="0" y="0" width="20" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="3" y="3" width="13" height="6" rx="1" fill="currentColor" />
                    <rect x="21" y="3" width="3" height="6" rx="1" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center px-6">
                <div className={`transition-all duration-700 ${stage >= 7 ? "scale-100 opacity-100" : "scale-75 opacity-0"}`} style={{ transitionDelay: "0.3s" }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/80 to-primary-dark/80 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary/20">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <p className="text-white/90 font-black text-lg text-center tracking-tight">PARAS</p>
                  <p className="text-primary/70 text-[9px] font-bold tracking-[0.25em] text-center mt-0.5">MOBILE REPAIR</p>
                  <div className="w-10 h-[2px] bg-gradient-to-r from-primary/40 to-accent/40 mx-auto mt-3 rounded-full" />
                  <p className="text-[#4a5568] text-[10px] mt-2.5 text-center">We fix what others can&apos;t</p>
                </div>
              </div>

              <div className="flex justify-center pb-3">
                <div className="w-8 h-[3px] bg-[#2a3545] rounded-full" />
              </div>
            </div>
          </div>

          {/* ====== SCAN LINE ====== */}
          {stage >= 6 && (
            <div
              className="absolute inset-x-0 h-[1px] z-[7] pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(232,133,59,0.3), transparent)",
                animation: "scanLine 3s linear 1s infinite",
              }}
            />
          )}
        </div>

        {/* Side buttons */}
        <div className="absolute -right-[2px] top-[25%] w-[2px] h-8 bg-[#3a4555] rounded-l-sm" />
        <div className="absolute -right-[2px] top-[40%] w-[2px] h-12 bg-[#3a4555] rounded-l-sm" />
        <div className="absolute -left-[2px] top-[30%] w-[2px] h-6 bg-[#3a4555] rounded-r-sm" />

        {/* ====== LABELS - appear after complete ====== */}
        {stage >= 7 && (
          <>
            <div className="absolute -right-36 top-16 flex items-center gap-1.5 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
              <div className="w-8 h-px bg-accent/30" />
              <span className="text-[9px] text-accent/80 font-mono bg-accent/5 px-2 py-1 rounded border border-accent/15">Camera 48MP</span>
            </div>
            <div className="absolute -right-32 top-[45%] flex items-center gap-1.5 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
              <div className="w-8 h-px bg-green-400/30" />
              <span className="text-[9px] text-green-400/80 font-mono bg-green-400/5 px-2 py-1 rounded border border-green-400/15">Motherboard</span>
            </div>
            <div className="absolute -left-36 bottom-[18%] flex items-center gap-1.5 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
              <span className="text-[9px] text-green-400/80 font-mono bg-green-400/5 px-2 py-1 rounded border border-green-400/15">Battery 4500mAh</span>
              <div className="w-8 h-px bg-green-400/30" />
            </div>
            <div className="absolute -left-32 top-[20%] flex items-center gap-1.5 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
              <span className="text-[9px] text-primary/80 font-mono bg-primary/5 px-2 py-1 rounded border border-primary/15">AMOLED Display</span>
              <div className="w-8 h-px bg-primary/30" />
            </div>
          </>
        )}
      </div>

      {/* ====== ASSEMBLED STATUS ====== */}
      <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 transition-all duration-700 ${
        stage >= 7 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`} style={{ transitionDelay: "1s" }}>
        <div className="flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5">
          <div className="w-1.5 h-1.5 bg-green-400/80 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold text-primary/80 tracking-wide">ASSEMBLED & READY</span>
        </div>
      </div>
    </div>
  );
}
