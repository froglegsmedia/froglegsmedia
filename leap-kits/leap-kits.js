(function () {
  var catalog = window.LEAP_KITS;
  if (!catalog || !catalog.prices || !catalog.products) return;

  function money(n) {
    var num = Number(n);
    if (!isFinite(num)) return "";
    var rounded = Math.round(num * 100) / 100;
    if (rounded % 1 === 0) return "$" + rounded;
    return "$" + rounded.toFixed(2);
  }

  document.querySelectorAll("[data-price]").forEach(function (el) {
    var key = el.getAttribute("data-price");
    if (!Object.prototype.hasOwnProperty.call(catalog.prices, key)) return;
    el.textContent = money(catalog.prices[key]);
  });

  document.querySelectorAll("[data-save]").forEach(function (el) {
    var kind = el.getAttribute("data-save");
    var prices = catalog.prices;
    var save = 0;
    if (kind === "bundle3") save = prices.single * 3 - prices.bundle3;
    if (kind === "complete") save = prices.single * 10 - prices.complete;
    save = Math.round(save * 100) / 100;
    if (!(save > 0)) {
      el.hidden = true;
      el.textContent = "";
      return;
    }
    el.hidden = false;
    el.textContent = "Save " + money(save) + " compared with buying each kit on its own.";
  });

  document.querySelectorAll("[data-buy]").forEach(function (el) {
    var id = el.getAttribute("data-buy");
    var product = catalog.products[id];
    var url = product && typeof product.url === "string" ? product.url.trim() : "";
    if (!/^https:\/\//i.test(url)) {
      el.disabled = true;
      el.setAttribute("aria-disabled", "true");
      el.textContent = "Coming soon";
      return;
    }
    var link = document.createElement("a");
    link.href = url;
    link.className = String(el.className || "").replace("btn-soon", "btn-buy");
    link.textContent = el.getAttribute("data-buy-label") || "Buy now";
    link.setAttribute("data-buy", id);
    var priceKey = el.getAttribute("data-price-key");
    var name = el.getAttribute("data-buy-name") || id;
    link.addEventListener("click", function () {
      var price = priceKey ? Number(catalog.prices[priceKey]) : undefined;
      if (window.fbq) {
        window.fbq("track", "InitiateCheckout", {
          content_name: name,
          value: price,
          currency: "USD"
        });
      }
      if (window.gtag && isFinite(price)) {
        window.gtag("event", "begin_checkout", {
          value: price,
          currency: "USD",
          items: [{ item_name: name, price: price, quantity: 1 }]
        });
      }
    });
    el.replaceWith(link);
  });

  var waitlist = document.querySelector("[data-waitlist]");
  if (waitlist && catalog.customWaitlist) {
    waitlist.setAttribute("href", catalog.customWaitlist);
  }

  function kitIdFromHash() {
    var match = /^#kit-(\d{2})$/.exec(location.hash || "");
    return match ? match[1] : "";
  }

  function openKit(id) {
    var dlg = document.getElementById("kit-" + id);
    if (!dlg || typeof dlg.showModal !== "function" || dlg.open) return;
    dlg.showModal();
    if (history.replaceState) history.replaceState(null, "", "#kit-" + id);
  }

  function clearKitHash() {
    if (!kitIdFromHash() || !history.replaceState) return;
    history.replaceState(null, "", location.pathname + location.search);
  }

  document.querySelectorAll("dialog.kit-dialog").forEach(function (dlg) {
    dlg.addEventListener("close", clearKitHash);
    dlg.addEventListener("click", function (event) {
      if (event.target === dlg) dlg.close();
    });
    var closer = dlg.querySelector("[data-close]");
    if (closer) closer.addEventListener("click", function () { dlg.close(); });
  });

  document.addEventListener("click", function (event) {
    var opener = event.target.closest("[data-open]");
    if (!opener) return;
    event.preventDefault();
    openKit(opener.getAttribute("data-open"));
  });

  var initial = kitIdFromHash();
  if (initial) openKit(initial);
})();
