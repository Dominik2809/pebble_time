var UI = require('ui');
var Vector2 = require('vector2');

var window = new UI.Window();

var bgRect = new UI.Rect
({
	position: Vector2(10, 20),
	size: Vector2(124, 60),
	backgroundColor: 'black'
});

window.add(bgRect);

var timeText = new UI.TimeText
({
	//position:  Vector2(0, 24),
	position: Vector2(0, 24),
	size:  Vector2(144, 30),
	color: 'white',
	text:	'%H:%M:%S',
	textAlign: 'center',
	font: 'bitham-42-bold'
});

window.add(timeText);

window.show();