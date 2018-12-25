var theCanvas;

function isCanvasExist(canvasElm) {
    if (!canvasElm || !canvasElm.getContext) {
        return false;
    } else {
        return true;
    }
}




window.onload = function () {
    theCanvas = document.getElementById('mainCanvas');
    if (isCanvasExist(theCanvas)) {
        theCanvas.width = '800';
        theCanvas.height = '600';
    } else {
        alert('Your browser does not support canvas!');
    }
}

