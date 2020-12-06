$("ul").on("click",".fa-check-circle",function(event){
$(this).parent().toggleClass("completed");
});

$("ul").on("click",".fa-check-circle",function(){
$(this).toggleClass("fa-times-circle");
});

$("ul").on("click","span",function(event){
$(this).parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});

$("input").keypress(function(event){
if(event.which === 13){
	var todoText = $(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "<i class='fas fa-check-circle'></i></li> ")
}
});

$(".fa-plus").click(function(){
$("input").fadeToggle();
});