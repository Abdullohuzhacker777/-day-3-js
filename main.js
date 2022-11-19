var variable = 80;

var score = prompt(
  "DTM - Davlat Test Markazi iltimos to'plagan balizni kiriting"
);
if (score <= 80) {
  alert(`o'qishga kira olmadingiz uzur  sizga ${80 - score} ball yetmaskan `);
} else if (score >= 80 && score < 100) {
  alert(" siz super-kontrakt asosida o'qishga tavsiya qilindingiz ");
  var money = prompt("kontrakt miqdori yiliga 3000$. Qancha puylingiz bor?");
  if (money > 3000) {
    alert(" o'qishga qabul qilindiz.");
  } else {
    alert("o'qishga qabilul qilinmadiz uzur");
  }
} else if (score >= 100 && score < 150) {
  alert(" siz kontrakt asosida qabul qilindizngiz, ");
  var moneytwo = prompt("kontrakt miqdori yiliga 2000$ qancha pulingiz bor?");
  if (moneytwo > 2000) {
    alert("o'qishga qabul qilindiz.");
  } else {
    alert("o'qishga qabilul qilinmadiz uzur");
  }
} else if (score >= 150 && score < 180) {
  alert(" grant asosida o'qishga qabul qilindiz. ");
  alert(`tabiriklaymiz siz ${score} bal bilan girnatga qabul qilindiz`);
} else if (score >= 180) {
  alert(
    " uzur sizda miqdoridan ortiq ball to'plagan ekaansiz siz pisix bo'ib qolasiz yaqinda  "
  );
}

// console.log(`sizni ballingiz " ${score} " ball.`);
