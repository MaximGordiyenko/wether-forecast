import { BarsProps } from "@/components/charts/bar/types";

export const Bars = ({ data, height, scaleX, scaleY }: BarsProps) => {
  return (
    <>
      {data.map(({ value, label }) => (
        <rect
          key={`bar-${label}`}
          //centered each bar
          x={Number(scaleX(label)) + scaleX.bandwidth() / 1.5}
          y={scaleY(value)}
          width={scaleX.bandwidth()}
          height={height - scaleY(value)}
          fill="steelblue"
          rx="10"
          ry="10"
          opacity="0.7"
        />
      ))}
    </>
  );
}
