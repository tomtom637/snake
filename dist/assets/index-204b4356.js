var O=Object.defineProperty;var M=(n,r,f)=>r in n?O(n,r,{enumerable:!0,configurable:!0,writable:!0,value:f}):n[r]=f;var u=(n,r,f)=>(M(n,typeof r!="symbol"?r+"":r,f),f);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const h of e.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function f(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=f(t);fetch(t.href,e)}})();function _(n,r,f,i){n.fillStyle="green",f.forEach(t=>{n.fillRect(t[0]*i,t[1]*i,i,i)}),n.strokeStyle="aquamarine",f.forEach(t=>{n.strokeRect(t[0]*i,t[1]*i,i,i)})}function B(n,r,f,i){const t=i/4;n.fillStyle="green",n.strokeStyle="aquamarine",f.forEach((e,h)=>{h===0&&(n.fillRect(e[0]*i+t/2,e[1]*i+t/2,i-t,i-t),n.strokeRect(e[0]*i+t/2,e[1]*i+t/2,i-t,i-t)),h!==0&&(e[2]==="right"&&f[h-1][2]==="up"&&(n.fillRect(e[0]*i,e[1]*i+t,t,t*2),n.fillRect(e[0]*i+t,e[1]*i+t,t*2,t*2),n.fillRect(e[0]*i+t,e[1]*i,t*2,t),n.strokeRect(e[0]*i+t,e[1]*i+t,t*2,t*2)),e[2]==="right"&&f[h-1][2]==="down"&&(n.fillRect(e[0]*i,e[1]*i+t,t,t*2),n.fillRect(e[0]*i+t,e[1]*i+t,t*2,t*2),n.fillRect(e[0]*i+t,e[1]*i+t*3,t*2,t),n.strokeRect(e[0]*i+t,e[1]*i+t,t*2,t*2)),e[2]==="right"&&f[h-1][2]==="right"&&(n.fillRect(e[0]*i,e[1]*i+t,t,t*2),n.fillRect(e[0]*i+t,e[1]*i+t,t*2,t*2),n.fillRect(e[0]*i+t*3,e[1]*i+t,t,t*2),n.strokeRect(e[0]*i+t,e[1]*i+t,t*2,t*2)),e[2]==="left"&&f[h-1][2]==="up"&&(n.fillRect(e[0]*i+t*3,e[1]*i+t,t,t*2),n.fillRect(e[0]*i+t,e[1]*i+t,t*2,t*2),n.fillRect(e[0]*i+t,e[1]*i,t*2,t),n.strokeRect(e[0]*i+t,e[1]*i+t,t*2,t*2)),e[2]==="left"&&f[h-1][2]==="down"&&(n.fillRect(e[0]*i+t*3,e[1]*i+t,t,t*2),n.fillRect(e[0]*i+t,e[1]*i+t,t*2,t*2),n.fillRect(e[0]*i+t,e[1]*i+t*3,t*2,t),n.strokeRect(e[0]*i+t,e[1]*i+t,t*2,t*2)),e[2]==="left"&&f[h-1][2]==="left"&&(n.fillRect(e[0]*i+t*3,e[1]*i+t,t,t*2),n.fillRect(e[0]*i+t,e[1]*i+t,t*2,t*2),n.fillRect(e[0]*i,e[1]*i+t,t,t*2),n.strokeRect(e[0]*i+t,e[1]*i+t,t*2,t*2)),e[2]==="up"&&f[h-1][2]==="right"&&(n.fillRect(e[0]*i+t,e[1]*i+t*3,t*2,t),n.fillRect(e[0]*i+t,e[1]*i+t,t*2,t*2),n.fillRect(e[0]*i+t*3,e[1]*i+t,t,t*2),n.strokeRect(e[0]*i+t,e[1]*i+t,t*2,t*2)),e[2]==="up"&&f[h-1][2]==="left"&&(n.fillRect(e[0]*i+t,e[1]*i+t*3,t*2,t),n.fillRect(e[0]*i+t,e[1]*i+t,t*2,t*2),n.fillRect(e[0]*i,e[1]*i+t,t,t*2),n.strokeRect(e[0]*i+t,e[1]*i+t,t*2,t*2)),e[2]==="up"&&f[h-1][2]==="up"&&(n.fillRect(e[0]*i+t,e[1]*i+t*3,t*2,t),n.fillRect(e[0]*i+t,e[1]*i+t,t*2,t*2),n.fillRect(e[0]*i+t,e[1]*i,t*2,t),n.strokeRect(e[0]*i+t,e[1]*i+t,t*2,t*2)),e[2]==="down"&&f[h-1][2]==="right"&&(n.fillRect(e[0]*i+t,e[1]*i,t*2,t),n.fillRect(e[0]*i+t,e[1]*i+t,t*2,t*2),n.fillRect(e[0]*i+t*3,e[1]*i+t,t,t*2),n.strokeRect(e[0]*i+t,e[1]*i+t,t*2,t*2)),e[2]==="down"&&f[h-1][2]==="left"&&(n.fillRect(e[0]*i+t,e[1]*i,t*2,t),n.fillRect(e[0]*i+t,e[1]*i+t,t*2,t*2),n.fillRect(e[0]*i,e[1]*i+t,t,t*2),n.strokeRect(e[0]*i+t,e[1]*i+t,t*2,t*2)),e[2]==="down"&&f[h-1][2]==="down"&&(n.fillRect(e[0]*i+t,e[1]*i,t*2,t),n.fillRect(e[0]*i+t,e[1]*i+t,t*2,t*2),n.fillRect(e[0]*i+t,e[1]*i+t*3,t*2,t),n.strokeRect(e[0]*i+t,e[1]*i+t,t*2,t*2)))})}class E{constructor(){u(this,"bufferedInputs");u(this,"direction");u(this,"scale");u(this,"body");u(this,"score");u(this,"dead");u(this,"foodPosition");u(this,"style");this.bufferedInputs=[],this.direction="right",this.scale=40,this.body=[[s.width/(2*this.scale),s.height/(2*this.scale),"right"],[s.width/(2*this.scale)-this.scale,s.height/(2*this.scale),"right"],[s.width/(2*this.scale)-this.scale-this.scale,s.height/(2*this.scale),"right"]],this.score=0,this.dead=!1,this.updateFoodPosition(),this.style="thin",this.foodPosition=[~~(Math.random()*s.width/this.scale)*this.scale,~~(Math.random()*s.height/this.scale)*this.scale]}drawSnake(){if(d)switch(this.style){case"retro":_(d,s,this.body,this.scale);break;case"thin":B(d,s,this.body,this.scale);break}}updateSnake(){const r=this.body[0];switch(this.direction){case"right":this.body.unshift([r[0]+1,r[1],"right"]),this.body[0][0]===s.width/this.scale&&(this.body[0][0]=0);break;case"left":this.body.unshift([r[0]-1,r[1],"left"]),this.body[0][0]===-1&&(this.body[0][0]=s.width/this.scale-1);break;case"up":this.body.unshift([r[0],r[1]-1,"up"]),this.body[0][1]===-1&&(this.body[0][1]=s.height/this.scale-1);break;case"down":this.body.unshift([r[0],r[1]+1,"down"]),this.body[0][1]===s.height/this.scale&&(this.body[0][1]=0);break}this.body.pop()}drawFood(){if(d)switch(this.style){case"retro":d.fillStyle="#f00",d.fillRect(this.foodPosition[0]+this.scale/4,this.foodPosition[1]+this.scale/4,this.scale-this.scale/2,this.scale-this.scale/2);break;case"thin":d.fillStyle="#b00",d.fillRect(this.foodPosition[0]+this.scale/3,this.foodPosition[1]+this.scale/3,this.scale-this.scale/1.5,this.scale-this.scale/1.5);break}}updateFoodPosition(){this.foodPosition=[~~(Math.random()*s.width/this.scale)*this.scale,~~(Math.random()*s.height/this.scale)*this.scale],this.body.some(r=>r[0]*this.scale===this.foodPosition[0]&&r[1]*this.scale===this.foodPosition[1])&&this.updateFoodPosition()}eat(){this.body[0][0]===this.foodPosition[0]/this.scale&&this.body[0][1]===this.foodPosition[1]/this.scale&&(this.body.push(this.body[this.body.length-1]),this.updateFoodPosition(),this.drawFood(),this.score+=5,a&&(a.textContent=this.score.toString()))}checkCollision(){const r=this.body[0];this.body.slice(1).forEach(i=>{i[0]===r[0]&&i[1]===r[1]&&(this.score>P&&(window.localStorage.setItem("highScore",this.score.toString()),b&&(b.textContent=this.score.toString())),this.dead=!0)})}}const w=window.localStorage.getItem("highScore"),P=w?parseInt(w):0,s=document.createElement("canvas"),d=s.getContext("2d"),b=document.querySelector(".high-score"),a=document.querySelector(".score"),y=document.getElementById("app");b&&(b.textContent=P.toString());a&&(a.textContent="0");s.classList.add("canvas");s.width=800;s.height=800;s.style.width=s.width/2+"px";s.style.height=s.height/2+"px";y&&y.append(s);const R=document.querySelector(".game-over"),c=document.querySelector(".game-over__message"),l=document.querySelector(".game-over__btn"),I=document.querySelector(".pause");function g(){p=!p,I&&I.classList.toggle("hidden")}l&&l.addEventListener("click",L);function L(){!R||!a||(R.classList.add("hidden"),a.textContent="0",o=new E)}function C(n){n.key==="Enter"&&(document.removeEventListener("keydown",C),L())}let k=0;function z(){!d||!c||!R||(d.clearRect(0,0,s.width,s.height),k++,k%4===0&&(Math.random()>.5?c.textContent+="s":c.textContent+="S",c.textContent&&(c.textContent=c.textContent.slice(1))),R.classList.remove("hidden"),document.addEventListener("keydown",C))}let o=new E;const q={slow:12,normal:7,fast:5,insane:2};let A=q.normal,S=0,m=0;function F(n){d&&(m+=n-S,S=n,o.dead?z():p||m>=A*16&&(m=0,d.clearRect(0,0,s.width,s.height),o.updateSnake(),o.drawFood(),o.drawSnake(),o.eat(),o.checkCollision(),o.direction=o.bufferedInputs[0]||o.direction,o.bufferedInputs.shift()),requestAnimationFrame(F))}requestAnimationFrame(F);let p=!1;document.addEventListener("keydown",n=>{if(!(o.bufferedInputs.length>2))switch(n.key){case"ArrowUp":if(p&&g(),o.bufferedInputs.length!==0){if(o.bufferedInputs[o.bufferedInputs.length-1]==="down"||o.bufferedInputs[o.bufferedInputs.length-1]==="up")return;o.bufferedInputs.push("up")}else o.direction!=="down"&&o.direction!=="up"&&o.bufferedInputs.push("up");break;case"ArrowDown":if(p&&g(),o.bufferedInputs.length!==0){if(o.bufferedInputs[o.bufferedInputs.length-1]==="up"||o.bufferedInputs[o.bufferedInputs.length-1]==="down")return;o.bufferedInputs.push("down")}else o.direction!=="up"&&o.direction!=="down"&&o.bufferedInputs.push("down");break;case"ArrowLeft":if(p&&g(),o.bufferedInputs.length!==0){if(o.bufferedInputs[o.bufferedInputs.length-1]==="right"||o.bufferedInputs[o.bufferedInputs.length-1]==="left")return;o.bufferedInputs.push("left")}else o.direction!=="right"&&o.direction!=="left"&&o.bufferedInputs.push("left");break;case"ArrowRight":if(p&&g(),o.bufferedInputs.length!==0){if(o.bufferedInputs[o.bufferedInputs.length-1]==="left"||o.bufferedInputs[o.bufferedInputs.length-1]==="right")return;o.bufferedInputs.push("right")}else o.direction!=="left"&&o.direction!=="right"&&o.bufferedInputs.push("right");break;case"Escape":case" ":if(o.dead)return;g();break}});const D=document.querySelectorAll("[data-speed]");D.forEach(n=>{n.addEventListener("click",r=>{r.target instanceof HTMLButtonElement&&r.target.dataset.speed&&(A=q[r.target.dataset.speed])})});s.addEventListener("touchstart",n=>{n.preventDefault();const r=s.getBoundingClientRect(),f=(n.touches[0].clientX-r.left)/r.width,i=(n.touches[0].clientY-r.top)/r.height;(o.direction==="up"||o.direction==="down")&&v(f,"horizontal"),(o.direction==="left"||o.direction==="right")&&v(i,"vertical")});function v(n,r){n<.5&&(r==="horizontal"?o.bufferedInputs.push("left"):o.bufferedInputs.push("up")),n>.5&&(r==="horizontal"?o.bufferedInputs.push("right"):o.bufferedInputs.push("down"))}