var id1 = document.getElementById('txt1'),
    id2 = document.getElementById('txt2'),
    ids = document.getElementsByClassName('txt');
     
function moveBefore() {
    if (id1 == ids[0]) {
        id2 = id2.parentNode.removeChild(id2);
        document.body.insertBefore(id2, id1);
        }
    else {
        id1 = id1.parentNode.removeChild(id1);
        document.body.insertBefore(id1, id2);
        }
      }