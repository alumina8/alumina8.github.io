window.contact = window.contact || {};

window.contact.checkValidation = function(){
    if(!$('input[id="name"]').val() || !$('input[id="email"]').val() || !$('textarea[id="message"]').val()){
        $('input[id=submit]').attr('disabled', 'disabled');
        return false;
    }

    $('input[id="submit"]').removeAttr('disabled');
    return true;
}

window.contact.send = function(){
    var name = $('input[id="name"]').val() 
    var email = $('input[id="email"]').val() 
    var message = $('textarea[id="message"]').val()
    data = {
        name: name,
        email: email,
        message: message,
    }
    window.contact.ajax(data);
}

window.contact.ajax = function(data){
    var url = 'https://script.googleusercontent.com/macros/echo?user_content_key=WbZx4mtlHtXwUdx5G1SEJExzvBFzqXe9lzab__jqZTSY6GMNKgOtN0SkT-EPnYdxkaVmXjjTqQfI-sx5aHlxUsL5TKO5urC8m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFfO2RaYueNifZa2gWrmGm5YLWctIE8zhxJLHSj8-5tBn3xLX-XacbhnybHMIoCYGw&lib=M9tjtl7PMF-Tra7bG0QzIoHJQz7gwv6Hd'; // Change here: Your GAS URL here
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