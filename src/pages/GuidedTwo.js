/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import * as PANOLENS from "panolens";
import * as THREE from "three";
import ReactHowler from "react-howler";
import GifLoader from "three-gif-loader";
// Spheres
import one from "../assets/spheres/one.jpg";
import two from "../assets/spheres/two.jpg";
import three from "../assets/spheres/three.jpg";
import four from "../assets/spheres/four.jpg";
import five from "../assets/spheres/five.jpg";
import six from "../assets/spheres/six.jpg";
import seven from "../assets/spheres/seven.jpg";
// // Artworks
import imagePlaceholder from "../assets/art/sphereOneArt.jpg";
import gifPlaceholder from "../assets/art/sphereTwoArt.gif";
// Artworks
import sphere3 from "../assets/art/sphere3.gif";
import sphere7 from "../assets/art/sphere7.gif";
// GOOD COPY ART
import sphereOneArtImg from '../assets/art/sphereOneArt.jpg'
import sphereTwoArtImg from '../assets/art/sphereTwoArt.gif'
import sphereFourArt1Img from '../assets/art/sphereFourArt1.jpg'
import sphereFourArt2Img from '../assets/art/sphereFourArt2.gif'
import sphereFiveArt1Img from '../assets/art/sphereFiveArt1.gif'
import sphereFiveArt2Img from '../assets/art/sphereFiveArt2.gif'
import sphereSixArtImg from '../assets/art/sphereSixArt.gif'
// Audio
import audio from "../assets/audio/audio.mp3"

export default function Guided() {
  const [progressEl, setProgessEl] = useState(null);
  const spanEl = useRef(null);

  var panorama1,
      panorama2,
      panorama3,
      panorama4,
      panorama5,
      panorama6,
      panorama7,
      panorama8,
      viewer;

  var sphereOneArt, 
  sphereTwoArt1, 
  sphereTwoArt2, 
  sphereThreeArt, 
  sphereFourArt1, 
  sphereFourArt2, 
  sphereFiveArt1, 
  sphereFiveArt2,
  sphereSixArt,
  sphereSevenArt;

  useEffect(() => {
    setProgessEl(document.querySelector("#progress"));
    const body = document.getElementsByTagName('body')[0]
    body.style.pointerEvents = 'none'


    const navRemove = document.getElementById('root')
    navRemove.removeChild(navRemove.childNodes[0])
  }, [setProgessEl]);

  var tweeningDelay = 300;
  
  function delayExecute(func, delay) {
    setTimeout(func, delay);
  }

  function onLoad() {
    setTimeout(() => {
      sphereOne();
    }, 3000);
  }

  function onEnter(event) {
    if (progressEl) {
      progressEl.style.width = 0;
      progressEl.classList.remove("finish");
    }
  }

  function onProgress(event) {
    var progress = (event.progress.loaded / event.progress.total) * 100;
    if (progressEl) {
      progressEl.style.width = progress + "%";
      if (progress === 100) {
        progressEl.classList.add("finish");
      }
    }
  }

  function sphereOne() {
    delayExecute(sphereOneArt.focus.bind(sphereOneArt, 10000), tweeningDelay);
    setTimeout(() => {
      viewer.remove(panorama1)
      viewer.setPanorama(panorama5)
      sphereFive()
    }, 30000);
  }

  function sphereFive() {
    delayExecute(sphereFiveArt1.focus.bind(sphereFiveArt1, 10000), tweeningDelay);
    setTimeout(() => {
      delayExecute(sphereFiveArt2.focus.bind(sphereFiveArt2, 10000), tweeningDelay);
      setTimeout(() => {
        viewer.remove(panorama5)
        viewer.setPanorama(panorama6)
        sphereSix()
      }, 35000)
    }, 35000);
  }

  function sphereSix() {
    delayExecute(sphereSixArt.focus.bind(sphereSixArt, 10000), tweeningDelay);
    setTimeout(() => {
      viewer.remove(panorama6)
      viewer.setPanorama(panorama7)
      sphereSeven()
    }, 35000);
  }

  function sphereSeven() {
    delayExecute(sphereSevenArt.focus.bind(sphereSevenArt, 10000), tweeningDelay);
  }

  // Infospots
  sphereOneArt = new PANOLENS.Infospot(10e-7);
  sphereTwoArt1 = new PANOLENS.Infospot(10e-7);
  sphereTwoArt2 = new PANOLENS.Infospot(10e-7);
  sphereThreeArt = new PANOLENS.Infospot(10e-7);
  sphereFourArt1 = new PANOLENS.Infospot(10e-7);
  sphereFourArt2 = new PANOLENS.Infospot(10e-7);
  sphereFiveArt1 = new PANOLENS.Infospot(10e-7);
  sphereFiveArt2 = new PANOLENS.Infospot(10e-7);
  sphereSixArt = new PANOLENS.Infospot(10e-7);
  sphereSevenArt = new PANOLENS.Infospot(10e-7);
  // Infospots positioning
  sphereOneArt.position.set(20, 230, 340);
  sphereTwoArt1.position.set(160, 120, 420);
  sphereThreeArt.position.set(450, 130, 90);
  sphereFourArt1.position.set(-350, 10, 10);
  sphereFourArt2.position.set(350, -80, -60);
  sphereFiveArt1.position.set(-350, 100, 10);
  sphereFiveArt2.position.set(350, 80, -60);
  sphereSixArt.position.set(350, 160, -220);
  sphereSevenArt.position.set(50, 160, -350);

  // Create spheres
  panorama1 = new PANOLENS.ImagePanorama(one);
  panorama2 = new PANOLENS.ImagePanorama(two);
  panorama3 = new PANOLENS.ImagePanorama(three);
  panorama4 = new PANOLENS.ImagePanorama(four);
  panorama5 = new PANOLENS.ImagePanorama(five);
  panorama6 = new PANOLENS.ImagePanorama(six);
  panorama7 = new PANOLENS.ImagePanorama(seven);
  panorama8 = new PANOLENS.ImagePanorama(one);

  // Link spheres
  panorama1.link(panorama2, new THREE.Vector3(10e-7), 600);
  // Edgecase for bug in panolens for second image useage, has to do with caching on their end.
  panorama2.link(panorama3, new THREE.Vector3(10e-7), 600);
  panorama2.link(panorama3, new THREE.Vector3(10e-7), 600);
  panorama3.link(panorama4, new THREE.Vector3(10e-7), 600);
  panorama4.link(panorama5, new THREE.Vector3(10e-7), 600);
  panorama5.link(panorama6, new THREE.Vector3(10e-7), 600);
  panorama6.link(panorama7, new THREE.Vector3(10e-7), 600);
  panorama7.link(panorama8, new THREE.Vector3(10e-7), 600);

  // Fade in for spheres
  const container = document.getElementsByClassName('panolens-container')[0]
  if(container) {
    panorama2.addEventListener( 'enter-fade-start', function(){
      // viewer.tweenControlCenter(new THREE.Vector3(0, 0, 5000), 0)
      container.classList.add('fade-in')
      setTimeout(() => {
        container.classList.remove('fade-in')
      }, 6000)
    });
    panorama3.addEventListener( 'enter-fade-start', function(){
      container.classList.add('fade-in')
      setTimeout(() => {
        container.classList.remove('fade-in')
      }, 6000)
    });
    panorama4.addEventListener( 'enter-fade-start', function(){
      container.classList.add('fade-in')
      setTimeout(() => {
        container.classList.remove('fade-in')
      }, 6000)
    });
    panorama5.addEventListener( 'enter-fade-start', function(){
      container.classList.add('fade-in')
      setTimeout(() => {
        container.classList.remove('fade-in')
      }, 6000)
    });
    panorama6.addEventListener( 'enter-fade-start', function(){
      container.classList.add('fade-in')
      setTimeout(() => {
        container.classList.remove('fade-in')
      }, 6000)
    });
    panorama7.addEventListener( 'enter-fade-start', function(){
      container.classList.add('fade-in')
      setTimeout(() => {
        container.classList.remove('fade-in')
      }, 6000)
    });  
    panorama8.addEventListener( 'enter-fade-start', function(){
      const end = Array.from(document.getElementsByClassName('end'))
      if(end) {
        end[0].style.display = 'flex'
        end[0].classList.add('show')
      }
    });  
  }









  











  panorama1.addEventListener("progress", onProgress);
  panorama1.addEventListener("load", onLoad);
  panorama1.addEventListener("enter", onEnter);
  panorama1.add(sphereOneArt);
  panorama2.add(sphereTwoArt1, sphereTwoArt2);
  panorama3.add(sphereThreeArt);
  panorama4.add(sphereFourArt1, sphereFourArt2);
  panorama5.add(sphereFiveArt1, sphereFiveArt2);
  panorama6.add(sphereSixArt);
  panorama7.add(sphereSevenArt);

  // Viewer
  viewer = new PANOLENS.Viewer({
    controlBar: false,
    initialLookAt: new THREE.Vector3(0, 0, 5000),
  });
  viewer.OrbitControls.enabled = false;
  viewer.add(panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8);




    // Gif loader
    const loader = new GifLoader();

    // // Sphere one artwork - contains one
    const geometryOne = new THREE.PlaneGeometry(300, 400, 200);
    const loaderOne = new THREE.TextureLoader();
    const materialOne = new THREE.MeshBasicMaterial({
      map: loaderOne.load(sphereOneArtImg),
      side: THREE.DoubleSide,
    });
    const planeOne = new THREE.Mesh(geometryOne, materialOne);
    planeOne.position.set(-30, 230, 340);
    planeOne.rotation.x -= 0.4;
    panorama1.add(planeOne);
  
  // // Sphere five artwork - contains seven & eight
  const textureSeven = loader.load(
    sphereFiveArt1Img,
    // onLoad callback
    function (reader) {
      // console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      // console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      // console.error("An error happened.");
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
    sphereFiveArt2Img,
    // onLoad callback
    function (reader) {
      // console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      // console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      // console.error("An error happened.");
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
    sphereSixArtImg,
    // onLoad callback
    function (reader) {
      // console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      // console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      // console.error("An error happened.");
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
      // console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      // console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      // console.error("An error happened.");
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
    <div className="no-touch">
      <div className="wrap">
      </div>
      <div className="end">
        <h2>Thank you for coming!</h2>
        <p>Please visit the <a href="/about">about page</a> to learn more about the artist and the exibition.</p>
      </div>
    </div>
  );
}
