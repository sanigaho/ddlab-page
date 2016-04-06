;(function($) {

    var $clients = $("#clients"),
        $spClientTitle = $("#sp-client-title"),
        $spClientUrl = $('#sp-client-url');

    $clients.on('click', '.client', function(event) {
        var $this = $(this),
            title = $this.data('title'),
            url = $this.data('url');

        $this.siblings().removeClass('selected');
        $this.addClass('selected');
        $spClientTitle.html(title);
        $spClientUrl.html(
            '<a href="' + url + '">' + url + '</a>'
        );

        event.preventDefault();
    });

})(jQuery);