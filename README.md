<h1 align="center">SVG Sun Tracker Generator</h1>
<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

## Deploy

Veja o deploy [clicando aqui](https://svg-sun-tracking.vercel.app/)

## Descrição

Este é um pequeno projeto que fiz para tentar entender melhor o SVG e como manipular ele da maneira mais fácil para o desafio de número 10 do [#boraCodar](https://boracodar.dev)

Este projeto tem como base um projeto anterior que intitulei de [SVG Donut Generator](https://github.com/Wilian-N-Silva/svg-donut-generator) que por sua vez, foi feito baseado no post do [Sergio Pedercini](https://medium.com/@pppped) feito no medium onde ele ensina como calcular e montar todo o SVG.

## Agradecimentos

Agradecimento ao [Paulo Henrique Lemos](https://github.com/paulohenriquelemos) que me ajudou a realizar o ajuste de compensação e descobrir o problema do background em relação ao Sol!

## Calculos realizados para criar a forma

```javascript
const sqrBox = 36

// radius = boxSize / 2
const radius = sqrBox / 2

// diameter = radius *2
const diameter = radius * 2

// x = boxSize /2
const xPos = sqrBox / 2

// y = boxSize - diameter
const yPos = (sqrBox - diameter) / 2
```

### Cálculos realizados para mover o sol (Obrigado [Paulo Henrique Lemos](https://github.com/paulohenriquelemos)!)

```javascript
const adjacent = 2 * (50 - percentage)
const radians = Math.acos(adjacent / 100)
const degrees = radians * (180 / Math.PI)
```

## Referência

- [How to code a responsive circular percentage chart with SVG and CSS.](https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705)
