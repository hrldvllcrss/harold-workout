import { useState, useEffect } from "react";

const WORKOUTS = {
  A: {
    name: "Chest & Arms",
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
      { name: "Plank", sets: 3, reps: "30s", type: "core", videoId: "iDSHokfXqyA",
        howTo: "Weeks 1-4: KNEE PLANK \u2014 Forearms on ground, knees on ground, body straight from head to knees. Hold position. Weeks 5+: FULL PLANK \u2014 Same but on toes. Keep core tight, don't let hips sag or pike up.",
        tips: "Breathe normally \u2014 don't hold your breath. Squeeze your glutes. If your back hurts, go back to knee version. Build up time gradually (30s \u2192 45s \u2192 60s).",
        muscles: "Core, Shoulders, Lower Back" },
    ],
  },
  B: {
    name: "Back & Shoulders",
    color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE",
    exercises: [
      { name: "One-Arm Dumbbell Row", sets: 3, reps: "10 each", type: "compound",
        howTo: "Place one hand and same-side knee on the bench. Other foot on the floor. Hold dumbbell in free hand, arm hanging straight down. Pull dumbbell up to your hip, squeezing your shoulder blade back. Lower slowly. Do all reps on one side, then switch.",
        tips: "Think about pulling with your elbow, not your hand. Your back should do the work, not your bicep. Keep your back flat like a table.",
        muscles: "Upper Back, Lats, Biceps" },
      { name: "Seated Dumbbell Press", sets: 3, reps: "10", type: "compound",
        howTo: "Sit on bench set to upright (90\u00b0) for back support. Hold dumbbells at shoulder height, palms facing forward. Press straight up overhead until arms are extended. Lower slowly to ear level.",
        tips: "Don't lean back too much. Keep core tight. If your lower back hurts, use a lighter weight. These are harder than they look!",
        muscles: "Shoulders, Triceps" },
      { name: "Incline Dumbbell Row", sets: 3, reps: "10", type: "compound",
        howTo: "Set bench to 30\u00b0. Lie FACE DOWN on the bench, chest on the pad. Let dumbbells hang straight down. Row both dumbbells up, squeezing shoulder blades together at the top. Lower slowly.",
        tips: "This is amazing for posture. Really focus on pinching shoulder blades together. Go moderate weight \u2014 form matters more here.",
        muscles: "Upper Back, Rear Shoulders, Posture" },
      { name: "Lateral Raise", sets: 3, reps: "12", type: "isolation",
        howTo: "Stand or sit. Hold light dumbbells at your sides, palms facing in. Raise arms out to the sides until shoulder height (like a T shape). Lower slowly. Slight bend in elbows is fine.",
        tips: "Go VERY LIGHT \u2014 these are humbling. Even 3-5kg is enough to start. Don't shrug your shoulders up. Lead with your elbows, not your hands.",
        muscles: "Side Shoulders" },
      { name: "Dumbbell Shrug", sets: 3, reps: "12", type: "isolation",
        howTo: "Stand holding heavier dumbbells at your sides. Shrug shoulders straight UP toward your ears. Hold for 1 second at the top. Lower slowly. Don't roll your shoulders.",
        tips: "Go heavy on these \u2014 your traps are strong. Straight up and down only, no rolling in circles. Hold at the top for the squeeze.",
        muscles: "Upper Traps, Neck" },
      { name: "Dead Bug", sets: 3, reps: "8 each", type: "core",
        howTo: "Lie on your back. Arms pointing straight up toward ceiling. Knees bent at 90\u00b0 (shins parallel to floor). Slowly extend your RIGHT arm behind your head while extending your LEFT leg straight out. Return to start. Repeat with opposite arm/leg.",
        tips: "The KEY is keeping your lower back pressed into the floor the entire time. If your back arches, you've gone too far. Go slow \u2014 this is harder than it looks.",
        muscles: "Deep Core, Stability" },
    ],
  },
  C: {
    name: "Legs & Core",
    color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0",
    exercises: [
      { name: "Goblet Squat", sets: 3, reps: "10", type: "compound",
        howTo: "Hold ONE dumbbell vertically at your chest with both hands (like holding a goblet). Feet shoulder-width apart. Squat down until thighs are at least parallel to the floor. Push through heels to stand back up.",
        tips: "Keep your chest up and elbows between your knees. If you can't go parallel, go as low as comfortable and build depth over time. This is the king of dumbbell leg exercises.",
        muscles: "Quads, Glutes, Core" },
      { name: "Romanian Deadlift", sets: 3, reps: "10", type: "compound",
        howTo: "Stand holding both dumbbells in front of your thighs. Slight bend in knees (and keep it). Push your hips BACK and hinge forward, lowering dumbbells along your legs. Go until you feel a strong hamstring stretch (roughly mid-shin). Stand back up by squeezing glutes.",
        tips: "This is a HIP HINGE not a squat \u2014 push hips back like closing a car door with your butt. Keep dumbbells close to your legs. Don't round your back. You should feel this in your hamstrings and glutes, not your lower back.",
        muscles: "Hamstrings, Glutes, Lower Back" },
      { name: "Bench Step-Up", sets: 3, reps: "8 each", type: "compound",
        howTo: "Hold dumbbells at your sides (or bodyweight first). Place one foot fully on the bench. Drive through that foot to step up to standing on the bench. Step back down with control. Do all reps one leg, then switch.",
        tips: "Don't push off your back foot \u2014 make the top leg do all the work. Start with bodyweight if balance is tricky. Make sure the bench is stable!",
        muscles: "Quads, Glutes, Balance" },
      { name: "Dumbbell Lunge", sets: 2, reps: "8 each", type: "compound",
        howTo: "Hold dumbbells at sides (or bodyweight first). Step one foot BACK, lower your back knee toward the ground until both knees are roughly 90\u00b0. Push through front foot to return to standing. Alternate legs.",
        tips: "Step back, not forward \u2014 reverse lunges are easier on your knees. Keep your torso upright. Hold a wall for balance if needed in the beginning.",
        muscles: "Quads, Glutes, Balance" },
      { name: "Calf Raise", sets: 3, reps: "15", type: "isolation",
        howTo: "Stand holding dumbbells at sides. Rise up onto your toes as high as you can. Hold for 1 second at the top. Lower slowly (2-3 seconds down). For a deeper stretch, stand on the edge of a step with heels hanging off.",
        tips: "Go slow \u2014 calves respond to time under tension. Don't bounce. Full range of motion: all the way up, all the way down.",
        muscles: "Calves" },
      { name: "Bench Leg Raise", sets: 3, reps: "10", type: "core",
        howTo: "Sit on the edge of the bench. Lean back slightly and grip the bench behind you. Extend your legs out straight in front of you. Bring knees toward your chest, then extend back out. Don't let feet touch the floor between reps.",
        tips: "Keep the movement controlled \u2014 no swinging. If too hard, bend your knees more. This targets lower abs which helps with the belly area.",
        muscles: "Lower Abs, Hip Flexors" },
    ],
  },
};

const PHASES = [
  { weeks:[1,2], name:"Phase 1: Learn", desc:"Light weight, master form", tip:"Focus on feeling each muscle, not lifting heavy.", color:"#FEF3C7", text:"#92400E" },
  { weeks:[3,4], name:"Phase 2: Build", desc:"Start increasing compound lifts", tip:"Hit all reps \u2192 go up 2.5kg on compounds.", color:"#FED7AA", text:"#9A3412" },
  { weeks:[5,6], name:"Phase 3: Push", desc:"Add 4th set on first exercise. Full planks.", tip:"Reduce rest to 60s. Push cardio intensity.", color:"#FECACA", text:"#991B1B" },
  { weeks:[7,8], name:"Phase 4: Grow", desc:"Increase all weights. Rest 45-60s.", tip:"You should be noticeably stronger than week 1.", color:"#E9D5FF", text:"#6B21A8" },
  { weeks:[9,10], name:"Phase 5: Intensify", desc:"Try bonus exercises. Push limits.", tip:"Swap in Bulgarian Split Squats or Pullovers.", color:"#BFDBFE", text:"#1E40AF" },
  { weeks:[11,12], name:"Phase 6: Peak", desc:"Max effort. Test your progress.", tip:"Log your best lifts \u2014 new benchmarks!", color:"#BBF7D0", text:"#166534" },
];

const CARDIO = [
  { weeks:[1,2], duration:"20 min", type:"Walking", details:"5.5-6 km/h, 2% incline", howTo:"Simple steady walk. Set treadmill to 5.5-6 km/h and 2% incline. Just walk at a brisk pace for the full 20 minutes.", tips:"This should feel like a fast walk \u2014 you can still hold a conversation. If it feels too easy, bump incline to 3%." },
  { weeks:[3,4], duration:"25 min", type:"Intervals", details:"5 min warmup \u2192 1 min fast (6.5 km/h) / 2 min normal \u00d75 \u2192 cooldown", howTo:"Start with 5 min at normal walking speed (5.5 km/h). Then alternate: 1 minute at 6.5 km/h (fast walk), then 2 minutes at normal speed. Repeat this 5 times. Finish with a 2-3 min cooldown walk.", tips:"The fast intervals should make you breathe harder but not gasp. Adjust speeds to your comfort." },
  { weeks:[5,6], duration:"25 min", type:"Walk + Jog", details:"5 min warmup \u2192 1 min jog (7-8 km/h) / 2 min walk \u00d75 \u2192 cooldown", howTo:"5 min warmup walk. Then alternate: 1 minute JOGGING at 7-8 km/h, then 2 minutes walking to recover. Repeat 5 times. Cool down with slow walk.", tips:"First time jogging! Start at 7 km/h. If that's too fast, drop to 6.5. No shame \u2014 build gradually. Hold the handrails if needed at first." },
  { weeks:[7,8], duration:"30 min", type:"Intervals", details:"5 min warmup \u2192 90s jog / 90s walk \u00d77 \u2192 cooldown", howTo:"5 min warmup walk. Then alternate: 90 seconds jogging (7-8 km/h) and 90 seconds walking. Repeat 7 times. Cool down.", tips:"Jog intervals are now longer and rest is shorter. This is where your endurance really builds. Push through!" },
  { weeks:[9,10], duration:"30 min", type:"Mixed", details:"Jog and walk based on feel", howTo:"Warmup 5 min. Then alternate jogging and walking however you feel. Try to jog more than you walk. Some days will feel great, others not. That's normal.", tips:"Listen to your body. Good day? Push longer jogs. Tired day? More walking intervals. Just keep moving for 30 min." },
  { weeks:[11,12], duration:"35 min", type:"Endurance", details:"Longer jog intervals, push yourself", howTo:"Warmup 5 min. Try to jog for 3-5 minutes at a time with 1-2 minute walk breaks. Goal: jog more than you walk. Push your total time to 35 minutes.", tips:"This is your test! See how long you can jog continuously. Even 5 minutes straight is a huge win from where you started. Be proud of your progress." },
];

const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MONTHS = ["Jan","Feb","Mar","Apr","May"];

const buildCalendar = () => {
  const pattern = ["A","B","C"];
  let pi = 0;
  const weeks = [];
  let d = new Date(2026, 1, 16);
  const end = new Date(2026, 4, 10);
  let wk = 1;
  while (d <= end && wk <= 12) {
    const days = [];
    for (let i = 0; i < 7 && d <= end; i++) {
      const dow = d.getDay();
      let type = "rest";
      let workoutType = null;
      if (dow === 1 || dow === 3 || dow === 5) { type = "strength"; workoutType = pattern[pi % 3]; pi++; }
      else if (dow === 2 || dow === 6) { type = "cardio"; }
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

const STORAGE_KEY = "harold_workout_data";
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
  const cardio = CARDIO.find(c => c.weeks.includes(selWeek));

  const toggleDayDone = (dayIdx) => {
    setData(prev => { const n = JSON.parse(JSON.stringify(prev)); n[selWeek-1].days[dayIdx].done = !n[selWeek-1].days[dayIdx].done; return n; });
  };
  const toggleExDone = (dayIdx, exIdx) => {
    setData(prev => { const n = JSON.parse(JSON.stringify(prev)); n[selWeek-1].days[dayIdx].exercises[exIdx].done = !n[selWeek-1].days[dayIdx].exercises[exIdx].done; return n; });
  };
  const updateLog = (dayIdx, exIdx, setIdx, field, val) => {
    setData(prev => { const n = JSON.parse(JSON.stringify(prev)); n[selWeek-1].days[dayIdx].exercises[exIdx].logged[setIdx][field] = val; return n; });
  };
  const updateNotes = (dayIdx, val) => {
    setData(prev => { const n = JSON.parse(JSON.stringify(prev)); n[selWeek-1].days[dayIdx].notes = val; return n; });
  };
  const markAllDone = (dayIdx) => {
    setData(prev => {
      const n = JSON.parse(JSON.stringify(prev));
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
    let csv = "Week,Date,Day,Type,Workout,Exercise,Set,Weight(kg),Reps,Done,Notes\n";
    data.forEach(w => w.days.forEach(d => {
      const dt = `${d.date.getFullYear()}-${String(d.date.getMonth()+1).padStart(2,'0')}-${String(d.date.getDate()).padStart(2,'0')}`;
      if (d.exercises) d.exercises.forEach(ex => ex.logged.forEach((l,li) => {
        csv += `${w.week},${dt},${d.dayName},Strength,${d.workoutType}: ${WORKOUTS[d.workoutType].name},${ex.name},${li+1},${l.weight},${l.reps},${d.done?"Y":"N"},"${d.notes}"\n`;
      }));
      else csv += `${w.week},${dt},${d.dayName},${d.type},,,,,${d.done?"Y":"N"},"${d.notes}"\n`;
    }));
    csv += "\nBody Weight\nWeek,kg\n"; bodyWeights.forEach((bw,i) => csv += `${i+1},${bw}\n`);
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
          ← Back to Week {selWeek}
        </button>

        {/* Day Header */}
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8}}>
          <h2 style={{margin:0, fontSize:20}}>{d.dayName}, {fmtDate(d.date)} — Week {selWeek}</h2>
          <div style={{display:"flex", gap:6}}>
            {d.exercises && !allExDone && (
              <button onClick={() => markAllDone(selDay)} style={{padding:"8px 16px", border:"2px solid #16A34A", borderRadius:8, cursor:"pointer", fontWeight:700, background:"white", color:"#16A34A", fontSize:13}}>
                Mark All Done ✓
              </button>
            )}
            <button onClick={() => toggleDayDone(selDay)} style={{
              padding:"8px 16px", border:"none", borderRadius:8, cursor:"pointer", fontWeight:700,
              background: d.done ? "#16A34A" : "#E5E7EB", color: d.done ? "white" : "#374151", fontSize:13
            }}>{d.done ? "Day Complete ✓" : "Complete Day"}</button>
          </div>
        </div>

        {/* Phase reminder */}
        <div style={{padding:"6px 12px", borderRadius:6, marginBottom:12, background:phase.color, fontSize:12, color:phase.text}}>
          <strong>{phase.name}</strong> — {phase.tip}
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
                            <span style={{fontWeight:700, fontSize:15}}>{ei+1}. {ex.name}</span>
                            <span style={{fontSize:11, padding:"2px 8px", borderRadius:4,
                              background: exInfo.type==="compound"?"#DBEAFE":exInfo.type==="isolation"?"#FEF3C7":"#E0E7FF",
                              color: exInfo.type==="compound"?"#1E40AF":exInfo.type==="isolation"?"#92400E":"#3730A3",
                              fontWeight:600}}>{exInfo.type}</span>
                            <span style={{fontSize:11, color:"#9CA3AF"}}>Target: {exInfo.sets} × {exInfo.reps}</span>
                          </div>
                          <div style={{fontSize:11, color:"#6B7280", marginTop:2}}>🎯 {exInfo.muscles}</div>
                        </div>
                        <div style={{display:"flex", gap:6}}>
                          {exInfo.videoId && (
                            <button onClick={() => setActiveVideo(isPlaying ? null : exInfo.videoId)} style={{
                              padding:"4px 10px", border:"1px solid #D1D5DB", borderRadius:6, cursor:"pointer",
                              background: isPlaying ? "#DC2626" : "white", color: isPlaying ? "white" : "#DC2626", fontWeight:600, fontSize:11
                            }}>{isPlaying ? "⏹ Stop" : "▶ Video"}</button>
                          )}
                          <button onClick={() => setExpandedEx(isOpen ? null : ei)} style={{
                            padding:"4px 10px", border:"1px solid #D1D5DB", borderRadius:6, cursor:"pointer",
                            background: isOpen ? "#4F46E5" : "white", color: isOpen ? "white" : "#4F46E5", fontWeight:600, fontSize:11
                          }}>{isOpen ? "Hide Guide ▲" : "How To ▼"}</button>
                          <button onClick={() => toggleExDone(selDay, ei)} style={{
                            padding:"4px 14px", border:"none", borderRadius:6, cursor:"pointer",
                            background: ex.done ? "#16A34A" : "#E5E7EB", color: ex.done ? "white" : "#374151", fontWeight:600, fontSize:12
                          }}>{ex.done ? "Done ✓" : "Done"}</button>
                        </div>
                      </div>

                      {/* How To Guide (expandable) */}
                      {isOpen && (
                        <div style={{padding:"12px 14px", background:"#FFFBEB", borderBottom:"1px solid #FDE68A"}}>
                          <div style={{marginBottom:8}}>
                            <div style={{fontSize:12, fontWeight:700, color:"#92400E", marginBottom:4}}>📖 HOW TO DO IT:</div>
                            <div style={{fontSize:13, color:"#374151", lineHeight:1.5}}>{exInfo.howTo}</div>
                          </div>
                          <div style={{padding:"8px 10px", background:"#FEF3C7", borderRadius:6}}>
                            <div style={{fontSize:12, fontWeight:700, color:"#92400E", marginBottom:2}}>💡 TIPS:</div>
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
                              <input type="number" placeholder="kg" value={log.weight} onChange={e => updateLog(selDay, ei, li, "weight", e.target.value)}
                                style={{width:66, padding:"7px 8px", border:"1px solid #D1D5DB", borderRadius:6, fontSize:13, textAlign:"center"}} />
                              <span style={{fontSize:12, color:"#9CA3AF"}}>×</span>
                              <input type="text" placeholder="reps" value={log.reps} onChange={e => updateLog(selDay, ei, li, "reps", e.target.value)}
                                style={{width:58, padding:"7px 8px", border:"1px solid #D1D5DB", borderRadius:6, fontSize:13, textAlign:"center"}} />
                              {log.weight && log.reps && <span style={{fontSize:11, color:"#16A34A"}}>✓</span>}
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

        {/* --- CARDIO DAY --- */}
        {d.type === "cardio" && (
          <div style={{borderRadius:12, overflow:"hidden", border:"1px solid #FED7AA"}}>
            <div style={{padding:"14px 16px", background:"#FFF7ED"}}>
              <div style={{fontWeight:700, fontSize:17, color:"#EA580C", marginBottom:4}}>🏃 Treadmill Cardio</div>
              <div style={{display:"grid", gap:2, fontSize:14, color:"#9A3412"}}>
                <span><strong>Duration:</strong> {cardio.duration}</span>
                <span><strong>Type:</strong> {cardio.type}</span>
              </div>
            </div>
            <div style={{padding:"14px 16px", background:"white"}}>
              <div style={{fontSize:12, fontWeight:700, color:"#EA580C", marginBottom:6}}>📖 HOW TO DO IT:</div>
              <div style={{fontSize:13, color:"#374151", lineHeight:1.6, marginBottom:10}}>{cardio.howTo}</div>
              <div style={{padding:"10px 12px", background:"#FFF7ED", borderRadius:8}}>
                <div style={{fontSize:12, fontWeight:700, color:"#EA580C", marginBottom:2}}>💡 TIPS:</div>
                <div style={{fontSize:12, color:"#9A3412", lineHeight:1.4}}>{cardio.tips}</div>
              </div>
            </div>
          </div>
        )}

        {/* --- REST DAY --- */}
        {d.type === "rest" && (
          <div style={{padding:24, borderRadius:12, background:"#F3F4F6", border:"1px solid #E5E7EB", textAlign:"center"}}>
            <div style={{fontSize:36, marginBottom:8}}>😴</div>
            <div style={{fontWeight:700, fontSize:16, color:"#374151", marginBottom:4}}>Rest Day</div>
            <div style={{fontSize:13, color:"#6B7280"}}>Recover, stretch, eat your protein (120-130g), sleep well. Your muscles grow on rest days!</div>
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
          <div style={{marginTop:10, padding:10, background:"#EEF2FF", borderRadius:8, border:"1px solid #C7D2FE", fontSize:12, color:"#3730A3"}}>
            <strong>⬆️ Weight Progression:</strong> Hit all target reps on every set → increase weight next session. Compounds: +2.5kg per dumbbell. Isolation: +1kg. Can't jump? Do 10→12 reps first, then increase weight and drop back to 8-10 reps.
          </div>
        )}
      </div>
    );
  }

  // --- CALENDAR VIEW ---
  return (
    <div style={{fontFamily:"system-ui,sans-serif", maxWidth:700, margin:"0 auto", padding:16}}>
      <div style={{marginBottom:6}}>
        <h1 style={{fontSize:20, fontWeight:700, margin:0}}>3-Month Workout Tracker</h1>
        <div style={{fontSize:12, color:"#6B7280"}}>Feb 16 – May 10, 2026 | Start: 79kg | Protein: 120-130g/day</div>
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
        <strong style={{color:phase.text}}>{phase.name}</strong><span style={{color:phase.text, opacity:0.8}}> — {phase.desc}</span>
        <div style={{fontSize:11, color:phase.text, opacity:0.7, marginTop:1}}>💡 {phase.tip}</div>
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

      {/* Cardio */}
      <div style={{padding:"8px 12px", borderRadius:8, marginBottom:10, background:"#FFF7ED", border:"1px solid #FED7AA", fontSize:12}}>
        <strong style={{color:"#EA580C"}}>🏃 Cardio this week:</strong> {cardio.duration} — {cardio.type}
      </div>

      {/* Body weight */}
      <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:12, padding:"8px 12px", background:"#F9FAFB", borderRadius:8, border:"1px solid #E5E7EB"}}>
        <span style={{fontSize:13, fontWeight:600}}>Wk {selWeek} Weight:</span>
        <input type="number" placeholder="kg" value={bodyWeights[selWeek-1]}
          onChange={e => { const n=[...bodyWeights]; n[selWeek-1]=e.target.value; setBodyWeights(n); }}
          style={{width:70, padding:"5px 8px", border:"1px solid #D1D5DB", borderRadius:6, fontSize:13, textAlign:"center"}} />
        <span style={{fontSize:12, color:"#6B7280"}}>kg</span>
        {bodyWeights[selWeek-1] && <span style={{fontSize:12, fontWeight:600, color:Number(bodyWeights[selWeek-1])<79?"#16A34A":"#6B7280"}}>
          ({(Number(bodyWeights[selWeek-1])-79)>=0?"+":""}{(Number(bodyWeights[selWeek-1])-79).toFixed(1)}kg)
        </span>}
      </div>

      {/* Day cards */}
      <div style={{display:"grid", gap:6}}>
        {week.days.map((d, di) => {
          const wI = d.workoutType ? WORKOUTS[d.workoutType] : null;
          const isRest = d.type === "rest";
          return (
            <div key={di} onClick={() => { if(!isRest){ setSelDay(di); setExpandedEx(null); }}}
              style={{
                display:"flex", alignItems:"center", gap:12, padding:"12px 14px",
                borderRadius:10, cursor: isRest?"default":"pointer",
                border: d.done?"1px solid #86EFAC":"1px solid #E5E7EB",
                background: d.done?"#F0FDF4":isRest?"#FAFAFA":"white",
                opacity: isRest?0.6:1
              }}>
              <div style={{textAlign:"center", minWidth:48}}>
                <div style={{fontSize:11, color:"#9CA3AF", fontWeight:600}}>{d.dayName}</div>
                <div style={{fontSize:14, fontWeight:700, color:"#374151"}}>{fmtDate(d.date)}</div>
              </div>
              <div style={{flex:1}}>
                {d.type==="strength" && wI && (
                  <div style={{display:"flex", alignItems:"center", gap:6, flexWrap:"wrap"}}>
                    <span style={{padding:"3px 10px", borderRadius:6, fontSize:12, fontWeight:700, background:wI.bg, color:wI.color, border:`1px solid ${wI.border}`}}>
                      {d.workoutType}: {wI.name}
                    </span>
                    <span style={{fontSize:11, color:"#6B7280"}}>{d.exercises.filter(e=>e.done).length}/{d.exercises.length}</span>
                    {!isRest && <span style={{fontSize:11, color:"#9CA3AF"}}>tap to open →</span>}
                  </div>
                )}
                {d.type==="cardio" && <span style={{padding:"3px 10px", borderRadius:6, fontSize:12, fontWeight:700, background:"#FFF7ED", color:"#EA580C", border:"1px solid #FED7AA"}}>🏃 Cardio — {cardio.type} ({cardio.duration})</span>}
                {isRest && <span style={{fontSize:13, color:"#9CA3AF"}}>😴 Rest Day</span>}
              </div>
              {!isRest && (
                <button onClick={e => { e.stopPropagation(); toggleDayDone(di); }} style={{
                  padding:"6px 14px", border:"none", borderRadius:6, cursor:"pointer",
                  background: d.done?"#16A34A":"#F3F4F6", color: d.done?"white":"#6B7280", fontWeight:600, fontSize:12
                }}>{d.done ? "✓" : "Done"}</button>
              )}
            </div>
          );
        })}
      </div>

      <button onClick={exportCSV} style={{marginTop:14, width:"100%", padding:12, background:"#059669", color:"white", border:"none", borderRadius:8, cursor:"pointer", fontWeight:600, fontSize:14}}>
        📥 Export All Data as CSV
      </button>
    </div>
  );
}
