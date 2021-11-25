import "./App.css";
import { defaultProps, ResponsiveBar } from "@nivo/bar";
import { useState } from "react";

const data = [
  {
    location: "AD",
    cctv: 87,
    cctvColor: "hsl(149, 70%, 50%)",
    ups: 156,
    upsColor: "hsl(65, 70%, 50%)",
    external: 173,
    externalColor: "hsl(291, 70%, 50%)",
    acs: 62,
    acsColor: "hsl(232, 70%, 50%)",
    bmc: 153,
    bmcColor: "hsl(301, 70%, 50%)",
    iot: 32,
    iotColor: "hsl(26, 70%, 50%)",
  },
  {
    location: "AE",
    cctv: 7,
    cctvColor: "hsl(132, 70%, 50%)",
    ups: 174,
    upsColor: "hsl(118, 70%, 50%)",
    external: 124,
    externalColor: "hsl(124, 70%, 50%)",
    acs: 32,
    acsColor: "hsl(234, 70%, 50%)",
    bmc: 55,
    bmcColor: "hsl(197, 70%, 50%)",
    iot: 75,
    iotColor: "hsl(48, 70%, 50%)",
  },
  {
    location: "AF",
    cctv: 189,
    cctvColor: "hsl(282, 70%, 50%)",
    ups: 123,
    upsColor: "hsl(62, 70%, 50%)",
    external: 69,
    externalColor: "hsl(134, 70%, 50%)",
    acs: 46,
    acsColor: "hsl(2, 70%, 50%)",
    bmc: 194,
    bmcColor: "hsl(345, 70%, 50%)",
    iot: 38,
    iotColor: "hsl(115, 70%, 50%)",
  },
  {
    location: "AG",
    cctv: 193,
    cctvColor: "hsl(88, 70%, 50%)",
    ups: 56,
    upsColor: "hsl(147, 70%, 50%)",
    external: 120,
    externalColor: "hsl(332, 70%, 50%)",
    acs: 64,
    acsColor: "hsl(116, 70%, 50%)",
    bmc: 68,
    bmcColor: "hsl(49, 70%, 50%)",
    iot: 116,
    iotColor: "hsl(26, 70%, 50%)",
  },
  {
    location: "AI",
    cctv: 96,
    cctvColor: "hsl(21, 70%, 50%)",
    ups: 115,
    upsColor: "hsl(297, 70%, 50%)",
    external: 176,
    externalColor: "hsl(59, 70%, 50%)",
    acs: 140,
    acsColor: "hsl(338, 70%, 50%)",
    bmc: 63,
    bmcColor: "hsl(134, 70%, 50%)",
    iot: 118,
    iotColor: "hsl(312, 70%, 50%)",
  },
  {
    location: "AL",
    cctv: 8,
    cctvColor: "hsl(192, 70%, 50%)",
    ups: 77,
    upsColor: "hsl(275, 70%, 50%)",
    external: 6,
    externalColor: "hsl(54, 70%, 50%)",
    acs: 49,
    acsColor: "hsl(155, 70%, 50%)",
    bmc: 93,
    bmcColor: "hsl(78, 70%, 50%)",
    iot: 187,
    iotColor: "hsl(142, 70%, 50%)",
  },
  {
    location: "AM",
    cctv: 149,
    cctvColor: "hsl(228, 70%, 50%)",
    ups: 97,
    upsColor: "hsl(95, 70%, 50%)",
    external: 198,
    externalColor: "hsl(244, 70%, 50%)",
    acs: 33,
    acsColor: "hsl(257, 70%, 50%)",
    bmc: 78,
    bmcColor: "hsl(303, 70%, 50%)",
    iot: 163,
    iotColor: "hsl(17, 70%, 50%)",
  },
];

function SecurityBar(props) {
  return (
    <div className="App">
      <ResponsiveBar
        data={data}
        keys={["cctv", "acs"]}
        indexBy="location"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
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
              id: "bmc",
            },
            id: "dots",
          },
          {
            match: {
              id: "external",
            },
            id: "lines",
          },
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "location",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number of Alerts",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="All Alerts"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in location: " + e.indexValue
          );
        }}
      />
    </div>
  );
}

export default SecurityBar;
