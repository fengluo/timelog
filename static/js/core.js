$(function(){
  var tags=new $.TextboxList('#tags_input',{unique:true, plugins:{autocomplete:{}}});
  
  $.ajax({
    url:'/tagsautocomplete',
    dataType:'json',
    success: function(r){
      tags.plugins['autocomplete'].setValues(r);
    }
  });

  
  $('#date_input').datepicker();
  
  
  
  
});