$(document).ready(function(){
    var divCount = 0;
    var divElementDark;
    var divElementWhite;
    var isDarkMode = true;
    var image = $('#image');
    $("#counter").html("Clicked Div = " + divCount);
    createDivElement();
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    function getRandomPosition(){
        var top = Math.floor(Math.random() * ($(window).height() - 150));
        var left = Math.floor(Math.random() * ($(window).width() - 150));
        return "top: " + top + "px; left: " + left + "px;";
    };

    function getRandomSize(){
        var height = Math.floor((Math.random() * 100) + 100);
        var width = Math.floor((Math.random() * 100) + 100);
        return "width: " + width + "px; height: " + height + "px; position: absolute;";
    };

    function createDivElement(){
        setTimeout(function(){
            if(isDarkMode){
                divElementDark = '<div style="' + getRandomSize() + getRandomPosition() +  "background-color: " + getRandomColor() + '; border: 2px solid white; border-radius: 45px"></div>';
                $("body").append(divElementDark);
            }
            else{
                divElementWhite = '<div style="' + getRandomSize() + getRandomPosition() + "background-color: " + getRandomColor() + '; border: 2px solid black; border-radius: 45px"></div>';
                $("body").append(divElementWhite);
            }
        },1500)
    };

    $("body").on("click","div",function(){
        $(this).fadeOut(750,function(){
            $(this).remove();
        })
        divCount++;
        $("#counter").html("Clicked Div = " + divCount);
        createDivElement();
    });

    $("body").on("click","button",function(){
        if(isDarkMode){
            $(this).html("Dark Mode");
            $("body").css("background-color","white");
            $("h2").css({"text-align":"right","color":"brown"});
            $("button").css({"background-color":"#555555","color":"white","border":"none","padding":"15px 32px","font-size":"16px"});
            isDarkMode = false;
        }
        else{
            $(this).html("White Mode");
            $("body").css("background-color","black");
            $("h2").css({"text-align":"right","color":"#FFFF8D"});
            $("button").css({"background-color":"#e7e7e7","color":"black","border":"none","padding":"15px 32px","font-size":"16px"});
            isDarkMode = true;
        }
    });

    document.addEventListener("mousemove",function(event){
        image.css({"left":event.pageX + 15,"top":event.pageY + 15,"background-color":getRandomColor()});
    });
})