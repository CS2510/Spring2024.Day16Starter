import "../components/DeathComponent.js"
import "../components/KeyboardComponent.js"
import "../components/FireComponent.js"
import "../components/LaserComponent.js"
import "../components/ScoreUpdaterComponent.js"
import "../prefabs/DeathGameObject.js"
import "../prefabs/CircleGameObject.js"
import "../prefabs/LaserGameObject.js"


/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
    super("lightgray")
  }
  start(ctx) {

    GameObject.instantiate(new CircleGameObject(), 200, 400, 50)

    GameObject.instantiate(new DeathGameObject(), 200, 0, 50)

    GameObject.instantiate(new DeathGameObject(), 300, 200, 50, 1)

    let scoreGameObject = new GameObject("ScoreGameObject")
    scoreGameObject.addComponent(new Text("Score: ", "30px sans", "white"))
    scoreGameObject.addComponent(new ScoreUpdaterComponent())
    GameObject.instantiate(scoreGameObject, 30, 30)
  }
}

window.MainScene = MainScene
export default MainScene