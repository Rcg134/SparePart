
 $(document).ready(function(){ 
      Getsparepartslist();


      var Name = sessionStorage.getItem("name");;

      if (Name != 'admin'){
        $('#btnAddItem').hide()
        
      }
      else{
         $('#btnAddItem').show()
      }




     }); 

 


 function Getsparepartslist(){
     UIBlocker();
    $('#tblspareparts').DataTable().destroy();
         $.ajax({url:"../PHP/SparePartsController/Select.php", 

         success:function(dataabc){      

                     $("#tbodyspareparts").html(dataabc);     


                      $('#tblspareparts').DataTable({
                           'paging': true,
                           'lengthChange': true,
                           'searching': true,
                           'ordering': true,
                           'info': true,
                           'autoWidth': true,
                           "iDisplayLength": 5,
                           "aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]]
                      });
                      RemoveUIBlocker();
                 
         },
          error: function (xhr, ajaxOptions, thrownError){
               RemoveUIBlocker();
              alert(thrownError);
             } 
         }); 
 }








//Click button Image
$(document).on('click', '#btnimg', function () {
 
   ShowImage("../PHP/SparePartsController/SelectImage.php",$(this).closest("tr").find('td:eq(0)').text())

});


//Click button delete
$(document).on('click', '#btnDeleteSP', function () {
   $('#Deletemodal').modal('show'); 
   $('#DeleteID').text('');
   $('#DeleteID').text($("#LineID").text());
});





//Click button update
$(document).on('click', '#btnupdateSP', function () {
   $("#btnupdateyes").fadeIn();
   $("#btnDeleteSP").fadeIn();
   
   $("#btnadditemyes").fadeOut();

   $("#LineID").text($(this).closest("tr").find('td:eq(0)').text())
   $("#BU").val($(this).closest("tr").find('td:eq(2)').text())
   $("#PKG").val($(this).closest("tr").find('td:eq(3)').text())
   $("#DESCR").val($(this).closest("tr").find('td:eq(4)').text())
   $("#DRAWPART").val($(this).closest("tr").find('td:eq(5)').text())
   $("#SID").val($(this).closest("tr").find('td:eq(6)').text())
   $("#PN").val($(this).closest("tr").find('td:eq(7)').text())
   $("#Rock").val($(this).closest("tr").find('td:eq(8)').text())
   $("#Level").val($(this).closest("tr").find('td:eq(9)').text())
   $("#Icolumn").val($(this).closest("tr").find('td:eq(10)').text())
   $("#Irow").val($(this).closest("tr").find('td:eq(11)').text())
   ShowImageUpdate("../PHP/SparePartsController/SelectImageUpdate.php",$(this).closest("tr").find('td:eq(0)').text())


});








$("#btnadditemyes").click(function () {


         var BU = $('#BU').val();
         var PKG = $('#PKG').val();
         var DESCR = $('#DESCR').val();
         var DRAWPART = $('#DRAWPART').val();
         var SID = $('#SID').val();
         var SID = $('#Rock').val();
         var SID = $('#Level').val();
         var SID = $('#Icolumn').val();
         var SID = $('#Irow').val();
         var PN = $('#PN').val();

      
      if(BU!="" && PKG!=""  && DESCR!=""  && DRAWPART!=""  && SID!=""  && PN!=""){
             InserUpdateData("Successfully Inserted","../PHP/SparePartsController/Insert.php");
           }
           else{
                alertfailed('Please fill all the field!');
           }

   }); 



// add button
  $("#btnAddItem").click(function () {
       $('#imageviewfront').attr('src', "");
       $('#imageviewright').attr('src', "");
       $('#imageviewleft').attr('src', "");
       $('#imageviewback').attr('src', "");
       $("#btnupdateyes").fadeOut();
       $("#btnDeleteSP").fadeOut();  
       $("#btnadditemyes").fadeIn();
       $('#SparepartsModal').modal('show'); 
       $('#SpareDetails :text').val('');
       $('#SpareDetails :file').val(null);  
  });


  // edit button
  $("#btnupdateyes").click(function () {
       InserUpdateData("Successfully Updated","../PHP/SparePartsController/update.php");
  });


 //Delete button
  $("#btndeletemodyes").click(function () {
       DelteData("Successfully Deleted","../PHP/SparePartsController/Delete.php",$('#DeleteID').text());
       $('#SparepartsModal').modal('hide');        
   });




   
   $("#imgfilefront").change(function() {
      $("dvimgfront").show();
     displayimg(this,1);
   });
   


   $("#imgfileright").change(function() {
      $("dvimgleft").show();
     displayimg(this,2);
   });




   $("#imgfileleft").change(function() {
      $("dvimgfront").show();
     displayimg(this,3);
   });



   $("#imgfileback").change(function() {
      $("dvimgback").show();
     displayimg(this,4);
   });








//Insert
function InserUpdateData(msg,PHP){
       
        var filefront = $('#imgfilefront').prop("files")[0]; 
        var fileright = $('#imgfileright').prop("files")[0]; 
        var fileleft = $('#imgfileleft').prop("files")[0]; 
        var fileback = $('#imgfileback').prop("files")[0]; 


         var form_data = new FormData();
        
         var BU = $('#BU').val();
         var PKG = $('#PKG').val();
         var DESCR = $('#DESCR').val();
         var DRAWPART = $('#DRAWPART').val();
         var SID = $('#SID').val();
         var Level = $('#Level').val();
         var Rock = $('#Rock').val();
         var Irow = $('#Irow').val();
         var Icolumn = $('#Icolumn').val();
         var PN = $('#PN').val();
         var LineID = $('#LineID').text();



//Checking if image is empty
         if($('#imgfilefront').get(0).files.length === 0){
            form_data.append("noimagefront", "yes");  
         }
         else{
           form_data.append("noimagefront", "no"); 
           form_data.append("filefront", filefront);  
         }

          
        if($('#imgfileright').get(0).files.length === 0){
            form_data.append("noimageright", "yes");  
         }
         else{
           form_data.append("noimageright", "no");
           form_data.append("fileright", fileright);   
         }



          if($('#imgfileleft').get(0).files.length === 0){
            form_data.append("noimageleft", "yes");  
         }
         else{
           form_data.append("noimageleft", "no"); 
           form_data.append("fileleft", fileleft);
         }



          if($('#imgfileback').get(0).files.length === 0){
            form_data.append("noimageback", "yes");  
         }
         else{
           form_data.append("noimageback", "no"); 
           form_data.append("fileback", fileback);
         }

/////////////////



      
        form_data.append("BU", BU)
        form_data.append("PKG", PKG) 
        form_data.append("DESCR", DESCR) 
        form_data.append("DRAWPART", DRAWPART) 
        form_data.append("SID", SID) 
        form_data.append("Rock", Rock) 
        form_data.append("Level", Level) 
        form_data.append("Irow", Irow) 
        form_data.append("Icolumn", Icolumn) 
        form_data.append("PN", PN)
        form_data.append("LineID", LineID)  




            UIBlocker();
               $.ajax({
                url: PHP,
                type: "POST",
                data: form_data,
                contentType: false,
                processData: false,
                cache: false,
                success: function(dataResult){
                     if(dataResult==1){
                          RemoveUIBlocker();   
                          Getsparepartslist()
                          $('#SparepartsModal').modal('hide');                       
                          alertSucess(msg);
      
                     }
                     else{
                          alertfailed(dataResult);
                            RemoveUIBlocker();
                     }             
                },
                error: function (xhr, ajaxOptions, thrownError){
                     RemoveUIBlocker();
                    alertfailed(thrownError);
                   } 
           });

}




function DelteData(msg,PHP,id){
        var form_data = new FormData();
        var LineID = id;

        form_data.append("LineID", LineID)  




            UIBlocker();
               $.ajax({
                url: PHP,
                type: "POST",
                data: form_data,
                contentType: false,
                processData: false,
                cache: false,
                success: function(dataResult){
                      if(dataResult==1){
                          RemoveUIBlocker();   
                          Getsparepartslist()
                          $('#Deletemodal').modal('hide'); 
                          alertSucess(msg);
      
                     }
                     else{
                          alertfailed("Error occured !");
                            RemoveUIBlocker();
                     }             
                },
                error: function (xhr, ajaxOptions, thrownError){
                     RemoveUIBlocker();
                    alertfailed(thrownError);
                   } 
           });

}


function ShowImage(PHP,id){
   var form_data = new FormData();
   var LineID = id;

   form_data.append("LineID", LineID)  




       UIBlocker();
          $.ajax({
           url: PHP,
           type: "POST",
           data: form_data,
           contentType: false,
           processData: false,
           cache: false,
           success: function(dataResult){
                   
            
            $("#ImagePreview").html(dataResult);     

            $('#imagemodal').modal('show');
            RemoveUIBlocker();



           },
           error: function (xhr, ajaxOptions, thrownError){
                RemoveUIBlocker();
               alertfailed(thrownError);
              } 
      });



}


function ShowImageUpdate(PHP,id){
   var form_data = new FormData();
   var LineID = id;

   form_data.append("LineID", LineID)  




       UIBlocker();
          $.ajax({
           url: PHP,
           type: "POST",
           data: form_data,
           dataType:"JSON",
           contentType: false,
           processData: false,
           cache: false,
           success: function(dataResult){
             
            
            
             $('#imageviewfront').attr('src',"data:image/jpeg;base64,"+ dataResult.IMGFront);
             $("dvimgfront").show();
      
             $('#imageviewright').attr('src',"data:image/jpeg;base64," + dataResult.IMGRight);
             $("dvimgright").show();
      
             $('#imageviewleft').attr('src',"data:image/jpeg;base64," + dataResult.IMGLeft);
             $("dvimgleft").show();
      
             $('#imageviewback').attr('src',"data:image/jpeg;base64," + dataResult.IMGBack);
             $("dvimgback").show();
             

             if($('#SID') != ''){   
                let finalURL = 'https://chart.googleapis.com/chart?cht=qr&chl=' + $('#SID').val() +'&chs=160x160&chld=L|0'
                $('#imgqr').attr('src', finalURL);
                $("dvimgqr").show();
             }
             
      
             $('#SparepartsModal').modal('show'); 

            RemoveUIBlocker();



           },
           error: function (xhr, ajaxOptions, thrownError){
                RemoveUIBlocker();
               alertfailed(thrownError);
              } 
      });



}





function displayimg(input,id) {

    if (id == 1){
       if (input.files && input.files[0]) {
          var reader = new FileReader();
         reader.onload = function(event) {
        $('#imageviewfront').attr('src', event.target.result);
        }
        reader.readAsDataURL(input.files[0]);
       }
   }
  else if (id == 2){
       if (input.files && input.files[0]) {
          var reader = new FileReader();
         reader.onload = function(event) {
        $('#imageviewright').attr('src', event.target.result);
        }
        reader.readAsDataURL(input.files[0]);
        }
    }
      else if (id == 3){
       if (input.files && input.files[0]) {
          var reader = new FileReader();
         reader.onload = function(event) {
        $('#imageviewleft').attr('src', event.target.result);
        }
        reader.readAsDataURL(input.files[0]);
         }
      }

     else if (id == 4){
       if (input.files && input.files[0]) {
          var reader = new FileReader();
         reader.onload = function(event) {
        $('#imageviewback').attr('src', event.target.result);
        }
        reader.readAsDataURL(input.files[0]);
     }

     }
}
