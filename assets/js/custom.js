(function() {

    // Accordion
    var acc = document.getElementsByClassName('accordion');

    if (acc.length) {
        for (var i = 0; i < acc.length; i++) {
            acc[i].onclick = function() {
                this.classList.toggle('active');
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            }
        }
    }

    // Initialize chosen jQuery plugin for multi-select dropdown
    $(".chosen-select").chosen();

    // Form validation icons
    $('#large-form').on('click change keyup', function(e){
        if ( $(e.target).is('[required]') ) {
            if( $(e.target).is(':invalid') ){
                $(e.target).parent().removeClass('valid-icon');
                $(e.target).parent().addClass('invalid-icon');
            } else {
                $(e.target).parent().removeClass('invalid-icon');
                $(e.target).parent().addClass('valid-icon');
            }
        }
    });

}());