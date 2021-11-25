import { useState, useEffect } from "react";
/* import * as XLSX from "xlsx";
import { db } from "../../firebase"; */

const databaseConnection = [
  {
    name: "com.mysql.jdbc.Driver",
    url: "jdbc:mysql://192.168.122.2:3306/riskDashboard",
    username: "root",
    password: "",
  },
  {
    name: "com.microsoft.sqlserver.jdbc.SQLServerDriver",
    url: "jdbc:mysql://localhost:3306/riskDashboard",
    username: "root",
    password: "",
  },
];

const payments = [
  {
    id: 1,
    date: "1/1/2020",
    datetime: "2020-01-01",
    description: "Business Plan - Annual Billing",
    amount: "CA$109.00",
    href: "#",
  },
  // More payments...
];

function AuditSettingPage() {
  /* const [auditQuestions, setAuditQuestions] = useState([]);
  const [show, setShow] = useState(false);
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    fetchAuditQuestions();
  }, []);

  const handleClose = () => {
    resetModal();
  };

  const handleShow = () => setShow(true);

  const processSheetData = (excelData) => {
    const wsname = excelData.SheetNames[0];
    const ws = excelData.Sheets[wsname];

    const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
    let csv = [];
    let headers = [];
    for (let i = 0; i < dataParse.length; i++) {
      if (dataParse[i] === "") continue;
      let fields = dataParse[i];
      if (i === 0) {
        headers = fields;
      } else {
        let csvRow = [];
        for (let field of fields) {
          if (!isNaN(field)) field = Number(field);
          csvRow.push(field);
        }
        csv.push(csvRow);
      }
    }
    setHeaders(headers);
    setRows(csv);
  };

  const handleFileUpload = (event) => {
    let file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result;
      let readedData = XLSX.read(data, { type: "binary" });

      processSheetData(readedData);
    };
    reader.readAsBinaryString(file);
  };

  const resetModal = () => {
    setShow(false);
    setHeaders([]);
    setRows([]);
  };

  const handleSubmit = () => {
    let batch = db.batch();

    const formattedValues = rows.map((row) => {
      return {
        questions: row[0],
        desc: row[1],
      };
    });
    formattedValues.forEach((userRow) => {
      batch.set(db.collection("auditQuestions").doc(), userRow);
    });
    batch.commit().then(function () {
      fetchAuditQuestions();
      resetModal();
    });
  };

  const fetchAuditQuestions = () => {
    db.collection("auditQuestions")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setAuditQuestions(data);
      });
  };
 */
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] =
    useState(false);

  return (
    <div>
      <div className="mt-10">
        <div className="flex flex-row">
          <div className="flex items-center space-x-5">
            <div>
              <h1 className="text-lg leading-6 font-medium text-gray-900">
                Audit Configration
              </h1>
              <p className="max-w-2xl text-sm text-gray-500">
                Manage how information is displayed on your account.
              </p>
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
            {/* <input
              type="file"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            /> */}

            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            >
              Import data
            </button>
          </div>
        </div>
        <div className="mt-6"></div>
      </div>

      <div className="mt-16">
        {/* Applicable compliance */}
        <section aria-labelledby="billing-history-heading">
          <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
            <div className="flex flex-row px-4 sm:px-6 justify-between items-center">
              <div className="flex">
                <h2
                  id="billing-history-heading"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Applicable Compliance
                </h2>
              </div>
              <div className="flex-1"></div>
              <div className="flex">
                <input
                  type="file"
                  className="inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm text-blue-600 border-blue-600 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                />

                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm text-blue-600 border-blue-600 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                  Import applicable compliance
                </button>
              </div>
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
                            Facility &amp; Structural Compliance
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Details of best practices
                          </th>
                          {/* <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Amount
                          </th> */}
                          {/*
                                  `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                                */}
                          <th
                            scope="col"
                            className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            <span className="sr-only">View receipt</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {payments.map((payment) => (
                          <tr key={payment.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              <time dateTime={payment.datetime}>
                                {payment.date}
                              </time>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {payment.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a
                                href={payment.href}
                                className="text-orange-600 hover:text-orange-900"
                              >
                                View receipt
                              </a>
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

        {/* whitespace */}
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        {/* Audit Category */}
        <section aria-labelledby="billing-history-heading">
          <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
            <div className="flex flex-row px-4 sm:px-6 justify-between items-center">
              <div className="flex">
                <h2
                  id="billing-history-heading"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Audit Category
                </h2>
              </div>
              <div className="flex-1"></div>
              <div className="flex">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm text-blue-600 border-blue-600 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                  Import category
                </button>
              </div>
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
                            Audit Category
                          </th>
                          {/*
                                  `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                                */}
                          <th
                            scope="col"
                            className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            <span className="sr-only">View receipt</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {payments.map((payment) => (
                          <tr key={payment.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              <time dateTime={payment.datetime}>
                                {payment.date}
                              </time>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a
                                href={payment.href}
                                className="text-orange-600 hover:text-orange-900"
                              >
                                View receipt
                              </a>
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

        {/* whitespace */}
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        {/* Audit */}
        <section aria-labelledby="billing-history-heading">
          <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
            <div className="flex flex-row px-4 sm:px-6 justify-between items-center">
              <div className="flex">
                <h2
                  id="billing-history-heading"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Audit (Security Risk)
                </h2>
              </div>
              <div className="flex-1"></div>
              <div className="flex">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm text-blue-600 border-blue-600 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                >
                  Import audit
                </button>
              </div>
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
                            Audit
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Audit Group
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Audit Category
                          </th>
                          {/*
                                  `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                                */}
                          <th
                            scope="col"
                            className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            <span className="sr-only">View receipt</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {payments.map((payment) => (
                          <tr key={payment.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              <time dateTime={payment.datetime}>
                                {payment.date}
                              </time>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {payment.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {payment.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a
                                href={payment.href}
                                className="text-orange-600 hover:text-orange-900"
                              >
                                View receipt
                              </a>
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

        {/* whitespace */}
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5"></div>
        </div>
      </div>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default AuditSettingPage;
