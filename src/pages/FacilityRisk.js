import TopNav from "../components/layouts/TopNav";
import { UsersIcon } from "@heroicons/react/outline";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/outline";
import MostRecentAlertTable from "../components/dashboard/MostRecentAlertTable";
//import Bar from "../components/charts/Bar";
import FacilityBar from "../components/charts/FacilityBar";
import FacilityArea from "../components/charts/FacilityArea";

const dataStat = [
  {
    id: 1,
    name: "UPS Alerts",
    stat: "798",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "BMS-HVAC Alerts",
    stat: "704",
    icon: MailOpenIcon,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "IOT Alerts",
    stat: "729",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 4,
    name: "Incident Tickets",
    stat: "14",
    icon: MailOpenIcon,
    change: "5.4%",
    changeType: "increase",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SecurityRiskPage() {
  return (
    <div>
      <div className="flex flex-row h-18"></div>
      <TopNav title="Facility Risk" />
      <div className="flex flex-col py-0 px-6">
        <div className="relative flex-grow flex-shrink flex-col opacity-100"></div>
      </div>

      <div className="flex flex-shrink flex-grow items-center flex-col py-8">
        <main className="pb-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* quick stat */}
            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                    {/* <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-medium text-blue-600 hover:text-indigo-500"
                        >
                          {" "}
                          View all
                          <span className="sr-only"> {item.name} stats</span>
                        </a>
                      </div>
                    </div> */}
                  </dd>
                </div>
              ))}
            </dl>

            <div>
              <h3>Facility Risk Alerts</h3>
              {/* <FacilityBar title="Alert by Location" desc="graph" /> */}
              <FacilityArea />
            </div>
            <div>
              <h3>Alerts by Location</h3>
              <FacilityBar title="Alert by Location" desc="graph" />
            </div>
            <MostRecentAlertTable title="Most recent alert" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default SecurityRiskPage;
