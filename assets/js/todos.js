$("ul").on('click','li',function(){
    $(this).toggleClass('check');
});

$("ul").on('click','span',function(e){
    $(this).parent().fadeOut(700,function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input").keypress(function(e){
    if(e.which === 13){
        $("ul").append(`<li><span><i class="fas fa-trash-alt"></i></span>  ${$(this).val()}</li>`);
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input").fadeToggle(300);
})