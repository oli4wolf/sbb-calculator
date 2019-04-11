GIRUNO_PRICE = 33793103;
GBT_LAENGE_M = 57090;
TWINDEXX_PRICE = 30645161.29;
GBT_PRICE = 12200000000;
GBT_M_PRICE = GBT_PRICE / GBT_LAENGE_M
GA_PRICE_1KL = 6300;
GA_PRICE_2KL = 3860;

function validateForm() {

  var fte = document.forms["fteForm"]["fte"].value;
  var days = document.forms["fteForm"]["days"].value;
  var cost = document.forms["fteForm"]["cost"].value;
  var chf = document.forms["fteForm"]["chf"].value;

  if (chf !== undefined && chf !== null && chf !== "") {
    document.getElementById("result").innerHTML = 'Das macht dann: ' + (chf * 1000) + ' CHF';
    loadGiruno(chf * 1000);
    console.log(chf * 1000);
  } else if (fte !== undefined && fte !== null && fte !== "" &&
    days !== undefined && days !== null && days !== "" &&
    cost !== undefined && cost !== null && cost !== "") {

    var result = (fte * days * (cost * 8));

    document.getElementById("result").innerHTML = 'Das macht dann: ' + result + ' CHF';
    loadGiruno(result);
    console.log(result);
  } else {
    document.getElementById("result").innerHTML = 'Missing parameters';
  }
}


function loadGiruno(price) {
  var id = "gbt";
  var image = document.getElementById(id);

  Loadgo.resetprogress(image);

  var anzahl_girunos = (price / GIRUNO_PRICE) * 100;
  var meter_gbt = (price / GBT_M_PRICE);
  var gbt_prozent = (meter_gbt/GBT_LAENGE_M)*100;
  var ga_1kl = (price / GA_PRICE_1KL);
  var ga_2kl = (price / GA_PRICE_2KL);

  document.getElementById("gbt-text").innerHTML = ('Das macht ' + meter_gbt.toFixed(2) + 'm vom GBT');
  document.getElementById("gbt-prozent-text").innerHTML = ('Das macht ' + gbt_prozent.toFixed(2) + '% vom GBT');
  document.getElementById("giruno-text").innerHTML = ('Das macht ' + anzahl_girunos.toFixed(2) + ' % eines Girunos');
  document.getElementById("ga2-text").innerHTML = ('Das macht ' + ga_2kl.toFixed(2) + 'GAs der zweiten Klasse.');
  document.getElementById("ga1-text").innerHTML = ('Das macht ' + ga_1kl.toFixed(2) + 'GAs der ersten Klasse');

  Loadgo.setprogress(image, gbt_prozent);
}
