document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // زر "ابدأ" يقوم بتوجيه المستخدم إلى صفحة الخدمات
    document.getElementById("start-btn").addEventListener("click", function () {
        window.location.href = "#services";
    });

    // تحسين تجربة نموذج الاتصال
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("تم إرسال رسالتك بنجاح!");
        });
    }
});
