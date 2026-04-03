import{i as g,a as F,R as x,S as H,N as C}from"./assets/vendor-Cg2OR-9q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const D=()=>{const e=document.querySelector("[data-menu]"),t=document.querySelector("[data-menu-open]"),s=document.querySelector("[data-menu-close]"),n=document.querySelectorAll(".mobile-menu__nav-link");t.addEventListener("click",()=>{e.classList.add("is-open"),document.body.classList.add("no-scroll")}),s.addEventListener("click",a),n.forEach(o=>o.addEventListener("click",a));function a(){e.classList.remove("is-open"),document.body.classList.remove("no-scroll")}},P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABYSURBVHgBnZBLDYAwEES3KEACEnAETqgTcIQEJCBh2AnHpu/Ql8xhsy/ZT0g6gtDPmZlJMHdmIcE8jaQWSysJ5s1s7hdX0adOwRQasQ8tiWfioy7Bq2sAHyW4yLy/Kip1AAAAAElFTkSuQmCC";let c=null,d=null;const j=300;let T=0;const Y=()=>{c=document.createElement("div"),c.className="loader",c.innerHTML='<div class="spinner"></div>',document.body.appendChild(c)},Q=()=>{c||Y(),c.classList.contains("is-visible")||(T=Date.now(),c.classList.add("is-visible")),d&&(clearTimeout(d),d=null)},U=()=>{const e=Date.now()-T,t=Math.max(0,j-e);d&&clearTimeout(d),d=setTimeout(()=>{c&&c.classList.remove("is-visible"),d=null},t)},V={position:"topRight",timeout:3e3,closeOnClick:!0,pauseOnHover:!0,progressBar:!0,animateInside:!1},h=(e,t,s,n={})=>{g[e]({title:t,message:s,...V,...n})},X={success:(e,t)=>h("success","Success",e,t),error:(e,t)=>h("error","Error",e,{timeout:5e3,...t}),info:(e,t)=>h("info","Info",e,t)},m=F.create({baseURL:"https://sound-wave.b.goit.study/api",timeout:1e4});let b=0;const G=()=>{b+=1,Q()},A=()=>{b=Math.max(0,b-1),b===0&&U()};m.interceptors.request.use(e=>(G(),e),e=>(A(),Promise.reject(e)));m.interceptors.response.use(e=>(A(),e),e=>{var n,a,o;A();const t=(n=e.response)==null?void 0:n.status,s=((o=(a=e.response)==null?void 0:a.data)==null?void 0:o.message)||(t?`Error: ${t}`:"Network error. Please check your connection.");return X.error(s),Promise.reject({message:s,status:t,original:e})});const J=e=>m.get("/artists",{params:e}).then(({data:t})=>t),K=async e=>(await J(e)).artists||[],W=async e=>(await m.get(`/artists/${e}`)).data||null,z=async e=>{const{data:t}=await m.get(`/artists/${e}/albums`);return t.albumsList||t||[]},Z=document.querySelector(".artists__list");document.querySelector(".artists__filters");const q=async({limit:e,page:t})=>K({limit:e,page:t}),R=document.querySelector(".artists__button");let w=1,k={limit:8,page:1};R.addEventListener("click",()=>{w+=1,k={limit:8,page:w},I()});async function I(){const e=await q(k);se(e),e.length<k.limit&&(R.style.display="none")}I();function ee(e){const{_id:t,strArtist:s,strBiographyEN:n,strArtistThumb:a,genres:o}=e,u=Array.isArray(o)&&o.length?o.map(O=>`<li class="artists__genre">${O}</li>`).join(""):"";return`<li class="artists__item">
        <img class="artists__img" src="${a}" alt="${s}" />
        <div class="artists__info">
          <ul class="artists__genres">
            ${u}
          </ul>
          <h3 class="artists__name">${s}</h3>
          <p class="artists__desc">${n}</p>
        </div>
       <button class="artists__learn-more" data-id="${t}">
          Learn More <img class="artists__learn-more-icon" src="${P}" width="8" height="14" alt="icon right arrow"></img>
        </button>
      </li>
`}function te(e){return e.map(ee).join("")}function se(e){const t=te(e);Z.insertAdjacentHTML("beforeend",t)}const ae=async e=>await m.get("/feedbacks",{params:e}).then(({data:t})=>t),ne=async e=>(await ae(e)).data||[],oe=async e=>await m.post("/feedbacks",e).then(({data:s})=>s),N="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cpath%20fill='%23764191'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e",B="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='19'%20fill='none'%20viewBox='0%200%2020%2019'%3e%3cpath%20fill='%23fff'%20d='M9.07.612c.345-.816%201.515-.816%201.86%200l2.028%204.82c.145.343.473.579.849.608l5.266.417c.892.071%201.254%201.171.574%201.746L15.635%2011.6a.99.99%200%200%200-.324.985l1.225%205.077c.208.86-.74%201.54-1.503%201.08l-4.508-2.721a1.02%201.02%200%200%200-1.05%200l-4.508%202.72c-.764.461-1.711-.219-1.503-1.079l1.225-5.077a.99.99%200%200%200-.324-.985L.353%208.203c-.68-.575-.318-1.675.574-1.746l5.266-.417c.377-.03.704-.265.85-.609z'/%3e%3c/svg%3e",re=(e=document)=>{e.querySelectorAll(".feedback__rating").forEach(s=>{const n=Number(s.dataset.rating)||0;s.innerHTML="",new x(s,{readOnly:!0,score:n,number:5,starType:"img",path:"",starOn:N,starOff:B}).init()})},i={modalRoot:document.getElementById("modal-root")},L=5,l={name:{min:2,max:30},descr:{min:10,max:300},rating:{min:1,max:5}};let p=null;const S="feedback-form-data",ie=e=>{sessionStorage.setItem(S,JSON.stringify(e))},le=()=>{const e=sessionStorage.getItem(S);return e?JSON.parse(e):null},ce=()=>{sessionStorage.removeItem(S)},de=()=>`
  <div class="modal__content modal__content--feedback" role="dialog" aria-modal="true">
    <button class="feedback-modal__close-btn" type="button" aria-label="Close modal">&times;</button>

    <h2 class="feedback-modal__title">Submit feedback</h2>

    <form class="feedback-modal__form" autocomplete="off" novalidate>
      <label class="feedback-modal__label">
        <span class="feedback-modal__label-text">Name</span>
        <input class="feedback-modal__input" type="text" name="name" placeholder="Name" required />
      </label>

      <label class="feedback-modal__label">
        <span class="feedback-modal__label-text">Message</span>
        <textarea class="feedback-modal__textarea" name="descr" placeholder="Type your message..." required></textarea>
      </label>

      <div class="feedback-modal__rating">
        <div class="feedback-modal__stars" aria-label="Rating stars"></div>
        <input type="hidden" name="rating" value="${L}" />
      </div>

      <button class="feedback-modal__submit" type="submit">Submit</button>
    </form>
  </div>
`,me=()=>{if(!i.modalRoot)return;i.modalRoot.classList.add("modal--feedback"),i.modalRoot.innerHTML=de();const e=le();if(e){const n=i.modalRoot.querySelector('input[name="name"]'),a=i.modalRoot.querySelector('textarea[name="descr"]');n&&(n.value=e.name||""),a&&(a.value=e.descr||"")}i.modalRoot.style.display="flex",document.body.classList.add("more-open"),ue(i.modalRoot);const t=i.modalRoot.querySelector(".feedback-modal__close-btn"),s=i.modalRoot.querySelector(".feedback-modal__form");if(!t||!s){_();return}s.addEventListener("input",()=>{ie({name:s.name.value,descr:s.descr.value})}),t.addEventListener("click",_),i.modalRoot.addEventListener("click",n=>{n.target===i.modalRoot&&_()},{once:!0}),p=n=>{n.key==="Escape"&&_()},document.addEventListener("keydown",p),s.addEventListener("submit",pe)},_=()=>{i.modalRoot&&(i.modalRoot.innerHTML="",i.modalRoot.style.display="none",i.modalRoot.classList.remove("modal--feedback"),document.body.classList.remove("more-open"),p&&(document.removeEventListener("keydown",p),p=null))},ue=e=>{const t=e.querySelector(".feedback-modal__stars"),s=e.querySelector('input[name="rating"]');if(!t||!s)return;t.innerHTML="",new x(t,{readOnly:!1,score:L,number:5,starType:"img",path:"",starOn:N,starOff:B,click:a=>{s.value=String(a)}}).init()},_e=({name:e,descr:t,rating:s})=>{const n=String(e??"").trim(),a=String(t??"").trim(),o=Number(s);return n.length<l.name.min||n.length>l.name.max?`Name must contain ${l.name.min} to ${l.name.max} characters. Please check your input.`:a.length<l.descr.min||a.length>l.descr.max?`Message must contain ${l.descr.min} to ${l.descr.max} characters. Please check your input.`:Number.isNaN(o)||o<l.rating.min||o>l.rating.max?`Please select a rating between ${l.rating.min} and ${l.rating.max} stars.`:null},pe=async e=>{e.preventDefault();const t=e.currentTarget,s=t.querySelector(".feedback-modal__submit"),n=new FormData(t),a={name:String(n.get("name")??"").trim(),descr:String(n.get("descr")??"").trim(),rating:Number(n.get("rating")??L)},o=_e(a);if(o){g.error({title:"Validation error",message:o,position:"topRight"});return}s.disabled=!0;try{await oe(a),g.success({title:"Success",message:"Thank you! Your feedback has been submitted.",position:"topRight"}),ce(),_()}catch{g.error({title:"Error",message:"Failed to send feedback. Please try again.",position:"topRight"})}finally{s.disabled=!1}},fe=()=>me(),r={section:document.querySelector(".feedback"),wrapper:document.querySelector(".feedback__wrapper"),pagination:document.querySelector(".feedback__pagination"),dotFirst:document.querySelector(".feedback__dot--first"),dotMiddle:document.querySelector(".feedback__dot--middle"),dotLast:document.querySelector(".feedback__dot--last"),leaveBtn:document.querySelector(".feedback__leave-btn")},M=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),ge=()=>{[r.dotFirst,r.dotMiddle,r.dotLast].forEach(e=>{e&&e.classList.remove("is-active")})},f=e=>{ge(),e==="first"&&r.dotFirst&&r.dotFirst.classList.add("is-active"),e==="middle"&&r.dotMiddle&&r.dotMiddle.classList.add("is-active"),e==="last"&&r.dotLast&&r.dotLast.classList.add("is-active")},E=e=>{if(!r.dotMiddle)return;r.dotMiddle.__anim&&(r.dotMiddle.__anim.cancel(),r.dotMiddle.__anim=null);const t=e==="left"?-10:10;r.dotMiddle.__anim=r.dotMiddle.animate([{transform:"translateX(0)"},{transform:`translateX(${t}px)`},{transform:"translateX(0)"}],{duration:220,easing:"ease-in-out"}),r.dotMiddle.__anim.onfinish=()=>{r.dotMiddle.__anim=null}},v=(e,t)=>{if(t<=1){f("first");return}if(e===0){f("first");return}if(e===t-1){f("last");return}f("middle")},be=e=>{const t=M((e==null?void 0:e.name)??"Anonymous"),s=M((e==null?void 0:e.descr)??""),n=Number(e==null?void 0:e.rating),a=isNaN(n)?0:Math.round(n);return`
    <li class="feedback__slide swiper-slide" role="listitem">
      <div 
        class="feedback__rating"
        data-rating="${a}"
        aria-label="Rating ${a} out of 5">
      </div>
      <blockquote class="feedback__quote">"${s}"</blockquote>
      <p class="feedback__author">${t}</p>
    </li>
  `},ve=e=>{r.wrapper&&(r.wrapper.innerHTML=e.map(be).join(""))};let y=null;const $=e=>{y&&y.destroy(!0,!0),y=new H(".feedback__slider",{modules:[C],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".feedback__nav--next",prevEl:".feedback__nav--prev"},on:{init(t){v(t.activeIndex,e),t.__prevIndex=t.activeIndex},slideChange(t){const s=t.__prevIndex??0,n=t.activeIndex;n>s?E("right"):n<s&&E("left"),v(n,e),t.__prevIndex=n}}})},he=async()=>{if(!(!r.section||!r.wrapper)){r.leaveBtn&&r.leaveBtn.addEventListener("click",fe);try{const e=await ne({limit:10,page:1});if(!e.length){r.wrapper.innerHTML=`
        <li class="feedback__slide swiper-slide">
          <blockquote class="feedback__quote">"No feedbacks yet."</blockquote>
          <p class="feedback__author">—</p>
        </li>
      `,$(1),v(0,1);return}const t=e.slice(0,10);ve(t),$(t.length),re(r.wrapper),v(0,t.length)}catch{}}},ye="/Artists-project/assets/icons-Dy-5T8z3.svg",Ae=()=>{const e=document.getElementById("modal-root");document.addEventListener("click",async t=>{const s=t.target.closest("[data-id]");if(!s)return;const n=s.dataset.id;e.innerHTML=`
      <div class="modal__content">
        <div class="modal__loader"></div>
      </div>
    `,e.style.display="flex",document.body.classList.add("more-open");try{const[a,o]=await Promise.all([W(n),z(n)]);if(!a){e.style.display="none";return}ke(a,o,e)}catch{e.style.display="none"}}),e.addEventListener("click",t=>{(t.target===e||t.target.classList.contains("modal__close-btn"))&&Le(e)})},ke=(e,t,s)=>{s.innerHTML=`
    <div class="modal__content" role="dialog" aria-modal="true">

      <div class="modal__header">
        <button class="modal__close-btn" aria-label="Close modal">&times;</button>
        <h2 class="modal__title">${e.strArtist}</h2>
      </div>

      <div class="modal__body">
        <div class="modal__artist-info">
          <div class="modal__image-artist">
            <img class="modal__image-artist-img" src="${e.strArtistThumb}" alt="${e.strArtistThumb}">
          </div>

          <div class="modal__description">
            <div class="modal__description-grid">
              <div class="modal__description-item" id="left-item">
                <h3 class="modal__description-title">Years active</h3>
                <p class="modal__description-value">${e.yearsActive}</p>

                <h3 class="modal__description-title marg" id="members-title">Members</h3>
                <p class="modal__description-value" id="members-value">${e.intMembers}</p>
              </div>

              <div class="modal__description-item" id="right-item">
                <h3 class="modal__description-title" id="sex-title">Sex</h3>
                <p class="modal__description-value" id="sex-value">${e.strGender}</p>

                <h3 class="modal__description-title marg">Country</h3>
                <p class="modal__description-value">${e.strCountry}</p>
              </div>
    
             <div class="modal__description-item-column">
                <div class="modal__description-bio">
                  <h3 class="modal__description-bio-title">Biography</h3>
      
                  <div class="modal__description-bio-scroll">
                    <p class="modal__description-bio-text">${e.strBiographyEN}</p>
                  </div>
                </div>
      
                <ul class="modal__description-genres-list">
                  ${e.genres.map(n=>`<li class="modal__description-genres-item">${n}</li>`).join("")}
                </ul>
             </div>
            </div>
          </div>
        </div>
        ${Se(t)}
      </div>
    </div>
  `,s.style.display="grid"},Le=e=>{e.innerHTML="",e.style.display="none",document.body.classList.remove("more-open")},Se=e=>!e||!e.length?"":`
    <div class="modal__albums">
      <h3 class="modal__albums-title">Albums</h3>
      <div class="modal__albums-list">
        ${e.map(we).join("")}
      </div>
    </div>
  `,we=e=>{const t=e.tracks||[];return`
    <div class="modal__album-card">
      <div class="album-card__header">
        <h4 class="album-card__title">${e.strAlbum}</h4>
        <span class="album-card__year">${e.intYearReleased||"N/A"}</span>
      </div>
      <div class="album-card__tracks">
        ${t.map(s=>`
          <div class="album-card__track">
            <span class="album-card__track-name">${s.strTrack}</span>
            <span class="album-card__track-time">${Me(s.intDuration)}</span>
            ${s.movie?`<a class="album-card__link" href="${s.movie}" target="_blank" rel="noopener noreferrer">
                   <svg width="20" height="20">
                     <use href="${ye}#icon-Youtube"></use>
                   </svg>
                 </a>`:'<span class="album-card__link-placeholder"></span>'}
          </div>
        `).join("")}
      </div>
    </div>
  `},Me=e=>{if(!e)return"0:00";const t=Math.floor(e/6e4),s=Math.floor(e%6e4/1e3);return`${t}:${s.toString().padStart(2,"0")}`};document.addEventListener("DOMContentLoaded",()=>{D(),q({limit:8,page:1}),he(),Ae()});
//# sourceMappingURL=index.js.map
