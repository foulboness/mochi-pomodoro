const $ = (id) => document.getElementById(id);
const state = {
  mode: "focus",
  running: false,
  completed: 0,
  remaining: 25 * 60,
  duration: 25 * 60,
  interval: null,
  settings: { focus: 25, short: 5, long: 15 },
  theme: "light",
};
const format = (seconds) =>
  `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
function render() {
  $("timer").textContent = format(state.remaining);
  $("modeLabel").textContent =
    state.mode === "focus"
      ? "FOCUS TIME"
      : state.mode === "short"
        ? "LITTLE BREAK"
        : "LONG BREAK";
  $("sessionCount").textContent = `♡ ${state.completed % 4} / 4`;
  $("startText").textContent = state.running
    ? "take a pause"
    : state.remaining === state.duration
      ? "start studying"
      : "keep going";
  $("startIcon").textContent = state.running ? "Ⅱ" : "▶";
  $("progressFill").style.width =
    `${Math.max(0, Math.min(100, ((state.duration - state.remaining) / state.duration) * 100))}%`;
  $("statusText").textContent = state.running
    ? state.mode === "focus"
      ? "you are doing lovely, keep going ♡"
      : "rest your little brain ♡"
    : "one little step at a time ♡";
}
function stopInterval() {
  if (state.interval) clearInterval(state.interval);
  state.interval = null;
}
function setMode(mode) {
  state.mode = mode;
  const minutes =
    mode === "focus"
      ? state.settings.focus
      : mode === "short"
        ? state.settings.short
        : state.settings.long;
  state.duration = minutes * 60;
  state.remaining = state.duration;
  state.running = false;
  stopInterval();
  render();
}
function finishSession() {
  state.running = false;
  stopInterval();
  if (state.mode === "focus") {
    state.completed++;
    const longBreak = state.completed % 4 === 0;
    window.mochi?.notify({
      title: longBreak ? "Focus complete! ♡" : "Lovely work! ♡",
      body: longBreak
        ? "Four sessions done. Time for a 15-minute long break."
        : "Your focus session is finished. Take a little break.",
    });
    setMode(longBreak ? "long" : "short");
  } else {
    window.mochi?.notify({
      title: "Break time is over ✿",
      body: "Ready for another little focus session?",
    });
    setMode("focus");
  }
}
function toggleTimer() {
  if (state.running) {
    state.running = false;
    stopInterval();
    render();
    return;
  }
  state.running = true;
  state.interval = setInterval(() => {
    if (state.remaining > 0) {
      state.remaining--;
      render();
    }
    if (state.remaining <= 0) finishSession();
  }, 1000);
  render();
}
$("startBtn").addEventListener("click", toggleTimer);
$("resetBtn").addEventListener("click", () => {
  state.running = false;
  stopInterval();
  state.remaining = state.duration;
  render();
});
$("skipBtn").addEventListener("click", () => {
  if (state.mode === "focus") {
    state.completed++;
    setMode(state.completed % 4 === 0 ? "long" : "short");
  } else setMode("focus");
});
$("settingsBtn").addEventListener("click", () => {
  $("settingsOverlay").classList.add("open");
  $("settingsOverlay").setAttribute("aria-hidden", "false");
});
function closeSettings() {
  $("settingsOverlay").classList.remove("open");
  $("settingsOverlay").setAttribute("aria-hidden", "true");
}
$("settingsClose").addEventListener("click", closeSettings);
$("settingsOverlay").addEventListener("click", (e) => {
  if (e.target === $("settingsOverlay")) closeSettings();
});
$("focusLength").addEventListener(
  "input",
  (e) => ($("focusValue").textContent = `${e.target.value} minutes`),
);
$("shortLength").addEventListener(
  "input",
  (e) => ($("shortValue").textContent = `${e.target.value} minutes`),
);
$("longLength").addEventListener(
  "input",
  (e) => ($("longValue").textContent = `${e.target.value} minutes`),
);
document.querySelectorAll(".theme-choice").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".theme-choice")
      .forEach((b) => b.classList.toggle("active", b === btn));
    state.theme = btn.dataset.theme;
    document.body.classList.toggle("dark", state.theme === "dark");
  }),
);
$("saveSettings").addEventListener("click", () => {
  state.settings = {
    focus: Number($("focusLength").value),
    short: Number($("shortLength").value),
    long: Number($("longLength").value),
  };
  // Apply the new duration immediately only when the timer has not started or is at its initial value.
  if (!state.running) setMode(state.mode);
  closeSettings();
});
$("minimizeBtn").addEventListener("click", () => window.mochi?.minimize());
$("closeBtn").addEventListener("click", () => window.mochi?.close());
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSettings();
});
render();
