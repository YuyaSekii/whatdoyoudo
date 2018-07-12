
function slot(){
	var random = parseInt(Math.random()*100);
	//Nagoya
//	if(random<40){
//	$('#id').text("ホテル");
//	$('#comment').text("絶対何もしないから");
//	}else if(40<=random&&random<50){
//		$('#id').text("田中屋");
//		$('#comment').text("今日は田中の気分");
//	}else if(50<=random&&random<60) {
//		$('#id').text("マリオ");
//		$('#comment').text("行きたくなるよね。");
//	}else if(60<=random&&random<70){
//		$('#id').text("ふみのゆ");
//		$('#comment').text("今日は月曜日じゃない？");
//	}else if(80<=random&&random<90){
//		$('#id').text("シルビア");
//		$('#comment').text("マスターーーー");
//	}else{
//		$('#id').text("あつしの家");
//		$('#comment').text("ボードゲームしようぜ");
//	}
	//東京
	if(random<40){
		$('#id').text("銀座");
		$('#comment').text("そうこなくっちゃ");
		}else if(40<=random&&random<50){
			$('#id').text("赤阪");
			$('#comment').text("まずはね");
		}else if(50<=random&&random<60) {
			$('#id').text("六本木");
			$('#comment').text("行きたくなるよね。");
		}else if(60<=random&&random<70){
			$('#id').text("かめちゃんち");
			$('#comment').text("ちょっと遠いけど");
		}else if(80<=random&&random<90){
			$('#id').text("残業");
			$('#comment').text("まじか。。");
		}else{
			$('#id').text("解散");
			$('#comment').text("からの〜？");
		}
}

var testTimer;
function startTimer(){
testTimer=setInterval(function(){
slot();
} , 10);
}

function stopTimer(){
clearInterval(testTimer);
}
	
$('#start').click(function(){
	startTimer();
	$('#start').hide();
	$('#stop').show();
	$('#reset').hide();
});

$('#stop').click(function(){
	clearInterval(testTimer);
	slot();
	$('#start').show();
	$('#stop').hide();
	$('#reset').show();
});

$('#reset').click(function(){
	clearInterval(testTimer);
	$('#id').text("？");
	$('#comment').text("　");
	$('#start').show();
	$('#stop').show();
	$('#reset').hide();
});
