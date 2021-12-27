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
        $('.project1 .whitebox').show();
    }, function(){
        $('.project1 .whitebox').hide();
    })
})

$(document).ready(function(){
    $('.project2').hover(function(){
        $('.project2 .whitebox').show();
    }, function(){
        $('.project2 .whitebox').hide();
    })
})

$(document).ready(function(){
    $('.project3').hover(function(){
        $('.project3 .whitebox').show();
    }, function(){
        $('.project3 .whitebox').hide();
    })
})

$(document).ready(function(){
    $('.project4').hover(function(){
        $('.project4 .whitebox').show();
    }, function(){
        $('.project4 .whitebox').hide();
    })
})

$(document).ready(function(){
    $('.project5').hover(function(){
        $('.project5 .whitebox').show();
    }, function(){
        $('.project5 .whitebox').hide();
    })
})

$(document).ready(function(){
    $('.project6').hover(function(){
        $('.project6 .whitebox').show();
    }, function(){
        $('.project6 .whitebox').hide();
    })
})

$(document).ready(function(){
    $('.project7').hover(function(){
        $('.project7 .whitebox').show();
    }, function(){
        $('.project7 .whitebox').hide();
    })
})

$(document).ready(function(){
    $('.project8').hover(function(){
        $('.project8 .whitebox').show();
    }, function(){
        $('.project8 .whitebox').hide();
    })
})

$(document).ready(function(){
    $('.contact form').submit(function(event){
        var nameInput = $('input#name').val();
        var emailInput = $('input#email').val();
        var messageInput = $('input#message');

        var alertMessage = "Hello" +" "+ nameInput + " we have recieved your message thank you for reaching out to us";
        alert(alertMessage);

        event.preventDefault();
    })
})