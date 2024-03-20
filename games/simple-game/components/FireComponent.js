class FireComponent extends Component {
    constructor() {
        super();
    }
    start() {
        this.secondsToFire = 0
        this.secondsBetweenLasers = .5
    }
    update() {
        if (this.secondsToFire <= 0) {
            GameObject.instantiate(new LaserGameObject(), this.transform.x, this.transform.y);
            this.secondsToFire = this.secondsBetweenLasers;
        }
        else{
            this.secondsToFire -= Time.deltaTime
        }
    }
}
window.FireComponent = FireComponent
export default FireComponent