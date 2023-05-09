<!DOCTYPE html>
<html lang="en">
  <head>
	<?php
  include("Header.php");
	?>
</head>


			<!-- page content -->
  <div class="" role="main" id="DivPRLines">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="x_panel div-1">
                                <div class="x_title">
                                    <h2>AX Part Number</h2>

                                    <ul class="nav navbar-right panel_toolbox">
                                        <li>

                                            <a class="collapse-link">  <i class="fa fa-chevron-up"></i></a>
                                        </li>


                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">

                      
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <!-- <Input type='button' class='btn btn-primary' value='Add' id='btnAddItem'> -->
                                            <div class="card-box table-responsive">

                                             <table id="tblspareparts" class="table table-striped table-bordered" style="width:100%;">
                                                   
                                             <thead>           	
                                                           	<tr> 
                                                                  <th style="border-top: none;"  class="textdisplay text-center" hidden>ID</th>
                                                                  <th style="border-top: none;" class="textdisplay text-center">Action</th>
                                                                  <th style="border-top: none;" class="textdisplay text-center">PART NUMBER</th>
                                                                  <th style="border-top: none;" class="textdisplay text-center">DESCRIPTION</th>
                                                                  <th style="border-top: none;" class="textdisplay text-center">BRAND</th>                                                   
                                
                                                           </tr>
                                                       </thead>   
                                           
                                                         <tbody id="tbodyspareparts"></tbody>
                                               </table>
                                            </div>
                                        </div>
                                    </div>

                              </div>
                   </div>
               </div>
           </div>
       </div>



       			<!-- page content -->
     <div class="" role="main" id="DivPRLines">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="x_panel div-1">
                                <div class="x_title">
                                    <h2>Validation Status</h2>

                                    <ul class="nav navbar-right panel_toolbox">
                                        <li>

                                            <a class="collapse-link">  <i class="fa fa-chevron-up"></i></a>
                                        </li>


                                    </ul>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">

                      
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <!-- <Input type='button' class='btn btn-primary' value='Add' id='btnAddItem'> -->
                                            <div class="card-box table-responsive">

                                             <table id="tblvalidation" class="table table-striped table-bordered" style="width:100%;">
                                                   
                                             <thead>           	
                                                           	<tr> 
                                                                  <th style="border-top: none;"  class="textdisplay text-center" hidden>ID</th>
                                                                  <th style="border-top: none;" class="textdisplay text-center">Action</th>
                                                                  <th style="border-top: none;" class="textdisplay text-center">PART NUMBER</th>
                                                                  <th style="border-top: none;" class="textdisplay text-center">DESCRIPTION</th>
                                                                  <th style="border-top: none;" class="textdisplay text-center">BRAND</th>        
                                                                  <th style="border-top: none;" class="textdisplay text-center">Status</th>                                             
                                
                                                           </tr>
                                                       </thead>   
                                           
                                                         <tbody id="tbodyvalidation"></tbody>
                                               </table>
                                            </div>
                                        </div>
                                    </div>

                              </div>
                   </div>
               </div>
           </div>
       </div>





<!-- IMAGE MODAL -->
   <div class="text-center modal fade" id="imagemodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
       <div class="modal-dialog">
           <div class="modal-body">
           	<center>
               <div id='ImagePreview'>
     
              </div>
             <center>
           </div>    
       </div>
   </div>
<!-- /IMAGE MODAL -->















<!-- UPDATE PRPO -->

<div class="modal fade bd-example-modal-lg" tabindex="1" id="SparepartsModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header btn-primary">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
            
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    <span hidden id="LineID"></span>
                </button>
            </div>
            <div class="modal-body" id='SpareDetails'>
                


                <form class="needs-validation" id="lineDetails" method="post" enctype="multipart/form-data" novalidate>
     

                    <div class="row">
                        <BR>
                  
                        <div class="col-md-4">
                            <B>
                                <label class="control-label">PART NUMBER: </label>
                            </B>
                          <input class="form-control" id="PARTNUMBER" required="required">
                        </div>



                        <div class="col-md-4">
                            <B>
                                <label class="control-label">Description: </label>
                            </B>
                       
						  <input class="form-control" id="DESCRIPTION" required="required">
                        </div>

                      <div class="col-md-4">
                            <B>
                                <label class="control-label">BRAND: </label>
                            </B>
                                <input class="form-control" id="BRAND" required="required">
                        </div>
                    </div>



<!-- Tabular image -->           
     <div class="row">                      
         <div class="col-md-12">
             <BR/>

 				  <div class="col-lg-12  bg-white rounded-top tab-head">
 				      <ul class="nav nav-tabs" id="myTab" role="tablist">

 				          <li class="nav-item">
 				              <a class="nav-link active" id="imagefront-tab" data-toggle="tab" href="#imagefront" role="tab" aria-controls="imagefront" aria-selected="true">Top View</a>
 				          </li>

 				          <li class="nav-item">
 				              <a class="nav-link" id="imageright-tab" data-toggle="tab" href="#imageright" role="tab" aria-controls="imageright" aria-selected="true">Side View</a>
 				          </li>
 				          <li class="nav-item">
 				              <a class="nav-link" id="imageleft-tab" data-toggle="tab" href="#imageleft" role="tab" aria-controls="imageleft" aria-selected="true">Drawing</a>
 				          </li>

 				          <li class="nav-item">
 				              <a class="nav-link" id="imageback-tab" data-toggle="tab" href="#imageback" role="tab" aria-controls="imageback" aria-selected="true">Extra Image</a>
 				          </li>

 				      </ul>
 				  </div>
 				  <div class="col-lg-12 bg-white p-3">
 				      <div class="tab-content mt-4 dark" id="myTabContent">

 				          <div class="tab-pane fade show active" id="imagefront" role="tabpanel" aria-labelledby="ProdChecker-tab">

                              <B>
                                <label class="control-label">Image </label>
                              </B>
                               <input class="form-control" name="imagefilefront1" accept="image/*" type="file" id="imgfilefront">

                                 <div class="row" id="dvimgfront" style="display: none;">
                                      <div class="col-md-12">
                                      	<BR/>
                                      	 <center>
                                            <img src="" id="imageviewfront" class="img-fluid" >
                                         </center>
                                     </div>   
                                 </div>    

 				          </div>
   


 				          <div class="tab-pane fade show" id="imageright" role="tabpanel" aria-labelledby="ProdChecker-tab">


                              <B>
                                <label class="control-label">Image </label>
                              </B>
                               <input class="form-control" name="imagefileright2" accept="image/*" type="file" id="imgfileright">
                                

                                 <div class="row" id="dvimgright" style="display: none;">
                                      <div class="col-md-12">
                                      	<BR/>
                                      	 <center>
                                            <img src="" id="imageviewright" class="img-fluid" >
                                         </center>
                                     </div>   
                                 </div>    

 				          </div>




 				          <div class="tab-pane fade show" id="imageleft" role="tabpanel" aria-labelledby="BOMChecker-tab">

                                   
                              <B>
                                <label class="control-label">Image </label>
                              </B>
                               <input class="form-control" name="imagefileleft3" accept="image/*" type="file" id="imgfileleft">
                                

                                 <div class="row" id="dvimgleft" style="display: none;">
                                      <div class="col-md-12">
                                      	<BR/>
                                      	 <center>
                                            <img src="" id="imageviewleft" class="img-fluid" >
                                         </center>
                                     </div>   
                                 </div>   
 				        

 				          </div>



 				          <div class="tab-pane fade show" id="imageback" role="tabpanel" aria-labelledby="BOM-tab">

                                                        
                              <B>
                                <label class="control-label">Image </label>
                              </B>
                               <input class="form-control" name="imagefileback4" accept="image/*" type="file" id="imgfileback">
                                

                                 <div class="row" id="dvimgback" style="display: none;">
                                      <div class="col-md-12">
                                      	<BR/>
                                      	 <center>
                                            <img src="" id="imageviewback" class="img-fluid" >
                                         </center>
                                     </div>   
                                 </div>   
 				        

 				          </div>



                      <div class="tab-pane fade show" id="imageqr" role="tabpanel" aria-labelledby="BOM-tab">

                                                        
                              <B>
                                <label class="control-label">Image </label>
                              </B>
                              
        
                                 <div class="row" id="dvimgqr" style="display: none;">
                                      <div class="col-md-12">
                                      	<BR/>
                                      	 <center>
                                            <img src="" id="imgqr" class="img-fluid" >
                                         </center>
                                     </div>   
                                 </div>   
 				        

 				          </div>


 				      </div>
 				  </div>

          </div>
     </div>
<!-- /Tabular image --> 
             



                </form>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <Input type='button' style="display:none" class='btn btn-warning' value='UPDATE' id='btnupdateyes'>
                <Input type='button' style="display:none" class='btn btn-warning' value='UPDATE Validation Status' id='btnPOupdateyes'>
                <Input type='button' style="display:none" class='btn btn-danger' value='Delete' id='btnDeleteSP'>
                <Input type='button' class='btn btn-primary' value='ADD' id='btnadditemyes'>
            </div>
        </div>
    </div>
</div>





<!-- Delete MODAL -->
<div class="modal fade" tabindex="-1" role="dialog" id="Deletemodal">
         <div class="modal-dialog modal-dialog-centered" role="document">
           <div class="modal-content">
             <div class="modal-header alert-danger">
               <h5 class="modal-title">Delete</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                 <span hidden id="DeleteID"></span>
               </button>
             </div>
             <div class="modal-body">
             	   <center>
                    <p>Are you sure you want to delete this item?</p>
               	</center>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
               <button type="button" class="btn btn-danger" id="btndeletemodyes">Yes</button>
             </div>
           </div>
         </div>
       </div>
<!--/ Delete MODAL -->




<!-- /page content -->
	


<?php

  include("footer.php");

?>


   <script src="../js/PRPO.js"></script>



<?php

  include("HTMLfooter.php");
?>







