(function() {

  $(document).ready(function(){
  	$('.page-id-12 h2').click(function(){
  		$(this).toggleClass('active');
  		$(this).next('div.hidden').slideToggle(300);
  	});
  });

  if ( document.location.pathname.indexOf('contact.html') > -1 )
    $('#menu-item-19').addClass('current-menu-item');

  if ( document.location.pathname.indexOf('guidance.html') > -1 )
    $('#menu-item-20').addClass('current-menu-item');

  if ( document.location.pathname.indexOf('lectures_and_workshops.html') > -1 )
    $('#menu-item-21').addClass('current-menu-item');

  if ( document.location.pathname.indexOf('on_the_treatment.html') > -1 )
    $('#menu-item-22').addClass('current-menu-item');

  if ( document.location.pathname.indexOf('index.html') > -1 )
    $('#menu-item-23').addClass('current-menu-item');

})();