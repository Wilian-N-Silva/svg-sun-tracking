interface SunTrackerProp {
  percentage: number
}
export function SunTracker({ percentage }: SunTrackerProp) {
  const sqrBox = 36
  const circumference = 100
  const radius = circumference / (Math.PI * 2) // 15.915494309189533
  const diameter = radius * 2 // 31.830988618379067
  const xPos = sqrBox / 2 // 18
  const yPos = (sqrBox - diameter) / 2 // 2.0845056908

  const svg = (
    <svg viewBox="0 0 36 36">
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
          width={sqrBox * (percentage / 100)}
          height="100"
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
        transform={`rotate(${180 * (percentage / 100)} ${xPos} ${xPos})`}
        fill="#F6C833"
      ></circle>
    </svg>
  )
  return <div>{svg}</div>
}
