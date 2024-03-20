import "./FollowMouseComponent.js"
import "./CheckCollisionsComponentCircle_Rectangle.js"
import "./CheckCollisionsComponentRectangle_Rectangle.js"
import CheckCollisionsComponentRectangle_Rectangle from "./CheckCollisionsComponentRectangle_Rectangle.js"

class RectangleScene extends Scene {
  constructor() {
    super("purple")
  }
  start(ctx){

    //A circle against which we will do collision detection.
    let collisionCircleGameObject = new GameObject("CollisionCircleGameObject")
    collisionCircleGameObject.addComponent(new Circle())
    collisionCircleGameObject.addComponent(new CheckCollisionsComponentCircle_Rectangle())
    collisionCircleGameObject.transform.x = 100;
    collisionCircleGameObject.transform.y = 100;
    collisionCircleGameObject.transform.scaleX = 50
    GameObject.instantiate(collisionCircleGameObject);


    //A rectangle against which we will do collision detection
    let collisionRectangleGameObject = new GameObject("CollisionRectangleGameObject")
    collisionRectangleGameObject.addComponent(new Rectangle("green", "transparent"))
    collisionRectangleGameObject.addComponent(new CheckCollisionsComponentRectangle_Rectangle())
    collisionRectangleGameObject.transform.x = 200;
    collisionRectangleGameObject.transform.y = 200;
    collisionRectangleGameObject.transform.scaleX = 20
    collisionRectangleGameObject.transform.scaleY = 30;
    GameObject.instantiate(collisionRectangleGameObject);


    // A infinitely small point that will follow the mouse cursor
    let mouseCursorGameObject = new GameObject("MouseCursorGameObject")
    mouseCursorGameObject.addComponent(new Rectangle())
    mouseCursorGameObject.addComponent(new FollowMouseComponent())
    mouseCursorGameObject.transform.scaleX = 30;
    mouseCursorGameObject.transform.scaleY = 30;
    GameObject.instantiate(mouseCursorGameObject)
  }

}

window.RectangleScene = RectangleScene
export default RectangleScene;