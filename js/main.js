document.addEventListener('DOMContentLoaded', () => {
	let controller = new ScrollMagic.Controller();

	let timeline = new TimelineMax();

	timeline
	.to('#img_six', 6, {
		y: -700
	})

	.to('#img_five', 6, {
		y: -500
	}, '-=6')

	.to('#img_four', 6, {
		y: -400
	}, '-=6')

	.to('#img_three', 6, {
		y: -300
	}, '-=6')

	.to('#img_two', 6, {
		y: -200
	}, '-=6')

	.to('#img_one', 6, {
		y: -100
	}, '-=6')

	.to('.blur', 6, {
		top: '0%'
	}, '-=6')

	.to('.content-wrapper', 6, {
		top: '-1%'
	}, '-=5.7')

	.to('.heading, .main-menu', 6, {
		y: -600,
	}, '-=6')

	.from ('.image-one', 3, {
		top:'40px',
		autoAlpha:0
	}, '-=4')

	.from ('.image-two', 3, {
		top:'40px',
		autoAlpha:0
	}, '-=3.5')

	.from ('.image-three', 3, {
		top:'40px',
		autoAlpha:0
	}, '-=3.5')

	.from ('.image-four', 3, {
		top:'40px',
		autoAlpha:0
	}, '-=3.5')

	.from ('.image-five', 3, {
		top:'40px',
		autoAlpha:0
	}, '-=3.5')



	let scene = new ScrollMagic.Scene({
		triggerElement: 'header',
		duration: '200%',
		triggerHook: 0,
	})

	.setTween(timeline)
	.setPin('header')
	.addTo(controller);

})