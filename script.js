$(document).ready(function(){
    $("#signup").validate({
        rules: {
            fname:{
                required:true,
                minlength:4,
                maxlength: 10
            },
            sname: {
                required: true,
                minlength:4,
                maxlength: 10
            },
            email: {
                required: true,
                email: true
                
            },
            password: {
                required: true,
                minlength: 4
            },
            day: {
                required: true
            },
            month: {
                required: true
            },
            year: {
                required: true
            },
            gender: {
                required: true
            }
        },
        messages: {
            fname: {
                required: "Enter first name",
                minlength: "Minimum length 4"
            }
            
        }
        
    })
})

$("#password").blur(function(){
    var pass = "f00Bar!";
    var strength=0
    var arr=[/.{5,}/,/[a-z]+/,/[0-9]+/,/[A-Z]+/]
    jQuery.map(arr, function(regexp){
        if(pass.match(regexp))
            strength++
    })
    if(strength<4)
        alert("Password is weak")
})

$("#password2").blur(function(){
    var pass1=$("#password").val()
    var pass2=$("#password2").val()
    if(pass1!=pass2)
        alert("Both passwords are not same")
        //$("#password2").addClass('Has-error')
    //else
        //$("#password2").removeClass().addClass('Has-success')
});

