// 1) يكتب السنة الحالية في التذييل تلقائيًا
document.getElementById("year").textContent = new Date().getFullYear();

// 2) يميّز رابط القسم اللي تشوفه في القائمة العلوية
const links = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === "#" + entry.target.id
        );
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" } // القسم "نشط" لما يكون في منتصف الشاشة تقريبًا
);

sections.forEach((section) => observer.observe(section));
