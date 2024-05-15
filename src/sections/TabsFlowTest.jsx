import React from "react";
import EspacePerso from "./EspacePerso";
import SeConnecter from "./SeConnecter";

const TabsFlowTest = () => {
  return (
    <>
      <div className="mb-4 border-b border-gray-200">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-styled-tab"
          data-tabs-toggle="#default-styled-tab-content"
          data-tabs-active-classNamees="text-purple-600 hover:text-purple-600  border-purple-600"
          data-tabs-inactive-classNamees="text-gray-500 hover:text-gray-600  border-gray-100 hover:border-gray-300"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              id="espaceperso-styled-tab"
              data-tabs-target="#styled-espaceperso"
              type="button"
              role="tab"
              aria-controls="espaceperso"
              aria-selected="false"
            >
              Espace perso
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              id="createAccount-styled-tab"
              data-tabs-target="#styled-createAccount"
              type="button"
              role="tab"
              aria-controls="createAccount"
              aria-selected="false"
            >
              Creer un compte
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <div
          className="hidden p-4 rounded-lg"
          id="styled-espaceperso"
          role="tabpanel"
          aria-labelledby="espaceperso-tab"
          active
        >
          <EspacePerso></EspacePerso>
        </div>
        <div
          className="hidden p-4 rounded-lg"
          id="styled-createAccount"
          role="tabpanel"
          aria-labelledby="createAccount-tab"
        >
          <SeConnecter></SeConnecter>
        </div>
      </div>
    </>
  );
};

export default TabsFlowTest;
