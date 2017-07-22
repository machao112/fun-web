$(function() {
	displayFaces();
	bubbleClick();
	displayArticles();
	setInterval(function(){
		articleTada()}
	,4000);
	designBGtuff();
});

function designBGtuff() {
	// var randomColor = Math.floor(Math.random()*16777215).toString(16);
	$('.design-img-link').hover(function() {
		$(this).parent().parent().css('background-color', $(this).data('color'));
	}, function() {
		$(this).parent().parent().css('background-color', $(this).parent().parent().data('origin-color'));
	});
}

function articleTada() {
	var randNum = Math.floor(Math.random() * $('.article-thumb').length);
	$('.article-thumb').eq(randNum).addClass('is-emph')
		.siblings().removeClass('is-emph');
}


$(window).scroll(function(){
	youtubevidScroll();
	mentoringScroll();
	startArticle();
});


function youtubevidScroll() {
	wScroll = $(window).scrollTop();
	// console.log(wScroll);
	$('.video-trip').css('background-position','center -'+ wScroll +'px');
}

// function phan mentoring

function displayFaces() {
	var $faces= $('.faces');
	var faces = [
		{
			"face": "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/18341691_1366467913446609_4114107146520078584_n.jpg?oh=a8b05d88c98b736233cd9555b573a237&oe=59CE303A",
			"bubble":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
			 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			 "authur": "Nathan JaCobs"
		},
		{
			"face": "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-1/p160x160/16729406_1383949881655025_3433305864057551945_n.jpg?oh=d15f4c16c4298f3cd2be78db44fc2421&oe=59E5E896",
			"bubble":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
			 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			 "authur": "Nathan JaCobs"
		},
		{
			"face": "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-1/c0.1.160.160/p160x160/13599983_1123558504381234_579799180797706750_n.jpg?oh=edb51adb18bfb4cbbbacf43dfe5b77b4&oe=59D50710",
			"bubble":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
			 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			 "authur": "Nathan JaCobs"
		},
		{
			"face": "https://scontent.fhan4-1.fna.fbcdn.net/v/t31.0-8/14138075_1032679916801098_779831275610697039_o.jpg?oh=d6b9b0571d04524e3a8dfe79ca0d22d4&oe=599CE779",
			"bubble":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
			 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			 "authur": "Nathan JaCobs"
		},
		{
			"face": "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/19059885_1922298771358949_8514976822856561421_n.jpg?oh=d8821068a2af56e64f2d6e450938f391&oe=59D464F0",
			"bubble":"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\
			 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			 "authur": "Nathan JaCobs"
		},
	];

	faces.forEach(function(face) {
		var item = '<li class="face" style="background-image:url('+face.face+');">\
						<div class="bubble">\
							<p>'+face.bubble+'</p>\
							<cite>'+face.authur+'</cite>\
						</div>\
					</li>';
		$faces.prepend(item);
	});
}

function mentoringScroll() {
	var wScroll = $(window).scrollTop();
	var offset = $('section.mentoring').offset().top - 500;
	if(offset < wScroll) {
		if($(window).width() > 640) {
			$('.faces').addClass('launched');

			if(!$('.face').hasClass('has-bubble-open')) {
				setTimeout(function(){
					$('.face:nth-child(3)').addClass('has-bubble-open');
				}, 500);
			}
		} else {
			mentoringNarrowStart();
		}
	}

}

function bubbleClick() {
	$('.face').on('click', function() {
		var $this = $(this),
			facetop = $this.position().top,
			verMath = -1 * (facetop - 230),
			faceleft = $this.position().left,
			horzMath = 0 - faceleft;

		if($(window).width() > 640) {
			$this.parent().css('top', + verMath +'px');
		} else if($this.hasClass('back-btn')) {
			$('.faces.launched').css('left',0);
		} else {
			$this.parent().css('left', + horzMath +'px');
		}
			$this.addClass('has-bubble-open')
				.siblings().removeClass('has-bubble-open');
	});

	// $('.face:nth-child(3)').addClass('has-bubble-open');
}

function mentoringNarrowStart() {
	$('.faces').css({
		'top': '230px',
		'left': '0px'
	});
	$('.face').first().addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open')
}

function mentoringWideStart() {
	$('.faces').css({
		'top': '0px',
		'left': '0px'
	});
	$('.face:nth-child(3)').addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open')
}


$(window).resize(function() {
	if($(window).width() > 640) {
		mentoringWideStart()
	} else {
		mentoringNarrowStart()
	}
})


// function phan articles


function displayArticles() {
	var articles = [
		{'name':'aricle name', 'date' : 'Dec 10, 1982', 'image':'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p160x160/10392285_667381103373144_4400807225613981979_n.jpg?oh=3dd5ece9a6b7c1420e403e51aed1097d&oe=59DBB28D'},
		{'name':'aricle name', 'date' : 'Dec 10, 1982', 'image':'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p160x160/15726733_855618717807920_8218631555806680641_n.jpg?oh=7ce776f241e6de142dc1b5aa5b02ffa6&oe=59CF2C82'},
		{'name':'aricle name', 'date' : 'Dec 10, 1982', 'image':'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p160x160/18813368_1121254884645607_7823847656640832240_n.jpg?oh=990e5d7d0a63c8f729b0652160b9f5f6&oe=59E003AB'},
		{'name':'aricle name', 'date' : 'Dec 10, 1982', 'image':'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p160x160/18342460_10207083600128895_7675660516927120034_n.jpg?oh=55ead4d7cbf7fe105d8010f8b28ff36d&oe=599E90D1'},
		{'name':'aricle name', 'date' : 'Dec 10, 1982', 'image':'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p160x160/19225094_464573927213001_1541107868491182295_n.jpg?oh=83b03ab7a46220aee7affcc66303ffe2&oe=59CEA71A'},
		{'name':'aricle name', 'date' : 'Dec 10, 1982', 'image':'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p160x160/18622544_1314159141972518_4602172488640536272_n.jpg?oh=2620a10911037437e4aad31592c9b752&oe=59E8BABF'},
		{'name':'aricle name', 'date' : 'Dec 10, 1982', 'image':'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p160x160/603749_489297371229386_632719637043803448_n.jpg?oh=23de0c53bfe5c3e24e934f8d2d969690&oe=59D5E0E9'},
		{'name':'aricle name', 'date' : 'Dec 10, 1982', 'image':'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/c0.43.160.160/p160x160/1459179_750668135030998_6158585475944725865_n.jpg?oh=ec9ec91ebcad9a0a846377c1ad6b5af1&oe=59CC93F9'},
		{'name':'aricle name', 'date' : 'Dec 10, 1982', 'image':'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p160x160/19225873_465550667154799_4047722581052999075_n.jpg?oh=4f126317756058fa9abf5602546c3e3e&oe=59CB38EC'},
		{'name':'aricle name', 'date' : 'Dec 10, 1982', 'image':'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p200x200/18301734_1415326611837497_8684041534228008805_n.png?oh=6b53bbf1a3e76520e7437877fae5af64&oe=59DD9DC5'},
		{'name':'aricle name', 'date' : 'Dec 10, 1982', 'image':'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/c29.0.200.200/p200x200/10348295_1735089766724864_927854033977864250_n.jpg?oh=8314913b35a148fd418b27a39dbf9a36&oe=59A0648B'},
		{'name':'aricle name', 'date' : 'Dec 10, 1982', 'image':'https://www.fillmurray.com/230/500'},
	];
	articles.forEach(function(article) {
		var art = '<a href="" class="article-thumb" style="background-image:url('+article.image+')">\
					<div class="article-meta">\
						<div class="name">'+article.name+'</div>\
						<div class="date">'+article.date+'</div>\
					</div>\
					</a>';
	$('.article-wrap').append(art);
	});
}


function startArticle() {
	var wScroll = $(window).scrollTop();
	var offset = $('section.articles').offset().top - $(window).height()/2;
	if(offset < wScroll) {
		$('.article-thumb').each(function(i) {
			setTimeout(function(){
				$('.article-thumb').eq(i).addClass('is-visible');
			}, 300 * i);
		});
	}
}




