var callBackGetSuccess = function(data) {
  console.log("donnees api", data)
  //alert("Meteo temp  : "  + data.main.temp);
  var element = document.getElementById("zone_meteo");
  element.innerHTML = "La temperature est de " + data.main.temp;
}


function buttonClickGET() {
  var queryLoc = document.getElementById("queryLoc").value;

  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + queryLoc + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

  $.get(url, callBackGetSuccess).done(function() {
      //alert( "second success" );
    })
    .fail(function() {
      alert("error");
    })
    .always(function() {
      //alert( "finished" );
    });
}
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" ></script> < /head> <
body >
  <div id="photoSlideWarp">
	<div id="photoSlide">
		<div id="photo1"><div><h2>Titre 1</h2></div></div>
		<div id="photo2">&nbsp;</div>
		<div id="photo3">&nbsp;</div>
		<div id="photo4">&nbsp;</div>
	</div><!--photoSlide-->
</div> < !--photoSlideWarp-- >
  <input id="btStop" type="button" value="Stop" /> <
  input id = "btLeft"
type = "button"
value = "Slide to left" / >
  <input id="btRight" type="button" value="Slide to right" /> <
  script type = "text/javascript" >
  <!--
$(document).ready(function(){
	function cSlideShow(id, autoStart){
		var me = this;
		// variables
		me.id = id;
		me.slideWidth = $("#"+me.id+" > div:first").width();
		me.posMaxX = me.slideWidth*1.5;
		me.posX = me.slideWidth/2;
		me.scrollSpeed = 1000;
		me.scrollInterval = 5000;
		me.scrollLeft = 1;
		me.scroll = 0;
		me.intervalObj = '';
		me.functionAfter = '';
		me.functionBefore = '';
		// initialise les limites
		me.init = function(){
			var p = $("#"+me.id).parent().width();
			var d = $("#"+me.id).children().size()*me.slideWidth
			if(p<d) me.posX = Math.abs(me.slideWidth-(p-me.slideWidth)/2);
			else me.posX = 0;
			me.posMaxX = me.posX+me.slideWidth;
			$("#"+me.id).css({marginLeft:-me.posX, width: d});
		}
		// démarre l'animation et réinitialise l'objet d'interval
		me.animStart = function(play){
			me.animStop();
			me.intervalObj = setInterval(me.animPrepare, me.scrollInterval);
			if(play) me.anim();
		}
		// arrête l'animation
		me.animStop = function(){
			clearInterval(me.intervalObj);
		}
		// animation vers la gauche
		me.animToLeft = function(){
			if(me.scrollLeft==0) $("#"+me.id).css({marginLeft:-me.posX}).append($("#"+me.id+" > div:first"));
			me.scrollLeft = 1;
			me.animPrepare();
		}
		// animation vers la droite
		me.animToRight = function(){
			if(me.scrollLeft==1) $("#"+me.id).css({marginLeft:-me.posMaxX}).prepend($("#"+me.id+" > div:last"));
			me.scrollLeft = 0;
			me.animPrepare();
		}
		// prepare l'animation
		me.animPrepare = function(){
			if(me.functionBefore) me.functionBefore();
			else me.animStart(1);
		}
		// gère l'animation
		me.anim = function(){
			if(me.scroll) return 0;
			me.scroll = 1;
			if(me.scrollLeft){
				$("#"+me.id).animate({marginLeft:-me.posMaxX},me.scrollSpeed,function(){
					$(this).css({marginLeft:-me.posX}).append($("#"+me.id+" > div:first"));
					if(me.functionAfter) me.functionAfter();
					me.scroll = 0;
				})
			}else{
				$("#"+me.id).animate({marginLeft:-me.posX},me.scrollSpeed,function(){
					$(this).css({marginLeft:-me.posMaxX}).prepend($("#"+me.id+" > div:last"));
					if(me.functionAfter) me.functionAfter();
					me.scroll = 0;
				})
			}
		}
		// renvoi l'id du slide central, le second pour le défilement à gauche sinon le 3ème
		me.getCurrentSlideId = function(){
			return $("#"+me.id+" > div:nth-child("+(me.scrollLeft ? 2:3)+")").attr('id');
		}
		// si l'utilisateur agrandit la fenêtre, on recalcule les limites
		$(window).resize(function(){
			me.init();
		});
		me.init();
		// place le dernier élément au début
		$("#"+me.id).prepend($("#"+me.id+" > div:last"));
		// démarre l'animation si autoStart!=0
		if(autoStart!=0) me.animStart();
	}

	// initialise l'objet
	var s = new cSlideShow('photoSlide');
	// initialise les boutons
	$("#btStop").click(function(){
		if($(this).prop('value')=='Start'){
			s.animStart();
			$(this).prop('value', 'Stop');
		}else{
			s.animStop();
			$(this).prop('value', 'Start');
		}
	});
	$("#btLeft").click(function(){
		s.animToLeft();
		$("#btStop").prop('value', 'Stop');
	});
	$("#btRight").click(function(){
		s.animToRight();
		$("#btStop").prop('value', 'Stop');
	});
	
});
-->
</script>