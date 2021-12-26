$(document).ready(function(){
    $('.clickable').click(function(){
        $('#design-description').toggle();
        $('#design').toggle();
    })
})
$(document).ready(function(){
    $('.click2').click(function(){
        $('#dev-description').toggle();
        $('#developement').toggle();
    })
})
$(document).ready(function(){
    $('.click3').click(function(){
        $('#management-description').toggle();
        $('#product').toggle();
    })
})

$(document).ready(function(){
    $('.project1').hover(function(){
        $('.whitebox').show();
    }, function(){
        $('.whitebox').hide();
    })
})
