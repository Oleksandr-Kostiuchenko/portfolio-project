import{A as c,S as a}from"./assets/vendor-CUE3QnId.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=document.querySelector(".menu-burger-btn"),u=document.querySelector(".burger-btn-icon"),p=document.querySelector(".menu-backdrop"),d=document.querySelector(".mobile-menu-close-btn"),m=document.querySelector(".menu-title"),v=document.querySelector(".header-nav");f.addEventListener("click",i=>{u.classList.add("rotated"),p.classList.add("is-open"),d.removeEventListener("click",l),d.addEventListener("click",l)});m.addEventListener("click",i=>{v.classList.toggle("is-shown")});const l=i=>{p.classList.remove("is-open"),u.classList.remove("rotated")},L=document.querySelectorAll(".ac-trigger");document.addEventListener("DOMContentLoaded",function(){new c(".about-accordion-list",{duration:300,showMultiple:!0,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",i=>{L.forEach(o=>{o.addEventListener("click",n=>{o.classList.toggle("rotated-arrow")})})});document.addEventListener("DOMContentLoaded",i=>{const o=n=>{n.slides.forEach(r=>{r.classList.remove("selected-skill")}),n.slides[n.activeIndex]&&n.slides[n.activeIndex].classList.add("selected-skill")};new a(".swiper-container",{direction:"horizontal",loop:!0,slidesPerView:2,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper-about-button-wrapper"},keyboard:{enabled:!0,onlyInViewport:!0},on:{init:function(){o(this)},slideChangeTransitionEnd:function(){o(this)}}})});document.addEventListener("DOMContentLoaded",i=>{const o=document.querySelector(".swiper-projects-container"),n=document.querySelector(".swiper-button-next-project"),r=document.querySelector(".swiper-button-prev-project"),e=t=>{n.classList.remove("disabled-projects-btn"),r.classList.remove("disabled-projects-btn"),t.activeIndex===0&&r.classList.add("disabled-projects-btn"),t.activeIndex===2&&n.classList.add("disabled-projects-btn")};o&&n&&r?new a(o,{direction:"horizontal",loop:!1,spaceBetween:1e3,slidesPerView:1,navigation:{nextEl:n,prevEl:r},keyboard:{enabled:!0,onlyInViewport:!0},on:{init:function(){e(this)},slideChangeTransitionEnd:function(){e(this)}}}):console.error("Swiper elements not found in the DOM")});window.addEventListener("DOMContentLoaded",i=>{new c(".faq-list-accordion",{duration:300,showMultiple:!1,openOnInit:[]}),new c(".faq-list-accordion-second",{duration:300,showMultiple:!1,openOnInit:[]})});
//# sourceMappingURL=index.js.map
