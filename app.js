const $ = (id) => document.getElementById(id);
const bn = (n) => String(n).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);
const lessons = {
 intro: `<h2>সংখ্যা পদ্ধতির পরিচিতি</h2><p>সংখ্যা প্রকাশ ও গণনার জন্য ব্যবহৃত নিয়ম, প্রতীক এবং ভিত্তির সমষ্টিকে সংখ্যা পদ্ধতি বলে। কোনো সংখ্যা পদ্ধতির ভিত্তি হলো ওই পদ্ধতিতে ব্যবহৃত মৌলিক অঙ্কের মোট সংখ্যা।</p><div class="note-box"><b>অবস্থানিক সংখ্যা পদ্ধতি:</b> অঙ্কের মান তার অবস্থান বা স্থানীয় মানের ওপর নির্ভর করে। যেমন দশমিক ২৫ = ২×১০ + ৫×১।</div><p><b>প্রচলিত চারটি পদ্ধতি:</b> দশমিক (ভিত্তি ১০; ০–৯), বাইনারি (ভিত্তি ২; ০–১), অক্টাল (ভিত্তি ৮; ০–৭), হেক্সাডেসিমেল (ভিত্তি ১৬; ০–৯ ও A–F)।</p><p>কম্পিউটারের ডিজিটাল সার্কিটে দুটি অবস্থা—ON ও OFF—সহজে প্রকাশ করা যায় বলে বাইনারি পদ্ধতি গুরুত্বপূর্ণ।</p>`,
 conversion: `<h2>সংখ্যা পদ্ধতি রূপান্তর</h2><p>দশমিক থেকে অন্য ভিত্তিতে রূপান্তরের সাধারণ পদ্ধতি হলো ধারাবাহিক ভাগ। প্রতিবার ভাগশেষ লিখে শেষ ভাগশেষ থেকে উল্টো দিকে পড়তে হয়।</p><div class="note-box"><b>উদাহরণ:</b> ২৫₁₀ = ১১০০১₂। কারণ ২৫ = ১৬ + ৮ + ১।</div><p>বাইনারি থেকে দশমিকে যেতে ডান দিক থেকে ২-এর ঘাত দিয়ে প্রতিটি বিট গুণ করে যোগ করতে হয়। যেমন ১১০১₂ = ৮ + ৪ + ০ + ১ = ১৩₁₀।</p><p>বাইনারি থেকে অক্টালে ডান দিক থেকে ৩ বিট এবং হেক্সাডেসিমেলে ৪ বিট করে দলবদ্ধ করা যায়।</p>`,
 binary: `<h2>বাইনারি যোগ ও বিয়োগ</h2><p>বাইনারি যোগের নিয়ম: ০+০=০, ০+১=১, ১+০=১ এবং ১+১=১০ (যোগফল ০, হাতে ১)।</p><div class="note-box"><b>উদাহরণ:</b><br>  ১০১১₂<br>+ ০১০১₂<br>────────<br> ১০০০০₂</div><p>বাইনারি বিয়োগে ০ থেকে ১ বিয়োগ করতে হলে বাম পাশের বিট থেকে ধার নিতে হয়। ধার নেওয়া ১ বর্তমান ঘরে ১০₂ হিসেবে কাজ করে। নিচের সিমুলেটরে নিজে অনুশীলন করুন।</p>`,
 complement: `<h2>১-এর ও ২-এর পরিপূরক</h2><p>১-এর পরিপূরক পেতে প্রতিটি ০-কে ১ এবং প্রতিটি ১-কে ০ করতে হয়। ২-এর পরিপূরক পেতে ১-এর পরিপূরকের সঙ্গে ১ যোগ করতে হয়।</p><div class="note-box"><b>উদাহরণ:</b> ১০১০০১₂ → ১-এর পরিপূরক ০১০১১০₂ → ২-এর পরিপূরক ০১০১১১₂।</div><p>নির্দিষ্ট বিট-দৈর্ঘ্য বজায় রাখা জরুরি।</p>`,
 logic: `<h2>লজিক গেট</h2><p>লজিক গেট হলো ডিজিটাল সার্কিটের মৌলিক উপাদান, যা এক বা একাধিক বাইনারি ইনপুট নিয়ে একটি বাইনারি আউটপুট দেয়।</p><p><b>AND:</b> সব ইনপুট ১ হলে আউটপুট ১। <b>OR:</b> অন্তত একটি ইনপুট ১ হলে আউটপুট ১। <b>NOT:</b> ইনপুটের বিপরীত আউটপুট দেয়।</p><p><b>NAND</b> হলো AND-এর বিপরীত; <b>NOR</b> হলো OR-এর বিপরীত; <b>XOR</b> ইনপুট ভিন্ন হলে ১; <b>XNOR</b> ইনপুট একই হলে ১ দেয়।</p>`,
 digital: `<h2>ডিজিটাল ডিভাইস</h2><p>যে ইলেকট্রনিক যন্ত্র বিচ্ছিন্ন বা নির্দিষ্ট স্তরের সংকেত, সাধারণত ০ ও ১, ব্যবহার করে তথ্য প্রক্রিয়াকরণ করে তাকে ডিজিটাল ডিভাইস বলা হয়।</p><div class="note-box">ডিজিটাল সার্কিটে লজিক গেট, ফ্লিপ-ফ্লপ, কাউন্টার, রেজিস্টার ইত্যাদি ব্যবহৃত হয়।</div><p>ডিজিটাল প্রযুক্তির সুবিধার মধ্যে নির্ভুলতা, তথ্য সংরক্ষণ, দ্রুত প্রক্রিয়াকরণ এবং সহজে পুনরুৎপাদনযোগ্যতা উল্লেখযোগ্য।</p>`
};
document.querySelectorAll("[data-lesson]").forEach(btn => btn.addEventListener("click", () => {
  $("lessonContent").innerHTML = lessons[btn.dataset.lesson] || "";
  $("lessonView").classList.remove("hidden");
  $("lessonView").scrollIntoView({behavior:"smooth",block:"start"});
  localStorage.setItem("safollo-read-" + btn.dataset.lesson, "1");
  updateProgress();
}));
$("closeLesson").addEventListener("click", () => $("lessonView").classList.add("hidden"));
function updateProgress(){
  const keys = Object.keys(lessons);
  const done = keys.filter(k => localStorage.getItem("safollo-read-" + k) === "1").length;
  $("progressPercent").textContent = bn(Math.round(done/keys.length*100)) + "%";
}
updateProgress();

$("convertBtn").addEventListener("click", () => {
  const raw = $("convertInput").value.trim().toUpperCase();
  const base = Number($("fromBase").value);
  const feedback = $("convertFeedback");
  try {
    if(!raw || !/^[0-9A-F]+$/.test(raw)) throw new Error("শুধু বৈধ সংখ্যা লিখুন।");
    const n = parseInt(raw, base);
    if(!Number.isSafeInteger(n) || n < 0) throw new Error("এই ডেমোতে ০ বা ধনাত্মক পূর্ণসংখ্যা দিন।");
    if([...raw].some(ch => parseInt(ch, 16) >= base)) throw new Error("নির্বাচিত ভিত্তির জন্য ইনপুটটি বৈধ নয়।");
    $("conversionResult").innerHTML = [
      ["Binary",n.toString(2)],["Octal",n.toString(8)],["Decimal",String(n)],["Hex",n.toString(16).toUpperCase()]
    ].map(([a,b])=>`<div><small>${a}</small><b>${b}</b></div>`).join("");
    feedback.textContent = "রূপান্তর সফল হয়েছে।";
  } catch(e){ feedback.textContent = e.message; }
});

$("binaryBtn").addEventListener("click", () => {
  const a = $("binA").value.trim(), b = $("binB").value.trim(), op = $("binaryOperation").value;
  try{
    if(!/^[01]{1,8}$/.test(a) || !/^[01]{1,8}$/.test(b)) throw new Error("১–৮ বিটের বৈধ বাইনারি সংখ্যা লিখুন।");
    const x=parseInt(a,2), y=parseInt(b,2), z=op==="add"?x+y:x-y;
    if(z<0) throw new Error("এই সিমুলেটরে ঋণাত্মক ফল দেখানো হয় না।");
    const sign=op==="add"?"+":"−";
    $("binaryResult").innerHTML=`${a}₂ ${sign} ${b}₂ = <b>${z.toString(2)}₂</b> <small>(${z}₁₀)</small>`;
    $("binaryFeedback").textContent=`দশমিক যাচাই: ${x} ${sign} ${y} = ${z}`;
  }catch(e){$("binaryFeedback").textContent=e.message;$("binaryResult").textContent="ফলাফল দেখানো যাচ্ছে না।";}
});

$("complementBtn").addEventListener("click",()=>{
  const s=$("complementInput").value.trim();
  if(!/^[01]{1,16}$/.test(s)){ $("complementFeedback").textContent="১–১৬ বিটের বাইনারি সংখ্যা লিখুন।";return; }
  const ones=[...s].map(x=>x==="0"?"1":"0").join("");
  const twos=(parseInt(ones,2)+1)%(2**s.length);
  const twosStr=twos.toString(2).padStart(s.length,"0");
  $("complementResult").innerHTML=`<p>১-এর পরিপূরক <b>${ones}</b></p><p>২-এর পরিপূরক <b>${twosStr}</b></p>`;
  $("complementFeedback").textContent="একই বিট-দৈর্ঘ্য বজায় রেখে ফল দেখানো হয়েছে।";
});

const gates=["AND","OR","NOT","NAND","NOR","XOR","XNOR"];
function gateValue(g,a,b){switch(g){case"AND":return a&b;case"OR":return a|b;case"NOT":return 1-a;case"NAND":return 1-(a&b);case"NOR":return 1-(a|b);case"XOR":return a^b;case"XNOR":return 1-(a^b);}}
function renderGate(){
  const g=$("gateSelect").value,a=+$("inputA").value,b=+$("inputB").value;
  $("inputBLabel").classList.toggle("hidden",g==="NOT");
  $("gateExpression").textContent=g==="NOT"?"NOT A":`A ${g} B`;
  $("gateOutput").textContent=gateValue(g,a,b);
  const rows=g==="NOT"?[[0],[1]]:[[0,0],[0,1],[1,0],[1,1]];
  const head=g==="NOT"?"<tr><th>A</th><th>Output</th></tr>":"<tr><th>A</th><th>B</th><th>Output</th></tr>";
  $("truthTable").innerHTML=`<table class="truth-table">${head}${rows.map(row=>{const out=gateValue(g,row[0],row[1]||0);const active=row[0]===a&&(g==="NOT"||row[1]===b);return `<tr class="${active?"current":""}">${row.map(v=>`<td>${v}</td>`).join("")}<td><b>${out}</b></td></tr>`}).join("")}</table>`;
}
["gateSelect","inputA","inputB"].forEach(id=>$(id).addEventListener("change",renderGate));renderGate();

const questions=[
 {q:"বাইনারি সংখ্যা পদ্ধতির ভিত্তি কত?",o:["২","৮","১০","১৬"],a:0,e:"বাইনারি পদ্ধতিতে ০ ও ১—দুটি অঙ্ক ব্যবহৃত হয়; তাই ভিত্তি ২।"},
 {q:"(1010)₂-এর দশমিক মান কত?",o:["৮","৯","১০","১২"],a:2,e:"১×৮ + ০×৪ + ১×২ + ০×১ = ১০।"},
 {q:"অক্টাল সংখ্যা পদ্ধতিতে সর্বোচ্চ অঙ্ক কোনটি?",o:["৬","৭","৮","৯"],a:1,e:"অক্টালের ভিত্তি ৮; অঙ্কগুলো ০ থেকে ৭।"},
 {q:"হেক্সাডেসিমেল পদ্ধতিতে A-এর মান কত?",o:["১০","১১","১২","১৫"],a:0,e:"হেক্সাডেসিমেলে A থেকে F যথাক্রমে ১০ থেকে ১৫ বোঝায়।"},
 {q:"১ + ১-এর বাইনারি যোগফল কী?",o:["১০","১১","১","০"],a:0,e:"বাইনারিতে ১+১ = ১০; ০ লিখে ১ হাতে থাকে।"},
 {q:"১-এর পরিপূরক পেতে কী করতে হয়?",o:["সব বিট উল্টাতে হয়","১ যোগ করতে হয়","বিট ডানদিকে সরাতে হয়","সব বিট ১ করতে হয়"],a:0,e:"প্রতিটি ০-কে ১ এবং ১-কে ০ করতে হয়।"},
 {q:"২-এর পরিপূরক কীভাবে পাওয়া যায়?",o:["মূল সংখ্যার সঙ্গে ২ যোগ করে","১-এর পরিপূরকের সঙ্গে ১ যোগ করে","বিট অর্ধেক করে","সব বিট ০ করে"],a:1,e:"প্রথমে ১-এর পরিপূরক, তারপর তার সঙ্গে ১ যোগ করতে হয়।"},
 {q:"AND গেটের আউটপুট ১ হয় কখন?",o:["সব ইনপুট ১ হলে","যেকোনো একটি ১ হলে","সব ইনপুট ০ হলে","ইনপুট ভিন্ন হলে"],a:0,e:"AND গেটে সব ইনপুট ১ হলেই কেবল আউটপুট ১।"},
 {q:"XOR গেটে দুই ইনপুট একই হলে আউটপুট কত?",o:["০","১","১০","অনির্দিষ্ট"],a:0,e:"XOR গেটে ইনপুট দুটি ভিন্ন হলে ১; একই হলে ০।"},
 {q:"(17)₈-এর দশমিক মান কত?",o:["১৫","১৬","১৭","১৮"],a:0,e:"১×৮ + ৭×১ = ১৫।"}
];
let qIndex=0,score=0,answered=false;
function renderQuestion(){
  const q=questions[qIndex];answered=false;
  $("quizCount").textContent=`প্রশ্ন ${bn(qIndex+1)} / ${bn(questions.length)}`;
  $("quizScore").textContent=`স্কোর: ${bn(score)}`;
  $("quizProgress").style.width=`${(qIndex/questions.length)*100}%`;
  $("quizQuestion").textContent=q.q;
  $("quizOptions").innerHTML=q.o.map((o,i)=>`<button class="quiz-option" data-answer="${i}">${["ক","খ","গ","ঘ"][i]}. ${o}</button>`).join("");
  $("quizFeedback").textContent="";
  $("nextQuestion").disabled=true;
  $("nextQuestion").textContent=qIndex===questions.length-1?"ফলাফল দেখুন":"পরবর্তী প্রশ্ন →";
  $("quizSummary").classList.add("hidden");
  document.querySelectorAll("[data-answer]").forEach(btn=>btn.addEventListener("click",()=>chooseAnswer(Number(btn.dataset.answer))));
}
function chooseAnswer(i){
  if(answered)return;answered=true;const q=questions[qIndex];
  document.querySelectorAll("[data-answer]").forEach((btn,j)=>{btn.disabled=true;if(j===q.a)btn.classList.add("correct");if(j===i&&i!==q.a)btn.classList.add("wrong");});
  if(i===q.a)score++;
  $("quizScore").textContent=`স্কোর: ${bn(score)}`;
  $("quizFeedback").textContent=(i===q.a?"সঠিক উত্তর! ":"সঠিক উত্তর: "+q.o[q.a]+". ")+q.e;
  $("nextQuestion").disabled=false;
}
$("nextQuestion").addEventListener("click",()=>{
  if(!answered)return;
  if(qIndex<questions.length-1){qIndex++;renderQuestion();}
  else{
    $("quizProgress").style.width="100%";
    $("quizSummary").classList.remove("hidden");
    $("quizSummary").innerHTML=`<h3>আপনার ফলাফল: ${bn(score)} / ${bn(questions.length)}</h3><p>${score>=8?"চমৎকার! আপনার প্রস্তুতি ভালো।":score>=5?"ভালো চেষ্টা। আরও অনুশীলন করুন।":"আবার পাঠগুলো পড়ে কুইজ দিন।"}</p><p>এই ফলাফল আপনার বর্তমান ব্রাউজারে সংরক্ষিত থাকবে।</p>`;
    localStorage.setItem("safollo-last-score",String(score));
    $("nextQuestion").disabled=true;
  }
});
$("restartQuiz").addEventListener("click",()=>{qIndex=0;score=0;renderQuestion();});
renderQuestion();
$("showCreative").addEventListener("click",()=>{$("creativeAnswer").classList.toggle("hidden");$("showCreative").textContent=$("creativeAnswer").classList.contains("hidden")?"নমুনা সমাধান দেখুন":"সমাধান লুকান";});
$("themeToggle").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("safollo-dark",document.body.classList.contains("dark")?"1":"0");});
if(localStorage.getItem("safollo-dark")==="1")document.body.classList.add("dark");
$("menuToggle").addEventListener("click",()=>$("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=> $("mainNav").classList.remove("open")));
document.querySelectorAll(".placeholder-link").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();alert("এই রিসোর্সের লিংক এখনো যুক্ত করা হয়নি। app.js বা index.html-এ নিজের ভিডিও/PDF লিংক যুক্ত করুন।");}));
