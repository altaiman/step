$(function() {
    $('.banner__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000
    });
});
$(function(){

    function gallery(gallery) {
        var slider = $(gallery).find('.gallery__slider').get(0),
            slides = $(gallery).attr('data-slides');

        if (!slider) return;
        
        $(slider).slick({
            slidesToShow: slides,
            prevArrow: '.gallery__controls .arrow_prev',
            nextArrow: '.gallery__controls .arrow_next',
        });
    }

    gallery('.gallery_index');
    gallery('.gallery_collections');

    var view = $('.gallery__view');

    $('.gallery__item').on('click', function() {     
        $('.gallery__item_active').removeClass('gallery__item_active');
        $(this).addClass('gallery__item_active');
        
        var img = $(this).find('img').get(0);

        $(view).addClass('gallery__view_change');
        
        $(view).html($(img).clone());
        
        setTimeout(function() {
            $(view).removeClass('gallery__view_change');
        }, 200);
    });

    $('.gallery__item').first().trigger('click');
});
$(function(){
    $('.production__slider').slick({
        slidesToShow: 4,
        prevArrow: '.production__controls .arrow_prev',
        nextArrow: '.production__controls .arrow_next',
    })
});
$(function() {
    $('.news__slider').slick({
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '.news__controls .arrow_prev',
        nextArrow: '.news__controls .arrow_next',
    })
});


$(function() {
    function tabWork() {
        var content = $(this).parent().parent().find('.tabs__content').get(0),
            tab = $(this).attr('data-tab');
        
        $(content).parent().find('.tab_active').removeClass('tab_active');
        $(this).addClass('tab_active');

        $(content).find('[data-tab]').hide();
        $(content).find('[data-tab=' + tab + ']').show();
    }

    
    $('.tab').on('click', tabWork);
    
    $('.tabs').each(function(i, tabs) {
        var active = $(tabs).find('.tab_active').get(0) || $(tabs).find('.tab').get(0);
        $(active).trigger('click');
    });

    $('.reviews__slider').slick({
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '.reviews__controls .arrow_prev',
        nextArrow: '.reviews__controls .arrow_next',
    })

    $('.sidebar__block-toggle').on('click', function() {
        var block = $(this).parent().next();
        
        $(this).toggleClass('sidebar__block-toggle_open');
        $(block).toggle();
    });
});

$(function() {
    // file upload

    var file = $('.upload input'),
        btn = $('.upload button');


    $(btn).on('click', function(e) {
        e.preventDefault();
        $(file).focus().click();
    });

    $(file).on('change', function() {
        $('.upload__filename').show().html(file[0].files[0].name);
        console.log(file[0].files[0]);
    })
})

$(function() {
    // history

    $('.history__year a').on('click', function(e) {
        e.preventDefault();
        $('.year').hide();
        $('.history__year_active').removeClass('history__year_active');

        var year = $(this).attr('href').split('#')[1];
        $(this).parent().addClass('history__year_active');


        $('.year[data-year="' + year + '"]').fadeIn();
    });

    $('.history__year a').first().trigger('click');
});

$(function(){
    // menu

    $('.menu__item_sub').hover(function() {
        $(this).find('.menu__sub').finish().show();
    }, function() {
        $(this).find('.menu__sub').finish().hide();
    });
});