import "./FollowMouseComponent.js"
import "./CheckCollisionsComponentCircle.js"
import "./CheckCollisionsComponentRectangle.js"

class CircleScene extends Scene {
  constructor() {
    super("white")
  }
  start(ctx){

    //A circle against which we will do collision detection.
    let collisionCircleGameObject = new GameObject("CollisionCircleGameObject")
    collisionCircleGameObject.addComponent(new Circle())
    collisionCircleGameObject.addComponent(new CheckCollisionsComponentCircle())
    collisionCircleGameObject.transform.x = 100;
    collisionCircleGameObject.transform.y = 100;
    collisionCircleGameObject.transform.scaleX = 50
    GameObject.instantiate(collisionCircleGameObject);


    //A rectangle against which we will do collision detection
    let collisionRectangleGameObject = new GameObject("CollisionRectangleGameObject")
    collisionRectangleGameObject.addComponent(new Rectangle("green", "transparent"))
    collisionRectangleGameObject.addComponent(new CheckCollisionsComponentRectangle())
    collisionRectangleGameObject.transform.x = 200;
    collisionRectangleGameObject.transform.y = 200;
    collisionRectangleGameObject.transform.scaleX = 20
    collisionRectangleGameObject.transform.scaleY = 30;
    GameObject.instantiate(collisionRectangleGameObject);


    // A infinitely small point that will follow the mouse cursor
    let mouseCursorGameObject = new GameObject("MouseCursorGameObject")
    mouseCursorGameObject.addComponent(new Point())
    mouseCursorGameObject.addComponent(new FollowMouseComponent())
    GameObject.instantiate(mouseCursorGameObject)
  }

}

window.CircleScene = CircleScene
export default CircleScene;