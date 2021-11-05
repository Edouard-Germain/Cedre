import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
class App extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    
    // const controls = new OrbitControls( camera, renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    var geometry = new THREE.SphereGeometry( 15, 32, 16 );
    var material = new THREE.MeshBasicMaterial( { color: 0xA9A9A9 } );
    var sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    camera.position.z = 40;
    var animate = function () {
      requestAnimationFrame( animate );
      sphere.rotation.x += 0.0001;
      sphere.rotation.y += 0.0001;
      renderer.render( scene, camera );
    };
    animate();
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

 export default App