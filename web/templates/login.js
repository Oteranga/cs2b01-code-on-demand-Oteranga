function getData(){
        $('#action').append('<img width="80" height="80" src="/static/img/hand.gif"/>');
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                if (response['status']==401) {
                    $('#action').append('<img width="90" height="90" src="/static/img/error.gif"/>');
                }else{
                    $('#action').append('<img width="80" height="80" src="/static/img/success.gif"/>');
                }
            },
            error: function(response){
                //alert(JSON.stringify(response));
                if (response['status']==401) {
                    $('#action').append('<img width="90" height="90" src="/static/img/error.gif"/>');
                }else{
                    $('#action').append('<img width="80" height="80" src="/static/img/success.gif"/>');
                    window.location.href="http://127.0.0.1:8080/static/chat.html";
                }
            }
        });
    }
