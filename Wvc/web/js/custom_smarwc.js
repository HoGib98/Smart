require(['jquery','niceselect', 'bootstrap','magnificpop','popper', 'domReady!'], function($){




  $(document).click (function (e) {   


   if($(".mage-dropdown-dialog").hasClass('addcartslider'))
   {
    $(".mage-dropdown-dialog").css('display','none');
    $(".mage-dropdown-dialog").removeClass('addcartslider');  
    $('#maincontent').removeClass('translate_cartarea'); 
   }
   else
   {
    if (!$('.minicart-wrapper').hasClass('active'))
    {   
      $('#maincontent').removeClass('translate_cartarea');  
   }
 
   }
   
 
    //  }
     
     
     
      
     
      
 }); 
  $(document).ready(function($){
 
     
   $("#mycart").click(function(e) { 
   
    if($(".mage-dropdown-dialog").hasClass('addcartslider'))
    {
    
     $('#maincontent').removeClass('translate_cartarea');     
     $(".mage-dropdown-dialog").css('display','none');
     $(".mage-dropdown-dialog").removeClass('addcartslider');
    // $("#mycart").prop("onclick",null);
     e.preventDefault();
     e.stopPropagation();     
    }
    else
    {
      $('#maincontent').toggleClass('translate_cartarea');   
    }   
   //e.stopPropagation();
  
    })
// $('#mycart').on('click', function(event) {
//   $('#sidebarcart_custom').toggleClass('visible');
//   $('#maincontent').toggleClass('translate_cartarea');  // alert('here i on my car click funciton');
// });


  /*
 sidebar Js ends Here*/

  $('#account_home').on('click', function(event) {      
  
    $( "#my_account_drop" ).slideToggle( "slow", function() {
    });
    event.preventDefault();
   
     
  });

  $('#pro_review').on('click', function(event) {   
    event.preventDefault();
    $('.review-add').toggleClass('showrev');   
     
  });


  jQuery(".incqt").click(function(e){
    e.preventDefault();
    var qty = jQuery(this).closest("div.figure").find("input");
    var newqty = parseInt(qty.val())+parseInt(1);
    qty.val(newqty);         
    return false;
});


    jQuery(".deccqt").click(function(){
        var qty = jQuery(this).closest("div.figure").find("input");
        var newqty = parseInt(qty.val())-parseInt(1);
        if(newqty < 1){
            return false;
        }
        qty.val(newqty);
         
        return false;

    });
  // type dropdown - start
  // --------------------------------------------------

 
  $('#type-dropdown-btn').on('click', function(event) {  
    $('#cat_seach').toggleClass('tbody-open');
 
    event.preventDefault();
    
     
  });

  $('.allcategory-btn').on('click', function(event) {      
    $('#myDropdown').toggleClass('tbody-open'); 
    event.preventDefault();  
    });



  
  // type dropdown - end
  // 

  $('<div id="thetop"></div><div id="backtotop" style="display: block;"><a href="#" id="scroll"><i class="fa fa-arrow-up"></i></a></div>')
  .prependTo('body');
    // back to top - start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
    
      $('#backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('#backtotop').stop(true, true).fadeOut();
      
    }
  });
  $(function() {
    $("#scroll").on('click', function() {
      $("html,body").animate({
        scrollTop: $("#thetop").offset().top
      }, "slow");
      return false
    })
  });

  var headerId = $(".sticky-header");
  $(window).on('scroll' , function() {
    var amountScrolled = $(window).scrollTop();
    if ($(this).scrollTop() > 150) {
    
      headerId.removeClass("not-stuck");
      headerId.addClass("stuck");
    } else {
      
     headerId.removeClass("stuck");
      headerId.addClass("not-stuck");
    }
  });
   /*SELECT BOX ANIMATIO AND  o'ther*/
  //  $('select').niceSelect(); 
   /* select box animation and other */

 
  });
  return;
 })
 