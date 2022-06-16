// 1st
$(document).ready(function(){

	$('.hover_me').click(function(){
	alert("welcome to my website");
	});

})
// 2nd
$(document).ready(function(){
	// toggle
	$('#toggle').click(function(){
		$('h2').fadeToggle(1000);
	})

})
// 3rd
$(document).ready(function(){

	$('.hover_me').click(function(){
	alert("welcome to my website");
	});

})
// 4rd
$(document).ready(function(){

	$('.panel').click(function(){
		$('.content').slideToggle(1000);
	});	

})
// 5rt
$(document).ready(function(){

	$(".left, .right").find("p").addClass("border");
	$(".before-addback").find("p").addClass("background");
	$(".after-addback").find("p").addBack().addClass("background");


})
// 6
$(document).ready(function(){
$( "#go" ).click(function() {
  $( "#block" ).animate({
    width: "60%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
});
})

// 7

$(document).ready(function(){
	$( ".stop-color" ).bind( "click", function( event ) {
	  var str = "( " + event.pageX + ", " + event.pageY + " )";
	  $( "span" ).text( "Click happened! " + str );
	});
	$( ".stop-color" ).bind( "dblclick", function() {
	  $( "span" ).text( "Double-click happened in " + this.nodeName );
	});
	$( ".stop-color" ).bind( "mouseenter mouseleave", function( event ) {
	  $( this ).toggleClass( "over" );
	});
})

// 8

$(document).ready(function(){

	$(".lello").delegate('p', "click", function(){
		$(this).after("<p> Hi Mohiur Rahman, How are you?")
	})

})

$(document).ready(function(){

	$( "form" ).submit(function( event ) {
 	 event.preventDefault();
});

})

// 9

$(document).ready(function(){
$( ".thhhh" ).click(function ( event ) {
  $( "*" ).removeClass( "hilite" );
  var kids = $( event.target ).children();
  var len = kids.addClass( "hilite" ).length;
 
  $( "#results span" ).first().text( len );
  $( "#results span" ).last().text( event.target.tagName );
 
  event.preventDefault();
});
})

// 10

$(document).ready(function(){

	$("thhhh").click(function( event){
	$("*").removeClass("hilite");

	})

})

// 11

$(document).ready(function(){

	$( "#start-1" ).click(function() {
  var myDiv = $( "div" );
  myDiv.show( "slow" );
  myDiv.animate({
    left:"+=200"
  }, 5000 );
 
  myDiv.queue(function() {
    var that = $( this );
    that.addClass( "newcolor" );
    that.dequeue();
  });
 
  myDiv.animate({
    left:"-=200"
  }, 1500 );
  myDiv.queue(function() {
    var that = $( this );
    that.removeClass( "newcolor" );
    that.dequeue();
  });
  myDiv.slideUp();
});
 
$( "#stop-1" ).click(function() {
  var myDiv = $( "div" );
  myDiv.clearQueue();
  myDiv.stop();
});
});

// 12


$(document).ready(function(){
	$('.paragraph').click(function(){
		$(this).hide();
	});
});

// 13

$(document).ready(function(){
	$(".input").focus(function(){
$(this).css("background-color", "yellow");
	});
	$(".input").blur(function(){
		$(this).css("background-color", "green");
	});
})

// 14
$(document).ready(function(){
  $(".p-p").on({
    mouseover: function(){
      $(this).css("background-color", "lightgray");
    },  
    dblclick: function(){
      $(this).css("background-color", "#FFCCCB");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }  
  });
});

// 15
$(document).ready(function(){
  $("#hide").click(function(){
    $(".hide-show").hide();
  });
  $("#show").click(function(){
    $(".hide-show").show();
  });
});

// 16
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});

// 17
$(document).ready(function(){
	 $(".button").click(function(){
    $("#div4").fadeToggle();
    $("#div5").fadeToggle("slow");
    $("#div6").fadeToggle(3000);
  });
});

// 18

$(document).ready(function(){
  $("button").click(function(){
    $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
  });
});

// 19
$(document).ready(function(){
  $("button").click(function(){
    alert($("#moshiur").attr("href"));
  });
});

// 20

$(document).ready(function(){
  $("#btn1").click(function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
  });
});

// 21

$( "button" ).click(function() {
  $( "div.first" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
  $( "div.second" ).slideUp( 300 ).fadeIn( 400 );
});

// 22

$( ".pp" )
  .find( "span" )
  .end()
  .css( "border", "2px red solid" );

// 22

$( "button" ).click(function( event ) {
  return "hey";
});
$( "button" ).click(function( event ) {
  $( ".dis-event" ).html( event.result );
});

// 23

$( "button" ).click(function( event ) {
  return "hey";
});
$( "button" ).click(function( event ) {
  $( "p" ).html( event.result );
});

// 24

$( ".input" ).focus(function() {
  $( this ).next( "span" ).css( "display", "inline" ).fadeOut( 1000 );
});

// 25

$( "div:has(p)" ).addClass( "test" );

// 26

$( "li" )
  .odd()
    .hide()
  .end()
  .even()
    .hover(function() {
      $( this )
        .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
});

// 27

$( "button" ).click( function() {
  var value,
    div = $( "div" )[ 0 ];
  switch ( $( "button" ).index( this ) ) {
  case 0 :
    value = jQuery.data( div, "blah" );
    break;
  case 1 :
    jQuery.data( div, "blah", "hello" );
    value = "Stored!";
    break;
  case 2 :
    jQuery.data( div, "blah", 86 );
    value = "Stored!";
    break;
  case 3 :
    jQuery.removeData( div, "blah" );
    value = "Removed!";
    break;
  }
  $( "span" ).text( "" + value );
});

// 28
$(document).ready(function(){

$( "b" ).append( "" + jQuery.type( /test/ ) );
});

// 29
$( "#target" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
  }
  xTriggered++;
  var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
  $.print( msg, "html" );
  $.print( event );
});
 
$( "#other" ).click(function() {
  $( "#target" ).keypress();
});

// 30

$(document).ready(function() {

	$( ".ul-li" ).last().addClass( "highlight" );

});

// 31

$( ".pppppp-peragraph" )
  .mouseup(function() {
    $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
  })
  .mousedown(function() {
    $( this ).append( "<span style='color:#00f;'>Mouse down.</span>" );
});


// 32

$( "input[id][name$='man']" ).val( "only this one" );

// 33

$( "button[disabled]" ).next().text( "this button is disabled" );

// 34

$( "#term-2" )
  .nextUntil( "dt" )
    .css( "background-color", "red" );
var term3 = document.getElementById( "term-3" );
$( "#term-1" )
  .nextUntil( term3, "dd" )
    .css( "color", "green" );

// 35
function flash() {
  $( "div" ).show().fadeOut( "slow" );
}
$( "#bind" ).click(function() {
  $( "body" )
    .on( "click", "#theone", flash )
    .find( "#theone" )
      .text( "Can Click!" );
});
$( "#unbind" ).click(function() {
  $( "body" )
    .off( "click", "#theone", flash )
    .find( "#theone" )
      .text( "Does nothing..." );
});

// 36

$( "li.item-a" ).offsetParent().css( "background-color" );

// 37

$( "p" ).parent( ".selected" ).css( "background", "yellow" );

// 38

$( "<b></b>" ).html( $( ":root" )[ 0 ].nodeName ).appendTo( "#log" );

// 39
$( "button" ).click(function() {
  $( this ).parent().slideUp( "slow", function() {
    $( "#msg" ).text( $( "button", this ).text() + " has completed." );
  });
});

// 40
$( "button" ).first().click(function() {
  update( $( "span" ).first() );
});
 
$( "button" ).last().click(function() {
  $( "button" ).first().trigger( "click" );
  update( $( "span" ).last() );
});

// 41

function flash() {
  $( "div" ).show().fadeOut( "slow" );
}
$( "#bind" ).click(function() {
  $( "body" )
    .on( "click", "#theone", flash )
    .find( "#theone" )
      .text( "Can Click!" );
});
$( "#unbind" ).click(function() {
  $( ".body" )
    .off( "click", "#theone", flash )
    .find( "#theone" )
      .text( "Does nothing..." );
});

// 42

$curr = $( "#start" );
$curr.css( "background", "#f99" );
$( ".go-button" ).click(function() {
  $curr = $curr.prev();
  $( ".bb-bb" ).css( "background", "" );
  $curr.css( "background", "#f99" );
});

// 43

 
function showIt() {
  var n =div.queue( "fx" );
  $( "span" ).text( n.length );
  setTimeout( showIt, 100 );
}
 
runIt();
showIt();

// 44

$( ".perapp" ).clone().appendTo( document.body );
$( ".perapp" ).clone().appendTo( document.body );
$( ".perapp" ).clone().appendTo( document.body );
$( window ).scroll(function() {
  $( ".fiaoh" ).css( "display", "inline" ).fadeOut( "slow" );
});

// 45

$(document).ready(function(){

 $( "span" ).text( a.join( "" ) );
 
disp( $( ".one-two-three" ).toArray().reverse() );

});

// 46
$( "p" ).wrapInner( "<b></b>" );

// 47

function showWidth( ele, w ) {
  $( "div" ).text( "The width for the " + ele + " is " + w + "px." );
}
$( "#getp" ).click(function() {
  showWidth( "paragraph", $( "p" ).width() );
});
$( "#getd" ).click(function() {
  showWidth( "document", $( document ).width() );
});
$("#getw").click(function() {
  showWidth( "window", $( window ).width() );
});

// 48

$( ".hellop:visible" ).click(function() {
  $( this ).css( "background", "yellow" );
});
$( "button" ).click(function() {
  $( ".hellop:hidden" ).show( "fast" );
});

// 49
$( "#old" ).click(function() {
  $( "input" ).trigger( "focus" );
});
$( "#new" ).click(function() {
  $( "input" ).triggerHandler( "focus" );
});
$( "input" ).focus(function() {
  $( "<span>Focused!</span>" ).appendTo( "body" ).fadeOut( 1000 );
});

// 50

function aClick() {
  $( "div" ).show().fadeOut( "slow" );
}
$( "#bind" ).click(function() {
  $( "#theone" )
    .bind( "click", aClick )
    .text( "Can Click!" );
});
$( "#unbind" ).click(function() {
  $( "#theone" )
    .unbind( "click", aClick )
    .text( "Does nothing..." );
});