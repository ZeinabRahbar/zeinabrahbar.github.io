/**
 * Zeinab Rahbar — Academic Portfolio
 * Vanilla JS, no dependencies.
 * - Mobile nav toggle (accessible: aria-expanded, closes on link click)
 * - Scroll-spy: marks the nav link for the section currently in view
 */
(function () {
  "use strict";

  var navToggle = document.getElementById("navToggle");
  var navLinksEl = document.getElementById("primaryNav");

  if (navToggle && navLinksEl) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinksEl.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinksEl.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && navLinksEl.classList.contains("is-open")) {
        navLinksEl.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Scroll-spy: highlight the nav link matching the section in view.
  var sections = Array.prototype.filter.call(
    document.querySelectorAll("main section[id]"),
    function (section) { return section.id; }
  );
  var navLinks = navLinksEl ? Array.prototype.slice.call(navLinksEl.querySelectorAll("a[href^='#']")) : [];

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var linkById = {};
    navLinks.forEach(function (link) {
      linkById[link.getAttribute("href").slice(1)] = link;
    });

    var setActive = function (id) {
      navLinks.forEach(function (link) {
        link.removeAttribute("aria-current");
      });
      var active = linkById[id];
      if (active) {
        active.setAttribute("aria-current", "true");
      }
    };

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        // Treat a section as "current" once it's near the top of the
        // viewport, just below the sticky nav, and until it's mostly scrolled past.
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
