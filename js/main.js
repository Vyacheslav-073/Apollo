$(document).ready(function() {

	// Скрипт для показа и скрытия выпадающего меню на смартфонах
           
    // Создаём переменные для кнопки и меню
    var pull = $("#navigation-togle");
    var menu = $(".navigation ul");
           
    // Описываем событие при нажакнопку
    $(pull).on("click", function(e){
        
     // Отменяем стандартное поведение в браузере
        e.preventDefault();
        
     // Открываем или скрываем меню   
        menu.slideToggle();
        
    // Добавляем модификатор --active
        $(this).toggleClass('navigation__toggle-button--active');
        
    });
     
    // При изменении размера окна в большую сторону
     $(window).resize(function(){
        var w = $(window).width();
        if(w > 992){
            menu.removeAttr('style');
         }
     });
    
    var w = $(window).width();
    if(w < 992) {
        $('nav.navigation a').on("click", function(){
            menu.slideToggle();
        })
    }
     
// Вызов слайдера owlCarousel    
$("#top-slider").owlCarousel({
    singleItem: true,
    navigation: true,
    theme: "top-slider-theme",
    navigationText : ["",""],
    slideSpeed: 600
    });
    //slider
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id ({highlightSelector:"nav a"
    });
});    
    
    



