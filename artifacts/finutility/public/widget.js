(function () {
  if (window.__freetawnWidgetLoaded) return;
  window.__freetawnWidgetLoaded = true;

  var currentScript = document.currentScript;
  var tenantId = currentScript && currentScript.getAttribute("data-tenant-id");
  var baseUrl = "https://freetawn.com";
  var routes = [
    { label: "Mortgage", href: "/mortgage", keywords: ["mortgage", "home", "house"] },
    { label: "Compound Interest", href: "/compound-interest", keywords: ["compound", "interest", "invest", "investment"] },
    { label: "Loan Payment", href: "/loan-payment", keywords: ["loan", "auto", "car", "payment"] },
    { label: "Crypto Profit", href: "/crypto-profit", keywords: ["crypto", "bitcoin", "btc", "profit"] },
    { label: "Currency", href: "/currency-converter", keywords: ["currency", "exchange", "convert", "fx"] },
    { label: "Savings Goal", href: "/savings-goal", keywords: ["save", "savings", "goal"] }
  ];

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback, { once: true });
      return;
    }

    callback();
  }

  function resolveRoute(query) {
    var normalizedQuery = String(query || "").toLowerCase();
    var match = routes.find(function (route) {
      return route.keywords.some(function (keyword) {
        return normalizedQuery.indexOf(keyword) !== -1;
      });
    });

    return match ? match.href : "/finance";
  }

  function absoluteUrl(path) {
    return baseUrl + path;
  }

  ready(function () {
    if (document.getElementById("freetawn-widget-root")) return;

    var host = document.createElement("div");
    host.id = "freetawn-widget-root";
    host.setAttribute("data-tenant-id", tenantId || "");
    document.body.appendChild(host);

    var shadow = host.attachShadow ? host.attachShadow({ mode: "open" }) : host;
    var style = document.createElement("style");
    style.textContent = "\
      :host { all: initial; }\
      *, *::before, *::after { box-sizing: border-box; }\
      .launcher { position: fixed; right: 22px; bottom: 22px; z-index: 2147483000; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #fff; }\
      .button { display: inline-flex; align-items: center; gap: 10px; border: 1px solid rgba(255,255,255,.26); border-radius: 999px; padding: 12px 16px; background: linear-gradient(135deg, #2563eb, #1d4ed8 48%, #0f172a); color: #fff; box-shadow: 0 18px 45px rgba(15,23,42,.35); cursor: pointer; font: 700 14px/1 Inter, ui-sans-serif, system-ui, sans-serif; transition: transform .18s ease, box-shadow .18s ease; }\
      .button:hover { transform: translateY(-2px); box-shadow: 0 24px 55px rgba(37,99,235,.36); }\
      .button:focus-visible, .close:focus-visible, .link:focus-visible, .submit:focus-visible, .input:focus-visible { outline: 3px solid rgba(96,165,250,.55); outline-offset: 2px; }\
      .icon { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 999px; background: rgba(255,255,255,.15); }\
      .panel { position: absolute; right: 0; bottom: 66px; width: min(360px, calc(100vw - 32px)); overflow: hidden; border: 1px solid rgba(148,163,184,.28); border-radius: 24px; background: linear-gradient(160deg, #0f172a, #172554 54%, #0f766e); box-shadow: 0 28px 70px rgba(2,6,23,.45); opacity: 0; transform: translateY(14px) scale(.96); pointer-events: none; transition: opacity .18s ease, transform .18s ease; }\
      .launcher.open .panel { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }\
      .header { padding: 18px 18px 14px; border-bottom: 1px solid rgba(255,255,255,.12); }\
      .top { display: flex; align-items: start; justify-content: space-between; gap: 14px; }\
      .eyebrow { display: inline-flex; align-items: center; gap: 7px; margin-bottom: 8px; color: #bfdbfe; font: 700 11px/1 Inter, ui-sans-serif, system-ui, sans-serif; letter-spacing: .08em; text-transform: uppercase; }\
      .dot { width: 8px; height: 8px; border-radius: 999px; background: #22c55e; box-shadow: 0 0 0 5px rgba(34,197,94,.16); }\
      .title { margin: 0; color: #fff; font: 800 20px/1.15 Inter, ui-sans-serif, system-ui, sans-serif; letter-spacing: -.03em; }\
      .copy { margin: 8px 0 0; color: #dbeafe; font: 500 13px/1.55 Inter, ui-sans-serif, system-ui, sans-serif; }\
      .close { flex: 0 0 auto; display: grid; place-items: center; width: 32px; height: 32px; border: 1px solid rgba(255,255,255,.16); border-radius: 999px; background: rgba(255,255,255,.08); color: #fff; cursor: pointer; font: 800 18px/1 Inter, ui-sans-serif, system-ui, sans-serif; }\
      .body { padding: 16px 18px 18px; }\
      .form { display: flex; gap: 8px; margin-bottom: 14px; }\
      .input { min-width: 0; flex: 1; border: 1px solid rgba(255,255,255,.18); border-radius: 14px; padding: 12px 13px; background: rgba(255,255,255,.96); color: #0f172a; font: 600 13px/1 Inter, ui-sans-serif, system-ui, sans-serif; }\
      .input::placeholder { color: #64748b; }\
      .submit { border: 0; border-radius: 14px; padding: 0 14px; background: #2563eb; color: #fff; cursor: pointer; font: 800 13px/1 Inter, ui-sans-serif, system-ui, sans-serif; }\
      .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px; }\
      .link { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 44px; border: 1px solid rgba(255,255,255,.14); border-radius: 15px; padding: 11px 12px; background: rgba(255,255,255,.09); color: #fff; text-decoration: none; font: 700 13px/1.2 Inter, ui-sans-serif, system-ui, sans-serif; transition: background .16s ease, transform .16s ease; }\
      .link:hover { background: rgba(255,255,255,.15); transform: translateY(-1px); }\
      .arrow { color: #93c5fd; }\
      .footer { margin: 14px 0 0; color: #cbd5e1; font: 500 11px/1.45 Inter, ui-sans-serif, system-ui, sans-serif; }\
      @media (max-width: 520px) { .launcher { right: 14px; bottom: 14px; } .button { padding: 11px 13px; } .panel { bottom: 62px; } }\
    ";

    var wrapper = document.createElement("div");
    wrapper.className = "launcher";
    wrapper.innerHTML = '\
      <section class="panel" aria-label="Freetawn calculator widget">\
        <div class="header">\
          <div class="top">\
            <div>\
              <div class="eyebrow"><span class="dot"></span> AI financial tools</div>\
              <h2 class="title">Calculate faster with Freetawn</h2>\
              <p class="copy">Jump into mortgage, loan, crypto, currency, and savings calculators.</p>\
            </div>\
            <button class="close" type="button" aria-label="Close Freetawn widget">×</button>\
          </div>\
        </div>\
        <div class="body">\
          <form class="form">\
            <input class="input" type="search" placeholder="Try: mortgage on 500k" aria-label="Find a calculator" />\
            <button class="submit" type="submit">Go</button>\
          </form>\
          <div class="grid"></div>\
          <p class="footer">Private by design. Calculators open directly on freetawn.com.</p>\
        </div>\
      </section>\
      <button class="button" type="button" aria-expanded="false" aria-label="Open Freetawn calculator widget">\
        <span class="icon" aria-hidden="true">↗</span>\
        <span>Calculate</span>\
      </button>\
    ';

    shadow.appendChild(style);
    shadow.appendChild(wrapper);

    var button = wrapper.querySelector(".button");
    var close = wrapper.querySelector(".close");
    var form = wrapper.querySelector(".form");
    var input = wrapper.querySelector(".input");
    var grid = wrapper.querySelector(".grid");

    routes.forEach(function (route) {
      var link = document.createElement("a");
      link.className = "link";
      link.href = absoluteUrl(route.href);
      link.innerHTML = "<span>" + route.label + "</span><span class=\"arrow\">→</span>";
      grid.appendChild(link);
    });

    function setOpen(isOpen) {
      wrapper.classList.toggle("open", isOpen);
      button.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) {
        setTimeout(function () {
          input.focus();
        }, 80);
      }
    }

    button.addEventListener("click", function () {
      setOpen(!wrapper.classList.contains("open"));
    });

    close.addEventListener("click", function () {
      setOpen(false);
      button.focus();
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = absoluteUrl(resolveRoute(input.value));
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  });
})();
