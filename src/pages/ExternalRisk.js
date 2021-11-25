import TopNav from "../components/layouts/TopNav";
import { UsersIcon } from "@heroicons/react/outline";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { MailOpenIcon } from "@heroicons/react/outline";
import MostRecentAlertTable from "../components/dashboard/MostRecentAlertTable";

const dataStat = [
  {
    id: 1,
    name: "ACS Alerts",
    stat: "71,897",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "CCTV Alerts",
    stat: "58.16%",
    icon: MailOpenIcon,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "High Priority",
    stat: "71,897",
    icon: UsersIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 4,
    name: "Incident Tickets",
    stat: "58.16%",
    icon: MailOpenIcon,
    change: "5.4%",
    changeType: "increase",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ExternalRiskPage() {
  return (
    <div>
      <div className="flex flex-row h-18"></div>
      <TopNav title="External Risk" />
      <div className="flex flex-col py-0 px-6">
        <div className="relative flex-grow flex-shrink flex-col opacity-100"></div>
      </div>

      <div className="flex flex-shrink flex-grow flex-col py-8">
        <main className="pb-8">
          <div className="space-y-6 sm:px-6 lg:px-8 lg:col-span-9 xl:px-16">
            <section aria-labelledby="payment-details-heading">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="bg-white py-6 px-4 sm:p-6">
                    <div>
                      <h2
                        id="payment-details-heading"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Alerts
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        Manage alerts related to External
                      </p>
                    </div>

                    {/*  */}
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      Download report
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>

          <MostRecentAlertTable title="Internal Alerts" />
        </main>
      </div>
    </div>
  );
}

export default ExternalRiskPage;
