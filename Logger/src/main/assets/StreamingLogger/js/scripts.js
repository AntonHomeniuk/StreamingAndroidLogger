'use strict';
$(document).ready(function () {
    setInterval(refresh, interval)
});

var interval = 1000;

function refresh() {

    requestUtil.getData("messages.json", function (data) {
        refreshView(data);
    }, function () {
        console.log("[getData] onError ");
    });
}

function refreshView(messages) {
    var $textarea = $('#content');
    var newText = "";
    for (var message in messages) {
        newText += messages[message].message + "\n"
    }
    if (newText.length > 0){
        $textarea[0].value += newText
        $textarea.scrollTop($textarea[0].scrollHeight);
    }
}
