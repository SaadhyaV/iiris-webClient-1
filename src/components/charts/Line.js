import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(254, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 293,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 73,
      },
      {
        x: "train",
        y: 137,
      },
      {
        x: "subway",
        y: 124,
      },
      {
        x: "bus",
        y: 288,
      },
      {
        x: "car",
        y: 51,
      },
      {
        x: "moto",
        y: 141,
      },
      {
        x: "bicycle",
        y: 34,
      },
      {
        x: "horse",
        y: 256,
      },
      {
        x: "skateboard",
        y: 262,
      },
      {
        x: "others",
        y: 244,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(91, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 67,
      },
      {
        x: "helicopter",
        y: 214,
      },
      {
        x: "boat",
        y: 225,
      },
      {
        x: "train",
        y: 55,
      },
      {
        x: "subway",
        y: 39,
      },
      {
        x: "bus",
        y: 34,
      },
      {
        x: "car",
        y: 46,
      },
      {
        x: "moto",
        y: 279,
      },
      {
        x: "bicycle",
        y: 297,
      },
      {
        x: "horse",
        y: 246,
      },
      {
        x: "skateboard",
        y: 187,
      },
      {
        x: "others",
        y: 202,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(232, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 99,
      },
      {
        x: "helicopter",
        y: 125,
      },
      {
        x: "boat",
        y: 209,
      },
      {
        x: "train",
        y: 281,
      },
      {
        x: "subway",
        y: 32,
      },
      {
        x: "bus",
        y: 282,
      },
      {
        x: "car",
        y: 127,
      },
      {
        x: "moto",
        y: 19,
      },
      {
        x: "bicycle",
        y: 21,
      },
      {
        x: "horse",
        y: 23,
      },
      {
        x: "skateboard",
        y: 61,
      },
      {
        x: "others",
        y: 266,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(158, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 85,
      },
      {
        x: "helicopter",
        y: 267,
      },
      {
        x: "boat",
        y: 107,
      },
      {
        x: "train",
        y: 100,
      },
      {
        x: "subway",
        y: 285,
      },
      {
        x: "bus",
        y: 116,
      },
      {
        x: "car",
        y: 156,
      },
      {
        x: "moto",
        y: 49,
      },
      {
        x: "bicycle",
        y: 11,
      },
      {
        x: "horse",
        y: 100,
      },
      {
        x: "skateboard",
        y: 93,
      },
      {
        x: "others",
        y: 138,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(353, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 95,
      },
      {
        x: "helicopter",
        y: 279,
      },
      {
        x: "boat",
        y: 237,
      },
      {
        x: "train",
        y: 272,
      },
      {
        x: "subway",
        y: 115,
      },
      {
        x: "bus",
        y: 199,
      },
      {
        x: "car",
        y: 281,
      },
      {
        x: "moto",
        y: 14,
      },
      {
        x: "bicycle",
        y: 46,
      },
      {
        x: "horse",
        y: 10,
      },
      {
        x: "skateboard",
        y: 212,
      },
      {
        x: "others",
        y: 66,
      },
    ],
  },
];

const Line = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default Line;
