const apiaddress = 'http://192.168.101.84:400'

$(document).ready(function(){ 
    Getsparepartslist();
    GetPRPOlist();



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
       $.ajax({url:apiaddress + "/getpartnumber/", 

       success:function(response){      
          let row  = ''
                //  
                
                 $.each(response, function (index, itemData) {
                   pritem = response[index]
                   row  += "<tr>"
                   row +=  "<td class='textdisplay text-center fontblack' hidden>" + pritem['RECID'] + "</td>"
                   row += "<td class='textdisplay text-center fontblack'>  <button type='button' class='btn btn-warning btn-md' id='btnupdateSP'><i class='fa fa-pencil'></i></button>    </td>"
                   row +=  "<td class='textdisplay text-center fontblack'>" + pritem['PARTNUMBER'] + "</td>"
                   row +=  "<td class='textdisplay text-center fontblack'>" + pritem['Description'] + "</td>"
                   row +=  "<td class='textdisplay text-center fontblack'>" + pritem['Brand'] + "</td>"
                   row  += "</tr>"
                 });
                 
                 $("#tbodyspareparts").html(row);    

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

               
       },
        error: function (xhr, ajaxOptions, thrownError){
             RemoveUIBlocker();
            alert(thrownError);
           } 
       }); 
}




function GetPRPOlist(){
   $('#tblvalidation').DataTable().destroy();
        $.ajax({url:"../PHP/PRPOController/Select.php", 

        success:function(dataabc){      

                    $("#tbodyvalidation").html(dataabc);     


                     $('#tblvalidation').DataTable({
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

 ShowImage("../PHP/PRPOController/SelectImage.php",$(this).closest("tr").find('td:eq(2)').text())

});



//Click button update
$(document).on('click', '#btnupdateSP', function () {
 $("#btnupdateyes").fadeIn();
 $("#btnPOupdateyes").fadeOut();
 $("#btnDeleteSP").fadeOut();
 $("#btnadditemyes").fadeOut();

 $("#LineID").text($(this).closest("tr").find('td:eq(0)').text())
 $("#PARTNUMBER").val($(this).closest("tr").find('td:eq(2)').text())
 $("#DESCRIPTION").val($(this).closest("tr").find('td:eq(3)').text())
 $("#BRAND").val($(this).closest("tr").find('td:eq(4)').text())
 ShowImageUpdate("../PHP/PRPOController/SelectImageUpdate.php",$(this).closest("tr").find('td:eq(2)').text())
});



//Click button update
$(document).on('click', '#btnPOupdateSP', function () {
    $("#btnupdateyes").fadeOut();
    $("#btnPOupdateyes").fadeIn();
    $("#btnDeleteSP").fadeIn();
    $("#btnadditemyes").fadeOut();
   
    $("#LineID").text($(this).closest("tr").find('td:eq(0)').text())
    $("#PARTNUMBER").val($(this).closest("tr").find('td:eq(2)').text())
    $("#DESCRIPTION").val($(this).closest("tr").find('td:eq(3)').text())
    $("#BRAND").val($(this).closest("tr").find('td:eq(4)').text())
    ShowImageUpdate("../PHP/PRPOController/SelectImageUpdate.php",$(this).closest("tr").find('td:eq(2)').text())
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
           InserUpdateData("Successfully Inserted","../PHP/PRPOController/Insert.php");
         }
         else{
              alertfailed('Please fill all the field!');
         }

 }); 



// add button
// $("#btnAddItem").click(function () {
//      $('#imageviewfront').attr('src', "");
//      $('#imageviewright').attr('src', "");
//      $('#imageviewleft').attr('src', "");
//      $('#imageviewback').attr('src', "");
//      $("#btnupdateyes").fadeOut();
//      $("#btnadditemyes").fadeIn();
//      $('#SparepartsModal').modal('show'); 
//      $('#SpareDetails :text').val('');
//      $('#SpareDetails :file').val(null);  
// });


// edit button
$("#btnupdateyes").click(function () {
     InserUpdateData("Successfully Updated","../PHP/PRPOController/insert.php");
});


// edit button
$("#btnPOupdateyes").click(function () {
    InserUpdateData("Successfully Updated","../PHP/PRPOController/update.php");
});



//Delete button
$("#btndeletemodyes").click(function () {
     DelteData("Successfully Deleted","../PHP/PRPOController/Delete.php",$('#DeleteID').text());
     $('#SparepartsModal').modal('hide');        
 });



 $(document).on('click', '#btnDeleteSP', function () {
    $('#Deletemodal').modal('show'); 
    $('#DeleteID').text('');
    $('#DeleteID').text($("#LineID").text());
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
      
       var PARTNUMBER = $('#PARTNUMBER').val();
       var DESCRIPTION = $('#DESCRIPTION').val();
       var BRAND = $('#BRAND').val();
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



    
      form_data.append("PARTNUMBER", PARTNUMBER)
      form_data.append("DESCRIPTION", DESCRIPTION) 
      form_data.append("BRAND", BRAND) 
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
                        GetPRPOlist();
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
                        GetPRPOlist()
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


function ShowImage(PHP,PN){
 var form_data = new FormData();


 form_data.append("PARTNUMBER", PN)  




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


function ShowImageUpdate(PHP,PN){
 var form_data = new FormData();

 form_data.append("PARTNUMBER", PN)  




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

           if (dataResult.error){
               alertfailed(dataResult.error);
           }
           else{
            $('#imageviewfront').attr('src',"data:image/jpeg;base64,"+ dataResult.IMGFront);
            $("dvimgfront").show();
     
            $('#imageviewright').attr('src',"data:image/jpeg;base64," + dataResult.IMGRight);
            $("dvimgright").show();
     
            $('#imageviewleft').attr('src',"data:image/jpeg;base64," + dataResult.IMGLeft);
            $("dvimgleft").show();
     
            $('#imageviewback').attr('src',"data:image/jpeg;base64," + dataResult.IMGBack);
            $("dvimgback").show();
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
