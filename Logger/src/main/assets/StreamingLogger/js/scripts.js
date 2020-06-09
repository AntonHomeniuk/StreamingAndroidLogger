'use strict';
$(document).ready(function () {
    setInterval(refresh, interval)
});

var interval = 2000;

function refresh() {

    requestUtil.getData("messages.json", function (data) {
        refreshView(data);
    }, function () {
        console.log("[getData] onError ");
    });
}

function refreshView(messages) {
    var $textarea = $('#content');
    for (var message in messages) {
        $textarea.val(function(i, text) {
            return text + messages[message].message + "\n";
        });
    }
    $textarea.scrollTop($textarea[0].scrollHeight);
}
