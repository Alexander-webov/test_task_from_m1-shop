$(function () {
  $('.tabs a').click(function () {
    $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
    $(this).parent().siblings().removeClass('active');
    var id = $(this).attr('href');
    $(id).removeClass('hide');
    $(this).parent().addClass('active');
    return false;
  });
  $(document).ready(function () {
    $('.btn-modal').magnificPopup();
  });


  $(".tabs").on("click", ".nav-tab-list__link ", function(){

    $(this).toggleClass("active");

});

  
  $("input[type='radio']").change(function(e){
   $( "select" ).val(e.target.value).selectmenu( "refresh" );
  });



});