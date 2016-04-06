;(function($) {

    // slick slider
    $('#slick-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });

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

    // modals
    $(document).on('click', '[data-modal]', function(event) {
        var $this = $(this),
            $modal = $($this.data('modal'));
        if ($modal.length) {
            $modal.addClass('show');
        }
        event.preventDefault();
    });

    $('.sp-modal').on('click', '.sp-modal-close', function(event) {
        $(this).closest('.sp-modal-bg').removeClass('show');
        event.preventDefault();
    });

    var modalForm = new AjaxForm('#form-modal', {
        controlClass: '.sp-modal-form-control',
        controlWrapper: '.sp-modal-form-group'
    });
    modalForm.onSubmited = function(data) {
        alert(data);
    };

    var modalForm2 = new AjaxForm('#callback-form', {
        controlClass: '.sp-form-control',
        controlWrapper: '.sp-form-group'
    });
    modalForm2.onSubmited = function(data) {
        alert(data);
    };

})(jQuery);