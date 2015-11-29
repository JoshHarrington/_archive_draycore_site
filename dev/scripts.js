$('section').each(function(index){
  $(this).attr('id', 'section' + index );
//  $(this).children('*:first-child').prepend('<a class="sectionLink" href="#section'+ [index] +'">$</a>')
  $(this).children('*:first-child').prepend('<a class="sectionEmailLink" target="_blank" href="mailto:?subject=The%20Draycore%20Incursion&body=Your%20point%20in%20the%20story%20is%3A%0D%0A%0D%0Ahttp://draycore.com/start.html#section' + [index] + '"><svg class=\"icon icon-email\"><use xlink:href=\"#icon-email\"></use></svg></a>');
});

$('.note .extend').hide();
$('.note>*:first-child').click(function(){
  $('.note .extend').slideToggle();
});