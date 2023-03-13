<h1 align="center">SVG Donut chart Generator</h1>
<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

## Descrição

Este é um pequeno projeto que fiz para tentar entender melhor o SVG e como manipular ele da maneira mais fácil para o desafio de número 10 do [#boraCodar](https://boracodar.dev)

Este projeto tem como base um projeto anterior que intitulei de [SVG Donut Generator](https://github.com/Wilian-N-Silva/svg-donut-generator) que por sua vez, foi feito baseado no post do [Sergio Pedercini](https://medium.com/@pppped) feito no medium onde ele ensina como calcular e montar todo o SVG.

### Calculos realizados para criar a forma

```javascript
const sqrBox = 36
const circumference = 100

// radius = circumference / 2π
const radius = circumference / (Math.PI * 2)

// diameter = radius *2
const diameter = radius * 2

// x = boxSize /2
const xPos = sqrBox / 2

// y = boxSize - diameter
const yPos = (sqrBox - diameter) / 2
```

### Cálculos realizados para mover o sol

```javascript
    // Setting initial position (yeap inverted... It's a temporary measure)
    cx={yPos}
    cy={xPos}

    // Setting Angle and setting the center of rotation (x or sqrBox / 2)
     transform={`rotate(${180 * (percentage / 100)} ${xPos} ${xPos})`}
```

## Referência

- [How to code a responsive circular percentage chart with SVG and CSS.](https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705)
