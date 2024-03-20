import "../components/FollowMouseComponent.js"
import "../components/CheckCollisionsComponentCircle_Rectangle.js"
import "../components/CheckCollisionsComponentRectangle_Rectangle.js"
import CheckCollisionsComponentRectangle_Rectangle from "../components/CheckCollisionsComponentRectangle_Rectangle.js"

class RectangleScene extends Scene {
  constructor() {
    super("purple")
  }
  start(ctx){

    //A circle against which we will do collision detection.
    let collisionCircleGameObject = new GameObject("CollisionCircleGameObject")
    collisionCircleGameObject.addComponent(new Circle())
    collisionCircleGameObject.addComponent(new CheckCollisionsComponentCircle_Rectangle())
    GameObject.instantiate(collisionCircleGameObject, 100, 100, 50);


    //A rectangle against which we will do collision detection
    let collisionRectangleGameObject = new GameObject("CollisionRectangleGameObject")
    collisionRectangleGameObject.addComponent(new Rectangle("green", "transparent"))
    collisionRectangleGameObject.addComponent(new CheckCollisionsComponentRectangle_Rectangle())
    GameObject.instantiate(collisionRectangleGameObject, 200, 200, 20, 30);


    // A infinitely small point that will follow the mouse cursor
    let mouseCursorGameObject = new GameObject("MouseCursorGameObject")
    mouseCursorGameObject.addComponent(new Rectangle())
    mouseCursorGameObject.addComponent(new FollowMouseComponent())
    GameObject.instantiate(mouseCursorGameObject, 30, 30)
  }

}

window.RectangleScene = RectangleScene
export default RectangleScene;