var images = new Array(32);

var ids = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);

function initialize(){
    // setting up array with images
    images[0] = new Image(50, 50);
    images[0].src = "../public/images/tiles/1.png";
    images[1] = new Image(50, 50);
    images[1].src = "../public/images/tiles/2.png";
    images[2] = new Image(50, 50);
    images[2].src = "../public/images/tiles/3.png";
    images[3] = new Image(50, 50);
    images[3].src = "../public/images/tiles/4.png";
    images[4] = new Image(50, 50);
    images[4].src = "../public/images/tiles/5.png";
    images[5] = new Image(50, 50);
    images[5].src = "../public/images/tiles/6.png";
    images[6] = new Image(50, 50);
    images[6].src = "../public/images/tiles/7.png";
    images[7] = new Image(50, 50);
    images[7].src = "../public/images/tiles/8.png";
    images[8] = new Image(50, 50);
    images[8].src = "../public/images/tiles/9.jpeg";
    images[9] = new Image(50, 50);
    images[9].src = "../public/images/tiles/10.png";
    images[10] = new Image(50, 50);
    images[10].src = "../public/images/tiles/11.png";
    images[11] = new Image(50, 50);
    images[11].src = "../public/images/tiles/12.jpeg";
    images[12] = new Image(50, 50);
    images[12].src = "../public/images/tiles/13.jpeg";
    images[13] = new Image(50, 50);
    images[13].src = "../public/images/tiles/14.jpeg";
    images[14] = new Image(50, 50);
    images[14].src = "../public/images/tiles/15.jpeg";
    images[15] = new Image(50, 50);
    images[15].src = "../public/images/tiles/16.jpeg";
    images[16] = new Image(50, 50);
    images[16].src = "../public/images/tiles/17.jpeg";
    images[17] = new Image(50, 50);
    images[17].src = "../public/images/tiles/18.jpeg";
    images[18] = new Image(50, 50);
    images[18].src = "../public/images/tiles/19.jpeg";
    images[19] = new Image(50, 50);
    images[19].src = "../public/images/tiles/20.jpeg";
    images[20] = new Image(50, 50);
    images[20].src = "../public/images/tiles/21.jpeg";
    images[21] = new Image(50, 50);
    images[21].src = "../public/images/tiles/22.jpeg";
    images[22] = new Image(50, 50);
    images[22].src = "../public/images/tiles/23.jpeg";
    images[23] = new Image(50, 50);
    images[23].src = "../public/images/tiles/24.jpeg";
    images[24] = new Image(50, 50);
    images[24].src = "../public/images/tiles/25.jpeg";
    images[25] = new Image(50, 50);
    images[25].src = "../public/images/tiles/26.jpeg";
    images[26] = new Image(50, 50);
    images[26].src = "../public/images/tiles/27.png";
    images[27] = new Image(50, 50);
    images[27].src = "../public/images/tiles/28.jpeg";
    images[28] = new Image(50, 50);
    images[28].src = "../public/images/tiles/29.jpeg";
    images[29] = new Image(50, 50);
    images[29].src = "../public/images/tiles/30.png";
    images[30] = new Image(50, 50);
    images[30].src = "../public/images/tiles/31.png";
    images[31] = new Image(50, 50);
    images[31].src = "../public/images/tiles/32.png";
    images[32] = new Image(50, 50);
    images[32].src = "../public/images/tiles/33.png";
}

function loadImages(){
    //randomly chooses pics and puts in two random boxes
    for( var j = 0; j < 8; j++){
        var counter = Math.floor(Math.random() * images.length);
        var id1 = ids[Math.floor(Math.random() * ids.length)];
        for( var i = 0; i < ids.length; i++){
            if ( ids[i] === id1) {
                ids.splice(i, 1);
            }
        }
        var id2 = ids[Math.floor(Math.random() * ids.length)];
        for( var i = 0; i < ids.length; i++){
            if ( ids[i] === id2) {
                ids.splice(i, 1);
            }
        }
        document.getElementById(id1).src = images[counter].src;
        document.getElementById(id2).src = images[counter].src;
    }

}