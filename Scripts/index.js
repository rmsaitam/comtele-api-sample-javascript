function sendMessage() {
    $("#Success").hide();
    $("#Error").hide();

    var sender = $("#Sender").val();
    var receiver = $("#Receiver").val();
    var key = $("#Key").val();
    var content = $("#Content").val();
    var url = "https://sms.comtele.com.br/api/" + key + "/sendmessage?sender=" + sender + "&receivers=" + receiver + "&content=" + content;
    
    $.ajax({
        url: url,
        crossOrigin: true,
        crossDomain: true,
        type: 'POST',        
        async: true,
        success: function (data, textStatus, jqXHR){
            $("#Success").children().html(data);
            $("#Success").show();
        },
        error: function (jqXHR, textStatus, errorThrown){
            $("#Error").children().html(errorThrown);
            $("#Error").show();
        }
    });
};

function sendScheduledMessage() {
    $("#Success").hide();
    $("#Error").hide();

    var sender = $("#Sender").val();
    var receiver = $("#Receiver").val();
    var key = $("#Key").val();
    var content = $("#Content").val();
    var schedule = $("#Schedule").val();
    var url = "https://sms.comtele.com.br/api/" + key + "/schedulemessage?sender=" + sender + "&receivers=" + receiver + "&content=" + content + "&date=" + schedule;
    
    $.ajax({
        url: url,
        crossOrigin: true,
        crossDomain: true,
        type: 'POST',        
        async: true,
        success: function (data, textStatus, jqXHR){
            $("#Success").children().html(data);
            $("#Success").show();
        },
        error: function (jqXHR, textStatus, errorThrown){
            $("#Error").children().html(errorThrown);
            $("#Error").show();
        }
    });
};

function getCredits() {
    $("#Success").hide();
    $("#Error").hide();

    var key = $("#Key").val();
    var url = "https://sms.comtele.com.br/api/" + key + "/balance";

    $.ajax({
        url: url,
        crossOrigin: true,
        crossDomain: true,               
        type: 'GET',        
        async: true,        
        success: function (data, textStatus, jqXHR) {
            $("#Credits").val(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#Error").children().html(errorThrown);
            $("#Error").show();
        }
    });
};

function replyReport(){
    $("#Success").hide();
    $("#Error").hide();

    var key = $("#Key").val();
    var initialDate = $("#ReplyInitialDate").val();
    var finalDate = $("#ReplyFinalDate").val();
    var sender = $("#ReplySender").val();
    var unread = $("#ReplyUnread").val();

    if (unread != "true" && unread != "all"){
        unread = false;
    }

    var url = "https://sms.comtele.com.br/api/"+ key +"/replyreport?startDate="+ initialDate +"&endDate="+ finalDate +"&sender="+ sender +"&unread=" + unread;

    $.ajax({
        url: url,
        crossOrigin: true,
        crossDomain: true,
        type: 'GET',
        async: true,
        success: function (data, textStatus, jqXHR) {
            var json = JSON.stringify(data, null, 2);           
            var newWindow = window.open("", "");
            newWindow.document.write("<pre>"+ json +"</pre>");
            newWindow.focus();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#Error").children().html(errorThrown);
            $("#Error").show();
        }
    });
};

function detailedReport(){
    $("#Success").hide();
    $("#Error").hide();

    var key = $("#Key").val();
    var initialDate = $("#DetailedInitialDate").val();
    var finalDate = $("#DetailedFinalDate").val();
    var url = "https://sms.comtele.com.br/api/"+ key +"/detailedreport?startDate="+ initialDate +"&endDate="+ finalDate;

    $.ajax({
        url: url,
        crossOrigin: true,
        crossDomain: true,
        type: 'GET',
        async: true,
        success: function (data, textStatus, jqXHR) {
            var json = JSON.stringify(data, null, 2);           
            var newWindow = window.open("", "");
            newWindow.document.write("<pre>"+ json +"</pre>");
            newWindow.focus();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#Error").children().html(errorThrown);
            $("#Error").show();
        }
    });
};