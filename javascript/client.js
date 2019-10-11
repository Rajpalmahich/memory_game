var images = new Array(50);

var idsEasy = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
var idsHard = new Array('1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','24h','25h','26h','27h','28h','29h','30h','31h','32h','33h','34h','35h','36h');
var limit = 0;

function initialize(){
    // setting up array with images
    images[0] = new Image(50, 50);
    images[0].src = "public/images/tiles/1.png";
    images[1] = new Image(50, 50);
    images[1].src = "public/images/tiles/2.png";
    images[2] = new Image(50, 50);
    images[2].src = "public/images/tiles/3.png";
    images[3] = new Image(50, 50);
    images[3].src = "public/images/tiles/4.png";
    images[4] = new Image(50, 50);
    images[4].src = "public/images/tiles/5.png";
    images[5] = new Image(50, 50);
    images[5].src = "public/images/tiles/6.png";
    images[6] = new Image(50, 50);
    images[6].src = "public/images/tiles/7.png";
    images[7] = new Image(50, 50);
    images[7].src = "public/images/tiles/8.png";
    images[8] = new Image(50, 50);
    images[8].src = "public/images/tiles/9.jpeg";
    images[9] = new Image(50, 50);
    images[9].src = "public/images/tiles/10.png";
    images[10] = new Image(50, 50);
    images[10].src = "public/images/tiles/11.png";
    images[11] = new Image(50, 50);
    images[11].src = "public/images/tiles/12.jpeg";
    images[12] = new Image(50, 50);
    images[12].src = "public/images/tiles/13.jpeg";
    images[13] = new Image(50, 50);
    images[13].src = "public/images/tiles/14.jpeg";
    images[14] = new Image(50, 50);
    images[14].src = "public/images/tiles/15.jpeg";
    images[15] = new Image(50, 50);
    images[15].src = "public/images/tiles/16.jpeg";
    images[16] = new Image(50, 50);
    images[16].src = "public/images/tiles/17.jpeg";
    images[17] = new Image(50, 50);
    images[17].src = "public/images/tiles/18.jpeg";
    images[18] = new Image(50, 50);
    images[18].src = "public/images/tiles/19.jpeg";
    images[19] = new Image(50, 50);
    images[19].src = "public/images/tiles/20.jpeg";
    images[20] = new Image(50, 50);
    images[20].src = "public/images/tiles/21.jpeg";
    images[21] = new Image(50, 50);
    images[21].src = "public/images/tiles/22.jpeg";
    images[22] = new Image(50, 50);
    images[22].src = "public/images/tiles/23.jpeg";
    images[23] = new Image(50, 50);
    images[23].src = "public/images/tiles/24.jpeg";
    images[24] = new Image(50, 50);
    images[24].src = "public/images/tiles/25.jpeg";
    images[25] = new Image(50, 50);
    images[25].src = "public/images/tiles/26.jpeg";
    images[26] = new Image(50, 50);
    images[26].src = "public/images/tiles/27.png";
    images[27] = new Image(50, 50);
    images[27].src = "public/images/tiles/28.jpeg";
    images[28] = new Image(50, 50);
    images[28].src = "public/images/tiles/29.jpeg";
    images[29] = new Image(50, 50);
    images[29].src = "public/images/tiles/30.png";
    images[30] = new Image(50, 50);
    images[30].src = "public/images/tiles/31.png";
    images[31] = new Image(50, 50);
    images[31].src = "public/images/tiles/32.png";
    images[32] = new Image(50, 50);
    images[32].src = "public/images/tiles/33.png";
    images[33] = new Image(50, 50);
    images[33].src = "public/images/tiles/34.png";
    images[34] = new Image(50, 50);
    images[34].src = "public/images/tiles/35.png";
    images[35] = new Image(50, 50);
    images[35].src = "public/images/tiles/36.png";
    images[36] = new Image(50, 50);
    images[36].src = "public/images/tiles/37.png";
    images[37] = new Image(50, 50);
    images[37].src = "public/images/tiles/38.png";
    images[38] = new Image(50, 50);
    images[38].src = "public/images/tiles/39.png";
    images[39] = new Image(50, 50);
    images[39].src = "public/images/tiles/40.png";
    images[40] = new Image(50, 50);
    images[40].src = "public/images/tiles/41.png";
    images[41] = new Image(50, 50);
    images[41].src = "public/images/tiles/42.png";
    images[42] = new Image(50, 50);
    images[42].src = "public/images/tiles/43.png";
    images[43] = new Image(50, 50);
    images[43].src = "public/images/tiles/44.png";
    images[44] = new Image(50, 50);
    images[44].src = "public/images/tiles/45.png";
    images[45] = new Image(50, 50);
    images[45].src = "public/images/tiles/46.jpeg";
    images[46] = new Image(50, 50);
    images[46].src = "public/images/tiles/47.png";
    images[47] = new Image(50, 50);
    images[47].src = "public/images/tiles/48.jpeg";
    images[48] = new Image(50, 50);
    images[48].src = "public/images/tiles/49.jpeg";
    images[49] = new Image(50, 50);
    images[49].src = "public/images/tiles/50.png";
    images[50] = new Image(50, 50);
    images[50].src = "public/images/tiles/51.jpeg";
}

function loadImagesEasy(){
    limit = 16;
    //randomly chooses pics and puts in two random boxes
    //for easy level
    for( var j = 0; j < 8; j++){
        var counter = Math.floor(Math.random() * images.length);
        var id1 = idsEasy[Math.floor(Math.random() * idsEasy.length)];
        for( var i = 0; i < idsEasy.length; i++){
            if ( idsEasy[i] === id1) {
                idsEasy.splice(i, 1);
            }
        }
        var id2 = idsEasy[Math.floor(Math.random() * idsEasy.length)];
        for( var i = 0; i < idsEasy.length; i++){
            if ( idsEasy[i] === id2) {
                idsEasy.splice(i, 1);
            }
        }
        document.getElementById(id1).src = images[counter].src;
        document.getElementById(id2).src = images[counter].src;
    }
    document.getElementById("easy").style.display = "block";
    document.getElementById("level").style.display = "none";
    document.getElementsByClassName("level").style.display = "none";
}

function loadImagesHard(){
    limit = 36;
    console.log(limit);
    //randomly chooses pics and puts in two random boxes
    //for hard level
    for( var j = 0; j < 18; j++){
        var counter = Math.floor(Math.random() * images.length);
        var id1 = idsHard[Math.floor(Math.random() * idsHard.length)];
        for( var i = 0; i < idsHard.length; i++){
            if ( idsHard[i] === id1) {
                idsHard.splice(i, 1);
            }
        }
        var id2 = idsHard[Math.floor(Math.random() * idsHard.length)];
        for( var i = 0; i < idsHard.length; i++){
            if ( idsHard[i] === id2) {
                idsHard.splice(i, 1);
            }
        }
        document.getElementById(id1).src = images[counter].src;
        document.getElementById(id2).src = images[counter].src;
    }
    document.getElementById("hard").style.display = "block";
    document.getElementById("level").style.display = "none";
    document.getElementsByClassName("level").style.display = "none";
}


var cnt = 0;
var src1;
var src2;
var last;
/*function turn(img){

}

 */

function enter() {
    var name= document.getElementById("inpt").value;
    var text = "Hello " +name;
    document.getElementById("nameh2").innerHTML=text;
    document.getElementById("after").style.display="block";
    document.getElementById("before").style.display="none";
    document.getElementById("form").style.display="none";
    document.getElementById("level").style.display="block";
}

function flip(item) {
    $(".card").removeClass("card");
    $(item).addClass("card")
    $('.card').toggleClass('flipped');
    console.log("turning function starts");
    if(cnt==0){
        src1 = $('.card').find('.back img').attr("src");;
        //src1 = document.getElementById(img.id).src;
        cnt++;
        console.log("src1 noted");
        console.log(src1);
    }
    else if(cnt==1){
        src2 = $('.card').find('.back img').attr("src");;
        //src2 = document.getElementById(img.id).src;
        cnt++;
        console.log("src2 noted");
    }
    else if(cnt==2){
        if(src1 == src2){
            console.log("Both were same, so kept as it is");
            cnt=0;
            flip(flip3d);
            last+=2;
        }
        else{
            console.log("Both were different, Turned back the last two");
            cnt=0;
            flip(flip3d);
        }
    }
    if (last == limit){
        console.log("You Won");
    }

}
