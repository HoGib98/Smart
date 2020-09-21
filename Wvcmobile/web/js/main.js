// app/design/frontend/Namespace/themename/web/js/main.js
require(['jquery', 'domReady!'], function ($) {
 

//var getUrl = window.location;
//var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
//Live site 
var baseUrl = location.protocol + '//' + location.host + '/';
getcat('sel_make', 5);  
// $('select').niceSelect();
/* call this funtion to lock the values*/
  var addtogarage = baseUrl+'/wwcentral/ajax/LockPartFinder';
      var data = {id:'seletedotions'};


      $.ajax({
          url: addtogarage,
          dataType: 'json',
          type: 'POST',
          data: data,
          success: function (response) {

if(response.lock=='true')
{    
  getcat('sel_make', 5);    
  var obj = jQuery.parseJSON(response.lockoptions); 
  var filgarage= { 1: 'sel_make', 2: 'sel_model',3: 'sel_gen',4: 'sel_sub'};
  var count=4;
  
   $.each(obj, function(key,value ) {         
      //$("."+filgarage[key]).val(239).change();
      

     // alert(value);
      var a = parseInt(key);   
      //$("."+filgarage[key]).val(value);  
     // $("."+filgarage[key]).prop('disabled',true); 
      //$("."+filgarage[a+1]).prop('disabled',true); 
     // $(".addtogarage").prop('disabled',true);
      
          
      getcat(filgarage[a+1], value);
     
    
  });    
  $.each(filgarage, function(key,value ) {
      $("."+value).prop('disabled',true); 

  })

  $(".addtogarage").prop('disabled',true); 
  $(".garcounter").empty();
  $(".garcounter").append(response.count);                    
  //console.log(response);

 
  
 var url="<a href="+ baseUrl+"/wwcentral/ajax/deletefinderentry?customerid="+response.customerid+">Remove</a>"; 
//  alert(url);
  $(".filters_garage" ).append("<p>"+response.category+url+"</p>");
 // alert('here i have to update the selected values');
  
 
}
else
{
   
  getcat('sel_make', 5);
 
}
              // filters_garage
             // console.log(response);
              

          },
          error: function (response) {
            
             // alert('here in error');

          }
      });
      //console.log(data);

        /* call this funtion to lock the values ends*/


 

  /* common funntion to call the sub ctategories*/
  function getcat(element, catid) {
      var partfinderurl =  baseUrl+'/wwcentral/ajax/partfinder';
      var data = {
          id: catid
      };


      $.ajax({
          url: partfinderurl,
          dataType: 'json',
          type: 'POST',
          data: data,
          success: function (response) {
              var len = response.length;
              if (response.status != 'empty') {
                  $("." + element).empty();
                  $("." + element).append('<option value="-1" data-display="Select Make">Nothing</option>');
                  for (var i = 0; i < len; i++) {
                      var id = response[i]['value'];
                      var name = response[i]['name'];
                      var dred = response[i]['dataredirect'];
                      $("." + element).append("<option value='" + id + "' data-redirect='" + dred + "'>" + name + "</option>");
                  }

               
                  
              }
            //  $('select').niceSelect('update');
              //$("#"+element).niceSelect();				


              //console.log(response.status);

          },
          error: function (response) {



          }
      });



  }

  /* common funntion to call the ctategories*/
  /* content seach modal*/


      

 
  
  $(".sel_make").change(function () {
     // alert('yes i am am iniited');
     //alert($(this).val());
      var catid = $(this).val();
      if (catid != -1 && (catid > 0)) {
          var eleid = 'sel_model';
          getcat(eleid, catid);
          $(".sel_make").val($(this).val());
      } else {
          $(".sel_make").val($(this).val());


          $(".sel_model").empty();
          $(".sel_model").append('<option value="-1" data-display="Select Model">Nothing</option>');
          $(".sel_gen").empty();
          $(".sel_gen").append('<option value="-1" data-display="Select Generation">Nothing</option>');
          $(".sel_sub").empty();
          $(".sel_sub").append('<option value="-1" data-display="Select Sub Models">Nothing</option>');
         // $('select').niceSelect('update');

      }


      // alert(catid);               
  });

  $(".sel_model").change(function () {
      var catid = $(this).val();
      if (catid != -1 && (catid > 0)) {

          var eleid = 'sel_gen';
          getcat(eleid, catid);
          $(".sel_model").val($(this).val());

      } else {
          $(".sel_model").val(-1);
          $(".sel_gen").empty();
          $(".sel_gen").append('<option value="-1" data-display="Select Generation">Nothing</option>');
          $(".sel_sub").empty();
          $(".sel_sub").append('<option value="-1" data-display="Select Sub Models">Nothing</option>');
         // $('select').niceSelect('update');


      }

      // alert(catid);               
  });

  $(".sel_gen").change(function () {
      var catid = $(this).val();
      if (catid != -1 && (catid > 0)) {
          var eleid = 'sel_sub';
          getcat(eleid, catid);
          $(".sel_gen").val($(this).val());
      } else {
          $(".sel_gen").val(-1);
          $(".sel_sub").empty();
          $(".sel_sub").append('<option value="-1" data-display="Select Sub Models">Nothing</option>');
          //$('select').niceSelect('update');

      }


  });

  $(".sel_sub").change(function () {
      var catid = $(this).val();
      if (catid != -1 && (catid > 0)) {
         
          $(".sel_sub").val($(this).val());
      } else {
          $(".sel_sub").val(-1);             
          

      }
      //$('select').niceSelect('update');
      

  });




  

  $(".addtogarage").click(function () {
     
      var addtogarage =  baseUrl+'/wwcentral/ajax/Addtogarage';
      var data = jQuery(".garage").serializeArray();
 
      $.ajax({
          url: addtogarage,
          dataType: 'json',
          type: 'POST',
          data: data,
          success: function (response) {
              //alert('here in success');
              //console.log(response);
              if(response.url!='empty')
              {
                 //console.log(response.stilloptions);

                
              window.location.href =response.url;  


              }
              else
              {
                    alert("Please Select atleast option");
              }

          },
          error: function (response) {
            
             // alert('here in error');

          }
      });
      //console.log(data);

  })

});