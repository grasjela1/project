var modal = document.getElementById("cn");
window.onclick = function(event)
{
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}

$('.asking a').click(function()
{$('form').animate({height: "toggle",opacity:
"toggle"},"slow");});