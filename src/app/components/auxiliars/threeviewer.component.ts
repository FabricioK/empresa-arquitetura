import { Component, AfterViewInit, Input, ElementRef, NgZone } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'na-threeviewer',
  template: '<div [attr.id]="viewerid" ></div>',
})
export class ThreeviewerComponent implements AfterViewInit {

  constructor(protected elementRef: ElementRef, public ngZone: NgZone) {
    this.viewerid = "viewer_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  name = 'Angular';
  viewerid: string;
  @Input() width: number;
  @Input() height: number;
  el: any;
  scene: any;
  camera: any;
  renderer: any;
  geometry: any;
  material: any;
  mesh: any;

  ngAfterViewInit() {
    this.elementRef.nativeElement = document.getElementById(this.viewerid);
    this.init();
    this.animate() 
  }

  init() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 10000);
    this.camera.position.z = 1000;

    this.geometry = new THREE.BoxGeometry(200, 200, 200);
    this.material = new THREE.MeshBasicMaterial({ color: 0x00f000, wireframe: true });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.width, this.height);

    this.elementRef.nativeElement.appendChild(this.renderer.domElement);

  }

  animate() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => {

        
        this.animate();
      });
    });
  }
}
