// DashboardWrapper.tsx
import { FC } from "react";
import { useIntl } from "react-intl";
import { toAbsoluteUrl } from "../../../_metronic/helpers";
import { PageTitle } from "../../../_metronic/layout/core";
import { FormEditor, FormRenderer } from "../../../app/modules/widgets/components/Formeo";
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  CardsWidget7,
  CardsWidget17,
  CardsWidget20,
  ListsWidget26,
  EngageWidget10,
} from "../../../_metronic/partials/widgets";

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
      {/* ... */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className="row gx-5 gx-xl-10">
      {/* ... */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className="row gy-5 gx-xl-8">
      {/* ... */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className="row gy-5 g-xl-8">
      {/* ... */}
    </div>
    {/* end::Row */}

    {/* Formeo Components */}
    <div className="row g-5 gx-xxl-8">
      <div className="col-xxl-6">
        <FormEditor />
      </div>
      <div className="col-xxl-6">
        <FormRenderer />
      </div>
    </div>

    <div className="row g-5 gx-xxl-8">
      {/* ... */}
    </div>
  </>
);

const DashboardWrapper: FC = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.DASHBOARD" })}
      </PageTitle>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
