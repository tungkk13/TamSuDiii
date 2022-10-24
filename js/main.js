$(document).ready(
    function () {
        $('#btn1').click(
            function () {
                $('.mood__question').slideToggle(1000);
            }
        )
        $('#mood__answer--1').click(function (clicked = false) {
            clicked = true;
            if (clicked == true) {
                $('.mood__question__1').slideToggle(1000);
            }
        })
        $('#mood__answer__1--1').click(function (clicked = false) {
            clicked = true;
            if (clicked == true) {
                $('.click-no').css('display','none');
                $('.mood__form__yes').slideToggle(1000);
            }
        })

        $('#mood__answer__1--2').click(function (clicked = false) {
            clicked = true;
            if (clicked == true) {
                $('.mood__form__yes').css('display','none');
                $('.click-no').slideToggle(1000);
            }
        })

        $('#submit-mess').click(
            function () {
                alert('Sent !')
            }
        )
    }
)