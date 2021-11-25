import TopNav from "../components/layouts/TopNav";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function AuditPage() {
  const [riskAuditTable, setRiskAuditTable] = useState([]);
  const riskAuditCollectionRef = collection(db, "auditQuestions");

  useEffect(() => {
    const getRiskAuditData = async () => {
      const data = await getDocs(riskAuditCollectionRef);
      setRiskAuditTable(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    getRiskAuditData();
  }, []);

  return (
    <div>
      <div className="flex flex-row h-18"></div>
      <TopNav title="Audit" />
      <div className="flex flex-col py-0 px-6">
        <div className="relative flex-grow flex-shrink flex-col opacity-100"></div>
      </div>

      <div className="flex flex-shrink flex-grow items-center flex-col py-8">
        <main className="pb-8">
          {/* Facility & structural compliance */}
          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <section aria-labelledby="billing-history-heading">
              <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 sm:px-6">
                  <h2
                    id="billing-history-heading"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Facility Risk Audit
                  </h2>
                </div>
                <div className="mt-6 flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden border-t border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Facility &amp; structural compliance
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Description
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Requirement of
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Compliance Level
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {riskAuditTable.map((items) => (
                              <tr>
                                <td className="col-span-7 items-center justify-center px-6 py-4 whitespace-nowrap">
                                  <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    {items.questions}
                                  </label>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    {items.desc}
                                  </label>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="col-span-4 sm:col-span-2">
                                    <select
                                      id="country"
                                      name="country"
                                      autoComplete="country-name"
                                      className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                    >
                                      <option>Law</option>
                                      <option>NBCI</option>
                                      <option>Best practice</option>
                                    </select>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="col-span-4 sm:col-span-2">
                                    <select
                                      id="country"
                                      name="country"
                                      autoComplete="country-name"
                                      className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                    >
                                      <option>0</option>
                                      <option>1</option>
                                      <option>2</option>
                                    </select>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="payment-details-heading">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="bg-white py-6 px-4 sm:p-6">
                    <div>
                      <h2
                        id="payment-details-heading"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Facility &amp; structural compliance
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        Answers every question as per appliable.
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-4 gap-6">
                      <div className="col-span-4 sm:col-span-2">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Fire clearance/NOC from Zonal fire Officer
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        >
                          <option>Law</option>
                          <option>NBCI</option>
                          <option>Local Law</option>
                        </select>
                      </div>

                      <div className="col-span-4 sm:col-span-2">
                        {
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Requirement of
                          </label>
                        }
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        >
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </section>

            {/* Tickets */}
            {/*  */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AuditPage;
