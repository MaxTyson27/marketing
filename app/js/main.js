

setTimeout((function () {
  const e = document.documentElement,
    o = document.getElementById("hero-lightpass"),
    t = o.getContext("2d"),
    i = e => `video/hahaha_${e.toString().padStart(5, "0")}.webp`,
    s = new Image;
  s.src = i(1), o.width = 1920, o.height = 1080, s.onload = function () {
    t.drawImage(s, 0, 0)
  };
  const r = document.querySelector(".sub-header").scrollHeight,
    n = document.querySelector(".home").scrollHeight + r;
  window.addEventListener("scroll", () => {
    if (n < e.scrollTop) {
      const o = document.querySelector(".sub-header"),
        r = document.querySelector(".home"),
        n = document.querySelector(".cloth"),
        c = (e.scrollTop - r.scrollHeight - o.scrollHeight) / (n.scrollHeight - window.innerHeight),
        p = Math.min(129, Math.ceil(130 * c));
      requestAnimationFrame(() => {
        return e = p + 1, s.src = i(e), void t.drawImage(s, 0, 0);
        var e
      })
    }
  }), (() => {
    for (let e = 1; e < 130; e++) {
      (new Image).src = i(e)
    }
  })()
}), 1e3), setTimeout((function () {
  const e = document.documentElement,
    o = document.getElementById("hero-lightpassTwo"),
    t = o.getContext("2d"),
    i = e => `videoTwo/hahaha_${e.toString().padStart(5, "0")}.webp`,
    s = new Image;
  s.src = i(1), o.width = 1080, o.height = 1920, s.onload = function () {
    t.drawImage(s, 0, 0)
  };
  const r = document.querySelector(".sub-header").scrollHeight,
    n = document.querySelector(".home").scrollHeight + r + document.querySelector(".cloth").scrollHeight;
  window.addEventListener("scroll", () => {
    if (n < e.scrollTop) {
      const r = document.querySelector(".cloth"),
        n = document.querySelector(".clothTwo"),
        c = document.querySelector(".sub-header"),
        p = document.querySelector(".home"),
        l = (e.scrollTop - p.scrollHeight - c.scrollHeight - r.scrollHeight) / (n.scrollHeight - window.innerHeight),
        a = Math.min(33, Math.ceil(34 * l));
      Math.ceil(34 * l) > 147 && (o.style.position = "absolute"), Math.ceil(34 * l) < 148 && (o.style.position = "absolute"), requestAnimationFrame(() => {
        return e = a + 1, s.src = i(e), void t.drawImage(s, 0, 0);
        var e
      })
    }
  }), (() => {
    for (let e = 1; e < 34; e++) {
      (new Image).src = i(e)
    }
  })()
}), 3e3), setTimeout((function () {
  const e = document.documentElement,
    o = document.getElementById("hero-lightpassThree"),
    t = o.getContext("2d"),
    i = e => `videoThree/hahaha_${e.toString().padStart(5, "0")}.webp`,
    s = new Image;
  s.src = i(1), o.width = 1080, o.height = 1920, s.onload = function () {
    t.drawImage(s, 0, 0)
  };
  const r = document.querySelector(".sub-header").scrollHeight,
    n = document.querySelector(".home").scrollHeight + r + document.querySelector(".cloth").scrollHeight + document.querySelector(".clothTwo").scrollHeight;
  window.addEventListener("scroll", () => {
    if (n < e.scrollTop) {
      const r = document.querySelector(".cloth"),
        n = document.querySelector(".clothThree"),
        c = document.querySelector(".clothTwo"),
        p = document.querySelector(".sub-header"),
        l = document.querySelector(".home"),
        a = (e.scrollTop - l.scrollHeight - p.scrollHeight - r.scrollHeight - c.scrollHeight) / (n.scrollHeight - window.innerHeight),
        u = Math.min(114, Math.ceil(115 * a));
      Math.ceil(115 * a) > 147 && (o.style.position = "absolute"), Math.ceil(115 * a) < 148 && (o.style.position = "absolute"), requestAnimationFrame(() => {
        return e = u + 1, s.src = i(e), void t.drawImage(s, 0, 0);
        var e
      })
    }
  }), (() => {
    for (let e = 1; e < 115; e++) {
      (new Image).src = i(e)
    }
  })()
}), 4e3);






