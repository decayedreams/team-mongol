const data=[
 {t:"春（3〜5月）",p:["草原が緑に変わり、家畜の出産が始まる季節。","風が強く、昼夜の寒暖差が大きい。人は少なめで料金も手頃。","おすすめ：ハラホリン、オルホン渓谷。"]},
 {t:"夏（6〜8月）",p:["最も暖かく緑が美しい季節。観光客がいちばん多い。","ナーダム、ホブスグルの湖遊び、ゴビのトレッキング。","おすすめ：ホブスグル、ゴビ、アルタイ。"]},
 {t:"秋（9〜10月）",p:["空が澄み、木々が色づく静かな季節。","アルタイの鷲祭り、写真撮影の旅にぴったり。","おすすめ：アルタイ、テレルジ。"]},
 {t:"冬（11〜2月）",p:["とても寒いが晴天が多く、雪の上の旅ができる。","ホブスグルの氷上ツアー、ツァガーン・サル（旧正月）。","おすすめ：ウランバートル、ホブスグル（2〜3月）。"]}
];
const out=document.getElementById('out'),btns=document.querySelectorAll('.tabs button');
function show(k){
  const d=data[k];
  out.innerHTML='<h3></h3>'+d.p.map(()=>'<p></p>').join('');
  out.querySelector('h3').textContent=d.t;
  out.querySelectorAll('p').forEach((e,i)=>e.textContent=d.p[i]);
  btns.forEach(b=>b.setAttribute('aria-pressed',b.dataset.k==k));
}
btns.forEach(b=>b.addEventListener('click',()=>show(+b.dataset.k)));
show(1);
