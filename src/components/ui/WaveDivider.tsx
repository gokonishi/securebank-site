interface WaveDividerProps {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
}

export default function WaveDivider({
  topColor = "#ffffff",
  bottomColor = "#F7F8FC",
  flip = false,
}: WaveDividerProps) {
  return (
    <div style={{ backgroundColor: bottomColor, lineHeight: 0, display: "block" }}>
      <svg
        viewBox="0 0 1440 72"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: 72,
          transform: flip ? "scaleX(-1)" : "none",
        }}
      >
        <path
          d="M0,36 C180,72 360,0 540,36 C720,72 900,0 1080,36 C1260,72 1380,24 1440,36 L1440,0 L0,0 Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
}
