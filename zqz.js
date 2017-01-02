$(function(){

var data = {
    "emptyIdentifier": 1,
    "map": {
        "User": {
            "email": "测试内容nru9",
            "password": "测试内容79zr",
            "picture": "测试内容s9lv",
            "schoolName": 1,
            "studentNumber": 45641,
            "userId": 1,
            "userName": 1
        },
        "message": "测试内容65cg",
        "status": 17683
    }
};

var userData = data.map.User;

var str = '';
str = '<h2>' + userData.userName + '<a href="##">（修改资料）</a></h2>' +
      '<p id="email">' + userData.email + '</p>' +
      '<p id="schoolName">' + userData.schoolName + '</p>'+
      '<p id="studentNumber">' + userData.studentNumber + '</p>';
$('.mancenter_msg_box1').append(str);

});

// $.ajax({
// 	type: 'GET',
// 	url: '/GetUserInformation',
// 	data: {
// 		'userId': $.cookie('userId');
// 	},
// 	success: function(data){
// 		var userData;
// 		var str = '';
// 		if(data.status === '1') {
// 			alert(data.message);
// 		} else {
// 			userData = data.map.User;
// 			str = "<h2>" + userData.userName + "<a href="##">（修改资料）</a></h2>" +
// 	              "<p id="email">" + userData.email + "</p>" +
// 	              "<p id="schoolName">" + userData.schoolName + "</p>" +
// 	              "<p id="studentNumber">" + userData.studentNumber + "</p>";
// 		}
// 		$('.mancenter_msg_box1').append(str);
// 	}
// });