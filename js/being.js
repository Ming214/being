

var startx, starty;
//?得角度
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
};

//根据起???返回方向 1向上 2向下 3向左 4向右 0未滑?
function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑?距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
    }

    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle >= -135 && angle <= -45) {
        result = 2;
    } else if (angle >= -135 && angle <= -45) {
        result = 3;
    } else if (angle >= -135 && angle <= -45) {
        result = 4;
    }

    return result;
}
//手指接触屏幕
document.addEventListener("touchstart", function(e){
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
}, false);
//手指离?屏幕
document.addEventListener("touchend", function(e) {
    var endx, endy;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
    var direction = getDirection(startx, starty, endx, endy);
    switch (direction) {
      
        case 1:
          
        MM_DW_effectDrop($('#aaa'),'show','drop','up',1000)
        case 2:
             $("#aaa").hide()
    
        case 3:
             MM_DW_effectDrop($('#aaa'),'show','drop','up',1000)
        case 4:
            $("#aaa").hide()
        default:
    }
}, false);
