$("button").click(function(){
  $.getJSON("mrspartan38.github.io/filehost/data.json", function(result){
    $.each(result, function(i, field){
      $("div").append(field + " ");
    });
  });
});
