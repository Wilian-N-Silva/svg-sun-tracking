interface SunTrackerProp {
  percentage: number
}
export function SunTracker({ percentage }: SunTrackerProp) {
  const sqrBox = 36
  const radius = sqrBox / 2
  const diameter = radius * 2
  const xPos = sqrBox / 2
  const yPos = (sqrBox - diameter) / 2

  const adjacent = 2 * (50 - percentage)
  const radians = Math.acos(adjacent / 100)
  const degrees = radians * (180 / Math.PI)

  const svg = (
    <svg
      viewBox={`0 0 ${sqrBox} ${sqrBox / 2}`}
      style={{ overflow: "visible" }}
    >
      <linearGradient
        id="donutGradient"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(80)"
      >
        <stop offset="0%" stopColor="rgba(251, 219, 96, 0.2)"></stop>
        <stop offset="101%" stopColor="rgba(251, 219, 96, 0)"></stop>
      </linearGradient>
      <mask id="myMask">
        <rect
          x="0"
          y="0"
          width={(sqrBox * percentage) / 100}
          height={sqrBox / 2}
          fill="white"
        />
      </mask>
      <path
        d={`M${yPos} ${xPos} a${radius} ${radius} 0 0 1 ${diameter} 0`}
        fill="url(#donutGradient)"
        mask="url(#myMask)"
      />
      <path
        d={`M${yPos} ${xPos} a${radius} ${radius} 0 0 1 ${diameter} 0`}
        stroke="#F6C833"
        strokeWidth=".5"
        fill="none"
        strokeDasharray=".2 2"
        strokeDashoffset="21.3"
      />

      <circle
        cx={yPos}
        cy={xPos}
        r="1"
        transform={`rotate(${degrees} ${xPos} ${xPos})`}
        fill="#F6C833"
      ></circle>
    </svg>
  )
  return <div>{svg}</div>
}
