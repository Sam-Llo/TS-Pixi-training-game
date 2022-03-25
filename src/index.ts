import { Application, Sprite} from 'pixi.js' //Loader 
import './style.css';
//let FontFaceObserver = require('fontfaceobserver');

// const loader = new Loader();
// loader.add('Helvetica', 'static\Fonts\Helvetica.ttf');

// let PointsTopText = new Text()
// loader.load((loader, resources) => {
//     PointsTopText = new Text(
//         "P1: " + PointsTop,
//         {fontFamily: 'Helvetica', fontSize: 32, fill: 'white'}
//     );
// });

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});



const clampy: Sprite = Sprite.from("clampy.png");

clampy.anchor.set(0.5);

clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;

app.stage.addChild(clampy);
