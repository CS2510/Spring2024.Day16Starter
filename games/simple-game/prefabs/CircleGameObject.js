class CircleGameObject extends GameObject {
  constructor(name = "CircleGameObject") {
    super(name);
    this.addComponent(new Circle())
    this.addComponent(new KeyboardComponent())
    this.addComponent(new FireComponent())
  }
}

window.CircleGameObject = CircleGameObject;
export default CircleGameObject;