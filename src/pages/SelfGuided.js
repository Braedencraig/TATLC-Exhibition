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
import imagePlaceholder from "../assets/art/artworkPlaceholder.jpg";
import gifPlaceholder from "../assets/gifs/gifPlaceholder.gif";
import placeholder from "../assets/next.png";
import sphere1 from "../assets/art/sphere1.gif";
import sphere3 from "../assets/art/sphere3.gif";
import sphere4 from "../assets/art/sphere4.gif";
import sphere7 from "../assets/art/sphere7.gif";
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
      infospot,
      infospot2,
      infospot3,
      infospot4,
      infospot5,
      infospot6,
      infospot7,
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
    new THREE.Vector3(-207.5, -704.88, -6000.0),
    new THREE.Vector3(-207.5, -704.88, -6000.0),
    new THREE.Vector3(-207.5, -704.88, -6000.0)
  ];
  

  // Link spheres
  // panorama1.link(panorama2, new THREE.Vector3(-207.5, 504.88, -6000.0), 1300, `${placeholder}`)
  infospot = new PANOLENS.Infospot( 600, PANOLENS.DataImage.Arrow );
  infospot.position.set( -100, -500, -5000 );
  infospot.addEventListener( 'click', function(){
    viewer.setPanorama( panorama2 );
  } );
  panorama1.add( infospot );

  infospot2 = new PANOLENS.Infospot( 600, PANOLENS.DataImage.Arrow );
  infospot2.position.set( -100, -500, -5000 );
  infospot2.addEventListener( 'click', function(){
    viewer.setPanorama( panorama3 );
  } );
  panorama2.add( infospot2 );

  infospot3 = new PANOLENS.Infospot( 600, PANOLENS.DataImage.Arrow );
  infospot3.position.set( -100, -500, -5000 );
  infospot3.addEventListener( 'click', function(){
    viewer.setPanorama( panorama4 );
  } );
  panorama3.add( infospot3 );

  infospot4 = new PANOLENS.Infospot( 600, PANOLENS.DataImage.Arrow );
  infospot4.position.set( -100, -500, -5000 );
  infospot4.addEventListener( 'click', function(){
    viewer.setPanorama( panorama5 );
  } );
  panorama4.add( infospot4 );

  infospot5 = new PANOLENS.Infospot( 600, PANOLENS.DataImage.Arrow );
  infospot5.position.set( -100, -500, -5000 );
  infospot5.addEventListener( 'click', function(){
    viewer.setPanorama( panorama6 );
  } );
  panorama5.add( infospot5 );

  infospot6 = new PANOLENS.Infospot( 600, PANOLENS.DataImage.Arrow );
  infospot6.position.set( -100, -500, -5000 );
  infospot6.addEventListener( 'click', function(){
    viewer.setPanorama( panorama7 );
  } );
  panorama6.add( infospot6 );

  infospot7 = new PANOLENS.Infospot( 600, PANOLENS.DataImage.Arrow );
  infospot7.position.set( -100, -500, -5000 );
  infospot7.addEventListener( 'click', function(){
    viewer.setPanorama( panorama8 );
  } );
  panorama7.add( infospot7 );




  // panorama2.link(panorama3, new THREE.Vector3(-6907.5, 304.88, 1000.0), 600);
  // panorama2.link(panorama3, new THREE.Vector3(-6907.5, 304.88, 1000.0), 600);
  // panorama2.link(panorama3, new THREE.Vector3(-6907.5, 304.88, 1000.0), 1500, `${placeholder}`);
  panorama2.link(panorama3, new THREE.Vector3(-6907.5, 304.88, 1000.0), 10e-7);

  // panorama3.link(panorama4, new THREE.Vector3(-207.5, 504.88, -6000.0), 1000, );
  panorama3.link(panorama4, new THREE.Vector3(-207.5, 504.88, -6000.0), 10e-7);

  // panorama4.link(panorama5, new THREE.Vector3(-207.5, 504.88, -6000.0), 1000, );
  panorama4.link(panorama5, new THREE.Vector3(-207.5, 504.88, -6000.0), 10e-7);

  // panorama5.link(panorama6, new THREE.Vector3(-207.5, 504.88, -6000.0), 1000, );
  panorama5.link(panorama6, new THREE.Vector3(-207.5, 504.88, -6000.0), 10e-7);

  // panorama6.link(panorama7, new THREE.Vector3(-207.5, 504.88, -6000.0), 1000, );
  panorama6.link(panorama7, new THREE.Vector3(-207.5, 504.88, -6000.0), 10e-7);

  // panorama7.link(panorama8, new THREE.Vector3(-207.5, 504.88, -6000.0), 1000, );
  panorama7.link(panorama8, new THREE.Vector3(-7007.5, 504.88, -6000.0), 10e-7);


  // Create viewer and add panoramas
  viewer = new PANOLENS.Viewer({ autoHideInfospot: false, controlBar: false });
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
  const textureOne = loader.load(
    sphere1,
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
  const materialOne = new THREE.MeshBasicMaterial({
    map: textureOne,
    side: THREE.DoubleSide,
  });
  const planeOne = new THREE.Mesh(geometryOne, materialOne);
  planeOne.position.set(-30, 230, 340);
  planeOne.rotation.x -= 0.3;
  panorama1.add(planeOne);

  // // Sphere two artwork - contains two & three
  const textureTwo = loader.load(
    gifPlaceholder,
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
  panorama2.add(planeTwo);

  const geometryThree = new THREE.PlaneGeometry(400, 400, 400);
  const loaderThree = new THREE.TextureLoader();
  const materialThree = new THREE.MeshBasicMaterial({
    map: loaderThree.load(imagePlaceholder),
    side: THREE.DoubleSide,
  });
  const planeThree = new THREE.Mesh(geometryThree, materialThree);
  planeThree.position.set(10, 410, -440);
  planeThree.rotation.x += 0.4;
  panorama2.add(planeThree);

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
  const geometryFive = new THREE.PlaneGeometry(250, 350, 250);
  const textureFive = loader.load(
    sphere4,
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

  const textureSix = loader.load(
    gifPlaceholder,
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
  const materialSix = new THREE.MeshBasicMaterial({
    map: textureSix,
    // transparent: true,
    side: THREE.DoubleSide,
  });
  const geometrySix = new THREE.PlaneGeometry(250, 250, 250);
  const planeSix = new THREE.Mesh(geometrySix, materialSix);
  planeSix.position.set(350, 100, -60);
  planeSix.rotation.y += 1.7;
  panorama4.add(planeSix);

  // // Sphere five artwork - contains seven & eight
  const geometrySeven = new THREE.PlaneGeometry(300, 300, 300);
  const loaderSeven = new THREE.TextureLoader();
  const materialSeven = new THREE.MeshBasicMaterial({
    map: loaderSeven.load(imagePlaceholder),
    side: THREE.DoubleSide,
  });
  const planeSeven = new THREE.Mesh(geometrySeven, materialSeven);
  planeSeven.position.set(-350, 100, 10);
  planeSeven.rotation.y += 1.7;
  panorama5.add(planeSeven);

  const textureEight = loader.load(
    gifPlaceholder,
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
   const geometryNine = new THREE.PlaneGeometry(300, 300, 300);
   const loaderNine = new THREE.TextureLoader();
   const materialNine = new THREE.MeshBasicMaterial({
     map: loaderNine.load(imagePlaceholder),
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
   planeTen.position.set(-100, 200, -350);
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