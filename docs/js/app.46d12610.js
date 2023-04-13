(function(){"use strict";var e={9311:function(e,t,a){var o=a(9242),s=a(3396),n=a(4870);const i=(0,n.iH)({}),r={init:e=>{for(const t of e)i.value[t]=0},get:e=>i.value[e],list:()=>i.value,increment:(e,t)=>i.value[e]+=t},c=(0,n.iH)([]),h=(0,n.iH)([]),u=(0,n.iH)(!1),l=(0,n.iH)(0),y=()=>{h.value.length&&(l.value++,l.value===h.value.length&&(l.value=0,h.value=[],p.clearChoosing()))},d=e=>{l.value=0,h.value=e},p={choices:()=>c.value,hasChoices:()=>c.value.length,updateChoices:e=>c.value=e,clearChoices:()=>c.value=[],isChoosing:()=>u.value,setChoosing:()=>u.value=!0,clearChoosing:()=>u.value=!1,incrementChoiceSeqIndex:y,choiceSeqScene:()=>h.value[l.value],setChoiceSeq:d,hasChoiceSeq:()=>h.value.length},w=()=>!(!p.isChoosing()||(p.incrementChoiceSeqIndex(),!p.hasChoiceSeq()))&&(S(p.choiceSeqScene()),!0),g=e=>{if(e.next.attr){for(const t of Object.keys(e.next.attr))r.increment(t,e.next.attr[t]);console.log(`${JSON.stringify(r.list())}`)}e.next.sequence?(p.setChoiceSeq(e.next.sequence),S(p.choiceSeqScene())):e.next.show?(p.clearChoosing(),S(e.next.show)):(p.clearChoosing(),H.updateIndex())},v=(0,n.iH)(""),k=(0,n.iH)(""),m=(0,n.iH)(""),f=(0,n.iH)(""),b=(0,n.iH)(""),I=(0,n.iH)(!1),x={say:()=>v.value,updateSay:e=>v.value=e,clearSay:()=>v.value="",pic:()=>k.value,updatePic:e=>k.value=e,clearPic:()=>k.value="",location:()=>m.value,updateLocation:e=>m.value=e,mono:()=>f.value,updateMono:e=>f.value=e,clearMono:()=>f.value="",transition:()=>b.value,updateTransition:e=>b.value=e,clearTransition:()=>b.value="",finished:()=>I.value,setFinished:()=>I.value=!0},T=()=>{if(!x.finished()){const e=H.index();H.scene(e)&&S(H.scene(e))}},S=e=>{e.say&&(O(),x.updateSay(e.say)),e.pic&&x.updatePic(e.pic),e.location&&x.updateLocation(e.location),e.mono&&(O(),x.updateMono(e.mono)),e.choices&&(O(),p.updateChoices(e.choices),p.setChoosing()),e.transition&&(O(),x.clearPic(),x.updateTransition(e.transition)),W(e.endings)},W=e=>{if(e)e:for(const t of e){for(const e of Object.keys(t.min))if(r.get(e)<t.min[e])continue e;for(const e of Object.keys(t.max))if(r.get(e)>t.max[e])continue e;return S(t.show),void x.setFinished()}},O=()=>{x.clearSay(),x.clearMono(),x.clearTransition(),p.clearChoices()},Y=(0,n.iH)(0),C=(0,n.iH)(0),R=(0,n.iH)([]),_=(0,n.iH)([]),E=()=>{H.incrementIndex(),H.index()>=H.size()&&(A.incrementIndex(),H.update(_.value[A.index()]),H.resetIndex()),T()},H={init:e=>{_.value=e,H.update(_.value[0])},isInitialised:()=>_.value.length,scene:e=>R.value[e],size:()=>R.value.length,update:e=>R.value=e,index:()=>Y.value,incrementIndex:()=>Y.value++,resetIndex:()=>Y.value=0,updateIndex:E},A={index:()=>C.value,incrementIndex:()=>C.value++},N=()=>{w()||H.updateIndex()},q=["src"];var L={__name:"SceneBackground",setup(e){return(e,t)=>((0,s.wg)(),(0,s.iD)("img",{class:"background",src:(0,n.SU)(x).location()},null,8,q))}},D=a(89);const j=(0,D.Z)(L,[["__scopeId","data-v-0ed2564c"]]);var U=j;const G=["src"];var M={__name:"SceneCharacter",setup(e){return(e,t)=>((0,s.wg)(),(0,s.iD)("img",{class:"character",src:(0,n.SU)(x).pic()},null,8,G))}};const P=(0,D.Z)(M,[["__scopeId","data-v-8a99d56c"]]);var F=P,z=a(7139);const Z={key:0,class:"dialogue"};var B={__name:"NpcDialogue",setup(e){return(e,t)=>(0,n.SU)(x).say()?((0,s.wg)(),(0,s.iD)("div",Z,(0,z.zw)((0,n.SU)(x).say()),1)):(0,s.kq)("",!0)}};const J=(0,D.Z)(B,[["__scopeId","data-v-d9bede04"]]);var K=J;const $={key:0,class:"monologue"};var Q={__name:"CharacterMonologue",setup(e){return(e,t)=>(0,n.SU)(x).mono()?((0,s.wg)(),(0,s.iD)("div",$,(0,z.zw)((0,n.SU)(x).mono()),1)):(0,s.kq)("",!0)}};const V=(0,D.Z)(Q,[["__scopeId","data-v-037a633c"]]);var X=V;const ee={key:0,class:"choices"},te=["onClick"];var ae={__name:"CharacterChoices",setup(e){return(e,t)=>(0,n.SU)(p).hasChoices()?((0,s.wg)(),(0,s.iD)("div",ee,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(p).choices(),((e,t)=>((0,s.wg)(),(0,s.iD)("span",{class:"choice",key:t,onClick:(0,o.iM)((t=>(0,n.SU)(g)(e)),["stop"])}," ➥ "+(0,z.zw)(e.say),9,te)))),128))])):(0,s.kq)("",!0)}};const oe=(0,D.Z)(ae,[["__scopeId","data-v-3a5368da"]]);var se=oe;const ne={key:0,class:"transition"};var ie={__name:"SceneTransition",setup(e){return(e,t)=>(0,n.SU)(x).transition()?((0,s.wg)(),(0,s.iD)("div",ne,[(0,s._)("p",null,(0,z.zw)((0,n.SU)(x).transition()),1)])):(0,s.kq)("",!0)}};const re=(0,D.Z)(ie,[["__scopeId","data-v-07e1f6ae"]]);var ce=re;const he={key:0,class:"gameOver"};var ue={__name:"GameOver",setup(e){return(e,t)=>(0,n.SU)(x).finished()?((0,s.wg)(),(0,s.iD)("div",he,"Game Over! Thanks for playing!")):(0,s.kq)("",!0)}};const le=(0,D.Z)(ue,[["__scopeId","data-v-2291ebec"]]);var ye=le,de={__name:"GameContainer",setup(e){return(e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"container",onClick:t[0]||(t[0]=(...e)=>(0,n.SU)(N)&&(0,n.SU)(N)(...e))},[(0,s.Wm)(U),(0,s.Wm)(F),(0,s.Wm)(K),(0,s.Wm)(X),(0,s.Wm)(se),(0,s.Wm)(ce),(0,s.Wm)(ye)]))}};const pe=(0,D.Z)(de,[["__scopeId","data-v-58a85c37"]]);var we=pe;const ge=(e,t)=>{H.init(e),r.init(t),T()};var ve;(function(e){e["ARROGANT"]="arrogant",e["FRIENDLY"]="friendly",e["TRUST"]="trust",e["COMPETENCY"]="competency"})(ve||(ve={}));const ke="./workplace/boss2.png",me="./workplace/sakura2.png",fe="./workplace/sakura_blush.png",be="./workplace/office.jpg",Ie="./workplace/lunch.jpg",xe="./workplace/park.jpg",Te="./workplace/bar.jpg",Se="./workplace/cinema.jpg",We=[{location:be,pic:ke,say:"Everyone gather around. I have a new colleague to introduce."},{say:"This is Sakura. I hope you can give her a warm welcome."},{pic:me,say:"Hello everyone, my name is Sakura. Please take care of me."},{mono:"Wow, she's so beautiful..."},{mono:"I hope I can have a chance to work with her."},{pic:ke,say:"Taro, I'd like you to take care of introducing Sakura to the team."},{say:"We have a new product launch coming up and I want you two to come up with creative ideas for the marketing campagin."},{choices:[{say:"Yes, sir",next:{}},{say:"Sir, are you sure it's okay to involve a newbie on this?",next:{attr:{[ve.ARROGANT]:1},show:{pic:me,say:"..."}}}]},{pic:ke,say:"Sakura, if you have any questions, please ask Taro."},{pic:me,say:"Yes sir, I will. Nice to meet you Taro."},{choices:[{say:"Nice to meet you. Don't worry, I'll show you how everything is done.",next:{attr:{[ve.ARROGANT]:1}}},{say:"Nice to meet you. I look forward to working together.",next:{attr:{[ve.FRIENDLY]:1}}}]},{pic:me,say:"Thanks."},{transition:"Later..."}],Oe=[{location:be,pic:me,say:"Thank you for all your help getting settled in. When should we start on the marketing campaign project?"},{choices:[{say:"Let's start now. Maybe we can finish before lunch.",next:{}}]},{say:"That sounds good. The boss said we need to come up with creative ideas."},{choices:[{say:"Yes, I've already given it some thought. Look at this...",next:{attr:{[ve.ARROGANT]:1},show:{say:"Oh, that's a really good idea."}}},{say:"That's right. Do you have any ideas?",next:{attr:{[ve.TRUST]:1},show:{say:"I don't know if it's good idea, but I was thinking of this..."}}}]},{transition:"You both discuss the idea together."},{pic:me,say:"Oh no, look at the time. We only have half an hour left."},{choices:[{say:"You're right. Sakura, can you help me to put the details in a powerpoint?",next:{attr:{[ve.TRUST]:1},show:{say:"Sure, you can rely on me!"}}},{say:"Don't worry, our boss likes us to take our time, as long as we do a good job. Let me handle it.",next:{attr:{[ve.COMPETENCY]:1},show:{say:"Okay, sure."}}},{say:"Relax, the boss is never dead serious about dead lines. Get it? Haha.",next:{attr:{[ve.COMPETENCY]:-1},show:{say:"Oh. Haha."}}}]},{transition:"Half an hour later..."},{pic:ke,say:"So, how are the ideas coming along?"},{pic:me,say:"Oh, is it time already?"},{pic:ke,say:"Something wrong?"},{choices:[{say:"Sorry, boss, it was Yuki's fault. He kept coming over to distract us.",next:{attr:{[ve.ARROGANT]:0},show:{pic:me,say:"..."}}},{say:"Sorry, boss, it's my fault. I'll make it up after lunch.",next:{attr:{[ve.COMPETENCY]:-1}}},{say:"Sorry, boss, but I had to train the newbie so I didn't have enough time.",next:{attr:{[ve.TRUST]:-1}}}]},{pic:ke,say:"Oh. Well, that's unfortunate. Let's try and finish by the end of the day, okay?"}],Ye=[{location:Ie,transition:"Your whole team go out for lunch"},{pic:ke,say:"This place is nice. It serves sandwhiches and salads. I hope you all like it."},{say:"So Sakura, how are you settling in to your new role?"},{pic:me,say:"It's very nice, thank you. Everyone is very kind to me."},{pic:ke,say:"That's good to hear. I hope we can all produce amazing work in the future."},{transition:"Everyone orders their lunch."},{pic:me,choices:[{say:"So, what kind of hobbies do you have outside work?",next:{}}]},{say:"I like reading books and practising yoga. How about you?"},{choices:[{say:"Oh? Well, it's good you don't need glasses! Haha!",next:{attr:{[ve.FRIENDLY]:-1},show:{say:"Um.."}}},{say:"I like working out at the gym. Trying to get the perfect bod, yeah!",next:{attr:{[ve.ARROGANT]:1},show:{say:"Wow, you must be very strong!"}}},{say:"I like reading books too. What's your favourite thing to read?",next:{attr:{[ve.FRIENDLY]:1},show:{say:"Oh, I especially like Lord of the Rings"}}}]},{choices:[{say:"So, how do you feel after one morning working? Everything okay?",next:{attr:{[ve.TRUST]:1},show:{say:"It's a lot of work but there are many things to learn."}}},{say:"Have you seen Harry Potter?",next:{attr:{[ve.FRIENDLY]:1},show:{say:"Yes, I love that show."}}},{say:"Did you see the boss' patch pocket? Doesn't it look weird?",next:{attr:{[ve.TRUST]:-1},show:{say:"Oh, I didn't notice. I'll take a closer look next time."}}}]},{transition:"The meal ends with everyone full and happy"},{pic:ke,say:"Alright everyone, now we have a team building event planned. Let's move on over to the park."}],Ce=[{location:xe,transition:"Everyone arrives at the park"},{pic:ke,say:"Okay, listen everyone, the first event will be a relay race. Get in your teams and prepare to race!"},{pic:me,choices:[{say:"Listen everyone. I'm clearly the fastest so I will go last. Sakura, do you want to run first?",next:{attr:{[ve.COMPETENCY]:1},show:{say:"Oh, sure."}}},{say:"Everyone, let's work together. Sakura, are you a fast runner?",next:{attr:{[ve.TRUST]:1},show:{say:"I'm not very fast. I hope I don't drag everyone down."}}},{say:"Sakura, did I tell you before that I work out at the gym?",next:{attr:{[ve.ARROGANT]:1},show:{say:"That's amazing. Our team will win for sure."}}}]},{transition:"You all run the race"},{pic:ke,say:"Wow, Taro's team won! Excellent work, guys!"},{say:"Next is a trust exercise."},{pic:me,choices:[{say:"This exercise is tricky. Let's go slow and take our time. We don't want anyone to get hurt.",next:{attr:{[ve.FRIENDLY]:1},show:{say:"I've done this before. Maybe I can teach you all what to do?"}}},{say:"Hmm, does anyone know how to do this?",next:{attr:{[ve.TRUST]:1},show:{say:"I've done it before. Shall I teach you all what to do?"}}}]},{pic:ke,say:"Wow, you guys are doing great. Just one more activity. Next is a scavenger hunt."},{pic:me,choices:[{say:"Who drew this map? It looks like something a five year old would make. Haha!",next:{attr:{[ve.FRIENDLY]:-1},show:{say:"Oh, sorry, the boss asked me to make it at the last minute."}}},{say:"What's this first picture. Sakura, any ideas?",next:{attr:{[ve.TRUST]:1},show:{say:"It looks like a wombat? Oh, look over there in that tree!"}}}]},{transition:"After a few hours of fun the team building activities finish"},{pic:ke,say:"Great work guys Let's head back to the office."}],Re=[{location:be,transition:"Back at the office"},{pic:ke,say:"Another successful day, everyone. Let's head out to celebrate!"},{location:Te,transition:"Everyone walks to a nearby bar for drinks"},{transition:"You take the opportunity to strike up a conversation with Sakura"},{pic:me,choices:[{say:"Aren't you glad we finished the product launch ideas on time?",next:{attr:{[ve.ARROGANT]:1},show:{say:"Yes! Your idea was definately the best!"}}},{say:"You said before you like yoga. What made you get into that?",next:{attr:{[ve.FRIENDLY]:1},show:{say:"It helps me keep fit. I live in a small apartment so I need some exercise that I can do in a small place."}}}]},{pic:me,say:"So many interesting things happened today."},{choices:[{say:"Did you see the typo in the announcements email? I thought Yuki was winking at me but he was just trying to close the brackets.",next:{attr:{[ve.FRIENDLY]:1},show:{say:"I thought the same thing. It was so funny."}}},{say:"Did you see Yuki during the relay race? He looked like a crab, the way he was running.",next:{attr:{[ve.ARROGANT]:1},show:{say:"Oh? I wasn't really paying attention."}}}]},{say:"Look at the time. I'd better go."},{choices:[{say:"Wait...",next:{}}]},{choices:[{say:"How would you like to go to a movie in the weekend?",next:{show:{say:"Oh.. I don't know..."}}}]},{choices:[{say:"Don't worry, it'll be strictly as friends, I promise!",next:{show:{say:"Hmm, I guess so. What movie do you want to see?"}}}]},{choices:[{say:"How about The Hobbit?",next:{attr:{[ve.TRUST]:1},show:{say:"Oh, I wanted to watch that. Okay!"}}},{say:"How about Avengers?",next:{attr:{[ve.FRIENDLY]:1},show:{say:"I haven't seen that before. I suppose I can try."}}},{say:"How about Pride and Prejudice?",next:{attr:{[ve.COMPETENCY]:-1},show:{say:"A romance movie? Um, okay, we can try that."}}}]},{transition:"The day ends with a successful promise to watch a movie together. Well done."}],_e=[{location:Se,transition:"The weekend arrives and as planned you go to watch a movie with Sakura"},{pic:me,say:"Thanks for coming with me. I had a very nice time."},{say:"Also, there was something else I wanted to tell you."},{endings:[{max:{[ve.ARROGANT]:4,[ve.FRIENDLY]:4,[ve.COMPETENCY]:0},min:{[ve.TRUST]:6},show:{pic:fe,say:"You're very reliable and sweet. Do you want to be my boyfriend?"}},{max:{[ve.ARROGANT]:4},min:{[ve.FRIENDLY]:5},show:{say:"I'm so thankful for how much you've helped me since I started working here. I hope we can stay good friends."}},{min:{[ve.COMPETENCY]:2},max:{},show:{say:"Thanks for being a strong team leader. I will try to work hard from now on."}},{min:{},max:{},show:{say:"I respect you as a work colleague but let's not do anything outside work anymore."}}]}],Ee=[We,Oe,Ye,Ce,Re,_e],He=[ve.ARROGANT,ve.COMPETENCY,ve.FRIENDLY,ve.TRUST],Ae="./island/beach.jpg",Ne="./island/island.jpg",qe="./island/campfire.jpg",Le="./island/shelter.jpg",De="./island/highpoint.jpg",je="./island/player.png",Ue="./island/hiroko.png",Ge="./island/emiko.png",Me=[{location:Ae,transition:"You wake up on the sandy beach of a deserted island. Your head is pounding, and your clothes are wet and torn."},{pic:je,say:"..."},{pic:Ue,say:"Well, look who finally woke up."},{pic:Ge,say:"Are you okay? You were unconscious for a while."},{pic:je,choices:[{say:"Who are you two and what happened?",next:{sequence:[{pic:Ue,say:"I'm Hiroko. We're all stranded here. Our ship got wrecked in a storm, and we ended up on this stupid island."},{pic:Ge,say:"We're lucky to be alive, though. It could've been worse. By the way, I'm Emiko."}]}},{say:"Thank you for helping me. What happened?",next:{sequence:[{pic:Ge,say:"You're welcome. I'm Emiko. We're all stranded here. Our ship got wrecked in a storm, and we ended up on this island."},{pic:Ue,say:"Lucky us. I'm Hiroko"}]}}]},{pic:je,choices:[{say:"Well, this is just great.",next:{sequence:[{pic:Ue,say:"Yeah, it's a dream come true. Stranded on an island with no food, no water, and no way out. I'm thrilled."},{pic:Ge,say:"Hiroko, don't be like that. We need to stay positive."}]}},{say:"We can make the best of this. We can survive and maybe even find a way off this island.",next:{sequence:[{pic:Ge,say:"That's a great attitude. We can work together to survive and maybe even find a way off this island."},{pic:Ue,say:"Yeah, because that's worked out so well for us so far."}]}}]},{pic:je,choices:[{say:"Well, aren't you just a ray of sunshine.",next:{sequence:[{pic:Ue,say:"You're one to talk. Look at you, all bright-eyed and bushy-tailed. You'll learn soon enough that life isn't all rainbows and unicorns."},{pic:Ge,say:"Hiroko, please. Let's try to get along."}]}},{say:"It's okay, we can do this. Let's work together.",next:{sequence:[{pic:Ge,say:"Thank you. We need to stick together if we're going to survive."},{pic:Ue,say:"Fine. But don't expect me to hold your hand through this."}]}}]},{transition:"Emiko, Hiroko and you start to walk through the island"}],Pe=[{location:Ne,pic:Ge,say:"I think we should start looking for food and water. We need to find a source of both if we're going to survive here."},{pic:Ue,say:"Yeah, because that's going to be so easy. This island is a barren wasteland."},{pic:je,choices:[{say:"Are you sure there's anything here to find?",next:{sequence:[{pic:Ge,say:"We have to try. There might be something we can use."},{pic:Ue,say:"Fine. Let's waste our time wandering around this stupid island."}]}},{say:"That's a good plan. Let's split up and search.",next:{sequence:[{pic:Ue,say:"Whatever. Just don't get lost."},{pic:Ge,say:"Great. Let's meet back here in an hour."}]}}]},{transition:"You begin to explore the island to find food and water sources. After finding some supplies you go to meet up with the others"},{location:qe,pic:Ue,say:"This is all we could find? A few coconuts and some questionable-looking berries?"},{pic:Ge,say:"It's better than nothing, Hiroko. We'll find more tomorrow."},{pic:je,choices:[{say:"You're right. We need to conserve our energy and resources.",next:{sequence:[{pic:Ge,say:"Thank you for understanding. We need to be careful."},{pic:Ue,say:"Whatever. I'm going to try to get some sleep."}]}},{say:"I don't think this will be enough to sustain us for long.",next:{sequence:[{pic:Ue,say:"No kidding. Maybe we should just starve to death now and get it over with."},{pic:Ge,say:"We'll find more tomorrow. Don't worry."}]}}]},{transition:"You all try to get some rest."}],Fe=[{location:Ne,transition:"The next day..."},{pic:je,choices:[{say:"Do you think we're the only ones on this island?",next:{sequence:[{pic:Ue,say:"What, you think there's some secret resort on this island that we haven't found yet?"},{pic:Ge,say:"We don't know what's on this island. It's better to be cautious."}]}},{say:"We need to keep looking. We'll find a way off this island eventually.",next:{sequence:[{pic:Ge,say:"I believe that too. We just need to keep trying."},{pic:Ue,say:"Sure, because that's worked out so well for us so far."}]}}]},{pic:je,choices:[{say:"We need to build a shelter. It'll be safer than sleeping on the beach.",next:{sequence:[{pic:Ue,say:"I guess that's not the worst idea. At least we'll be out of the elements."},{pic:Ge,say:"That's a good idea. Let's get started."}]}},{say:"What if we never get off this island? What do we do then?",next:{sequence:[{pic:Ge,say:"We'll figure something out, Player. We can't give up hope."},{pic:Ue,say:"Great. Another thing to worry about."}]}}]},{transition:"The three of your work together to build a shelter."},{location:Le,pic:Ue,say:"This shelter isn't exactly the Ritz-Carlton."},{pic:Ge,say:"It's better than nothing, Hiroko."},{pic:je,choices:[{say:"I'm glad we have a place to sleep tonight.",next:{sequence:[{pic:Ge,say:"Me too. Thank you for building it."},{pic:Ue,say:"Yeah, yeah. Let's just get some sleep."}]}},{say:"I'm not sure this shelter will hold up in bad weather.",next:{sequence:[{pic:Ue,say:"Great. So we'll just get soaked and freeze to death instead of just freezing to death."},{pic:Ge,say:"We'll reinforce it tomorrow. Don't worry."}]}}]},{transition:"You all try to get a good night's sleep"}],ze=[{location:Le,transition:"Another day has come."},{pic:je,choices:[{say:"Let's start working on a plan to get off this island.",next:{sequence:[{pic:Ge,say:"Yes, let's do it! We can start by exploring more of the island."},{pic:Ue,say:"And what, hope we stumble upon a rescue boat? Good luck with that."}]}},{say:"What's the point? We're stuck here forever.",next:{sequence:[{pic:Ue,say:"That's the spirit. Let's just give up and die here."},{pic:Ge,say:"We can't think like that. We have to keep trying."}]}}]},{pic:je,choices:[{say:"We need to make a signal to attract rescuers.",next:{sequence:[{pic:Ue,say:"Yeah, because that's worked so well for us so far."},{pic:Ge,say:"It's worth a shot. Let's start gathering supplies."}]}},{say:"What if we're stuck here forever? How do we survive long-term?",next:{sequence:[{pic:Ge,say:"We'll figure it out. We have each other."},{pic:Ue,say:"Great. More wandering around this stupid island."}]}}]},{location:Ne,transition:"You all go to gather supplies to make a signal."},{location:De,pic:Ue,say:"This is never going to work."},{pic:Ge,say:"We have to try, Hiroko. It's our best chance."},{pic:je,choices:[{say:"Keep going, guys. We can do this.",next:{sequence:[{pic:Ge,say:"Thank you. We won't give up."},{pic:Ue,say:"Yeah, yeah. Let's just get this over with."}]}},{say:"I don't think this is going to work.",next:{sequence:[{pic:Ue,say:"Gee, you think?"},{pic:Ue,say:"We have to keep trying. We can't lose hope."}]}}]}],Ze=[Me,Pe,Fe,ze],Be=[],Je=e=>((0,s.dD)("data-v-3081b8f6"),e=e(),(0,s.Cn)(),e),Ke={class:"chooser"},$e=Je((()=>(0,s._)("h1",null,"AI Adventures",-1)));var Qe={__name:"StoryChooser",setup(e){const t=()=>{ge(Ee,He)},a=()=>{ge(Ze,Be)},o="./cover.jpg",n="./workplace/cover.jpg",i="./island/cover.jpg";return(e,r)=>((0,s.wg)(),(0,s.iD)("div",Ke,[(0,s._)("img",{src:o}),$e,(0,s._)("div",{class:"stories"},[(0,s._)("img",{onClick:t,src:n,class:"book"}),(0,s._)("img",{onClick:a,src:i,class:"book"})])]))}};const Ve=(0,D.Z)(Qe,[["__scopeId","data-v-3081b8f6"]]);var Xe=Ve,et={__name:"App",setup(e){const t=()=>H.isInitialised();return(e,a)=>t()?((0,s.wg)(),(0,s.j4)(we,{key:0})):((0,s.wg)(),(0,s.j4)(Xe,{key:1}))}};const tt=et;var at=tt;(0,o.ri)(at).mount("#app")}},t={};function a(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,s,n){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],n=e[u][2];for(var r=!0,c=0;c<o.length;c++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[c])}))?o.splice(c--,1):(r=!1,n<i&&(i=n));if(r){e.splice(u--,1);var h=s();void 0!==h&&(t=h)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,s,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,n,i=o[0],r=o[1],c=o[2],h=0;if(i.some((function(t){return 0!==e[t]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(c)var u=c(a)}for(t&&t(o);h<i.length;h++)n=i[h],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},o=self["webpackChunkaiadventure"]=self["webpackChunkaiadventure"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(9311)}));o=a.O(o)})();
//# sourceMappingURL=app.46d12610.js.map