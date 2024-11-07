$("button").click(function(){
  $.getJSON("https://mrspartan38.github.io/filehost/data.json", function(result){
    $.each(result, function(i, field){
      $("div").append(field + " ");
    });
  });
});
