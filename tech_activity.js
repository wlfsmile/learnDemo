$(function(){
	// 渲染活动项
	var data = [
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流111',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    },
	    {
	    	a: 'img/lesson_item.png',
	    	b: '乔布斯教授到杭州交流',
	    	c: 'aaa',
	    	d: '2016.05.20',
	    	e: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
	    	f: '#'
	    }
	];
    var pageNum;
	// 渲染页数数
	(function(){

		// 获取课程数
		var itemNum = data.length;
		// var itemNum = function(){
		// 	var itemNum;
		// 	$.ajax({
		// 		type: 'GET',
		// 		url: '/getItemNum',
		// 		success: function(data){
		// 			if(data.status == 0) {
		// 				itemNum = data.data;
		// 			}
		// 		}
		// 	});
		// 	return itemNum;
		// }();

		// 根据课程数目分页
		pageNum = Math.ceil( itemNum / 8);
		var str = '';
		for(var i = 1; i <= pageNum; i++) {
			str += "<li class='pageUlItem'>" + i +  "</li>";
		}
		$('.pageUl').append(str);
		$('.itemNum strong').text(pageNum);
	})();

	var str = '';
	for(var i = 0; i < data.length; i++) {
		str += "<div class='lessonItem'>" +
	    	   "	<img class='lessItemImg' src='" + data[i].a + "' />" +
	    	   "	<div class='lessItemCon'>" +
	    	   "		<h3 class='lessItemTit'>" + data[i].b + "</h3>" +
	    	   "		<div class='lessItemPer'>发布人：<span>" + data[i].c + "</span></div>" +
	    	   "		<span class='lessItemDate'>" + data[i].d + "</span>" +
	    	   "		<p class='lessItemPar'>" + data[i].e + "</p>" +
	    	   "		<a href='" + data[i].f + "' class='lessItemMore'>课程详情</a>" +
	    	   "	</div>" +
	    	   "</div>";
	}
	$('.lessonArea').html(str);

	// 当前页数
	var nowPage = 1;

	// 详细页
	$('.pageUlItem').click(function(){
		nowPage = this.text();
		// 获取当前页活动数据
		$ajax({
			type: 'GET',
			url: '/getPageData',
			data: {
				nowPage: nowPage
			},
			success: function(data) {
				var actiData = data.data;
				var actiStr = '';
				for(var i = 0; i < actiData.length; i++){
					actiStr += "<div class='lessonItem'>" +
					    	   "	<img class='lessItemImg' src='" + data[i].a + "' />" +
					    	   "	<div class='lessItemCon'>" +
					    	   "		<h3 class='lessItemTit'>" + data[i].b + "</h3>" +
					    	   "		<div class='lessItemPer'>发布人：<span>" + data[i].c + "</span></div>" +
					    	   "		<span class='lessItemDate'>" + data[i].d + "</span>" +
					    	   "		<p class='lessItemPar'>" + data[i].e + "</p>" +
					    	   "		<a href='" + data[i].f + "' class='lessItemMore'>课程详情</a>" +
					    	   "	</div>" +
					    	   "</div>";
				}
			$('.lessonArea').html(actiStr);	
			}
		});

	});

	// 上一页
	$('.preBtn').click(function(){
		if(nowPage != 1) {

			nowPage = nowPage - 1;
			// 获取当前页活动数据
			$ajax({
				type: 'GET',
				url: '/getPageData',
				data: {
					nowPage: nowPage
				},
				success: function(data) {
					var actiData = data.data;
					var actiStr = '';
					for(var i = 0; i < actiData.length; i++){
						actiStr += "<div class='lessonItem'>" +
						    	   "	<img class='lessItemImg' src='" + data[i].a + "' />" +
						    	   "	<div class='lessItemCon'>" +
						    	   "		<h3 class='lessItemTit'>" + data[i].b + "</h3>" +
						    	   "		<div class='lessItemPer'>发布人：<span>" + data[i].c + "</span></div>" +
						    	   "		<span class='lessItemDate'>" + data[i].d + "</span>" +
						    	   "		<p class='lessItemPar'>" + data[i].e + "</p>" +
						    	   "		<a href='" + data[i].f + "' class='lessItemMore'>课程详情</a>" +
						    	   "	</div>" +
						    	   "</div>";
					}
				$('.lessonArea').html(actiStr);	
				}
			});

		}
	});

	// 下一页
	$('.preBtn').click(function(){
		if(nowPage != pageNum) {
			
			nowPage = nowPage + 1;
			// 获取当前页活动数据
			$ajax({
				type: 'GET',
				url: '/getPageData',
				data: {
					nowPage: nowPage
				},
				success: function(data) {
					var actiData = data.data;
					var actiStr = '';
					for(var i = 0; i < actiData.length; i++){
						actiStr += "<div class='lessonItem'>" +
						    	   "	<img class='lessItemImg' src='" + data[i].a + "' />" +
						    	   "	<div class='lessItemCon'>" +
						    	   "		<h3 class='lessItemTit'>" + data[i].b + "</h3>" +
						    	   "		<div class='lessItemPer'>发布人：<span>" + data[i].c + "</span></div>" +
						    	   "		<span class='lessItemDate'>" + data[i].d + "</span>" +
						    	   "		<p class='lessItemPar'>" + data[i].e + "</p>" +
						    	   "		<a href='" + data[i].f + "' class='lessItemMore'>课程详情</a>" +
						    	   "	</div>" +
						    	   "</div>";
					}
				$('.lessonArea').html(actiStr);	
				}
			});

		}
	});


});