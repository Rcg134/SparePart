var loading="";

function UIBlocker() {
     loading = new Loading({
        discription: 'Loading...',
        defaultApply: true,
    });
 
}
function loadingOut(loading) {
    setTimeout(() => loading.out(), 3000);
}


function normalUIBlocker() {
     loading = new Loading();
}
function UIBlockerWithTitle(title) {
     loading = new Loading({
        title: title,
        direction: 'hor',
        discription: 'Loading...',
        defaultApply: true,
    });
 
     loading;
}

function RemoveUIBlocker() {
  
    loading.out();
}
function alertSucess(Message) {
    $('#lblSuccess').html(Message);
    $("#AlertSuccess").show();
    setTimeout(function () {
        $("#AlertSuccess").hide();
    }, 6000);
}
function alertfailed(Message) {
    $('#lblError').html(Message);
    $("#AlertError").show();
    setTimeout(function () {
        $("#AlertError").hide();
    }, 6000);
}

function Select2() {
    $('select').select2({ width: '100%' });
}

 function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
 };


 function getUrlParameterV2(sParam) {
     var sPageURL = window.location.search.substring(1),
         sURLVariables = sPageURL.split('&'),
         sParameterName,
         i;

     for (i = 0; i < sURLVariables.length; i++) {
         sParameterName = sURLVariables[i].split(';');

         if (sParameterName[0] === sParam) {
             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
         }
     }
 };

