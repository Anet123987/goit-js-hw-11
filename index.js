import{S as m,i as d}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="50174992-a37a037319a3aab3105cbedec",y="https://pixabay.com/api/";async function g(s){const o=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:9});try{const t=await fetch(`${y}?${o}`);if(!t.ok)throw new Error("Error fetching images");return await t.json()}catch(t){throw console.error(t),t}}const l=document.querySelector("#gallery"),n=document.querySelector("#loader");function v(s){const o=s.slice(0,9).map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:u,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a href="${e}">
          <img src="${a}" alt="${r}" loading="lazy"/>
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${i}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${u}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${f}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${p}</p>
          </div>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o);const t=new m(".gallery a",{captionsData:"alt",captionDelay:250,closeText:"✖",close:!0,showCounter:!1});t.on("open",()=>{const a=document.querySelector(".sl-overlay");if(a&&!document.querySelector(".sl-close")){const e=document.createElement("button");e.classList.add("sl-close"),e.innerHTML="✖",e.addEventListener("click",()=>{t.close()}),a.appendChild(e)}}),t.refresh()}function L(){l&&(l.innerHTML="")}function b(){n&&n.classList.remove("hidden")}function c(){n&&n.classList.add("hidden")}const w=document.querySelector("#search-form");document.querySelector("#gallery");w.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o){L(),b();try{const t=await g(o);if(t.hits.length===0){d.warning({title:"Oops",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}v(t.hits),c(),s.target.elements["search-text"].value="",s.target.elements["search-text"].focus()}catch{d.error({title:"Error",message:"Failed to fetch images.",position:"topRight"}),c()}}});
//# sourceMappingURL=index.js.map
