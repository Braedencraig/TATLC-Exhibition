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
import sphereSixArt from '../assets/art/sphereSixArt.gif'
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
      viewer.setPanorama(panorama2)
      sphereTwo()
    }, 40000);
  }

  function sphereTwo() {
      delayExecute(sphereTwoArt1.focus.bind(sphereTwoArt1, 10000), tweeningDelay);
      setTimeout(() => {
        viewer.remove(panorama2)
        viewer.setPanorama(panorama3)
        sphereThree()
      }, 35000)
  }

  function sphereThree() {
    delayExecute(sphereThreeArt.focus.bind(sphereThreeArt, 10000), tweeningDelay);
    setTimeout(() => {
      viewer.remove(panorama3)
      viewer.setPanorama(panorama4)
      sphereFour()
    }, 35000);
  }

  function sphereFour() {
    delayExecute(sphereFourArt2.focus.bind(sphereFourArt2, 10000), tweeningDelay);
    setTimeout(() => {
      delayExecute(sphereFourArt1.focus.bind(sphereFourArt1, 10000), tweeningDelay);
        setTimeout(() => {
        viewer.remove(panorama4)
        viewer.setPanorama(panorama5)
      }, 30000)
    }, 35000);
  }

  // function sphereFive() {
  //   delayExecute(sphereFiveArt1.focus.bind(sphereFiveArt1, 10000), tweeningDelay);
  //   setTimeout(() => {
  //     delayExecute(sphereFiveArt2.focus.bind(sphereFiveArt2, 10000), tweeningDelay);
  //     setTimeout(() => {
  //       viewer.remove(panorama5)
  //       viewer.setPanorama(panorama6)
  //       sphereSix()
  //     }, 20000)
  //   }, 20000);
  // }

  // function sphereSix() {
  //   delayExecute(sphereSixArt.focus.bind(sphereSixArt, 10000), tweeningDelay);
  //   setTimeout(() => {
  //     viewer.remove(panorama6)
  //     viewer.setPanorama(panorama7)
  //     // sphereSeven()
  //   }, 20000);
  // }

  // function sphereSeven() {
  //   delayExecute(sphereSevenArt.focus.bind(sphereSevenArt, 10000), tweeningDelay);
  //   setTimeout(() => {
  //     viewer.remove(panorama7)
  //     viewer.setPanorama(panorama8)
  //     // sphereFour()
  //   }, 20000);
  // }

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
  sphereFourArt1.position.set(-350, 100, 10);
  sphereFourArt2.position.set(350, -20, -60);
  sphereFiveArt1.position.set(-350, 100, 10);
  sphereFiveArt2.position.set(350, 80, -60);
  sphereSixArt.position.set(350, 160, -220);
  sphereSevenArt.position.set(200, 160, -350);

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
  
  
    // // Sphere two artwork - contains two & three
    const textureTwo = loader.load(
      sphereTwoArtImg,
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
    const materialTwo = new THREE.MeshBasicMaterial({
      map: textureTwo,
      // transparent: true,
      side: THREE.DoubleSide,
    });
    const geometryTwo = new THREE.PlaneGeometry(400, 400, 400);
    const planeTwo = new THREE.Mesh(geometryTwo, materialTwo);
    planeTwo.position.set(-300, 220, 420);
    planeTwo.rotation.y -= 0.55;
    // planeTwo.scale.x = -1;
    panorama2.add(planeTwo);
  
    
    // // Sphere three artwork - contains four
    const geometryFour = new THREE.PlaneGeometry(400, 300, 400);
    const textureFour = loader.load(
      sphere3,
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
      sphereFourArt2Img,
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
      map: loaderSix.load(sphereFourArt1Img),
      side: THREE.DoubleSide,
    });
    const geometrySix = new THREE.PlaneGeometry(250, 350, 250);
    const planeSix = new THREE.Mesh(geometrySix, materialSix);
    planeSix.position.set(350, 100, -60);
    planeSix.rotation.y += 1.7;
    panorama4.add(planeSix);



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
