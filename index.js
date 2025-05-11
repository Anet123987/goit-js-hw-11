import{a as f,S as p,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g="50174992-a37a037319a3aab3105cbedec",h="https://pixabay.com/api/";async function y(t){const a={key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:9};try{return(await f.get(h,{params:a})).data}catch(r){throw console.error("Error fetching images:",r),r}}const c=document.querySelector("#gallery");document.querySelector("#loader");function v(t){const a=t.slice(0,9).map(({webformatURL:o,largeImageURL:e,tags:s,likes:i,views:u,comments:m,downloads:d})=>`
      <li class="gallery-item">
        <a href="${e}">
          <img src="${o}" alt="${s}" loading="lazy"/>
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
            <p class="value">${m}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${d}</p>
          </div>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",a);const r=new p(".gallery a",{captionsData:"alt",captionDelay:250,closeText:"✖",close:!0,showCounter:!1});r.on("show.simplelightbox",function(){const o=document.querySelector(".sl-image");o&&o.classList.remove("sl-image")}),r.on("next.simplelightbox",function(){const o=document.querySelector(".sl-image");o&&o.classList.remove("sl-image")}),r.on("prev.simplelightbox",function(){const o=document.querySelector(".sl-image");o&&o.classList.remove("sl-image")}),r.refresh()}function L(){c&&(c.innerHTML="")}function b(){const t=document.querySelector("#loader");t&&t.classList.remove("hidden")}function n(){const t=document.querySelector("#loader");t&&t.classList.add("hidden")}const S=document.querySelector("#search-form");document.querySelector("#gallery");S.addEventListener("submit",async t=>{t.preventDefault();const a=t.target.elements["search-text"].value.trim();if(a){L(),b();try{const r=await y(a);if(r.hits.length===0){l.warning({title:"Oops",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n();return}v(r.hits),n(),t.target.elements["search-text"].value="",t.target.elements["search-text"].focus()}catch{l.error({title:"Error",message:"Failed to fetch images.",position:"topRight"}),n()}}});
//# sourceMappingURL=index.js.map
