(function() {

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

    $('#large-form').bind('click tap keyup', function(e){
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

    $(".chosen-select").chosen();


}());