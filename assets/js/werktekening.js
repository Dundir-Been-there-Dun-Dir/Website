document.addEventListener("DOMContentLoaded", () => {
  const plan = document.getElementById("plan");
  const draw = () => {
    plan.classList.remove("run");
    void plan.offsetWidth;
    plan.classList.add("run");
  };
  draw();
  document.getElementById("replay").addEventListener("click", () => {
    plan.scrollIntoView({ behavior: "smooth", block: "center" });
    draw();
  });

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const select = (tab) => {
    for (const t of tabs) {
      const on = t === tab;
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    }
    tab.focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (e) => {
      const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
      if (!step) return;
      e.preventDefault();
      select(tabs[(i + step + tabs.length) % tabs.length]);
    });
  });

  const range = document.getElementById("stretch");
  const out = document.getElementById("stretch-out");
  const val = document.getElementById("stretch-val");
  range.addEventListener("input", () => {
    out.style.setProperty("--w", `${range.value}%`);
    val.textContent = range.value;
  });
});
