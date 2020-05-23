$(document).ready(init);

function init() {
  getPaganti();
}


function getPaganti() {

  $.ajax({
    url:"paganti.php",
    method: "GET",
    success: function (data) {
      console.log(data);

      var lista = $("#lista");
      for (var paganti of data) {
        lista.append("<li>" + paganti + "</li>");
      }
    },
    error: function (err) {
      console.error(err);
    }
  });
}
