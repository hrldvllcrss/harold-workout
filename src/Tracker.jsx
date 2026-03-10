import { useState, useEffect } from "react";

const WORKOUTS = {
  A: {
    name: "Chest, Arms + Legs/Core",
    color: "#DC2626", bg: "#FEF2F2", border: "#FECACA",
    exercises: [
      { name: "Dumbbell Bench Press", sets: 3, reps: "10", type: "compound", videoId: "t1iaVBMItPo",
        howTo: "Lie flat on bench. Hold dumbbells at chest level, palms facing forward. Press straight up until arms are fully extended. Lower slowly (3 seconds) until elbows are level with the bench. Squeeze your chest at the top.",
        tips: "Keep feet flat on floor. Don't arch your lower back excessively. If wrists hurt, angle dumbbells slightly inward.",
        muscles: "Chest, Front Shoulders, Triceps" },
      { name: "Incline Dumbbell Press", sets: 3, reps: "10", type: "compound", videoId: "VDU5bzE2qOE",
        howTo: "Set bench to 30\u00b0 angle. Sit back, dumbbells at upper chest level. Press up at a slight angle following the bench line. Lower slowly to upper chest.",
        tips: "Go lighter than flat press \u2014 this is harder. Don't flare elbows out too wide. Feel it in your upper chest.",
        muscles: "Upper Chest, Front Shoulders, Triceps" },
      { name: "Dumbbell Fly", sets: 3, reps: "10", type: "isolation", videoId: "Nhvz9EzdJ4U",
        howTo: "Lie flat on bench. Arms extended above chest with a slight bend in elbows (like hugging a tree). Open arms wide, lowering dumbbells to the sides until you feel a chest stretch. Squeeze chest to bring dumbbells back together.",
        tips: "Go LIGHT \u2014 this is a stretch movement, not a power move. Keep slight bend in elbows throughout. Don't go too deep if shoulders hurt.",
        muscles: "Chest (stretch focus)" },
      { name: "Dumbbell Curl", sets: 3, reps: "10", type: "isolation", videoId: "XE_pHwbst04",
        howTo: "Stand or sit on bench. Hold dumbbells at sides, palms facing forward. Curl both dumbbells up toward shoulders. Lower slowly (3 seconds down). Keep elbows pinned to your sides.",
        tips: "Don't swing your body. If you have to swing, the weight is too heavy. Squeeze biceps hard at the top.",
        muscles: "Biceps" },
      { name: "Overhead Tricep Extension", sets: 3, reps: "10", type: "isolation", videoId: "9wxRhONFsRA",
        howTo: "Sit on bench upright. Hold ONE dumbbell with both hands behind your head, elbows pointing up. Extend arms straight up. Lower slowly behind head until you feel a stretch in the back of your arms.",
        tips: "Keep elbows close to your head \u2014 don't let them flare. Use one dumbbell held with both hands. Go lighter than you think.",
        muscles: "Triceps" },
      { name: "Goblet Squat", sets: 3, reps: "10", type: "compound", videoId: "zBV3ceGyAxw",
        howTo: "Hold ONE dumbbell vertically at your chest with both hands (like holding a goblet). Feet shoulder-width apart. Squat down until thighs are at least parallel to the floor. Push through heels to stand back up.",
        tips: "Keep your chest up and elbows between your knees. If you can't go parallel, go as low as comfortable and build depth over time. This is the king of dumbbell leg exercises.",
        muscles: "Quads, Glutes, Core" },
      { name: "Dumbbell Sumo Squat", sets: 3, reps: "10", type: "compound", videoId: "9ZuXKqRbT9k",
        howTo: "Stand with feet wide apart (about 1.5x shoulder width), toes pointed out at 45°. Hold ONE dumbbell vertically with both hands, letting it hang between your legs. Squat down by bending knees and hips until thighs are parallel to the floor. Push through your heels to stand back up.",
        tips: "Keep your chest up and back straight — don't lean forward. Make sure your knees track over your toes (push them out). Squeeze your glutes at the top. This is easier to balance than a regular squat since the weight is low.",
        muscles: "Inner Thighs, Glutes, Quads" },
      { name: "Dumbbell Woodchop", sets: 3, reps: "10 each", type: "core", videoId: "GxJjpyg5VUE",
        howTo: "Stand with feet shoulder-width apart, hold ONE dumbbell with both hands. Start with the dumbbell at one hip. Rotate your torso and lift the dumbbell diagonally across your body up over the opposite shoulder, pivoting your feet as you twist. Reverse the motion back down. Do all reps on one side, then switch.",
        tips: "The power comes from your CORE, not your arms — think of your arms as ropes just holding the weight. Control the downward motion, don't just let it drop. Keep a slight bend in your knees throughout. Start light until you get the twisting motion down.",
        muscles: "Obliques, Core, Shoulders" },
    ],
  },
  B: {
    name: "Back, Shoulders + Legs/Core",
    color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE",
    exercises: [
      { name: "One-Arm Dumbbell Row", sets: 3, reps: "10 each", type: "compound", videoId: "ze6J_KJtJJ8",
        howTo: "Place one hand and same-side knee on the bench. Other foot on the floor. Hold dumbbell in free hand, arm hanging straight down. Pull dumbbell up to your hip, squeezing your shoulder blade back. Lower slowly. Do all reps on one side, then switch.",
        tips: "Think about pulling with your elbow, not your hand. Your back should do the work, not your bicep. Keep your back flat like a table.",
        muscles: "Upper Back, Lats, Biceps" },
      { name: "Seated Dumbbell Press", sets: 3, reps: "10", type: "compound", videoId: "TsduLWuhlFM",
        howTo: "Sit on bench set to upright (90\u00b0) for back support. Hold dumbbells at shoulder height, palms facing forward. Press straight up overhead until arms are extended. Lower slowly to ear level.",
        tips: "Don't lean back too much. Keep core tight. If your lower back hurts, use a lighter weight. These are harder than they look!",
        muscles: "Shoulders, Triceps" },
      { name: "Incline Dumbbell Row", sets: 3, reps: "10", type: "compound", videoId: "Nx0TzjgsI-0",
        howTo: "Set bench to 30\u00b0. Lie FACE DOWN on the bench, chest on the pad. Let dumbbells hang straight down. Row both dumbbells up, squeezing shoulder blades together at the top. Lower slowly.",
        tips: "This is amazing for posture. Really focus on pinching shoulder blades together. Go moderate weight \u2014 form matters more here.",
        muscles: "Upper Back, Rear Shoulders, Posture" },
      { name: "Lateral Raise", sets: 3, reps: "12", type: "isolation", videoId: "PzsMitRdI_8",
        howTo: "Stand or sit. Hold light dumbbells at your sides, palms facing in. Raise arms out to the sides until shoulder height (like a T shape). Lower slowly. Slight bend in elbows is fine.",
        tips: "Go VERY LIGHT \u2014 these are humbling. Even 3-5kg is enough to start. Don't shrug your shoulders up. Lead with your elbows, not your hands.",
        muscles: "Side Shoulders" },
      { name: "Dumbbell Upright Row", sets: 3, reps: "12", type: "isolation", videoId: "amCU-ziHITM",
        howTo: "Stand holding dumbbells in front of your thighs, palms facing your body. Pull both dumbbells straight up along your torso, leading with your elbows. Raise until elbows are at shoulder height. Lower slowly back down.",
        tips: "Lead with your ELBOWS, not your hands — imagine pulling your elbows to the ceiling. Don't go higher than shoulder level to protect your shoulders. Keep the dumbbells close to your body the whole way up. Start light.",
        muscles: "Upper Traps, Shoulders" },
      { name: "Bulgarian Split Squat", sets: 3, reps: "8 each", type: "compound", videoId: "2C-uNgKwPLE",
        howTo: "Stand about 2 feet in front of a bench. Place the top of one foot on the bench behind you. Hold dumbbells at your sides. Lower your body by bending your front knee until your thigh is parallel to the floor. Push through your front heel to stand back up. Do all reps on one leg, then switch.",
        tips: "Keep your torso upright — don't lean forward. Your front knee should stay over your ankle, not past your toes. Start with bodyweight only until you feel balanced. The bench foot is just for balance, not pushing.",
        muscles: "Quads, Glutes, Balance" },
      { name: "Seated Calf Raise", sets: 3, reps: "15", type: "isolation", videoId: "JbyjNymZOt0",
        howTo: "Sit on the edge of a bench with feet flat on the floor. Place a dumbbell on each knee (rest them on your lower thigh). Push up onto your toes, raising your heels as high as possible. Hold for 1 second at the top. Lower slowly back down.",
        tips: "Seated calf raises target the soleus (deeper calf muscle) which standing raises miss. Go slow — 2 seconds up, 1 second hold, 3 seconds down. Use a folded towel on your knees if the dumbbells feel uncomfortable.",
        muscles: "Calves (Soleus)" },
      { name: "Dumbbell Plank Pull-Through", sets: 3, reps: "8 each", type: "core", videoId: "AHvSGFBKMBo",
        howTo: "Get into a high plank (push-up position) with a dumbbell on the floor just outside one hand. Reach under your body with the opposite hand, grab the dumbbell, and drag it to the other side. Place that hand back down, then reach with the other hand to drag it back. That's one rep each side.",
        tips: "Keep your hips as STILL as possible — the goal is anti-rotation. Widen your feet for more stability. Start with a light dumbbell. If your hips are swaying side to side, go lighter or widen your stance.",
        muscles: "Core, Anti-Rotation, Shoulders" },
    ],
  },
};

const PHASES = [
  { weeks:[1,2], name:"Phase 1: Learn", desc:"Light weight, master form", tip:"Focus on feeling each muscle, not lifting heavy.", color:"#FEF3C7", text:"#92400E" },
  { weeks:[3,4], name:"Phase 2: Build", desc:"Start increasing compound lifts", tip:"Hit all reps \u2192 go up 2.5lbs on compounds.", color:"#FED7AA", text:"#9A3412" },
  { weeks:[5,6], name:"Phase 3: Push", desc:"Add 4th set on first exercise. Full planks.", tip:"Reduce rest to 60s. Keep walking daily.", color:"#FECACA", text:"#991B1B" },
  { weeks:[7,8], name:"Phase 4: Grow", desc:"Increase all weights. Rest 45-60s.", tip:"You should be noticeably stronger than week 1.", color:"#E9D5FF", text:"#6B21A8" },
  { weeks:[9,10], name:"Phase 5: Intensify", desc:"Try bonus exercises. Push limits.", tip:"Swap in Bulgarian Split Squats or Pullovers.", color:"#BFDBFE", text:"#1E40AF" },
  { weeks:[11,12], name:"Phase 6: Peak", desc:"Max effort. Test your progress.", tip:"Log your best lifts \u2014 new benchmarks!", color:"#BBF7D0", text:"#166534" },
];

const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MONTHS = ["Jan","Feb","Mar","Apr","May"];

const buildCalendar = () => {
  const weeks = [];
  let d = new Date(2026, 1, 16);
  const end = new Date(2026, 4, 10);
  let wk = 1;
  while (d <= end && wk <= 12) {
    const days = [];
    const weekPattern = wk % 2 === 1 ? ["A","B","A"] : ["B","A","B"];
    let pi = 0;
    for (let i = 0; i < 7 && d <= end; i++) {
      const dow = d.getDay();
      let type = "rest";
      let workoutType = null;
      if (dow === 1 || dow === 3 || dow === 5) { type = "strength"; workoutType = weekPattern[pi]; pi++; }
      days.push({
        date: new Date(d), dayName: DAYS[dow], type, workoutType,
        done: false, notes: "",
        exercises: workoutType ? WORKOUTS[workoutType].exercises.map(ex => ({
          name: ex.name, logged: Array.from({length: ex.sets}, () => ({weight:"", reps:""})), done: false,
        })) : null,
      });
      d.setDate(d.getDate() + 1);
    }
    weeks.push({ week: wk, days }); wk++;
  }
  return weeks;
};

const STORAGE_KEY = "harold_workout_data_v2";
const STORAGE_KEY_BW = "harold_workout_bodyweights";

const saveData = (data) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
};
const saveBW = (bw) => {
  try { localStorage.setItem(STORAGE_KEY_BW, JSON.stringify(bw)); } catch {}
};
const loadData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Rehydrate date strings back into Date objects
    parsed.forEach(w => w.days.forEach(d => { d.date = new Date(d.date); }));
    return parsed;
  } catch { return null; }
};
const loadBW = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_BW);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
};

const lbsToKg = lbs => lbs ? (Number(lbs) * 0.453592).toFixed(1) : "";

const fmtDate = d => `${MONTHS[d.getMonth()]} ${d.getDate()}`;

export default function Tracker() {
  const [data, setData] = useState(() => loadData() || buildCalendar());
  const [selWeek, setSelWeek] = useState(1);
  const [selDay, setSelDay] = useState(null);
  const [expandedEx, setExpandedEx] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [bodyWeights, setBodyWeights] = useState(() => loadBW() || Array(12).fill(""));

  // Auto-save to localStorage whenever data or bodyWeights change
  useEffect(() => { saveData(data); }, [data]);
  useEffect(() => { saveBW(bodyWeights); }, [bodyWeights]);

  const week = data[selWeek - 1];
  const phase = PHASES.find(p => p.weeks.includes(selWeek));

  const cloneData = (prev) => {
    const n = JSON.parse(JSON.stringify(prev));
    n.forEach(w => w.days.forEach(d => { d.date = new Date(d.date); }));
    return n;
  };

  const toggleDayDone = (dayIdx) => {
    setData(prev => { const n = cloneData(prev); n[selWeek-1].days[dayIdx].done = !n[selWeek-1].days[dayIdx].done; return n; });
  };
  const toggleExDone = (dayIdx, exIdx) => {
    setData(prev => { const n = cloneData(prev); n[selWeek-1].days[dayIdx].exercises[exIdx].done = !n[selWeek-1].days[dayIdx].exercises[exIdx].done; return n; });
  };
  const updateLog = (dayIdx, exIdx, setIdx, field, val) => {
    setData(prev => { const n = cloneData(prev); n[selWeek-1].days[dayIdx].exercises[exIdx].logged[setIdx][field] = val; return n; });
  };
  const updateNotes = (dayIdx, val) => {
    setData(prev => { const n = cloneData(prev); n[selWeek-1].days[dayIdx].notes = val; return n; });
  };
  const markAllDone = (dayIdx) => {
    setData(prev => {
      const n = cloneData(prev);
      const d = n[selWeek-1].days[dayIdx];
      if (d.exercises) d.exercises.forEach(ex => ex.done = true);
      d.done = true;
      return n;
    });
  };

  const getWeekProgress = wi => {
    const w = data[wi]; const wd = w.days.filter(d => d.type !== "rest");
    return wd.length > 0 ? Math.round(wd.filter(d => d.done).length / wd.length * 100) : 0;
  };
  const totalDone = data.reduce((a,w) => a + w.days.filter(d => d.done).length, 0);
  const totalWork = data.reduce((a,w) => a + w.days.filter(d => d.type !== "rest").length, 0);

  const exportCSV = () => {
    let csv = "Week,Date,Day,Type,Workout,Exercise,Set,Weight(lbs),Weight(kg),Reps,Done,Notes\n";
    data.forEach(w => w.days.forEach(d => {
      const dt = `${d.date.getFullYear()}-${String(d.date.getMonth()+1).padStart(2,'0')}-${String(d.date.getDate()).padStart(2,'0')}`;
      if (d.exercises) d.exercises.forEach(ex => ex.logged.forEach((l,li) => {
        csv += `${w.week},${dt},${d.dayName},Strength,${d.workoutType}: ${WORKOUTS[d.workoutType].name},${ex.name},${li+1},${l.weight},${lbsToKg(l.weight)},${l.reps},${d.done?"Y":"N"},"${d.notes}"\n`;
      }));
      else csv += `${w.week},${dt},${d.dayName},${d.type},,,,,,${d.done?"Y":"N"},"${d.notes}"\n`;
    }));
    csv += "\nBody Weight\nWeek,lbs,kg\n"; bodyWeights.forEach((bw,i) => csv += `${i+1},${bw},${lbsToKg(bw)}\n`);
    const b = new Blob([csv],{type:"text/csv"}); const u = URL.createObjectURL(b);
    const a = document.createElement("a"); a.href=u; a.download="workout_tracker_feb_may_2026.csv"; a.click(); URL.revokeObjectURL(u);
  };

  // --- DAY DETAIL VIEW ---
  if (selDay !== null) {
    const d = week.days[selDay];
    const wInfo = d.workoutType ? WORKOUTS[d.workoutType] : null;
    const allExDone = d.exercises ? d.exercises.every(e => e.done) : true;

    const hasVideo = d.type === "strength" && wInfo;

    return (
      <div style={{fontFamily:"system-ui,sans-serif", maxWidth: hasVideo && activeVideo ? "100%" : 700, margin:"0 auto", padding:16}}>
        <button onClick={() => { setSelDay(null); setExpandedEx(null); setActiveVideo(null); }} style={{padding:"6px 16px", background:"#4F46E5", color:"white", border:"none", borderRadius:8, cursor:"pointer", fontWeight:600, fontSize:13, marginBottom:12}}>
          \u2190 Back to Week {selWeek}
        </button>

        {/* Day Header */}
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8}}>
          <h2 style={{margin:0, fontSize:20}}>{d.dayName}, {fmtDate(d.date)} \u2014 Week {selWeek}</h2>
          <div style={{display:"flex", gap:6}}>
            {d.exercises && !allExDone && (
              <button onClick={() => markAllDone(selDay)} style={{padding:"8px 16px", border:"2px solid #16A34A", borderRadius:8, cursor:"pointer", fontWeight:700, background:"white", color:"#16A34A", fontSize:13}}>
                Mark All Done \u2713
              </button>
            )}
            <button onClick={() => toggleDayDone(selDay)} style={{
              padding:"8px 16px", border:"none", borderRadius:8, cursor:"pointer", fontWeight:700,
              background: d.done ? "#16A34A" : "#E5E7EB", color: d.done ? "white" : "#374151", fontSize:13
            }}>{d.done ? "Day Complete \u2713" : "Complete Day"}</button>
          </div>
        </div>

        {/* Phase reminder */}
        <div style={{padding:"6px 12px", borderRadius:6, marginBottom:12, background:phase.color, fontSize:12, color:phase.text}}>
          <strong>{phase.name}</strong> \u2014 {phase.tip}
        </div>

        {/* --- STRENGTH DAY (two-column with video) --- */}
        {d.type === "strength" && wInfo && (
          <div style={{display:"flex", gap:16, alignItems:"flex-start"}}>
            {/* Left column: exercises */}
            <div style={{flex:1, minWidth:0}}>
              <div style={{padding:"10px 14px", borderRadius:8, marginBottom:14, background:wInfo.bg, border:`1px solid ${wInfo.border}`}}>
                <span style={{fontWeight:700, color:wInfo.color, fontSize:17}}>Workout {d.workoutType}: {wInfo.name}</span>
                <div style={{fontSize:12, color:"#6B7280", marginTop:2}}>
                  {d.exercises.filter(e => e.done).length} / {d.exercises.length} exercises done
                </div>
                <div style={{fontSize:11, color:"#9CA3AF", marginTop:2}}>Do upper body first, then legs/core</div>
              </div>

              <div style={{display:"grid", gap:12}}>
                {d.exercises.map((ex, ei) => {
                  const exInfo = wInfo.exercises[ei];
                  const isOpen = expandedEx === ei;
                  const isPlaying = activeVideo === exInfo.videoId;
                  return (
                    <div key={ei} style={{border: ex.done ? "2px solid #86EFAC" : isPlaying ? "2px solid #4F46E5" : "1px solid #E5E7EB", borderRadius:12, overflow:"hidden", background: ex.done ? "#F0FDF4" : "white"}}>
                      {/* Exercise Header */}
                      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 14px", background: ex.done ? "#DCFCE7" : "#F9FAFB", borderBottom:"1px solid #E5E7EB"}}>
                        <div style={{flex:1}}>
                          <div style={{display:"flex", alignItems:"center", gap:8, flexWrap:"wrap"}}>
                            <span style={{fontWeight:700, fontSize:15}}>{ei+1}. {exInfo.name}</span>
                            <span style={{fontSize:11, padding:"2px 8px", borderRadius:4,
                              background: exInfo.type==="compound"?"#DBEAFE":exInfo.type==="isolation"?"#FEF3C7":"#E0E7FF",
                              color: exInfo.type==="compound"?"#1E40AF":exInfo.type==="isolation"?"#92400E":"#3730A3",
                              fontWeight:600}}>{exInfo.type}</span>
                            <span style={{fontSize:11, color:"#9CA3AF"}}>Target: {exInfo.sets} \u00d7 {exInfo.reps}</span>
                          </div>
                          <div style={{fontSize:11, color:"#6B7280", marginTop:2}}>\ud83c\udfaf {exInfo.muscles}</div>
                        </div>
                        <div style={{display:"flex", gap:6}}>
                          {exInfo.videoId && (
                            <button onClick={() => setActiveVideo(isPlaying ? null : exInfo.videoId)} style={{
                              padding:"4px 10px", border:"1px solid #D1D5DB", borderRadius:6, cursor:"pointer",
                              background: isPlaying ? "#DC2626" : "white", color: isPlaying ? "white" : "#DC2626", fontWeight:600, fontSize:11
                            }}>{isPlaying ? "\u23f9 Stop" : "\u25b6 Video"}</button>
                          )}
                          <button onClick={() => setExpandedEx(isOpen ? null : ei)} style={{
                            padding:"4px 10px", border:"1px solid #D1D5DB", borderRadius:6, cursor:"pointer",
                            background: isOpen ? "#4F46E5" : "white", color: isOpen ? "white" : "#4F46E5", fontWeight:600, fontSize:11
                          }}>{isOpen ? "Hide Guide \u25b2" : "How To \u25bc"}</button>
                          <button onClick={() => toggleExDone(selDay, ei)} style={{
                            padding:"4px 14px", border:"none", borderRadius:6, cursor:"pointer",
                            background: ex.done ? "#16A34A" : "#E5E7EB", color: ex.done ? "white" : "#374151", fontWeight:600, fontSize:12
                          }}>{ex.done ? "Done \u2713" : "Done"}</button>
                        </div>
                      </div>

                      {/* How To Guide (expandable) */}
                      {isOpen && (
                        <div style={{padding:"12px 14px", background:"#FFFBEB", borderBottom:"1px solid #FDE68A"}}>
                          <div style={{marginBottom:8}}>
                            <div style={{fontSize:12, fontWeight:700, color:"#92400E", marginBottom:4}}>\ud83d\udcd6 HOW TO DO IT:</div>
                            <div style={{fontSize:13, color:"#374151", lineHeight:1.5}}>{exInfo.howTo}</div>
                          </div>
                          <div style={{padding:"8px 10px", background:"#FEF3C7", borderRadius:6}}>
                            <div style={{fontSize:12, fontWeight:700, color:"#92400E", marginBottom:2}}>\ud83d\udca1 TIPS:</div>
                            <div style={{fontSize:12, color:"#78350F", lineHeight:1.4}}>{exInfo.tips}</div>
                          </div>
                        </div>
                      )}

                      {/* Logging */}
                      <div style={{padding:"10px 14px"}}>
                        <div style={{display:"grid", gap:5}}>
                          {ex.logged.map((log, li) => (
                            <div key={li} style={{display:"flex", alignItems:"center", gap:8}}>
                              <span style={{fontSize:12, fontWeight:600, color:"#9CA3AF", width:42}}>Set {li+1}</span>
                              <input type="number" placeholder="lbs" value={log.weight} onChange={e => updateLog(selDay, ei, li, "weight", e.target.value)}
                                style={{width:66, padding:"7px 8px", border:"1px solid #D1D5DB", borderRadius:6, fontSize:13, textAlign:"center"}} />
                              {log.weight && <span style={{fontSize:11, color:"#6B7280", minWidth:40}}>{lbsToKg(log.weight)}kg</span>}
                              <span style={{fontSize:12, color:"#9CA3AF"}}>\u00d7</span>
                              <input type="text" placeholder="reps" value={log.reps} onChange={e => updateLog(selDay, ei, li, "reps", e.target.value)}
                                style={{width:58, padding:"7px 8px", border:"1px solid #D1D5DB", borderRadius:6, fontSize:13, textAlign:"center"}} />
                              {log.weight && log.reps && <span style={{fontSize:11, color:"#16A34A"}}>\u2713</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right column: sticky video player (50% width) */}
            {activeVideo && (
              <div style={{flex:1, minWidth:0, position:"sticky", top:16, alignSelf:"flex-start"}}>
                <div style={{borderRadius:12, overflow:"hidden", border:"1px solid #E5E7EB", background:"#000"}}>
                  <iframe
                    key={activeVideo}
                    width="100%"
                    style={{display:"block", aspectRatio:"16/9"}}
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&loop=1&playlist=${activeVideo}&mute=1&rel=0&modestbranding=1`}
                    title="Exercise demo"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                  <div style={{padding:"10px 12px", background:"#1F2937"}}>
                    <div style={{fontSize:12, color:"#9CA3AF", marginBottom:4}}>Now playing</div>
                    <div style={{fontSize:14, fontWeight:700, color:"white"}}>
                      {wInfo.exercises.find(e => e.videoId === activeVideo)?.name}
                    </div>
                    <button onClick={() => setActiveVideo(null)} style={{
                      marginTop:8, width:"100%", padding:"6px 0", background:"#374151", color:"#D1D5DB",
                      border:"1px solid #4B5563", borderRadius:6, cursor:"pointer", fontSize:12, fontWeight:600
                    }}>Close Video</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- REST DAY --- */}
        {d.type === "rest" && (
          <div style={{padding:24, borderRadius:12, background:"#F3F4F6", border:"1px solid #E5E7EB", textAlign:"center"}}>
            <div style={{fontSize:36, marginBottom:8}}>{d.dayName === "Sun" ? "\ud83d\ude34" : "\ud83d\udeb6"}</div>
            <div style={{fontWeight:700, fontSize:16, color:"#374151", marginBottom:4}}>
              {d.dayName === "Sun" ? "Full Rest Day" : "Rest Day + 2km Walk"}
            </div>
            <div style={{fontSize:13, color:"#6B7280"}}>
              {d.dayName === "Sun"
                ? "Complete rest \u2014 your body rebuilds on rest days! Eat your protein (120-130g), sleep well. Optional light walk if you feel like it."
                : "Light 2km treadmill walk for recovery. Keep it easy \u2014 this helps with recovery and burns extra calories. Eat your protein (120-130g)!"}
            </div>
          </div>
        )}

        {/* Notes */}
        <div style={{marginTop:14}}>
          <div style={{fontSize:13, fontWeight:600, marginBottom:4}}>Notes</div>
          <textarea value={d.notes} onChange={e => updateNotes(selDay, e.target.value)} placeholder="How did it feel? Energy? Pain? Weight changes?"
            style={{width:"100%", padding:10, border:"1px solid #D1D5DB", borderRadius:8, fontSize:13, minHeight:60, resize:"vertical", boxSizing:"border-box"}} />
        </div>

        {/* Progression reminder */}
        {d.type === "strength" && (
          <>
            <div style={{marginTop:10, padding:10, background:"#EEF2FF", borderRadius:8, border:"1px solid #C7D2FE", fontSize:12, color:"#3730A3"}}>
              <strong>\u2b06\ufe0f Weight Progression:</strong> When you can comfortably finish all 3 sets, increase weight by 2.5lbs next session.
            </div>
            <div style={{marginTop:6, padding:10, background:"#FFF7ED", borderRadius:8, border:"1px solid #FED7AA", fontSize:12, color:"#9A3412"}}>
              <strong>\ud83d\udeb6 Treadmill:</strong> 2km walk after your workout for recovery and extra calorie burn.
            </div>
          </>
        )}
      </div>
    );
  }

  // --- CALENDAR VIEW ---
  return (
    <div style={{fontFamily:"system-ui,sans-serif", maxWidth:700, margin:"0 auto", padding:16}}>
      <div style={{marginBottom:6}}>
        <h1 style={{fontSize:20, fontWeight:700, margin:0}}>3-Month Workout Tracker</h1>
        <div style={{fontSize:12, color:"#6B7280"}}>Feb 16 \u2013 May 10, 2026 | Start: 174lbs (79kg) | Protein: 120-130g/day</div>
      </div>

      {/* Progress */}
      <div style={{background:"#F3F4F6", borderRadius:10, padding:12, marginBottom:10}}>
        <div style={{display:"flex", justifyContent:"space-between", fontSize:13, marginBottom:4}}>
          <span style={{fontWeight:600}}>Overall Progress</span>
          <span style={{fontWeight:700, color:"#4F46E5"}}>{totalWork>0?Math.round(totalDone/totalWork*100):0}% ({totalDone}/{totalWork})</span>
        </div>
        <div style={{background:"#D1D5DB", borderRadius:999, height:8}}>
          <div style={{background:"#4F46E5", borderRadius:999, height:8, width:`${totalWork>0?Math.round(totalDone/totalWork*100):0}%`, transition:"width 0.3s"}} />
        </div>
      </div>

      {/* Phase */}
      <div style={{padding:"8px 12px", borderRadius:8, marginBottom:10, background:phase.color, fontSize:12}}>
        <strong style={{color:phase.text}}>{phase.name}</strong><span style={{color:phase.text, opacity:0.8}}> \u2014 {phase.desc}</span>
        <div style={{fontSize:11, color:phase.text, opacity:0.7, marginTop:1}}>\ud83d\udca1 {phase.tip}</div>
      </div>

      {/* Schedule info */}
      <div style={{padding:"8px 12px", borderRadius:8, marginBottom:10, background:"#FFF7ED", border:"1px solid #FED7AA", fontSize:12}}>
        <strong style={{color:"#EA580C"}}>\ud83d\udeb6 Daily treadmill:</strong> 2km walk every day (rest days included). Sunday: optional.
      </div>

      {/* Week selector */}
      <div style={{display:"flex", flexWrap:"wrap", gap:4, marginBottom:10}}>
        {data.map((w, i) => {
          const pct = getWeekProgress(i); const sel = selWeek===i+1;
          return (
            <button key={i} onClick={() => setSelWeek(i+1)} style={{
              width:50, height:40, border: sel?"2px solid #4F46E5":"1px solid #D1D5DB",
              borderRadius:6, cursor:"pointer", fontWeight: sel?700:500,
              background: pct===100?"#DCFCE7":sel?"#EEF2FF":"white", fontSize:12,
              display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:1,
              color: pct===100?"#16A34A":"#374151"
            }}>
              <span>Wk {i+1}</span>
              {pct > 0 && <div style={{width:24, height:2, background:"#E5E7EB", borderRadius:2}}>
                <div style={{width:`${pct}%`, height:2, background:pct===100?"#16A34A":"#4F46E5", borderRadius:2}} />
              </div>}
            </button>
          );
        })}
      </div>

      {/* Body weight */}
      <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:12, padding:"8px 12px", background:"#F9FAFB", borderRadius:8, border:"1px solid #E5E7EB"}}>
        <span style={{fontSize:13, fontWeight:600}}>Wk {selWeek} Weight:</span>
        <input type="number" placeholder="lbs" value={bodyWeights[selWeek-1]}
          onChange={e => { const n=[...bodyWeights]; n[selWeek-1]=e.target.value; setBodyWeights(n); }}
          style={{width:70, padding:"5px 8px", border:"1px solid #D1D5DB", borderRadius:6, fontSize:13, textAlign:"center"}} />
        <span style={{fontSize:12, color:"#6B7280"}}>lbs</span>
        {bodyWeights[selWeek-1] && <span style={{fontSize:12, fontWeight:600, color:"#6B7280"}}>
          ({lbsToKg(bodyWeights[selWeek-1])}kg)
        </span>}
        {bodyWeights[selWeek-1] && <span style={{fontSize:12, fontWeight:600, color:Number(lbsToKg(bodyWeights[selWeek-1]))<79?"#16A34A":"#6B7280"}}>
          {(Number(lbsToKg(bodyWeights[selWeek-1]))-79)>=0?"+":""}{(Number(lbsToKg(bodyWeights[selWeek-1]))-79).toFixed(1)}kg from start
        </span>}
      </div>

      {/* Day cards */}
      <div style={{display:"grid", gap:6}}>
        {week.days.map((d, di) => {
          const wI = d.workoutType ? WORKOUTS[d.workoutType] : null;
          const isStrength = d.type === "strength";
          return (
            <div key={di} onClick={() => { if(isStrength){ setSelDay(di); setExpandedEx(null); }}}
              style={{
                display:"flex", alignItems:"center", gap:12, padding:"12px 14px",
                borderRadius:10, cursor: isStrength?"pointer":"default",
                border: d.done?"1px solid #86EFAC":"1px solid #E5E7EB",
                background: d.done?"#F0FDF4":!isStrength?"#FAFAFA":"white",
                opacity: !isStrength?0.6:1
              }}>
              <div style={{textAlign:"center", minWidth:48}}>
                <div style={{fontSize:11, color:"#9CA3AF", fontWeight:600}}>{d.dayName}</div>
                <div style={{fontSize:14, fontWeight:700, color:"#374151"}}>{fmtDate(d.date)}</div>
              </div>
              <div style={{flex:1}}>
                {isStrength && wI && (
                  <div style={{display:"flex", alignItems:"center", gap:6, flexWrap:"wrap"}}>
                    <span style={{padding:"3px 10px", borderRadius:6, fontSize:12, fontWeight:700, background:wI.bg, color:wI.color, border:`1px solid ${wI.border}`}}>
                      {d.workoutType}: {wI.name}
                    </span>
                    <span style={{fontSize:11, color:"#6B7280"}}>{d.exercises.filter(e=>e.done).length}/{d.exercises.length}</span>
                    <span style={{fontSize:11, color:"#9CA3AF"}}>tap to open \u2192</span>
                  </div>
                )}
                {!isStrength && (
                  <span style={{fontSize:13, color:"#9CA3AF"}}>
                    {d.dayName === "Sun" ? "\ud83d\ude34 Full Rest" : "\ud83d\udeb6 Rest + 2km Walk"}
                  </span>
                )}
              </div>
              {isStrength && (
                <button onClick={e => { e.stopPropagation(); toggleDayDone(di); }} style={{
                  padding:"6px 14px", border:"none", borderRadius:6, cursor:"pointer",
                  background: d.done?"#16A34A":"#F3F4F6", color: d.done?"white":"#6B7280", fontWeight:600, fontSize:12
                }}>{d.done ? "\u2713" : "Done"}</button>
              )}
            </div>
          );
        })}
      </div>

      <button onClick={exportCSV} style={{marginTop:14, width:"100%", padding:12, background:"#059669", color:"white", border:"none", borderRadius:8, cursor:"pointer", fontWeight:600, fontSize:14}}>
        \ud83d\udce5 Export All Data as CSV
      </button>
    </div>
  );
}
