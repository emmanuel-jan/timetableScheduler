$(document).ready(function(){
    $("#search_form").on("submit",function(){
        var status_search = false;
        var search = $("#search");
    
        if(search.val() == ""){
            search.addClass("border-danger");
            $("#search_error").html("<span class='text-danger'>Please enter your desired location</span>");
            status_search = false;
        }else{
            search.removeClass("border-danger");
            $("#search_error").html("");
            status_search = true;
        }
    })

    $("#login_form").on("submit",function(){
        var status_email = false;
        var status_password = false;
        var email = $("#email");
        var password = $("#password");
        var e_pattern = new RegExp(/^[a-z0-9_-]+(\.[a-z0-9_-])*@[a-z0-9_-]+(\.[a-z0-9_-]+)*(\.[a-z]{2,4})$/);

        if(!e_pattern.test(email.val())){
            email.addClass("border-danger");
            $("#email_error").html("<span class='text-danger'>Please enter a valid email</span>");
            status_email = false;
        }else{
            email.removeClass("border-danger");
            $("#email_error").html("");
            status_email = true;
        }
        if(password.val() == ""){
            password.addClass("border-danger");
            $("#password_error").html("<span class='text-danger'>Please enter your password</span>");
            status_password = false;
        }else{
            password.removeClass("border-danger");
            $("#password_error").html("");
            status_password = true;
        }
    })

    $("#signUp_form").on("submit",function(){
        var status_firstName = false;
        var status_lastName = false;
        var status_email = false;
        var status_phoneNumber = false;
        var status_password = false;
        var status_confirmPassword = false;
        var e_pattern = new RegExp(/^[a-z0-9_-]+(\.[a-z0-9_-])*@[a-z0-9_-]+(\.[a-z0-9_-]+)*(\.[a-z]{2,4})$/);
        var firstName = $("#firstName");
        var lastName = $("#lastName");
        var email = $("#email");
        var phoneNumber = $("#phoneNumber");
        var password = $("#password");
        var confirmPassword = $("#confirmPassword");

        if(firstName.val() == ""){
            firstName.addClass("border-danger");
            $("#firstName_error").html("<span class='text-danger'>Please enter first name</span>");
            status_firstName = false;
        }else{
            firstName.removeClass("border-danger");
            $("#firstName_error").html("");
            status_firstName = true;
        }
        if(lastName.val() == ""){
            lastName.addClass("border-danger");
            $("#lastName_error").html("<span class='text-danger'>Please enter last name</span>");
            status_lastName = false;
        }else{
            lastName.removeClass("border-danger");
            $("#lastName_error").html("");
            status_lastName = true;
        }
        if(!e_pattern.test(email.val())){
            email.addClass("border-danger");
            $("#email_error").html("<span class='text-danger'>Please enter a valid email</span>");
            status_email = false;
        }else{
            email.removeClass("border-danger");
            $("#email_error").html("");
            status_email = true;
        }
        if(phoneNumber.val() == ""){
            phoneNumber.addClass("border-danger");
            $("#phoneNumber_error").html("<span class='text-danger'>Please enter your phone number</span>");
            status_phoneNumber = false;
        }else{
            phoneNumber.removeClass("border-danger");
            $("#phoneNumber_error").html("");
            status_phoneNumber = true;
        }
        if(password.val() == ""){
            password.addClass("border-danger");
            $("#password_error").html("<span class='text-danger'>Please enter your password</span>");
            status_password = false;
        }else{
            password.removeClass("border-danger");
            $("#password_error").html("");
            status_password = true;
        }
        if(confirmPassword.val() == ""){
            confirmPassword.addClass("border-danger");
            $("#confirmPassword_error").html("<span class='text-danger'>Please confirm your password</span>");
            status_confirmPassword = false;
        }else{
            if(password.val() != confirmPassword.val()){
                confirmPassword.addClass("border-danger");
                $("#confirmPassword_error").html("<span class='text-danger'>Passwords don't match</span>");
                status_confirmPassword = false;
            }else{
                confirmPassword.removeClass("border-danger");
                $("#confirmPassword_error").html("");
                status_confirmPassword = true;
            }
        }
      
    })
})