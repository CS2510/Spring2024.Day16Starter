class LaserGameObject extends GameObject{
  constructor(name = "LaserGameObject"){
    super(name);
    this.addComponent(new Circle())
    this.addComponent(new LaserComponent())
  }
}

window.LaserGameObject = LaserGameObject;
export default LaserGameObject;