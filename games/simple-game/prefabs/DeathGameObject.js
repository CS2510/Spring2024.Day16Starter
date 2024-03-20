class DeathGameObject extends GameObject{
  constructor(name = "DeathGameObject"){
    super(name)
    this.addComponent(new DeathComponent())
    this.addComponent(new Circle("red", "black"))
  }
}

window.DeathGameObject = DeathGameObject;
export default DeathGameObject;