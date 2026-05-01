$(document).ready(function(){

    // start back to top

    $('.btn-backtotop').hide();
    $(window).scroll(function(){

        let getscrolltop = $(this).scrollTop();
        if(getscrolltop >= 370){
            $('.btn-backtotop').fadeIn(1000);
        }else{
            $('.btn-backtotop').fadeOut(1000);
        }

    });

    // end back to top

    // start nav bar 
    $(window).scroll(function(){

        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);
        if(getscrolltop >= 200){
            $('.navbar').addClass('navmenus');
        }else{
            $('.navbar').removeClass('navmenus');
        }

    });

    $('.navbuttons').click(function(){
        $(this).toggleClass('corssxs');
    });
    // end nav bar


    // start property section
    $('.propertylists').click(function(){

        $(this).addClass('activeitems').siblings().removeClass('activeitems');

        // const filtervalue = $(this).attr('data-filter');
        const filtervalue = $(this).data('filter');
        // console.log(filtervalue);

        if(filtervalue == 'all'){
            $('.filters').show("slide",500);
        }else{
            // method 1
            // $('.filters').hide();
            // $('.filters').filter('.'+ filtervalue).show();

            // method 2
             $('.filters').not('.'+filtervalue).hide("slide",500);
             $('.filters').filter('.'+ filtervalue).show("slide",500);
        }

    });
    // end property section


    // start adv section
    //အပေါ်နှင့်ပေါင်းရေးလို့ရ။
    $(window).scroll(function(){

        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);
        if(getscrolltop >= 1200){
            $('.advimages').addClass('fromlefts');
            $('.advtexts').addClass('fromrights');
        }else{
            $('.advimages').removeClass('fromlefts');
            $('.advtexts').removeClass('fromrights');
        }

    });
    // end adv section

    // start footer section
    const getyear = document.getElementById('getyear');
    const getfullyear = new Date().getFullYear();
    getyear.textContent = getfullyear;
    // end footer section

});