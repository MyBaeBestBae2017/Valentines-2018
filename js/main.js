var min = 1;
var max = 66;
function randomImage(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
class ImageGenerator extends React.Component {
    constructor() {
        super();
        this.state = { number: randomImage(min, max) }
    }
    render() {
        var imageNumber = randomImage(min, max)
        var button = React.createElement("button", { onClick: () => { this.setState({ number: imageNumber }) } });
        var count = React.createElement("h1", null, "Image number : " + imageNumber);
        var message = React.createElement("div", null, "Dear princess, you have been the greatest thing to have ever happened to me and I am happy to have been able to share these memories with you. I love you so much. Alexandre");
        var image = React.createElement("img", { src: "images/Alex and Ariel/picture " + imageNumber + ".jpg" });
        var leftDiv = React.createElement("div", { class: "leftDiv" }, count, button, message);
        var rightDiv = React.createElement("div", { class: "rightDiv" }, image);
        return React.createElement("div", { class: "mainDiv" }, leftDiv, rightDiv);
    }
}
ReactDOM.render(React.createElement(ImageGenerator, null), main);