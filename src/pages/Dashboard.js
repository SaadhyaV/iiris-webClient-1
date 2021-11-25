import TopNav from "../components/layouts/TopNav";
import { UsersIcon } from "@heroicons/react/outline";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/outline";
import Weather from "../components/Weather";
import News from "../components/News";
import RiskAuditTable from "../components/dashboard/RiskAuditTable";
import MostRecentAlertTable from "../components/dashboard/MostRecentAlertTable";
import { ResponsiveBar } from "@nivo/bar";
import Twitter from "../components/Twitter";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Bar from "../components/charts/Bar";
import PieDash from "../components/charts/Pie";
import Alerts from "./tables/Alerts";
import AlertTable from "./tables/AlertTable";
//import Line from "../components/charts/Line";

const data = [
  {
    day: "Monday",
    degress: 59,
  },
  {
    day: "Tuesday",
    degress: 61,
  },
  {
    day: "Wednesday",
    degress: 55,
  },
  {
    day: "Thursday",
    degress: 78,
  },
  {
    day: "Friday",
    degress: 71,
  },
  {
    day: "Saturday",
    degress: 56,
  },
  {
    day: "Sunday",
    degress: 67,
  },
];

/* const Bar = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["degress"]}
      indexBy="day"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "degrees",
        legendPosition: "middle",
        legendOffset: -40,
      }}
    />
  );
}; */

const dataStat = [
  {
    id: 1,
    name: "Total Alerts",
    stat: "4095",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Critical Alerts",
    stat: "2",
    icon: MailOpenIcon,
    change: "5.4%",
    changeType: "increase",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DashboardPage() {
  const [riskAuditTable, setRiskAuditTable] = useState([]);
  const riskAuditCollectionRef = collection(db, "mostRecentAlert");
  const count = useState("");
  const alertTypes = useState("");

  useEffect(() => {
    const getRiskAuditData = async () => {
      const dataAlerts = await getDocs(riskAuditCollectionRef);
      setRiskAuditTable(
        dataAlerts.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    getRiskAuditData();

    const count = riskAuditTable.map((items) => ({
      type: alertTypes,
      count: data.filter((items) => items.alertType === "alertType").length,
    }));
  }, []);

  const { currentUser, logout } = useAuth();

  function handleLogout() {}

  return (
    <div>
      <div className="flex flex-row h-18"></div>
      <TopNav title="Overview" />
      <div className="flex flex-col py-0 px-6">
        <div className="relative flex-grow flex-shrink flex-col opacity-100"></div>
      </div>

      <div className="flex flex-shrink flex-grow items-center flex-col py-8">
        <main className="pb-8">
          {/* {currentUser.email} */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:col-span-2">
                {/* quick stat */}
                <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
                  {dataStat.map((item) => (
                    <div
                      key={item.id}
                      className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                    >
                      <dt>
                        <div className="absolute bg-blue-500 rounded-md p-3">
                          <item.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                          {item.name}
                        </p>
                      </dt>
                      <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                        <p className="text-2xl font-semibold text-gray-900">
                          {item.stat}
                        </p>
                        <p
                          className={classNames(
                            item.changeType === "increase"
                              ? "text-green-600"
                              : "text-red-600",
                            "ml-2 flex items-baseline text-sm font-semibold"
                          )}
                        >
                          {item.changeType === "increase" ? (
                            <ArrowSmUpIcon
                              className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArrowSmDownIcon
                              className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                              aria-hidden="true"
                            />
                          )}

                          <span className="sr-only">
                            {item.changeType === "increase"
                              ? "Increased"
                              : "Decreased"}{" "}
                            by
                          </span>
                          {item.change}
                        </p>
                        <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                          {/* <div className="text-sm">
                            <a
                              href="#"
                              className="font-medium text-blue-600 hover:text-indigo-500"
                            >
                              {" "}
                              View all
                              <span className="sr-only">
                                {" "}
                                {item.name} stats
                              </span>
                            </a>
                          </div> */}
                        </div>
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="h-64">
                  <h3 className="text-2xl">All Alerts</h3>
                  <Bar />
                </div>

                <div className="h-64 mt-16">
                  <h3 className="text-2xl">Top Categories</h3>
                  <PieDash />
                </div>

                <div className="mt-16">
                  <RiskAuditTable />
                </div>
                <MostRecentAlertTable />

                <AlertTable />
                {/* <div className="h-64">
                  <h3 className="text-2xl">All Alerts</h3>
                  <Bar />
                </div> */}

                <div className="h-64">{/* <Line /> */}</div>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                <Weather />
                <News />
                <Twitter />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
