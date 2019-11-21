window.contact = window.contact || {};

window.contact.checkValidation = function(){
    if(!$('textarea[id="name"]').val()  || !$('textarea[id="message"]').val()){
        $('input[id=submit]').attr('disabled', 'disabled');
        return false;
    }

    $('input[id="submit"]').removeAttr('disabled');
    return true;
}

window.contact.send = function(){
    var name = $('textarea[id="name"]').val() 
    var email = $('textarea[id="email"]').val() 
    var message = $('textarea[id="message"]').val()
    data = {
        name: name,
        email: email,
        message: message,
    }
    window.contact.ajax(data);
}

window.contact.ajax = function(data){
    var url = 'https://script.google.com/macros/s/AKfycbzRlnE0KGPpot5gF79iVMVkKS-iJbXNMCGf8uFXc6oEwYqfEeTh/exec'; // Change here: Your GAS URL here
    $.ajax({
        url: url,
        type:'POST',
        data: data
    }).done(function(res){
        if(res.response != "success") {
            console.log(JSON.stringify(res.error));
            alert('送信失敗'); 
            return;
        }
        alert('送信完了');
    }).fail(function(){
        alert('送信失敗'); 
    }).always(function(){
        location.href="../index.html";
    })
}