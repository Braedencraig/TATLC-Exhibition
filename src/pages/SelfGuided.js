import React, { useEffect } from "react";
import * as PANOLENS from "panolens";
import * as THREE from "three";
import GifLoader from "three-gif-loader";
import ReactHowler from "react-howler";
// Spheres
import one from "../assets/spheres/one.jpg";
import two from "../assets/spheres/two.jpg";
import three from "../assets/spheres/three.jpg";
import four from "../assets/spheres/four.jpg";
import five from "../assets/spheres/five.jpg";
import six from "../assets/spheres/six.jpg";
import seven from "../assets/spheres/seven.jpg";
// Artworks
import sphere3 from "../assets/art/sphere3.gif";
import sphere7 from "../assets/art/sphere7.gif";
// GOOD COPY ART
import sphereOneArt from '../assets/art/sphereOneArt.jpg'
import sphereTwoArt from '../assets/art/sphereTwoArt.gif'
import sphereFourArt1 from '../assets/art/sphereFourArt1.jpg'
import sphereFourArt2 from '../assets/art/sphereFourArt2.gif'
import sphereFiveArt1 from '../assets/art/sphereFiveArt1.gif'
import sphereFiveArt2 from '../assets/art/sphereFiveArt2.gif'
import sphereSixArt from '../assets/art/sphereSixArt.gif'



// Audio
import audio from "../assets/audio/audio.mp3"

const SelfGuided = () => {  

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    body.style.overflow = 'hidden'
  }, [])

  let panorama1, 
      panorama2, 
      panorama3, 
      panorama4, 
      panorama5, 
      panorama6, 
      panorama7,
      panorama8,
      viewer;

  // Create spheres
  panorama1 = new PANOLENS.ImagePanorama(one);
  panorama2 = new PANOLENS.ImagePanorama(two);
  panorama3 = new PANOLENS.ImagePanorama(three);
  panorama4 = new PANOLENS.ImagePanorama(four);
  panorama5 = new PANOLENS.ImagePanorama(five);
  panorama6 = new PANOLENS.ImagePanorama(six);
  panorama7 = new PANOLENS.ImagePanorama(seven);
  panorama8 = new PANOLENS.ImagePanorama(one);

  var lookAtPositions = [
    new THREE.Vector3(-207.5, -504.88, -6000.0),
    new THREE.Vector3(-207.5, -504.88, -6000.0),
    new THREE.Vector3(-7007.5, 504.88, -6000.0)
  ];
  

  // Link spheres
  panorama1.link(panorama2, new THREE.Vector3(-207.5, 504.88, -6000.0), 1500)

  // panorama2.link(panorama3, new THREE.Vector3(-6907.5, 304.88, 1000.0), 600);
  // panorama2.link(panorama3, new THREE.Vector3(-6907.5, 304.88, 1000.0), 600);
  panorama2.link(panorama3, new THREE.Vector3(-207.5, 504.88, -6000.0), 1500);
  // panorama2.link(panorama3, new THREE.Vector3(-6907.5, 304.88, 1000.0), 800, PANOLENS.DataImage.Arrow);

  // panorama3.link(panorama4, new THREE.Vector3(-207.5, 504.88, -6000.0), 1000, PANOLENS.DataImage.Arrow);
  panorama3.link(panorama4, new THREE.Vector3(-207.5, 504.88, -6000.0), 1500);

  // panorama4.link(panorama5, new THREE.Vector3(-207.5, 504.88, -6000.0), 1000, PANOLENS.DataImage.Arrow);
  panorama4.link(panorama5, new THREE.Vector3(-207.5, 504.88, -6000.0), 1500);

  // panorama5.link(panorama6, new THREE.Vector3(-207.5, 504.88, -6000.0), 1000, PANOLENS.DataImage.Arrow);
  panorama5.link(panorama6, new THREE.Vector3(-207.5, 504.88, -6000.0), 1500);

  // panorama6.link(panorama7, new THREE.Vector3(-207.5, 504.88, -6000.0), 1000, PANOLENS.DataImage.Arrow);
  panorama6.link(panorama7, new THREE.Vector3(-207.5, 504.88, -6000.0), 1500);

  // panorama7.link(panorama8, new THREE.Vector3(-207.5, 504.88, -6000.0), 1000, PANOLENS.DataImage.Arrow);
  panorama7.link(panorama8, new THREE.Vector3(-7007.5, 504.88, -6000.0), 1600);


  // Create viewer and add panoramas
  viewer = new PANOLENS.Viewer({ autoHideInfospot: false, controlBar: false, cameraFov: 70 });
  viewer.add(panorama1);
  viewer.add(panorama2);
  viewer.add(panorama3);
  viewer.add(panorama4);
  viewer.add(panorama5);
  viewer.add(panorama6);
  viewer.add(panorama7);
  viewer.add(panorama8);

  viewer.addUpdateCallback(function(){
  
  });

  const container = document.getElementsByClassName('panolens-container')[0]

  panorama1.addEventListener( 'enter-fade-start', function(){
    container.classList.add('fade-in')
    viewer.tweenControlCenter( lookAtPositions[0], 0 );
    setTimeout(() => {
      container.classList.remove('fade-in')
    }, 1000)
  });

  panorama2.addEventListener( 'enter-fade-start', function(){
    container.classList.add('fade-in')
    viewer.tweenControlCenter( lookAtPositions[1], 0 );
    setTimeout(() => {
      container.classList.remove('fade-in')
    }, 1000)
  });

  panorama3.addEventListener( 'enter-fade-start', function(){
    container.classList.add('fade-in')
    viewer.tweenControlCenter( lookAtPositions[0], 0 );
    setTimeout(() => {
      container.classList.remove('fade-in')
    }, 1000)
  });

  panorama4.addEventListener( 'enter-fade-start', function(){
    container.classList.add('fade-in')
    viewer.tweenControlCenter( lookAtPositions[0], 0 );
    setTimeout(() => {
      container.classList.remove('fade-in')
    }, 1000)
  });

  panorama5.addEventListener( 'enter-fade-start', function(){
    container.classList.add('fade-in')
    viewer.tweenControlCenter( lookAtPositions[0], 0 );
    setTimeout(() => {
      container.classList.remove('fade-in')
    }, 1000)
  });

  panorama6.addEventListener( 'enter-fade-start', function(){
    container.classList.add('fade-in')
    viewer.tweenControlCenter( lookAtPositions[0], 0 );
    setTimeout(() => {
      container.classList.remove('fade-in')
    }, 1000)
  });

  panorama7.addEventListener( 'enter-fade-start', function(){
    container.classList.add('fade-in')
    viewer.tweenControlCenter( lookAtPositions[2], 0 );
    setTimeout(() => {
      container.classList.remove('fade-in')
    }, 1000)
  });

  panorama8.addEventListener( 'enter-fade-start', function(){
    container.classList.add('fade-in')
    viewer.tweenControlCenter( lookAtPositions[0], 0 );
    const end = Array.from(document.getElementsByClassName('end'))
    setTimeout(() => {
      end[0].classList.add('show')
    }, 1000)
  });  

  // Gif loader
  const loader = new GifLoader();

  // // Sphere one artwork - contains one
  const geometryOne = new THREE.PlaneGeometry(300, 400, 200);
  const loaderOne = new THREE.TextureLoader();
  const materialOne = new THREE.MeshBasicMaterial({
    map: loaderOne.load(sphereOneArt),
    side: THREE.DoubleSide,
  });
  const planeOne = new THREE.Mesh(geometryOne, materialOne);
  planeOne.position.set(-30, 230, 340);
  planeOne.rotation.x -= 0.3;
  planeOne.scale.x = -1;

  panorama1.add(planeOne);

  // // Sphere two artwork - contains two & three
  const textureTwo = loader.load(
    sphereTwoArt,
    // onLoad callback
    function (reader) {
      console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      console.error("An error happened.");
    }
  );
  const materialTwo = new THREE.MeshBasicMaterial({
    map: textureTwo,
    // transparent: true,
    side: THREE.DoubleSide,
  });
  const geometryTwo = new THREE.PlaneGeometry(400, 400, 400);
  const planeTwo = new THREE.Mesh(geometryTwo, materialTwo);
  planeTwo.position.set(-300, 220, 420);
  planeTwo.rotation.y -= 0.55;
  planeTwo.scale.x = -1;
  panorama2.add(planeTwo);


  // // Sphere three artwork - contains four
  const geometryFour = new THREE.PlaneGeometry(400, 300, 400);
  const textureFour = loader.load(
    sphere3,
    // onLoad callback
    function (reader) {
      console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      console.error("An error happened.");
    }
  );
  const materialFour = new THREE.MeshBasicMaterial({
    map: textureFour,
    side: THREE.DoubleSide,
  });
  const planeFour = new THREE.Mesh(geometryFour, materialFour);
  planeFour.position.set(-450, 200, 90);
  planeFour.rotation.y += 1.8;
  panorama3.add(planeFour);

  // Sphere four artwork - contains five & six
  const geometryFive = new THREE.PlaneGeometry(300, 300, 250);
  const textureFive = loader.load(
    sphereFourArt2,
    // onLoad callback
    function (reader) {
      console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      console.error("An error happened.");
    }
  );
  const materialFive = new THREE.MeshBasicMaterial({
    map: textureFive,
    side: THREE.DoubleSide,
  });
  const planeFive = new THREE.Mesh(geometryFive, materialFive);
  planeFive.position.set(-350, -10, 10);
  planeFive.rotation.y += 1.7;
  panorama4.add(planeFive);

  const loaderSix = new THREE.TextureLoader();
  const materialSix = new THREE.MeshBasicMaterial({
    map: loaderSix.load(sphereFourArt1),
    side: THREE.DoubleSide,
  });
  const geometrySix = new THREE.PlaneGeometry(250, 350, 250);
  const planeSix = new THREE.Mesh(geometrySix, materialSix);
  planeSix.position.set(350, 100, -60);
  planeSix.rotation.y += 1.7;
  panorama4.add(planeSix);

  // // Sphere five artwork - contains seven & eight
  const textureSeven = loader.load(
    sphereFiveArt1,
    // onLoad callback
    function (reader) {
      console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      console.error("An error happened.");
    }
  );
  const materialSeven = new THREE.MeshBasicMaterial({
    map: textureSeven,
    // transparent: true,
    side: THREE.DoubleSide,
  });
  const geometrySeven = new THREE.PlaneGeometry(300, 300, 300);
  const planeSeven = new THREE.Mesh(geometrySeven, materialSeven);
  planeSeven.position.set(-350, 100, 10);
  planeSeven.rotation.y += 1.7;
  panorama5.add(planeSeven);

  const textureEight = loader.load(
    sphereFiveArt2,
    // onLoad callback
    function (reader) {
      console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      console.error("An error happened.");
    }
  );
  const materialEight = new THREE.MeshBasicMaterial({
    map: textureEight,
    // transparent: true,
    side: THREE.DoubleSide,
  });
  const geometryEight = new THREE.PlaneGeometry(300, 300, 300);
  const planeEight = new THREE.Mesh(geometryEight, materialEight);
  planeEight.position.set(350, 140, -30);
  planeEight.rotation.y += 1.7;
  panorama5.add(planeEight);

  //  // Sphere six artwork - contains nine
   const geometryNine = new THREE.PlaneGeometry(250, 350, 300);
   const textureNine = loader.load(
    sphereSixArt,
    // onLoad callback
    function (reader) {
      console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      console.error("An error happened.");
    }
  );
  const materialNine = new THREE.MeshBasicMaterial({
    map: textureNine,
    // transparent: true,
    side: THREE.DoubleSide,
  });
   const planeNine = new THREE.Mesh(geometryNine, materialNine);
   planeNine.position.set(-350, 160, -220);
   planeNine.rotation.y += 1;
   panorama6.add(planeNine);

  //  // Sphere seven artwork - contains ten
   const geometryTen = new THREE.PlaneGeometry(300, 200, 200);
   const textureTen = loader.load(
    sphere7,
    // onLoad callback
    function (reader) {
      console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      console.error("An error happened.");
    }
  );
   const materialTen = new THREE.MeshBasicMaterial({
     map: textureTen,
     side: THREE.DoubleSide,
   });
   const planeTen = new THREE.Mesh(geometryTen, materialTen);
   planeTen.position.set(-100, 150, -350);
   planeTen.rotation.y += 0.2;
   panorama7.add(planeTen);

  return (
    <>
      <ReactHowler
        src={audio}
        playing={true}
        loop={true}
        volume={0.7}
      />
      <div className="end">
        <h2>Thank you for coming!</h2>
        <p>Please visit the <a href="/about">about page</a> to learn more about the artist and the exibition.</p>
      </div>
    </>
  );
}

export default SelfGuided