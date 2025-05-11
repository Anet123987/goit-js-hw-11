import{S as p,i as u}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const g="50174992-a37a037319a3aab3105cbedec",h="https://pixabay.com/api/";async function y(i){const o=new URLSearchParams({key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:9});try{const t=await fetch(`${h}?${o}`);if(!t.ok)throw new Error("Error fetching images");return await t.json()}catch(t){throw console.error(t),t}}const l=document.querySelector("#gallery"),n=document.querySelector("#loader");function v(i){const o=i.slice(0,9).map(({webformatURL:r,largeImageURL:e,tags:s,likes:a,views:m,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a href="${e}">
          <img src="${r}" alt="${s}" loading="lazy"/>
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${a}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${m}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${f}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${d}</p>
          </div>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o);const t=new p(".gallery a",{captionsData:"alt",captionDelay:250,closeText:"✖",close:!0,showCounter:!1});t.on("show.simplelightbox",function(){const r=document.querySelector(".sl-image");r&&r.classList.remove("sl-image")}),t.on("next.simplelightbox",function(){const r=document.querySelector(".sl-image");r&&r.classList.remove("sl-image")}),t.on("prev.simplelightbox",function(){const r=document.querySelector(".sl-image");r&&r.classList.remove("sl-image")}),t.refresh()}function L(){l&&(l.innerHTML="")}function b(){n&&n.classList.remove("hidden")}function c(){n&&n.classList.add("hidden")}const w=document.querySelector("#search-form");document.querySelector("#gallery");w.addEventListener("submit",async i=>{i.preventDefault();const o=i.target.elements["search-text"].value.trim();if(o){L(),b();try{const t=await y(o);if(t.hits.length===0){u.warning({title:"Oops",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}v(t.hits),c(),i.target.elements["search-text"].value="",i.target.elements["search-text"].focus()}catch{u.error({title:"Error",message:"Failed to fetch images.",position:"topRight"}),c()}}});
//# sourceMappingURL=index.js.map
