(() => {
'use strict';
const C = window.BIRTHDAY_CONFIG;
if (!C) { console.error('Missing config.js'); return; }
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const random = (a,b) => a + Math.random() * (b-a);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const copy = {
  en: {
    memoryFilmOne:'A little moment of us',memoryFilmTwo:'A moment with our song',videoFullscreen:'View full screen ↗',
    brand:'little universe',headerFor:'made with all my love',navDay:'daylight',navSunset:'golden hour',navNight:'moonlight',
    heroEyebrow:'a little piece of my heart, for you',heroSubtitle:'Today a beautiful little doll was born—the one who is my whole world, my sweet wife.',startJourney:'Open your little surprise <span aria-hidden="true">↗</span>',scrollCue:'Scroll slowly, my love',
    extraMemories:'Little pieces of our story',songCaption:'Our little song ♡',chapterDay:'I LOVE YOU IN THE DAY',gardenTitle:'A garden full of <em>us.</em>',gardenIntro:'Every little memory is a flower I would choose all over again.',ticketAdmit:'ADMIT ONE',ticketTitle:'a lifetime of little adventures',ticketValid:'VALID FOREVER',flowerButton:'tap the flower for a little magic',
    chapterLetters:'SEALED WITH LOVE',dayLettersTitle:'Letters for my <em>little light.</em>',dayLettersDesc:'Some things are easier to say when they are tucked inside a little envelope.',envelopeHint:'psst… press an envelope to open it ♡',
    chapterGolden:'THE GOLDEN HOUR',scratchTitle:'A secret beneath <em>the words.</em>',scratchDesc:'I wrote you a little letter. Gently rub it away to uncover the moment hiding underneath.',scratchHint:'Hold & swipe to scratch • works with your finger too',revealPhoto:'Reveal the photo ↗',scratchAgain:'Try again ↺',scratchFound:'my favorite view has always been us ♡',photoPlaceholder:'Our favorite photo belongs here ♡',
    chapterSunset:'A LITTLE MORE LOVE',sunsetTitle:'If I could pause <em>the sky…</em>',sunsetDesc:'…I would choose the moments when everything glows, just like my world does when you smile.',sunsetCaption:'the sky always saves its prettiest colors for you.',sunsetNote:'one more letter before the stars',
    chapterUnlock:'ONLY WE KNOW',locksTitle:'The keys to <em>our story.</em>',locksIntro:'Three little locks. Three memories that only you and I understand.',locksUnlocked:'UNLOCKED',lockPlaceholder:'type your answer…',lockOpen:'Unlock ♡',lockOpened:'Unlocked ✓',lockRight:'That’s right! ♡',lockWrong:'Hmm… Snoopy is confused! Try again ♡',locksComplete:'You know all the little pieces of my heart. ♡',
    chapterMoon:'UNDER OUR SKY',moonTitle:'The moon knows <em>my secret.</em>',moonDesc:'Even when the world goes quiet, my favorite thought is still you.',moonHint:'psst… touch the moon ☾',moonWhisper:'Some wishes are written in the stars.',moonRedWhisper:'Even a red moon cannot outshine you. ♥',moonNormalToast:'Back to our peaceful moonlight ☾',moonRedToast:'The moon is blushing! ♥',
    chapterWish:'MAKE A WISH',cakeTitle:'One wish, <em>three sweet choices.</em>',cakeIntro:'I know we cannot eat cake together today, but this cake is my gift to you.',candleKicker:'FIRST, A LITTLE MAGIC',candleTitle:'Close your eyes. Make a wish. ♡',candleHint:'tap the candles to blow them out',blowButton:'Blow the candles ✨',
    choiceKicker:'YOUR WISH IS ON ITS WAY',choiceTitle:'Now, choose your birthday cake!',choiceHint:'Pick your favorite. Only one cake will be served.',eatKicker:'MADE ESPECIALLY FOR YOU',eatTitle:'One little bite at a time…',biteHint:'tap the cake to take a bite 🍰',finishKicker:'YOUR WISH HAS BEEN HEARD',finishTitle:'The sweetest part was always you. ♡',finishDesc:'I hope all your wishes come true, my love.',cakeReplay:'Make another wish ↻',
    chapterAlways:'MY BEAUTIFUL LITTLE SWEETHEART',finalTitle:'You are the brightest star. <em>I love you more every day.</em>',finalSignature:'With all my love, today and always.',startOver:'Relive our little story ↥',footer:'made by me, with a whole lot of love',dearYou:'A NOTE FOR YOU',letterSign:'with love, always ♡',
    coffee:'Mocha dream',caramel:'Caramel kiss',strawberry:'Strawberry love',openNote:'open me',cakeOne:'That was a sweet bite! ♡',cakeTwo:'Mmm, another one? ✨',cakeThree:'Just one tiny piece left! 🍰',cakeLast:'The last bite… ready? ♡',photoNotYet:'Add your pictures to the personal folder to see them here ♡',scratchComplete:'You found the surprise! ♡',petalToast:'A little flower just for you ✿',lockDoneToast:'All three memories unlocked! ♡'
  },
  es: {
    memoryFilmOne:'Un momentito de nosotros',memoryFilmTwo:'Un momento con nuestra canción',videoFullscreen:'Ver en pantalla completa ↗',
    brand:'pequeño universo',headerFor:'hecho con todo mi amor',navDay:'día',navSunset:'atardecer',navNight:'noche',
    heroEyebrow:'un pedacito de mi corazón, para ti',heroSubtitle:'Hoy nació una muñequita linda que es mi mundo, mi dulce esposa.',startJourney:'Abre tu pequeña sorpresa <span aria-hidden="true">↗</span>',scrollCue:'Desliza despacito, mi amor',
    extraMemories:'Pedacitos de nuestra historia',songCaption:'Nuestra cancioncita ♡',chapterDay:'TE AMO EN EL DÍA',gardenTitle:'Un jardín lleno de <em>nosotros.</em>',gardenIntro:'Cada recuerdo pequeñito es una flor que volvería a elegir.',ticketAdmit:'ADMITE UNA',ticketTitle:'una vida de pequeñas aventuras',ticketValid:'VÁLIDO POR SIEMPRE',flowerButton:'toca la flor para ver un poquito de magia',
    chapterLetters:'SELLADAS CON AMOR',dayLettersTitle:'Cartitas para mi <em>lucerito.</em>',dayLettersDesc:'Hay cosas que se dicen más bonito cuando se guardan en un sobrecito.',envelopeHint:'psst… toca un sobre para abrirlo ♡',
    chapterGolden:'LA HORA DORADA',scratchTitle:'Un secreto detrás <em>de las palabras.</em>',scratchDesc:'Te escribí una cartita. Ráscala suavemente para descubrir el momento que se esconde detrás.',scratchHint:'Mantén presionado y rasca • también con el dedo',revealPhoto:'Revelar la foto ↗',scratchAgain:'Intentar otra vez ↺',scratchFound:'mi paisaje favorito siempre hemos sido nosotros ♡',photoPlaceholder:'Aquí va nuestra foto favorita ♡',
    chapterSunset:'UN POQUITO MÁS DE AMOR',sunsetTitle:'Si pudiera detener <em>el cielo…</em>',sunsetDesc:'…elegiría esos momentos en que todo brilla, igual que mi mundo cuando sonríes.',sunsetCaption:'el cielo guarda sus colores más bonitos para ti.',sunsetNote:'una cartita más antes de las estrellas',
    chapterUnlock:'SOLO NOSOTROS SABEMOS',locksTitle:'Las llaves de <em>nuestra historia.</em>',locksIntro:'Tres candaditos. Tres recuerdos que solo tú y yo entendemos.',locksUnlocked:'DESBLOQUEADOS',lockPlaceholder:'escribe tu respuesta…',lockOpen:'Abrir ♡',lockOpened:'Abierto ✓',lockRight:'¡Correcto! ♡',lockWrong:'Mmm… ¡Snoopy está confundido! Intenta otra vez ♡',locksComplete:'Conoces todos los pedacitos de mi corazón. ♡',
    chapterMoon:'BAJO NUESTRO CIELO',moonTitle:'La luna sabe <em>mi secreto.</em>',moonDesc:'Incluso cuando el mundo se queda en silencio, mi pensamiento favorito sigues siendo tú.',moonHint:'psst… toca la luna ☾',moonWhisper:'Hay deseos que se escriben en las estrellas.',moonRedWhisper:'Ni una luna roja podría brillar más que tú. ♥',moonNormalToast:'Volvimos a nuestra luna tranquila ☾',moonRedToast:'¡La luna se sonrojó! ♥',
    chapterWish:'PIDE UN DESEO',cakeTitle:'Un deseo, <em>tres opciones dulces.</em>',cakeIntro:'Sé que este día no puedo comer pastel contigo, pero te regalo un pastel.',candleKicker:'PRIMERO, UN POQUITO DE MAGIA',candleTitle:'Cierra los ojos. Pide un deseo. ♡',candleHint:'toca las velitas para apagarlas',blowButton:'Sopla las velitas ✨',
    choiceKicker:'TU DESEO VA EN CAMINO',choiceTitle:'¡Ahora elige tu pastel de cumpleaños!',choiceHint:'Escoge tu favorito. Solo se servirá un pastel.',eatKicker:'HECHO ESPECIALMENTE PARA TI',eatTitle:'Un bocadito a la vez…',biteHint:'toca el pastel para comer un pedacito 🍰',finishKicker:'TU DESEO FUE ESCUCHADO',finishTitle:'Lo más dulce siempre has sido tú. ♡',finishDesc:'Espero que todos tus deseos se cumplan, mi amor.',cakeReplay:'Pedir otro deseo ↻',
    chapterAlways:'MI CHIQUITA LINDA',finalTitle:'Tú eres la estrella más brillante. <em>Cada día te amo más.</em>',finalSignature:'Con todo mi amor, hoy y siempre.',startOver:'Volver a vivir nuestra historia ↥',footer:'hecho por mí, con muchísimo amor',dearYou:'UNA CARTITA PARA TI',letterSign:'con amor, siempre ♡',
    coffee:'Sueño de moka',caramel:'Besito de caramelo',strawberry:'Amor de fresa',openNote:'ábreme',cakeOne:'¡Qué bocadito tan rico! ♡',cakeTwo:'Mmm, ¿otro más? ✨',cakeThree:'¡Solo queda un pedacito! 🍰',cakeLast:'El último bocadito… ¿lista? ♡',photoNotYet:'Agrega las fotos a la carpeta personal para verlas aquí ♡',scratchComplete:'¡Encontraste la sorpresa! ♡',petalToast:'Una florecita solo para ti ✿',lockDoneToast:'¡Los tres recuerdos desbloqueados! ♡'
  }
};
let savedLang = null; try { savedLang = localStorage.getItem('birthday-language'); } catch (_) {}
let lang = savedLang === 'es' ? 'es' : 'en';
const tr = key => copy[lang][key] ?? key;
const text = (enEs) => typeof enEs === 'string' ? enEs : (enEs && (enEs[lang] || enEs.en)) || '';
const easeScroll = target => document.querySelector(target)?.scrollIntoView({behavior:reducedMotion?'instant':'smooth'});
let toastTimer = 0;
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2400)}

/* Soft floating petals: deliberately limited for good mobile performance. */
function spawnPetal(x){if(reducedMotion||document.hidden)return;const petal=document.createElement('i');petal.className='petal';const palette = document.body.dataset.phase==='night'?['#d5a5e8','#f3b8d2','#d2c1f3']:document.body.dataset.phase==='sunset'?['#e38da3','#f9c39d','#ffe4b1']:['#f9a6bf','#f5c2d1','#ffe2a6','#f5a5a4'];const size=random(8,19);petal.style.cssText=`left:${x ?? random(0,100)+'vw'};--sz:${size}px;--petal-color:${palette[Math.random()*palette.length|0]};--duration:${random(7,13).toFixed(1)}s;--drift:${random(-150,150).toFixed(0)}px;--spin:${random(-700,700).toFixed(0)}deg`;$('#petal-layer').append(petal);petal.addEventListener('animationend',()=>petal.remove(),{once:true});}
function petalShower(n=22){if(reducedMotion)return;for(let i=0;i<n;i++)setTimeout(()=>spawnPetal(),i*55)}
function burst(x,y,amount=13){if(reducedMotion)return;const hearts=['♡','♥','✦','✿','❀'];for(let i=0;i<amount;i++){const h=document.createElement('span');h.className='burst-heart';h.textContent=hearts[Math.random()*hearts.length|0];h.style.cssText=`left:${x}px;top:${y}px;color:${['#f9c4d1','#f8deb4','#ffc0ca','#fff3d5'][i%4]};--dx:${random(-160,160).toFixed(0)}px;--dy:${random(-190,60).toFixed(0)}px;--rot:${random(-150,150).toFixed(0)}deg`;$('#burst-layer').append(h);h.addEventListener('animationend',()=>h.remove(),{once:true});}}
function burstFrom(el,n=14){const r=el.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,n)}
function revealObserver(){if(!('IntersectionObserver' in window)){ $$('.reveal').forEach(el=>el.classList.add('visible'));return;}
  const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ob.unobserve(e.target)}}),{threshold:.10,rootMargin:'0px 0px -30px 0px'});$$('.reveal').forEach(e=>ob.observe(e));}

/* A continuous sky following the scroll positions, not stretched image backgrounds. */
function updateScrollScene(){let chosen=null;const pivot=innerHeight*.48;for(const section of $$('.scene[data-phase]')){const r=section.getBoundingClientRect();if(r.top<=pivot&&r.bottom>=pivot){chosen=section;break;}}if(!chosen)chosen=$('.scene[data-phase]');const phase=chosen.dataset.phase;if(document.body.dataset.phase!==phase){document.body.dataset.phase=phase;$$('.chapter-nav__item').forEach(x=>x.classList.toggle('active',x.dataset.nav===phase));}
  const range=document.documentElement.scrollHeight-innerHeight;$('#scroll-progress-bar').style.width=(range>0?100*window.scrollY/range:0)+'%';}
let pendingScroll=false;addEventListener('scroll',()=>{if(!pendingScroll){pendingScroll=true;requestAnimationFrame(()=>{updateScrollScene();pendingScroll=false})}},{passive:true});
addEventListener('resize',updateScrollScene,{passive:true});
function buildStars(){const f=$('#star-field');for(let i=0;i<105;i++){const star=document.createElement('i');star.style.left=random(0,100).toFixed(1)+'%';star.style.top=random(0,100).toFixed(1)+'%';star.style.setProperty('--star-size',random(1,3.8).toFixed(1)+'px');star.style.setProperty('--star-speed',random(2,5).toFixed(1)+'s');star.style.setProperty('--star-delay',random(-6,0).toFixed(1)+'s');f.append(star)}}

/* INTRO: the original typed reveal is preserved. */
let typeTimeout;
function typeHero(){
  clearTimeout(typeTimeout);
  const el=$('#hero-typewriter');
  const words=lang==='es'
    ? 'Feliz cumpleaños,\nmi corazoncito ♡'
    : 'Happy Birthday,\nmy sweetheart ♡';
  el.textContent='';
  $('#hero-title').setAttribute('aria-label',words.replace('\n',' '));
  if(reducedMotion){el.textContent=words;return;}
  let i=0;
  const next=()=>{el.textContent=words.slice(0,++i);if(i<words.length)typeTimeout=setTimeout(next,i<17?70:90)};
  next();
}

/* Images stay as-is: user photographs will replace intentional placeholders. */
function loadPhoto(img,parent){const src=img.getAttribute('src');const onOK=()=>{img.hidden=false;parent.classList.add('has-photo')};const onError=()=>{img.hidden=true;parent.classList.remove('has-photo')};img.addEventListener('load',onOK);img.addEventListener('error',onError);if(img.complete){if(img.naturalWidth)onOK();else onError()}}
function installPhotos(){ $$('.user-photo[data-photo-key]').forEach(img=>{img.setAttribute('src',C.photos[img.dataset.photoKey]);loadPhoto(img,img.parentElement);}); }
function renderMemories(){
 const grid=$('#memory-grid');grid.replaceChildren();
 C.photos.garden.forEach((url,i)=>{
  const btn=document.createElement('button');btn.type='button';btn.className='polaroid reveal visible';
  btn.style.setProperty('--tilt',['-5deg','3deg','-2deg','5deg'][i%4]);
  const tape=document.createElement('span');tape.className='polaroid-tape';
  const photo=document.createElement('div');photo.className='polaroid-photo is-hidden';
  const caption=document.createElement('p');caption.className='polaroid-caption';caption.textContent=text(C.memoryCaptions[i]||C.memoryCaptions[0]);
  const isVideo=i===2;
  let picture=null,clip=null,hasMedia=false;
  const fallback=document.createElement('div');fallback.className='photo-fallback';
  const fig=document.createElement('img');fig.src=`img/${['i18','i06','i05','i23'][i%4]}.webp`;fig.alt='';
  const label=document.createElement('span');label.textContent=isVideo?(lang==='es'?'Nuestro video aquí ♡':'Our video goes here ♡'):`${lang==='es'?'Tu foto':'Your photo'} ${i+1} ♡`;
  fallback.append(fig,label);
  if(isVideo){
   clip=document.createElement('video');clip.src=C.photos.memoryVideo||'personal/recuerdo-video.mp4';clip.muted=true;clip.loop=true;clip.playsInline=true;clip.preload='metadata';clip.addEventListener('loadedmetadata',()=>{hasMedia=true;photo.classList.add('has-video')});
   photo.append(clip,fallback);
  }else{
   picture=document.createElement('img');picture.src=url;picture.alt=`Memory photo ${i+1}`;picture.loading='lazy';
   photo.append(picture,fallback);loadPhoto(picture,photo);
  }
  btn.append(tape,photo,caption);
  btn.addEventListener('click',()=>{
   burstFrom(btn,10);
   if(isVideo){
    if(!hasMedia){toast(lang==='es'?'Aquí aparecerá nuestro video cuando lo agregue ♡':'Our video will appear here once I add it ♡');return;}
    if(photo.classList.contains('is-hidden')){photo.classList.remove('is-hidden');clip.play().catch(()=>{});return;}
    if(clip.paused)clip.play().catch(()=>{});else clip.pause();return;
   }
   if(!picture.naturalWidth){toast(tr('photoNotYet'));return;}
   if(photo.classList.contains('is-hidden')){photo.classList.remove('is-hidden');return;}
   $('#photo-dialog-image').src=url;$('#photo-dialog-caption').textContent=caption.textContent;$('#photo-dialog').showModal();
  });
  grid.append(btn);
 });
}
$('#close-photo').onclick=()=>$('#photo-dialog').close();$('#photo-dialog').addEventListener('click',e=>{if(e.target.id==='photo-dialog')e.target.close()});
$$('[data-flower-button]').forEach(btn=>btn.addEventListener('click',()=>{burstFrom(btn,22);petalShower(34);toast(tr('petalToast'))}));

/* Envelopes and handwritten modal; chapter lists are preserved across languages. */
function renderLetters(){const targets={day:$('#day-envelope-list'),sunset:$('#sunset-envelope-list'),night:$('#night-envelope-list')};Object.values(targets).forEach(el=>el.replaceChildren());C.letters.forEach((item,index)=>{const el=document.createElement('button');el.type='button';el.className=`envelope-button env-color-${item.color} reveal visible`;el.setAttribute('aria-label',`${tr('openNote')}: ${text(item.title)}`);el.innerHTML=`<span class="env-back"></span><span class="env-letter"><span>${item.symbol}</span><small>${tr('openNote')}</small></span><span class="env-front"></span><span class="env-flap"></span><span class="env-seal">${item.symbol}</span>`;el.addEventListener('click',()=>{burstFrom(el,10);openLetter(index)});targets[item.chapter]?.append(el)});}
function openLetter(index){const it=C.letters[index];$('#dialog-title').textContent=text(it.title);$('#dialog-body').textContent=text(it.body);$('#dialog-sticker').src=`img/${it.sticker}.webp`;$('#letter-dialog').showModal();}
$('#close-letter').onclick=()=>$('#letter-dialog').close();$('#letter-dialog').addEventListener('click',e=>{if(e.target.id==='letter-dialog')e.target.close()});

/* Scratch-off canvas: the long bilingual love letter IS the surface to erase. */
const canvas=$('#scratch-canvas'),ctx=canvas.getContext('2d',{willReadFrequently:true});let scratching=false,previous=null,doneScratch=false,lastMeasure=0;
function wrapText(str,maxWidth){const words=str.split(/\s+/),lines=[];let line='';for(const word of words){const test=line?line+' '+word:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word}else line=test}if(line)lines.push(line);return lines}
function paintScratchCover(){const rect=canvas.getBoundingClientRect();if(!rect.width||!rect.height)return;const w=rect.width,h=rect.height,dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);ctx.globalCompositeOperation='source-over';ctx.clearRect(0,0,w,h);const gradient=ctx.createLinearGradient(0,0,w,h);gradient.addColorStop(0,'#fff1e3');gradient.addColorStop(.52,'#f3c5c8');gradient.addColorStop(1,'#d6b1cf');ctx.fillStyle=gradient;ctx.fillRect(0,0,w,h);
  ctx.strokeStyle='#ffffff54';ctx.lineWidth=1;for(let x=-h;x<w+h;x+=29){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x+h,h);ctx.stroke()}
  const pad=Math.max(18,Math.min(w*.075,42));let size=Math.min(18,w*.036);let lines,lineHeight;
  for(;size>=10;size-=.5){ctx.font=`500 ${size}px 'DM Sans',sans-serif`;lines=wrapText(text(C.scratchLetter),w-2*pad);lineHeight=size*1.57;if((lines.length*lineHeight)<h-100)break}
  ctx.textAlign='center';ctx.textBaseline='top';ctx.fillStyle='#894a6b';ctx.font=`700 ${Math.min(13,w*.025)}px 'DM Sans',sans-serif`;ctx.fillText(lang==='es'?'UNA CARTITA PARA TI ♡':'A LITTLE LETTER FOR YOU ♡',w/2,24);
  ctx.textAlign='left';ctx.fillStyle='#634b68';ctx.font=`500 ${size}px 'DM Sans',sans-serif`;const textTop=Math.max(62,(h-lines.length*lineHeight)/2+7);lines.forEach((line,i)=>ctx.fillText(line,pad,textTop+i*lineHeight));ctx.fillStyle='#a15b74';ctx.font=`italic ${Math.min(18,w*.04)}px Georgia,serif`;ctx.textAlign='center';ctx.fillText('♡  ✦  ♡',w/2,h-28);
  doneScratch=false;canvas.parentElement.classList.remove('is-complete');$('#scratch-progress').textContent='0%';}
function scratchPoint(ev){const r=canvas.getBoundingClientRect();return{x:ev.clientX-r.left,y:ev.clientY-r.top}}
function eraseStroke(from,to){const radius=Math.max(21,canvas.clientWidth*.065);ctx.globalCompositeOperation='destination-out';ctx.strokeStyle='#000';ctx.fillStyle='#000';ctx.lineWidth=radius*1.75;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(from.x,from.y);ctx.lineTo(to.x,to.y);ctx.stroke();ctx.beginPath();ctx.arc(to.x,to.y,radius*.88,0,Math.PI*2);ctx.fill();ctx.globalCompositeOperation='source-over'}
function percentErased(){const data=ctx.getImageData(0,0,canvas.width,canvas.height).data;let total=0,empty=0;const stride=4*24;for(let i=3;i<data.length;i+=stride){total++;if(data[i]<32)empty++}return Math.round(100*empty/Math.max(total,1))}
function revealScratch(){if(doneScratch)return;doneScratch=true;canvas.parentElement.classList.add('is-complete');$('#scratch-progress').textContent='100%';burstFrom($('#scratch-frame'),28);petalShower(23);toast(tr('scratchComplete'))}
canvas.addEventListener('pointerdown',e=>{if(doneScratch)return;scratching=true;previous=scratchPoint(e);canvas.setPointerCapture(e.pointerId);eraseStroke(previous,previous);e.preventDefault()});
canvas.addEventListener('pointermove',e=>{if(!scratching||doneScratch)return;const next=scratchPoint(e);eraseStroke(previous,next);previous=next;if(performance.now()-lastMeasure>220){lastMeasure=performance.now();const pct=percentErased();$('#scratch-progress').textContent=pct+'%';if(pct>=43)revealScratch()}e.preventDefault()});
const scratchEnd=()=>{if(scratching){scratching=false;previous=null;if(!doneScratch){const pct=percentErased();$('#scratch-progress').textContent=pct+'%';if(pct>=43)revealScratch()}}};canvas.addEventListener('pointerup',scratchEnd);canvas.addEventListener('pointercancel',scratchEnd);canvas.addEventListener('lostpointercapture',scratchEnd);
$('#reveal-photo-btn').onclick=revealScratch;$('#scratch-reset-btn').onclick=paintScratchCover;let resizeScratch;
addEventListener('resize',()=>{clearTimeout(resizeScratch);resizeScratch=setTimeout(()=>{if(doneScratch){ // Keep the revealed state during resize.
  const r=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(r.width*dpr);canvas.height=Math.round(r.height*dpr);canvas.parentElement.classList.add('is-complete');
}else paintScratchCover()},240)});

/* Memory locks with expressive Snoopy assets. Answers are editable in config.js. */
const unlocked=C.locks.map(()=>false);
const normalize=v=>String(v).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[.,!?¿¡]/g,'').replace(/[\s_-]+/g,' ').trim();
function renderLocks(){const box=$('#locks-grid');box.replaceChildren();C.locks.forEach((lock,i)=>{const div=document.createElement('form');div.className='lock-card reveal visible'+(unlocked[i]?' is-unlocked':'');div.id=`lock-${i}`;div.innerHTML=`<div class="lock-topline"><span>MEMORY 0${i+1}</span><span class="lock-status">${unlocked[i]?'🔓':'🔒'}</span></div><img class="lock-character" src="img/${unlocked[i]?'i23':'i19'}.webp" alt="Snoopy reacting"><p class="lock-question"></p><input class="lock-input" type="text" autocomplete="off" required><p class="lock-hint"></p><button class="lock-button" type="submit"></button><p class="lock-feedback" role="status"></p>`;
    $('.lock-question',div).textContent=text(lock.question);$('.lock-input',div).placeholder=lock.placeholder?text(lock.placeholder):tr('lockPlaceholder');$('.lock-input',div).disabled=unlocked[i];$('.lock-hint',div).textContent=text(lock.hint);const b=$('.lock-button',div);b.disabled=unlocked[i];b.textContent=unlocked[i]?tr('lockOpened'):tr('lockOpen');if(unlocked[i])$('.lock-feedback',div).textContent=tr('lockRight');
    div.addEventListener('submit',e=>{e.preventDefault();if(unlocked[i])return;const value=normalize($('.lock-input',div).value);const valid=lock.answers.some(a=>normalize(a)===value);if(valid){unlocked[i]=true;div.classList.add('is-unlocked');$('.lock-status',div).textContent='🔓';$('.lock-character',div).src='img/i23.webp';$('.lock-input',div).disabled=true;b.disabled=true;b.textContent=tr('lockOpened');$('.lock-feedback',div).textContent=tr('lockRight');burstFrom(div,19);updateLocksCount()}else{$('.lock-character',div).src='img/i19.webp';$('.lock-feedback',div).textContent=tr('lockWrong');div.classList.remove('is-shaking');void div.offsetWidth;div.classList.add('is-shaking');setTimeout(()=>div.classList.remove('is-shaking'),460)}});box.append(div)});updateLocksCount(false)}
function updateLocksCount(celebrate=true){const count=unlocked.filter(Boolean).length;$('#locks-count').textContent=`${count} / ${unlocked.length}`;if(count===unlocked.length){$('#locks-finale').hidden=false;if(celebrate){burstFrom($('#locks-grid'),40);petalShower(40);toast(tr('lockDoneToast'))}}else $('#locks-finale').hidden=true}

/* Lunar hover preview + click/tap that persists red until clicked again. */
let redMoon=false;
$('#moon-toggle').addEventListener('click',()=>{redMoon=!redMoon;$('#moon-toggle').classList.toggle('is-red',redMoon);$('#moon-toggle').setAttribute('aria-pressed',String(redMoon));$('#moon-whisper').textContent=redMoon?tr('moonRedWhisper'):tr('moonWhisper');if(redMoon){burstFrom($('#moon-toggle'),23);petalShower(16)}toast(tr(redMoon?'moonRedToast':'moonNormalToast'))});

/* Cakes: [whole, first bite, second bite, last slice] mapped to user's exact sprites. */
const cakes=[{key:'coffee',images:['i55','i61','i80','i83']},{key:'caramel',images:['i58','i56','i57','i72']},{key:'strawberry',images:['i59','i60','i73','i74']}];
let cakeChoice=null,cakeBites=0,blowing=false;
function showCakeStage(name){const stages={candles:'#cake-candles-stage',choice:'#cake-choice-stage',eating:'#cake-eating-stage',finish:'#cake-finish-stage'};Object.entries(stages).forEach(([stage,selector])=>{const el=$(selector);el.hidden=stage!==name;el.classList.toggle('is-current',stage===name)})}
function renderCakeChoices(){const box=$('#cake-choices');box.replaceChildren();cakes.forEach((cake,i)=>{const el=document.createElement('button');el.className='cake-choice';el.type='button';const image=document.createElement('img');image.src=`img/${cake.images[0]}.webp`;image.alt=tr(cake.key);const name=document.createElement('span');name.textContent=tr(cake.key);el.append(image,name);el.addEventListener('click',()=>{cakeChoice=i;cakeBites=0;$('#active-cake-image').src=`img/${cake.images[0]}.webp`;$('#active-cake-image').alt=tr(cake.key);$$('.bite-progress span').forEach(x=>x.classList.remove('is-eaten'));$('#cake-bite-message').textContent=tr('biteHint');showCakeStage('eating');burstFrom($('#active-cake-image'),10)});box.append(el)})}
function blowOutCandles(){if(blowing)return;blowing=true;const b=$('#blow-candles');b.classList.add('blown');$('#blow-candles-alt').disabled=true;burstFrom(b,13);setTimeout(()=>{showCakeStage('choice');petalShower(12)},1500)}
$('#blow-candles').addEventListener('click',blowOutCandles);$('#blow-candles-alt').addEventListener('click',blowOutCandles);
$('#eat-cake').addEventListener('click',()=>{if(cakeChoice==null)return;cakeBites++;burstFrom($('#eat-cake'),12);if(cakeBites<=3){$('#active-cake-image').src=`img/${cakes[cakeChoice].images[cakeBites]}.webp`;$('#cake-bite-message').textContent=tr(['cakeOne','cakeTwo','cakeThree'][cakeBites-1]);$$('.bite-progress span')[cakeBites-1]?.classList.add('is-eaten');}
else{showCakeStage('finish');$$('.bite-progress span').forEach(s=>s.classList.add('is-eaten'));petalShower(52);for(let i=0;i<4;i++)setTimeout(()=>burst(random(innerWidth*.2,innerWidth*.8),random(innerHeight*.25,innerHeight*.75),20),i*210)}});
$('#cake-replay').addEventListener('click',()=>{cakeChoice=null;cakeBites=0;blowing=false;$('#blow-candles').classList.remove('blown');$('#blow-candles-alt').disabled=false;$$('.bite-progress span').forEach(x=>x.classList.remove('is-eaten'));showCakeStage('candles')});
$('#back-to-top').addEventListener('click',()=>easeScroll('#welcome'));

/* Complete bilingual update, including dynamic content. EN is default. */
function applyLanguage(next){lang=next;try { localStorage.setItem('birthday-language',next); } catch (_) {} document.documentElement.lang=next;$$('[data-lang]').forEach(b=>{const active=b.dataset.lang===next;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active))});$$('[data-t]').forEach(el=>{const key=el.dataset.t;if(copy[next][key]!==undefined)el.innerHTML=copy[next][key]});$('#final-message').textContent=text(C.finalMessage);renderMemories();renderLetters();renderLocks();renderCakeChoices();$('#moon-whisper').textContent=tr(redMoon?'moonRedWhisper':'moonWhisper');if(cakeChoice!==null){$('#cake-bite-message').textContent=tr(cakeBites>0?['cakeOne','cakeTwo','cakeThree'][Math.min(cakeBites,3)-1]:'biteHint');$('#active-cake-image').alt=tr(cakes[cakeChoice].key)}
  typeHero();if(!doneScratch)paintScratchCover();}
$$('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>applyLanguage(btn.dataset.lang)));

/* Start. */
buildStars();installPhotos();revealObserver();updateScrollScene();applyLanguage(lang);showCakeStage('candles');
if(!reducedMotion){setInterval(()=>spawnPetal(),1050)}
if(document.fonts?.ready){document.fonts.ready.then(()=>{if(!doneScratch)paintScratchCover()})}
})();

/* Portrait memories are letterboxed into a landscape format without cropping faces.
   Muted autoplay is required by modern browsers; native controls allow sound on tap. */
document.querySelectorAll('.memory-movie video[autoplay]').forEach(video=>{
  video.muted=true;
  video.addEventListener('canplay',()=>video.play().catch(()=>{}),{once:true});
});
document.querySelectorAll('[data-fullscreen-video]').forEach(button=>{
  button.addEventListener('click',()=>{
    const card=button.closest('.memory-movie');
    const video=card?.querySelector('video');
    if(!card||!video)return;
    const target=(video.webkitEnterFullscreen&&!card.requestFullscreen)?video:card;
    if(target.requestFullscreen){target.requestFullscreen().catch(()=>{});}
    else if(video.webkitEnterFullscreen){video.webkitEnterFullscreen();}
    video.play().catch(()=>{});
  });
});
