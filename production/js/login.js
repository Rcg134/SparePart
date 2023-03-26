




$("#btnlogin").click(function () {

    var user = $("#txtusername").val();
    var pass = $("#txtpassword").val();


    if(user == '' || pass == ''){

    alert("Fill up Username Or Password");

    }
    else{

      AuthUser('../production/PHP/LoginController/Select.php',user,pass)
    }

   }); 





function AuthUser(PHP,username,password){
        var form_data = new FormData();

        form_data.append("Username", username)  
        form_data.append("Password", password)  


           
               $.ajax({
                url: PHP,
                type: "POST",
                data: form_data,
                contentType: false,
                processData: false,
                cache: false,
                success: function(dataResult){
                     if(dataResult != ''){
                       sessionStorage.setItem("name", dataResult);
                        location.href = "View/index.php"
                     }
                     else{
                        alert('Wrong Credentials');
                     }
                         
                },
                error: function (xhr, ajaxOptions, thrownError){
                  
                    alert(thrownError);
                   } 
                     
           });

}


