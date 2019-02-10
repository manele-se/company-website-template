function initMap() {

  //location 

  const loc= {lat:37.4419, lng:-122.1430 }; 

  //centered map on a location
  const map = new google.maps.Map(document.querySelector('.map')
  , {
    center: loc,
    zoom: 14
  });

  //marker
  const marker = new google.maps.Marker({ position:loc, map:map}); 
}

//nav transparen on scroll
window.addEventListener('scroll', function(){
  if(window.scrollY > 150){
    document.querySelector('nav').className ='small';
  }else{
    document.querySelector('nav').className ='';
  }
});

//smooth scrolling jQuery
$('#navbar a, .btn').on('click', function(event){
  if(this.hash !== ''){
    event.preventDefault(); 

    const hash = this.hash; 

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});