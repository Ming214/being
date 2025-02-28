

var startx, starty;
//?�o����
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
};

//���u�_???��^��V 1�V�W 2�V�U 3�V�� 4�V�k 0����?
function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //�p�G��?�Z�äӵu
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
//������D�̹�
document.addEventListener("touchstart", function(e){
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
}, false);
//�����?�̹�
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
