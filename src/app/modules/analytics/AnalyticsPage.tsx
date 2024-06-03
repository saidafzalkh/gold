import { getCSSVariableValue } from "../../../_metronic/assets/ts/_utils";
import { toAbsoluteUrl } from "../../../_metronic/helpers";
import StatisticsWidget, {
  StatisticsCard,
  StatisticsCardBody,
  StatisticsWidget2,
  StatisticsWidget3,
} from "../../../components/UI/StatisticsWidget/StatisticsWidget";
import ComparisonWidget from "./partials/ComparisonWidget";
import OverdueAnalysisWidget from "./partials/OverdueAnalysisWidget";
import ProfitExpensesAnalysisWidget from "./partials/ProfitExpensesAnalysisWidget";
import RegionSalesWidget from "./partials/RegionSalesWidget";

function AnalyticsPage() {
  return (
    <>
      <div
        className="w-100 position-absolute top-0"
        style={{
          height: 80,
          backgroundColor: getCSSVariableValue(
            "--bs-app-header-minimize-bg-color"
          ),
          left: 0,
        }}
      />
      AnalyticsPage={}
      <div style={{ maxWidth: 1160, margin: "0px auto" }}>
        <ProfitExpensesAnalysisWidget />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 30,
            marginTop: 30,
          }}
        >
          <div style={{ gridColumn: "span 3" }}>
            <OverdueAnalysisWidget height="220px"/>
          </div>

          <div
            className="d-flex flex-column justify-content-between "
            style={{ gridColumn: "span 1", gap: 30 }}
          >
            <div
              className="card bg-white shadow-sm"
              style={{ borderRadius: 12, padding: "50px 30px 50px 30px" }}
            >
              <StatisticsCardBody
                title="400"
                unit="чел."
                description="Количество клиентов"
                icon={<img src={toAbsoluteUrl("media/svg/business.svg")} />}
              />
            </div>

            <div
              className="card bg-white shadow-sm"
              style={{ borderRadius: 12, padding: "50px 30px 50px 30px" }}
            >
              <StatisticsCardBody
                title="17,500"
                unit="₸"
                description="Общая сумма"
                icon={<img src={toAbsoluteUrl("media/svg/business.svg")} />}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 30,
            marginTop: 40,
          }}
        >
          <div style={{ gridColumn: "span 3" }}>
            <RegionSalesWidget />
          </div>

          <StatisticsWidget
            title={
              <span>
                <b style={{ fontSize: 38 }}>27,500</b> ₸
              </span>
            }
            description="Общая сумма продаж"
            icon={<img src={toAbsoluteUrl("media/svg/business.svg")} />}
            percent={2.2}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 30,
            marginTop: 40,
          }}
        >
          <div style={{ gridColumn: "span 4" }}>
            <ComparisonWidget
              value1={{ value: "700,000", percent: 70, desc: "Общий ЗК" }}
              value2={{ value: "300,000", percent: -30, desc: "Общий СК" }}
            />
          </div>
          <StatisticsCard
            title="40,000"
            icon={
              <img
                src={toAbsoluteUrl("media/svg/business.svg")}
                className="d-d-inline-block "
              />
            }
            description="ЗК Иван"
            unit="₸"
          />
          <StatisticsCard
            title="40,000"
            icon={
              <img
                src={toAbsoluteUrl("media/svg/business.svg")}
                className="d-d-inline-block "
              />
            }
            description="ЗК Кредит"
            unit="₸"
          />
          <StatisticsCard
            title="40,000"
            icon={
              <img
                src={toAbsoluteUrl("media/svg/business.svg")}
                className="d-d-inline-block "
              />
            }
            description="СК на руках"
            unit="₸"
          />
          <StatisticsCard
            title="40,000"
            icon={
              <img
                src={toAbsoluteUrl("media/svg/business.svg")}
                className="d-d-inline-block "
              />
            }
            description="СК в товарах"
            unit="₸"
          />
          <div style={{ gridColumn: "span 2" }}>
            <StatisticsWidget2
              title="Финансы"
              data={[
                { value: "50 000", unit: "₸", desc: "Начало смены" },
                { value: "50 000", unit: "₸", desc: "Конец смены" },
                { value: "50 000", unit: "₸", desc: "Расход за смену" },
                { value: "50 000", unit: "₸", desc: "Возврат товаров" },
              ]}
            />
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <StatisticsWidget2
              title="Выкуп"
              data={[
                { value: "50 000", unit: "₸", desc: "Частичный выкуп" },
                { value: "50 000", unit: "₸", desc: "Продление" },
                { value: "50 000", unit: "₸", desc: "Вывод из залогов" },
                { value: "50 000", unit: "₸", desc: "Продажа товаров" },
              ]}
            />
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <StatisticsWidget2
              title="Товары"
              data={[
                { value: "50 000", unit: "₸", desc: "Залог" },
                {
                  value: "50 000",
                  unit: "₸",
                  desc: "Залоговые билеты/готов к продаже",
                },
                { value: "50 000", unit: "₸", desc: "Товары бу" },
                { value: "50 000", unit: "₸", desc: "Залоговые билеты/товары" },
              ]}
            />
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <StatisticsWidget2
              title="Расходы"
              data={[
                { value: "50 000", unit: "₸", desc: "Непредвиденный расход" },
                {
                  value: "50 000",
                  unit: "₸",
                  desc: "Доход за проценты",
                },
                { value: "50 000", unit: "₸", desc: "Доход за продажу" },
                { value: "50 000", unit: "₸", desc: "Чистая прибыль" },
              ]}
            />
          </div>
          <div>
            <StatisticsWidget3
              title="Фикс"
              data={{
                value: "50 000",
                unit: "₸",
                desc: "Фикс. расход",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalyticsPage;
