window.onload=function(){

let slider=document.querySelector(".slider")
let currentSlide=0

let texts=[

`💭 Sabes… a veces me pongo a pensar en lo curioso que puede ser la vida.

🏡 Hemos sido vecinos desde pequeños, crecimos prácticamente cerca el uno del otro,
y aunque siempre estuvimos ahí, nunca imaginé que algún día íbamos a terminar
conociéndonos de esta manera.`,

`✨ En este tiempo que hemos empezado a compartir más juntos me he dado cuenta
de algo muy bonito… lo bien que me siento contigo.

💬 Me gusta que contigo puedo hablar de todo,
de nuestras historias y de nuestras cosas personales.`,

`💜 Cada momento que pasamos juntos se ha vuelto especial para mí.

🌙 Ya sea cuando salimos, cuando conversamos por horas
o cuando simplemente estamos juntos.`,

`🙏 Yo creo mucho que Dios tiene una forma muy especial de ordenar las cosas
en nuestra vida.

⭐ Muchas veces pienso que pone a las personas correctas
en el momento indicado.`,

`💖 Poco a poco me di cuenta de lo importante que te has vuelto para mí
y de lo feliz que me hace todo lo que estamos viviendo.

💍 Por eso hoy quiero preguntarte algo muy especial…`
]

/* SOBRE */

window.openEnvelope=function(){

let env=document.querySelector(".envelope")

env.classList.add("open")

setTimeout(()=>{

document.getElementById("envelopeScreen").style.display="none"

let screens=document.querySelectorAll(".screen")
screens[0].classList.add("active")

},700)

}

/* HISTORIA */

window.startStory=function(){

let music = document.getElementById("music")
music.loop = true
music.play()

currentSlide=1

document.querySelector(".slider").style.transform = "translateX(-100vw)"

let screens=document.querySelectorAll(".screen")
screens.forEach(s=>s.classList.remove("active"))
screens[1].classList.add("active")

writeText(1)

}

/* SLIDES */

window.nextSlide=function(n){

currentSlide=n

document.querySelector(".slider").style.transform =
`translateX(-${n*100}vw)`

let screens=document.querySelectorAll(".screen")

screens.forEach(s=>s.classList.remove("active"))

setTimeout(()=>{
screens[n].classList.add("active")
},200)

writeText(n)

}

/* PARTICULAS DE GALAXIA */

let galaxy=document.querySelector(".galaxyParticles")

if(galaxy){
for(let i=0;i<80;i++){

let p=document.createElement("div")

p.className="particle"
p.style.left=Math.random()*100+"%"
p.style.animationDuration=5+Math.random()*10+"s"
p.style.opacity=Math.random()

galaxy.appendChild(p)

}
}
/* CONSTELACIONES */

let constellationCanvas=document.getElementById("constellationCanvas")
let cctx=constellationCanvas.getContext("2d")

constellationCanvas.width=window.innerWidth
constellationCanvas.height=window.innerHeight

let points=[]

for(let i=0;i<40;i++){

points.push({
x:Math.random()*constellationCanvas.width,
y:Math.random()*constellationCanvas.height
})

}

function drawConstellation(){

cctx.clearRect(0,0,constellationCanvas.width,constellationCanvas.height)

points.forEach(p=>{

cctx.beginPath()
cctx.arc(p.x,p.y,2,0,Math.PI*2)
cctx.fillStyle="#c77dff"
cctx.fill()

})

for(let i=0;i<points.length;i++){

for(let j=i+1;j<points.length;j++){

let dx=points[i].x-points[j].x
let dy=points[i].y-points[j].y

let dist=Math.sqrt(dx*dx+dy*dy)

if(dist<120){

cctx.beginPath()

cctx.moveTo(points[i].x,points[i].y)
cctx.lineTo(points[j].x,points[j].y)

cctx.strokeStyle="rgba(199,125,255,0.2)"

cctx.stroke()

}

}

}

}

setInterval(drawConstellation,60)

/* BRILLOS MAGICOS */

setInterval(()=>{

let sparkle=document.createElement("div")

sparkle.className="sparkle"

sparkle.innerHTML="✨"

sparkle.style.left=Math.random()*100+"%"
sparkle.style.top=Math.random()*100+"%"

document.body.appendChild(sparkle)

setTimeout(()=>sparkle.remove(),2000)

},1500)

/* EXPLOSION GIGANTE CUANDO DICE SI */

function bigHeartExplosion(){

for(let i=0;i<120;i++){

let heart=document.createElement("div")

heart.className="bigHeartExplosion"

heart.innerHTML="💜"

heart.style.left=Math.random()*100+"%"
heart.style.top=Math.random()*100+"%"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),2000)

}

}

/* CORAZONES 3D */

setInterval(()=>{

let heart=document.createElement("div")

heart.className="heart3d"

heart.innerHTML="💜"

heart.style.left=Math.random()*100+"%"

heart.style.fontSize=(20+Math.random()*20)+"px"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),10000)

},1800)

/* EFECTO MAQUINA DE ESCRIBIR */

function writeText(n){

let el=document.getElementById("letter"+n)

if(!el)return

let text=texts[n-1]

el.innerHTML = text

}

/* COUNTDOWN */

window.startCountdown=function(){

let screens=document.querySelectorAll(".screen")

/* ir a pantalla countdown */

currentSlide=6

document.querySelector(".slider").style.transform="translateX(-600vw)"

screens.forEach(s=>s.classList.remove("active"))
screens[6].classList.add("active")

let count=3
let el=document.getElementById("countdown")

let timer=setInterval(()=>{

el.innerHTML=count+"..."

count--

if(count<0){

clearInterval(timer)

/* ir a pregunta */

currentSlide=7

document.querySelector(".slider").style.transform="translateX(-700vw)"

screens.forEach(s=>s.classList.remove("active"))
screens[7].classList.add("active")

}

},1000)

}

/* BOTON NO ESCAPA */

let noBtn=document.getElementById("noBtn")

function moveButton(){

let x=Math.random()*(window.innerWidth-120)
let y=Math.random()*(window.innerHeight-80)

noBtn.style.position="absolute"
noBtn.style.left=x+"px"
noBtn.style.top=y+"px"

}

if(noBtn){

noBtn.addEventListener("mouseover",moveButton)
noBtn.addEventListener("touchstart",moveButton)

}

/* RESPUESTA SI */

window.yesAnswer = function(){

    // OCULTAR PREGUNTA
    document.querySelector(".buttons").style.display = "none"
    document.querySelector(".big").style.display = "none"

    launchHearts()
    startFireworks()
    megaExplosion()
    bigHeartExplosion()

    document.getElementById("final").innerHTML = `
    <div class="ring">💍</div>

    <h2 class="finalText">
    Rocio 💜 prometo hacerte muy feliz.
    </h2>

    <h3>✨ Este es solo el comienzo de algo hermoso ✨</h3>

    <button class="restartBtn" onclick="restartStory()">💌</button>
    `
}

window.restartStory = function(){

    // Volver al inicio (sobre)
    document.getElementById("envelopeScreen").style.display = "flex"

    // RESET SOBRE (🔥 clave)
    let env = document.querySelector(".envelope")
    env.classList.remove("open")
    env.style.opacity = "1"
    env.style.transform = "scale(1) rotate(0deg)"

    // Reset slider
    currentSlide = 0
    document.querySelector(".slider").style.transform = "translateX(0)"

    // Limpiar pantallas
    let screens = document.querySelectorAll(".screen")
    screens.forEach(s => s.classList.remove("active"))

    // Restaurar pregunta
    document.querySelector(".buttons").style.display = "flex"
    document.querySelector(".big").style.display = "block"

    // Limpiar final
    document.getElementById("final").innerHTML = ""

    // Reiniciar música (opcional)
    let music = document.getElementById("music")
    music.pause()
    music.currentTime = 0
}

/* LLUVIA DE CORAZONES */

setInterval(()=>{

let heart=document.createElement("div")

heart.className="heart"
heart.innerHTML="💜"
heart.style.left=Math.random()*100+"%"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),8000)

},1000)

/* EXPLOSION DE CORAZONES */

function launchHearts(){

for(let i=0;i<80;i++){

let heart=document.createElement("div")

heart.innerHTML="💜"
heart.style.position="fixed"
heart.style.left=Math.random()*100+"%"
heart.style.top="-20px"
heart.style.fontSize="32px"

document.body.appendChild(heart)

let fall=setInterval(()=>{

heart.style.top=parseInt(heart.style.top)+6+"px"

if(parseInt(heart.style.top)>window.innerHeight){

clearInterval(fall)
heart.remove()

}

},25)

}

}

/* ESTRELLAS */

let canvas=document.getElementById("stars")
let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<250;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
})

}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

stars.forEach(s=>{

ctx.beginPath()
ctx.arc(s.x,s.y,s.r,0,Math.PI*2)
ctx.fill()

})

}

setInterval(drawStars,40)

/* FUEGOS ARTIFICIALES */

let fireCanvas=document.getElementById("fireworks")
let fireCtx=fireCanvas.getContext("2d")

fireCanvas.width=window.innerWidth
fireCanvas.height=window.innerHeight

function startFireworks(){

setInterval(()=>{

let x=Math.random()*fireCanvas.width
let y=Math.random()*fireCanvas.height/2

for(let i=0;i<25;i++){

fireCtx.beginPath()
fireCtx.arc(x+Math.random()*60,y+Math.random()*60,3,0,Math.PI*2)

let colors=["#c77dff","#ff4d6d","#ffffff","#b388ff"]

fireCtx.fillStyle=colors[Math.floor(Math.random()*colors.length)]

fireCtx.fill()

}

},250)

}

/* EXPLOSION FINAL */

function megaExplosion(){

for(let i=0;i<100;i++){

let spark=document.createElement("div")

spark.innerHTML="✨"
spark.style.position="fixed"
spark.style.left=Math.random()*100+"%"
spark.style.top=Math.random()*100+"%"
spark.style.fontSize="24px"

document.body.appendChild(spark)

setTimeout(()=>spark.remove(),2000)

}

}

/* ESTRELLAS FUGACES */

setInterval(()=>{

let star=document.createElement("div")

star.className="shootingStar"

star.style.left=Math.random()*window.innerWidth+"px"

document.body.appendChild(star)

setTimeout(()=>star.remove(),2000)

},3500)

/* DESLIZAR EN IPHONE */

let startX=0

document.addEventListener("touchstart",e=>{

startX=e.touches[0].clientX

})

document.addEventListener("touchend",e=>{

let endX=e.changedTouches[0].clientX

if(startX-endX>50){

currentSlide++

document.querySelector(".slider").style.transform =
`translateX(-${currentSlide*100}vw)`

}

})

}


