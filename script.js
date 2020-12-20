function Kaydet() {
  var data = document.getElementById('data1');
  var data2 = data.value.split('.');
  //var data4 = data.replace('.|,|?','');
  var data3 = data.value.split(' ');
  var html = ''
  console.log(data3);
  for (d in data3) {
    html += "<span class='kelime'>" + data3[d] + "</span>";
  }
  document.getElementById('sonuc').innerHTML = html;
  var kelimeSayisi = data3.length;
  var cumleSayisi = data2.length;
}



/* function Kaydet() {
  var data = document.getElementById('data1');
  //console.log(data);
  console.log("sonu: " + data.value);
  var obj1 = data.value.split(' ');
  var html = ''
  console.log(obj1);
  for (obj in obj1) {
    html += "<span class='kelime'>" + obj1[obj] + "</span>";
  }
  document.getElementById('sonuc').innerHTML = html;
  var kelimeSayisi = obj1.length;
  document.getElementById('ks').innerHTML = kelimeSayisi;
} */


Kaydet();

var baglaclar = ['ve', 'ile', 'ancak', 'fakat', 'ama'];
