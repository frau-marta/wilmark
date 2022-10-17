$(document).ready(function () {
    $('.nav-toggle').on('click',function () {
        $(this).toggleClass('active');
        // $('.content').toggleClass('d-none');
        // $('.footer').toggleClass('d-none');
        $('.head_menu').toggleClass('d-none');
        return false;
    });
    $('.cases_list_choose').on('click',function () {
        $(this).toggleClass('active');
        $('.cases_list_select').toggleClass('d-none');
        return false;
    });
    $(document).on('change','.input__file', function() {
        let path = this.value;
        let pos = path.lastIndexOf("\\");
        if (pos != -1) {
            path = path.substr(pos+1);
        }
        $(this).siblings('.input__file-name').html(path).addClass('mt-1');
        console.log($(this).siblings('.input__file-name').html(path));
    });
    const clients_list_slider = new Swiper('.clients_list_slider', {
        loop: true,
        // centeredSlides: true,
        spaceBetween: 0,
        slidesPerView: 2,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            768: {
                centeredSlides: true,
                slidesPerView: 'auto',
            },
            1200: {
                centeredSlides: true,
                slidesPerView: 'auto',
            },
        }
    });
});