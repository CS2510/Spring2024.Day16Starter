import "../components/FollowMouseComponent.js"
import "../components/CheckCollisionsComponentCircle.js"
import "../components/CheckCollisionsComponentRectangle.js"

class CircleScene extends Scene {
  constructor() {
    super("white")
  }
  start(ctx){

    //A circle against which we will do collision detection.
    let collisionCircleGameObject = new GameObject("CollisionCircleGameObject")
    collisionCircleGameObject.addComponent(new Circle())
    collisionCircleGameObject.addComponent(new CheckCollisionsComponentCircle())
    GameObject.instantiate(collisionCircleGameObject, 100, 100, 50);


    //A rectangle against which we will do collision detection
    let collisionRectangleGameObject = new GameObject("CollisionRectangleGameObject")
    collisionRectangleGameObject.addComponent(new Rectangle("green", "transparent"))
    collisionRectangleGameObject.addComponent(new CheckCollisionsComponentRectangle())
    GameObject.instantiate(collisionRectangleGameObject, 200, 200, 20, 30);


    // A infinitely small point that will follow the mouse cursor
    let mouseCursorGameObject = new GameObject("MouseCursorGameObject")
    mouseCursorGameObject.addComponent(new Point())
    mouseCursorGameObject.addComponent(new FollowMouseComponent())
    GameObject.instantiate(mouseCursorGameObject)
  }

}

window.CircleScene = CircleScene
export default CircleScene;