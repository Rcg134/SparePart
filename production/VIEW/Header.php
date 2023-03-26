
<!DOCTYPE html>
<html lang="en">
 <head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<!-- Meta, title, CSS, favicons, etc. -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Spare Parts </title>

	<!-- Bootstrap -->
	<link href="../../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
	<!-- Font Awesome -->
	<link href="../../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	<!-- NProgress -->
	<link href="../../vendors/nprogress/nprogress.css" rel="stylesheet">
	<!-- iCheck -->
	<link href="../../vendors/iCheck/skins/flat/green.css" rel="stylesheet">
	<!-- bootstrap-wysiwyg -->
	<link href="../../vendors/google-code-prettify/bin/prettify.min.css" rel="stylesheet">
	<!-- Select2 -->
	<link href="../../vendors/select2/dist/css/select2.min.css" rel="stylesheet">
	<!-- Switchery -->
	<link href="../../vendors/switchery/dist/switchery.min.css" rel="stylesheet">
	<!-- starrr -->
	<link href="../../vendors/starrr/dist/starrr.css" rel="stylesheet">
	<!-- bootstrap-daterangepicker -->
	<link href="../../vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet">

	<!-- Custom Theme Style -->
	<link href="../../build/css/custom.min.css" rel="stylesheet">

	<link href="../../production/css/loading/modal-loading.css" rel="stylesheet">
	<link href="../../production/css/loading/modal-loading-animate.css" rel="stylesheet">
	<link href="../../build/css/custom.min.css" rel="stylesheet">

</head>

<body class="nav-md">
	<div class="container body">
		<div class="main_container">
			<div class="col-md-3 left_col">
				<div class="left_col scroll-view">
					<div class="navbar nav_title" style="border: 0;">
						<a href="index.php" class="site_title"><i class="fa fa-paw"></i> <span>Spare Parts</span></a>
					</div>

					<div class="clearfix"></div>
					<!-- sidebar menu -->
					<div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
						<div class="menu_section">
							<h3>General</h3>
							<ul class="nav side-menu">
								<li><a><i class="fa fa-home"></i> Spare Parts <span class="fa fa-chevron-down"></span></a>
									<ul class="nav child_menu">
										<li><a href="SparepartsBODY.php">List</a></li>
									</ul>
								</li>
						</div>
					</div>
					<!-- /sidebar menu -->
				</div>
			</div>

<!-- top navigation -->
		<div class="top_nav">
				<div class="nav_menu">
					<div class="nav toggle">
						<a id="menu_toggle"><i class="fa fa-bars"></i></a>
					</div>
					<nav class="nav navbar-nav">
						<ul class=" navbar-right">
							<li class="nav-item dropdown open" style="padding-left: 15px;">
								<a href="javascript:;" class="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false"><?php
								                                              session_start(); 							                                           
                                                                              if(empty($_SESSION['name']))
         																		 {
         																		     header("Location:../logout.php");  
         																		 }   
         																		 else{
         																		 	   echo $_SESSION['name'];
         																		 }

								                                              ?>
								</a>
								<div class="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
									<a class="dropdown-item" name="logout" id="lg" href="../logout.php"><i class="fa fa-sign-out pull-right"></i> Log Out</a>
								</div>
							</li>		
					</nav>
				</div>
			</div>
<!-- /top navigation -->



<!-- /body-->
     <div class="right_col" role="main">
                <div class="title_right">
                    <div class="clearfix"></div>


  <!-- /Alert-->
  <div class="fixed-top myAlert-bottom alert alert-danger" id="AlertError" style="display:none">
      <button type="button" id="alertClose" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
      <p class="text-center" id="lblError"></p>
  </div>



  <div class="fixed-top myAlert-bottom alert alert-info position-sticky " id="AlertSuccess" style="display:none">
      <button type="button" id="alertClose" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
      <p class="text-center" id="lblSuccess"></p>
  </div>
<!-- /Alert-->









