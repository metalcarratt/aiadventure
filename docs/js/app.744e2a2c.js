(function(){"use strict";var e={1768:function(e,t,a){var o=a(9242),n=a(3396),s=a(4870);const i=(0,s.iH)(""),r=(0,s.iH)(""),c=(0,s.iH)(""),u=(0,s.iH)(""),h=(0,s.iH)([]),y=(0,s.iH)(""),l=(0,s.iH)({arrogant:0,friendly:0,trust:0,competency:0}),d=(0,s.iH)(!1),w=(0,s.iH)(!1),p={say:()=>i.value,updateSay:e=>i.value=e,clearSay:()=>i.value="",pic:()=>r.value,updatePic:e=>r.value=e,clearPic:()=>r.value="",location:()=>c.value,updateLocation:e=>c.value=e,mono:()=>u.value,updateMono:e=>u.value=e,clearMono:()=>u.value="",choices:()=>h.value,hasChoices:()=>h.value.length,updateChoices:e=>h.value=e,clearChoices:()=>h.value=[],isChoosing:()=>d.value,setChoosing:()=>d.value=!0,clearChoosing:()=>d.value=!1,transition:()=>y.value,updateTransition:e=>y.value=e,clearTransition:()=>y.value="",attr:(e=null)=>e?l.value[e]:l.value,incrementAttribute:(e,t)=>l.value[e]+=t,finished:()=>w.value},g="./boss2.png",v="./sakura2.png",m="./sakura_blush.png",f="./office.jpg",k="./lunch.jpg",b="./park.jpg",I="./bar.jpg",x="./cinema.jpg",S=[{location:f,pic:g,say:"Everyone gather around. I have a new colleague to introduce."},{say:"This is Sakura. I hope you can give her a warm welcome."},{pic:v,say:"Hello everyone, my name is Sakura. Please take care of me."},{mono:"Wow, she's so beautiful..."},{mono:"I hope I can have a chance to work with her."},{pic:g,say:"Taro, I'd like you to take care of introducing Sakura to the team."},{say:"We have a new product launch coming up and I want you two to come up with creative ideas for the marketing campagin."},{choices:[{say:"Yes, sir",next:{}},{say:"Sir, are you sure it's okay to involve a newbie on this?",next:{attr:{arrogant:1},show:{pic:v,say:"..."}}}]},{pic:g,say:"Sakura, if you have any questions, please ask Taro."},{pic:v,say:"Yes sir, I will. Nice to meet you Taro."},{choices:[{say:"Nice to meet you. Don't worry, I'll show you how everything is done.",next:{attr:{arrogant:1}}},{say:"Nice to meet you. I look forward to working together.",next:{attr:{friendly:1}}}]},{pic:v,say:"Thanks."},{transition:"Later..."}],_=[{location:f,pic:v,say:"Thank you for all your help getting settled in. When should we start on the marketing campaign project?"},{choices:[{say:"Let's start now. Maybe we can finish before lunch.",next:{}}]},{say:"That sounds good. The boss said we need to come up with creative ideas."},{choices:[{say:"Yes, I've already given it some thought. Look at this...",next:{attr:{arrogant:1},show:{say:"Oh, that's a really good idea."}}},{say:"That's right. Do you have any ideas?",next:{attr:{trust:1},show:{say:"I don't know if it's good idea, but I was thinking of this..."}}}]},{transition:"You both discuss the idea together."},{pic:v,say:"Oh no, look at the time. We only have half an hour left."},{choices:[{say:"You're right. Sakura, can you help me to put the details in a powerpoint?",next:{attr:{trust:1},show:{say:"Sure, you can rely on me!"}}},{say:"Don't worry, our boss likes us to take our time, as long as we do a good job. Let me handle it.",next:{attr:{competency:1},show:{say:"Okay, sure."}}},{say:"Relax, the boss is never dead serious about dead lines. Get it? Haha.",next:{attr:{competency:-1},show:{say:"Oh. Haha."}}}]},{transition:"Half an hour later..."},{pic:g,say:"So, how are the ideas coming along?"},{pic:v,say:"Oh, is it time already?"},{pic:g,say:"Something wrong?"},{choices:[{say:"Sorry, boss, it was Yuki's fault. He kept coming over to distract us.",next:{attr:{arrogant:0},show:{pic:v,say:"..."}}},{say:"Sorry, boss, it's my fault. I'll make it up after lunch.",next:{attr:{competency:-1}}},{say:"Sorry, boss, but I had to train the newbie so I didn't have enough time.",next:{attr:{trust:-1}}}]},{pic:g,say:"Oh. Well, that's unfortunate. Let's try and finish by the end of the day, okay?"}],O=[{location:k,transition:"Your whole team go out for lunch"},{pic:g,say:"This place is nice. It serves sandwhiches and salads. I hope you all like it."},{say:"So Sakura, how are you settling in to your new role?"},{pic:v,say:"It's very nice, thank you. Everyone is very kind to me."},{pic:g,say:"That's good to hear. I hope we can all produce amazing work in the future."},{transition:"Everyone orders their lunch."},{pic:v,choices:[{say:"So, what kind of hobbies do you have outside work?",next:{}}]},{say:"I like reading books and practising yoga. How about you?"},{choices:[{say:"Oh? Well, it's good you don't need glasses! Haha!",next:{attr:{friendly:-1},show:{say:"Um.."}}},{say:"I like working out at the gym. Trying to get the perfect bod, yeah!",next:{attr:{arrogant:1},show:{say:"Wow, you must be very strong!"}}},{say:"I like reading books too. What's your favourite thing to read?",next:{attr:{friendly:1},show:{say:"Oh, I especially like Lord of the Rings"}}}]},{choices:[{say:"So, how do you feel after one morning working? Everything okay?",next:{attr:{trust:1},show:{say:"It's a lot of work but there are many things to learn."}}},{say:"Have you seen Harry Potter?",next:{attr:{friendly:1},show:{say:"Yes, I love that show."}}},{say:"Did you see the boss' patch pocket? Doesn't it look weird?",next:{attr:{trust:-1},show:{say:"Oh, I didn't notice. I'll take a closer look next time."}}}]},{transition:"The meal ends with everyone full and happy"},{pic:g,say:"Alright everyone, now we have a team building event planned. Let's move on over to the park."}],H=[{location:b,transition:"Everyone arrives at the park"},{pic:g,say:"Okay, listen everyone, the first event will be a relay race. Get in your teams and prepare to race!"},{pic:v,choices:[{say:"Listen everyone. I'm clearly the fastest so I will go last. Sakura, do you want to run first?",next:{attr:{competency:1},show:{say:"Oh, sure."}}},{say:"Everyone, let's work together. Sakura, are you a fast runner?",next:{attr:{trust:1},show:{say:"I'm not very fast. I hope I don't drag everyone down."}}},{say:"Sakura, did I tell you before that I work out at the gym?",next:{attr:{arrogant:1},show:{say:"That's amazing. Our team will win for sure."}}}]},{transition:"You all run the race"},{pic:g,say:"Wow, Taro's team won! Excellent work, guys!"},{say:"Next is a trust exercise."},{pic:v,choices:[{say:"This exercise is tricky. Let's go slow and take our time. We don't want anyone to get hurt.",next:{attr:{friendly:1},show:{say:"I've done this before. Maybe I can teach you all what to do?"}}},{say:"Hmm, does anyone know how to do this?",next:{attr:{trust:1},show:{say:"I've done it before. Shall I teach you all what to do?"}}}]},{pic:g,say:"Wow, you guys are doing great. Just one more activity. Next is a scavenger hunt."},{pic:v,choices:[{say:"Who drew this map? It looks like something a five year old would make. Haha!",next:{attr:{friendly:-1},show:{say:"Oh, sorry, the boss asked me to make it at the last minute."}}},{say:"What's this first picture. Sakura, any ideas?",next:{attr:{trust:1},show:{say:"It looks like a wombat? Oh, look over there in that tree!"}}}]},{transition:"After a few hours of fun the team building activities finish"},{pic:g,say:"Great work guys Let's head back to the office."}],T=[{location:f,transition:"Back at the office"},{pic:g,say:"Another successful day, everyone. Let's head out to celebrate!"},{location:I,transition:"Everyone walks to a nearby bar for drinks"},{transition:"You take the opportunity to strike up a conversation with Sakura"},{pic:v,choices:[{say:"Aren't you glad we finished the product launch ideas on time?",next:{attr:{arrogant:1},show:{say:"Yes! Your idea was definately the best!"}}},{say:"You said before you like yoga. What made you get into that?",next:{attr:{friendly:1},show:{say:"It helps me keep fit. I live in a small apartment so I need some exercise that I can do in a small place."}}}]},{pic:v,say:"So many interesting things happened today."},{choices:[{say:"Did you see the typo in the announcements email? I thought Yuki was winking at me but he was just trying to close the brackets.",next:{attr:{friendly:1},show:{say:"I thought the same thing. It was so funny."}}},{say:"Did you see Yuki during the relay race? He looked like a crab, the way he was running.",next:{attr:{arrogant:1},show:{say:"Oh? I wasn't really paying attention."}}}]},{say:"Look at the time. I'd better go."},{choices:[{say:"Wait...",next:()=>{}}]},{choices:[{say:"How would you like to go to a movie in the weekend?",next:{show:{say:"Oh.. I don't know..."}}}]},{choices:[{say:"Don't worry, it'll be strictly as friends, I promise!",next:{show:{say:"Hmm, I guess so. What movie do you want to see?"}}}]},{choices:[{say:"How about The Hobbit?",next:{attr:{trust:1},show:{say:"Oh, I wanted to watch that. Okay!"}}},{say:"How about Avengers?",next:{attr:{friendly:1},show:{say:"I haven't seen that before. I suppose I can try."}}},{say:"How about Pride and Prejudice?",next:{attr:{competency:-1},show:{say:"A romance movie? Um, okay, we can try that."}}}]},{transition:"The day ends with a successful promise to watch a movie together. Well done."}],W=[{location:x,transition:"The weekend arrives and as planned you go to watch a movie with Sakura"},{pic:v,say:"Thanks for coming with me. I had a very nice time."},{say:"Also, there was something else I wanted to tell you."},{endings:[{max:{arrogant:4,friendly:4,competency:0},min:{trust:6},show:{pic:m,say:"You're very reliable and sweet. Do you want to be my boyfriend?"}},{max:{arrogant:4},min:{friendly:5},show:{say:"I'm so thankful for how much you've helped me since I started working here. I hope we can stay good friends."}},{min:{competency:2},max:{},show:{say:"Thanks for being a strong team leader. I will try to work hard from now on."}},{min:{},max:{},show:{say:"I respect you as a work colleague but let's not do anything outside work anymore."}}]}],C=[S,_,O,H,T,W],D=()=>{if(!p.finished.value){const e=M.index();M.scene(e)&&j(M.scene(e))}},j=e=>{e.say&&(U(),p.updateSay(e.say)),e.pic&&p.updatePic(e.pic),e.location&&p.updateLocation(e.location),e.mono&&(U(),p.updateMono(e.mono)),e.choices&&(U(),p.updateChoices(e.choices),p.setChoosing()),e.transition&&(U(),p.clearPic(),p.updateTransition(e.transition)),Y(e)},Y=e=>{if(e.endings)e:for(const t of e.endings){for(const e of Object.keys(t.min))if(p.attr(e)<t.min[e])continue e;for(const e of Object.keys(t.max))if(p.attr(e)>t.max[e])continue e;return j(p.ending.show),void(p.finished.value=!0)}},U=()=>{p.clearSay(),p.clearMono(),p.clearTransition(),p.clearChoices()},L=(0,s.iH)(0),A=(0,s.iH)(0),P=(0,s.iH)(C[A.value]),E=()=>{M.incrementIndex(),M.index()>=M.size()&&(z.incrementIndex(),M.update(C[z.index()]),M.resetIndex()),D()},M={scene:e=>P.value[e],size:()=>P.value.length,update:e=>P.value=e,index:()=>L.value,incrementIndex:()=>L.value++,resetIndex:()=>L.value=0,updateIndex:E},z={index:()=>A.value,incrementIndex:()=>A.value++},Z=()=>{p.isChoosing()||M.updateIndex()},N=e=>{if(p.clearChoosing(),e.next.attr)for(const t of Object.keys(e.next.attr))p.incrementAttribute(t,e.next.attr[t]);console.log(JSON.stringify(p.attr())),e.next.show?j(e.next.show):M.updateIndex()},q=["src"];var G={__name:"SceneBackground",setup(e){return(e,t)=>((0,n.wg)(),(0,n.iD)("img",{class:"background",src:(0,s.SU)(p).location()},null,8,q))}},B=a(89);const J=(0,B.Z)(G,[["__scopeId","data-v-35008316"]]);var R=J;const F=["src"];var K={__name:"SceneCharacter",setup(e){return(e,t)=>((0,n.wg)(),(0,n.iD)("img",{class:"character",src:(0,s.SU)(p).pic()},null,8,F))}};const Q=(0,B.Z)(K,[["__scopeId","data-v-5aacf969"]]);var V=Q,X=a(7139);const $={key:0,class:"dialogue"};var ee={__name:"NpcDialogue",setup(e){return(e,t)=>(0,s.SU)(p).say()?((0,n.wg)(),(0,n.iD)("div",$,(0,X.zw)((0,s.SU)(p).say()),1)):(0,n.kq)("",!0)}};const te=(0,B.Z)(ee,[["__scopeId","data-v-88337f5a"]]);var ae=te;const oe={key:0,class:"monologue"};var ne={__name:"CharacterMonologue",setup(e){return(e,t)=>(0,s.SU)(p).mono()?((0,n.wg)(),(0,n.iD)("div",oe,(0,X.zw)((0,s.SU)(p).mono()),1)):(0,n.kq)("",!0)}};const se=(0,B.Z)(ne,[["__scopeId","data-v-e31cbf1a"]]);var ie=se;const re={key:0,class:"choices"},ce=["onClick"];var ue={__name:"CharacterChoices",setup(e){return(e,t)=>(0,s.SU)(p).hasChoices()?((0,n.wg)(),(0,n.iD)("div",re,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(p).choices(),((e,t)=>((0,n.wg)(),(0,n.iD)("span",{class:"choice",key:t,onClick:(0,o.iM)((t=>(0,s.SU)(N)(e)),["stop"])}," ➥ "+(0,X.zw)(e.say),9,ce)))),128))])):(0,n.kq)("",!0)}};const he=(0,B.Z)(ue,[["__scopeId","data-v-14d69f9c"]]);var ye=he;const le={key:0,class:"transition"};var de={__name:"SceneTransition",setup(e){return(e,t)=>(0,s.SU)(p).transition()?((0,n.wg)(),(0,n.iD)("div",le,(0,X.zw)((0,s.SU)(p).transition()),1)):(0,n.kq)("",!0)}};const we=(0,B.Z)(de,[["__scopeId","data-v-12ccac49"]]);var pe=we;const ge={key:0,class:"gameOver"};var ve={__name:"GameOver",setup(e){return(e,t)=>(0,s.SU)(p).finished()?((0,n.wg)(),(0,n.iD)("div",ge,"Game Over! Thanks for playing!")):(0,n.kq)("",!0)}};const me=(0,B.Z)(ve,[["__scopeId","data-v-c9a3d9ba"]]);var fe=me,ke={__name:"GameContainer",setup(e){return(e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"container",onClick:t[0]||(t[0]=(...e)=>(0,s.SU)(Z)&&(0,s.SU)(Z)(...e))},[(0,n.Wm)(R),(0,n.Wm)(V),(0,n.Wm)(ae),(0,n.Wm)(ie),(0,n.Wm)(ye),(0,n.Wm)(pe),(0,n.Wm)(fe)]))}};const be=(0,B.Z)(ke,[["__scopeId","data-v-9539f26c"]]);var Ie=be,xe={__name:"App",setup(e){return D(),(e,t)=>((0,n.wg)(),(0,n.j4)(Ie))}};const Se=xe;var _e=Se;(0,o.ri)(_e).mount("#app")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,s){if(!o){var i=1/0;for(h=0;h<e.length;h++){o=e[h][0],n=e[h][1],s=e[h][2];for(var r=!0,c=0;c<o.length;c++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](o[c])}))?o.splice(c--,1):(r=!1,s<i&&(i=s));if(r){e.splice(h--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[o,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,i=o[0],r=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(c)var h=c(a)}for(t&&t(o);u<i.length;u++)s=i[u],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(h)},o=self["webpackChunkaiadventure"]=self["webpackChunkaiadventure"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(1768)}));o=a.O(o)})();
//# sourceMappingURL=app.744e2a2c.js.map