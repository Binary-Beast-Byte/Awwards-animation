import React from 'react'
import './Rain.css'
import { renderFragmentShader, renderVertexShader, simulationFragmentShader, simulationVertexShader } from './shader'
import { useEffect } from 'react'
import * as THREE from 'three'
import { useRef } from 'react'

export const Rain = () => {

    const canvasRef = useRef(null)

    useEffect(() => {
        if (!canvasRef.current) return

        const scene = new THREE.Scene()
        const simScene = new THREE.Scene();

        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true,
            canvas: canvasRef.current,
        })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)

        document.body.appendChild(renderer.canvas)

        const mouse = new THREE.Vector2();
        let frame = 0;

        const width = window.innerWidth * window.devicePixelRatio;
        const height = window.innerHeight * window.devicePixelRatio;

        const options = {
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            stencilBuffer: false,
            depthBuffer: false,
}

let rtA = new THREE.WebGLRenderTarget(width, height, options);
let rtB = new THREE.WebGLRenderTarget(width, height, options);

const simMaterial = new THREE.ShaderMaterial({
    uniforms: {
        textureA: { value: null},
        mouse: { value: mouse },
        resolution: { value: new THREE.Vector2(width, height) },
        time: { value: 0},
        frame: { value: 0}
    },
    vertexShader: simulationVertexShader,
    fragmentShader: simulationFragmentShader
})

const renderMaterial = new THREE.ShaderMaterial({
    uniforms: {
        textureA: { value: null },
        textureB: { value: null }
    },
    vertexShader: renderVertexShader,
    fragmentShader: renderFragmentShader,
    transparent: true,
})

const plane = new THREE.PlaneGeometry(2,2);
const simQuad = new THREE.Mesh(plane, simMaterial);
const renderQuad = new THREE.Mesh(plane, renderMaterial)

simScene.add(simQuad)
scene.add(renderQuad)

const canvas = document.createElement("canvas")

canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext("2d", { alpha: true })

ctx.fillStyle = "#fb7427";
ctx.fillRect(0, 0, width, height)

const fontSize = Math.round(250 * window.devicePixelRatio);
ctx.fillStyle = '#fef4b8';
ctx.font = `bold ${fontSize}px`
ctx.textAlign = "center";
ctx.textBaseline = "middle"
ctx.textRendering = "geometricPrecision";
ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = "high"
ctx.fillText("softhorizon", width / 2, height / 2);

const textTexture = new THREE.CanvasTexture(canvas);
textTexture.minFilter = THREE.LinearFilter;
textTexture.magFilter = THREE.LinearFilter;
textTexture.format = THREE.RGBAFormat;

window.addEventListener("resize", () => {
    const newWidth = window.innerWidth * window.devicePixelRatio;
    const newHeight = window.innerHeight * window.devicePixelRatio;

    renderer.setSize(window.innerWidth, window.innerHeight);
    rtA.setSize(newWidth, newHeight);
    
})


    }, [])

  return (
    <div ref={canvasRef}>Rain</div>
  )
}
