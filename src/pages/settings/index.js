import TopNav from "../../components/layouts/TopNav";
import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import General from "./General";
import AuditSettingPage from "./Audit";
import UserSettingPage from "./User";
import DatasetSettingPage from "./Dataset";
import SecuritySettingPage from "./SecurityRisk";
import FacilitySettingPage from "./FacilityRisk";
import ExternalSettingPage from "./ExternalRisk";
import DashboardSettingPage from "./Dashboard";
import TicketSettingPage from "./Ticket";

const tabNavigation = [
  { name: "General", component: <General /> },
  { name: "Users", component: <UserSettingPage /> },
  { name: "Audit", component: <AuditSettingPage /> },
  { name: "Database connection", component: <DatasetSettingPage /> },
  { name: "Security risk", component: <SecuritySettingPage /> },
  { name: "Facility risk", component: <FacilitySettingPage /> },
  { name: "External risk", component: <ExternalSettingPage /> },
  { name: "Tickets", component: <TicketSettingPage /> },
  { name: "Dashboard", component: <DashboardSettingPage /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Setting() {
  /* const [sidebarOpen, setSidebarOpen] = useState(false); */
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] =
    useState(false);

  return (
    <div>
      <div className="flex flex-row h-18"></div>
      <TopNav title="Settings" />

      <div className="flex overflow-hidden min-h-screen min-w-0 flex-shrink flex-grow flex-col py-0 px-8 lg:px-6 xl:px-2">
        <main className="flex-1">
          <div className="relative w-full mx-auto md:px-8 lg:px-8 xl:px-16 flex-1 justify-between xl:mt-0">
            <div className="pt-10 pb-16">
              <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-3xl font-extrabold text-gray-900">
                  Settings
                </h1>
              </div>
              <div className="px-4 sm:px-6 md:px-0">
                <div className="py-6">
                  {
                    <Tab.Group as="div">
                      <div className="border-b border-gray-200">
                        <Tab.List className="-mb-px flex space-x-8">
                          {tabNavigation.map((items) => (
                            <Tab
                              className={({ selected }) =>
                                classNames(
                                  selected
                                    ? "border-indigo-600 text-indigo-600"
                                    : "border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300",
                                  "whitespace-nowrap py-6 border-b-2 font-medium text-base"
                                )
                              }
                            >
                              {items.name}
                            </Tab>
                          ))}
                        </Tab.List>
                      </div>

                      <Tab.Panels as={Fragment}>
                        {tabNavigation.map((items) => (
                          <Tab.Panel className="-mb-10">
                            <h3 className="sr-only">{items.name}</h3>

                            {items.component}
                          </Tab.Panel>
                        ))}

                        {/* <Tab.Panel as="dl">
                          <h3 className="sr-only">
                            Frequently Asked Questions
                          </h3>

                          <UserSettingPage />
                        </Tab.Panel>

                        <Tab.Panel as="dl">
                          <h3 className="sr-only">License</h3>

                          <AuditSettingPage />
                        </Tab.Panel>

                        <Tab.Panel as="dl">
                          <h3 className="sr-only">License</h3>

                          <DatasetSettingPage />
                        </Tab.Panel> */}
                      </Tab.Panels>
                    </Tab.Group>
                  }
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* <main className="flex-1">
          <div className="px-4 sm:px-6 md:px-0">
            <h1 className="text-3xl font-extrabold text-gray-900">Settings</h1>
          </div>
        </main> */}
      </div>
    </div>
  );
}

export default Setting;
