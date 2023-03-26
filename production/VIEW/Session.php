<?php  session_start();  


if(isset($_SESSION['use']))   
                            
 {
    header("login.php"); 
 }

if(isset($_POST['login']))   
{
     $user = $_POST['txtusername'];
     $pass = $_POST['txtpassword'];

      if($user == "admin" && $pass == "admin")  
         {                                    

          $_SESSION['use']=$user;


         echo '<script type="text/javascript"> window.open("index.php","_self");</script>';       

        }

        else
        {
            alert("invalid UserName or Password");        
        }
}
