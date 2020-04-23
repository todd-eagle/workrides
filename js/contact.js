function sendContact() {
    jQuery.ajax({
        url: "../contact_mail.php",
        data:,
        type: "GET",
        success:function(data){
            $(".mail-status").html(data);
           // alert(data);
        },
        error:function (){}
    });
}