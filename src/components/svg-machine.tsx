import React from "react";

type StatusType = {
  [key: string]: string;
};

interface StateMachineProps {
  status: StatusType;
  isDeadState: boolean;
  wrongLineIndex: number;
}

const positions = [
  { cx: 100, cy: 100 },
  { cx: 240, cy: 100 }, // S1
  { cx: 380, cy: 100 }, // S2
  { cx: 520, cy: 100 }, // S3
  { cx: 660, cy: 100 }, // S4
  { cx: 800, cy: 100 }, // S5
  { cx: 940, cy: 100 }, // S6
  { cx: 1080, cy: 100 }, // S7
  { cx: 1080, cy: 350 }, // S8
  { cx: 940, cy: 350 }, // S9
  { cx: 800, cy: 350 }, // S10
  { cx: 660, cy: 350 }, // S11
  { cx: 520, cy: 350 }, // S12
  { cx: 380, cy: 350 }, // S13
  { cx: 240, cy: 350 }, // S14
  { cx: 100, cy: 350 }, // S15 (last S14, possibly duplicate)
];

const StateMachine: React.FC<StateMachineProps> = ({ status, isDeadState, wrongLineIndex }) => {
  const getEdgePosition = (cx: number, cy: number, angle: number) => {
    const radius = 30; // Circle radius
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <svg width="1200" height="500" xmlns="http://www.w3.org/2000/svg">
      <circle cx={100} cy={100} r={30} fill="green" />
      <text
        x={100}
        y={100}
        fontSize="18"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        S0
      </text>
      <circle cx={100} cy={350} r={35} fill="green" />

      <circle
        cx={570}
        cy={200}
        r={40}
        stroke="red"
        strokeWidth="3"
        fill={isDeadState === true ? "red" : "none"}
      />
      <text
        x={570}
        y={200}
        fontSize="14"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        Dead State
      </text>

      {positions.map(({ cx, cy }, index) => {
        const stateKey = `S${index}`;
        
        // console.log(isAccepted);

        // Get the edge positions of both the current state and Dead State
        const angle = Math.atan2(200 - cy, 570 - cx); // Angle from state to dead state
        const { x: startX, y: startY } = getEdgePosition(cx, cy, angle);
        const { x: endX, y: endY } = getEdgePosition(570, 200, angle + Math.PI); // Opposite edge for Dead State

        return (
          <g key={index}>
            <circle
              cx={cx}
              cy={cy}
              r={30}
              fill={status[index - 1] === 'accepted' || index === 0 ? "green" : "lightblue"}
            />
            <text
              x={cx}
              y={cy}
              fontSize="18"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {stateKey}
            </text>

            {/* Draw lines from the edge of each state to the Dead State */}
            <line
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke={
                isDeadState && wrongLineIndex === index
                  ? "red"
                  : "lightgray"
              } // Change the line color based on the dead state or wrong status
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
          </g>
        );
      })}

      <line
        x1="60"
        y1="100"
        x2="75"
        y2="100"
        stroke="lightgray"
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="50" y="90" textAnchor="middle" fontSize="12">
        START
      </text>

      <line
        x1="130"
        y1="100"
        x2="215"
        y2="100"
        stroke={status[0] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="172.5" y="90" textAnchor="middle" fontSize="12">
        0-9
      </text>

      <line
        x1="270"
        y1="100"
        x2="355"
        y2="100"
        stroke={status[1] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="312.5" y="90" textAnchor="middle" fontSize="12">
        0-9
      </text>

      <line
        x1="410"
        y1="100"
        x2="495"
        y2="100"
        stroke={status[2] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="452.5" y="90" textAnchor="middle" fontSize="12">
        0-9
      </text>

      <line
        x1="550"
        y1="100"
        x2="635"
        y2="100"
        stroke={status[3] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="592.5" y="90" textAnchor="middle" fontSize="12">
        .(dot)
      </text>

      <line
        x1="690"
        y1="100"
        x2="775"
        y2="100"
        stroke={status[4] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="732.5" y="90" textAnchor="middle" fontSize="12">
        0-9
      </text>

      <line
        x1="830"
        y1="100"
        x2="915"
        y2="100"
        stroke={status[5] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="872.5" y="90" textAnchor="middle" fontSize="12">
        0-9
      </text>

      <line
        x1="970"
        y1="100"
        x2="1055"
        y2="100"
        stroke={status[6] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="1012.5" y="90" textAnchor="middle" fontSize="12">
        0-9
      </text>

      <line
        x1="1080"
        y1="130"
        x2="1080"
        y2="325"
        stroke={status[7] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="1100" y="240" textAnchor="middle" fontSize="12">
        .(dot)
      </text>

      <line
        x1="1050"
        y1="350"
        x2="965"
        y2="350"
        stroke={status[8] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="1007.5" y="340" textAnchor="middle" fontSize="12">
        0-9
      </text>

      <line
        x1="910"
        y1="350"
        x2="825"
        y2="350"
        stroke={status[9] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="867.5" y="340" textAnchor="middle" fontSize="12">
        0-9
      </text>

      <line
        x1="770"
        y1="350"
        x2="685"
        y2="350"
        stroke={status[10] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="727.5" y="340" textAnchor="middle" fontSize="12">
        0-9
      </text>

      <line
        x1="630"
        y1="350"
        x2="545"
        y2="350"
        stroke={status[11] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="587.5" y="340" textAnchor="middle" fontSize="12">
        .(dot)
      </text>

      <line
        x1="490"
        y1="350"
        x2="405"
        y2="350"
        stroke={status[12] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="447.5" y="340" textAnchor="middle" fontSize="12">
        0-9
      </text>

      <line
        x1="350"
        y1="350"
        x2="265"
        y2="350"
        stroke={status[13] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="307.5" y="340" textAnchor="middle" fontSize="12">
        0-9
      </text>

      <line
        x1="210"
        y1="350"
        x2="125"
        y2="350"
        stroke={status[14] === "accepted" ? "green" : "lightgray"}
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <text x="167.5" y="340" textAnchor="middle" fontSize="12">
        0-9
      </text>

      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
        </marker>
      </defs>
    </svg>
  );
};

export default StateMachine;
