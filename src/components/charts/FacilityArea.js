import { ResponsiveAreaBump } from "@nivo/bump";

const data = [
  {
    id: "BMS",
    data: [
      {
        x: 2000,
        y: 13,
      },
      {
        x: 2001,
        y: 19,
      },
      {
        x: 2002,
        y: 21,
      },
      {
        x: 2003,
        y: 18,
      },
      {
        x: 2004,
        y: 29,
      },
      {
        x: 2005,
        y: 26,
      },
    ],
  },
  {
    id: "IOT",
    data: [
      {
        x: 2000,
        y: 18,
      },
      {
        x: 2001,
        y: 25,
      },
      {
        x: 2002,
        y: 14,
      },
      {
        x: 2003,
        y: 28,
      },
      {
        x: 2004,
        y: 25,
      },
      {
        x: 2005,
        y: 19,
      },
    ],
  },
  {
    id: "UPS",
    data: [
      {
        x: 2000,
        y: 20,
      },
      {
        x: 2001,
        y: 30,
      },
      {
        x: 2002,
        y: 28,
      },
      {
        x: 2003,
        y: 15,
      },
      {
        x: 2004,
        y: 16,
      },
      {
        x: 2005,
        y: 30,
      },
    ],
  },
];

function FacilityArea() {
  return (
    <div className="App">
      <ResponsiveAreaBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={8}
        colors={{ scheme: "nivo" }}
        blendMode="multiply"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "UPS",
            },
            id: "dots",
          },
          {
            match: {
              id: "IOT",
            },
            id: "lines",
          },
        ]}
        startLabel="id"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -36,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
        }}
      />
    </div>
  );
}

export default FacilityArea;
