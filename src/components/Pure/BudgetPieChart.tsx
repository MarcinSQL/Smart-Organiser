import { PieChart } from "@mui/x-charts";
import { useGetCostsQuery } from "modules/logic/dashboard/queries";
import { IPieChartCost, IRawCost } from "modules/types/dashboard/budget.types";

export default function BudgetPieChart() {
  const data = [
    {
      id: 0,
      label: "Keyboard",
      value: 222,
      description: "Typical keyboard",
      type: "expenses",
      date: "10-02-2024",
      category: "entertainment",
    },
    {
      id: 1,
      label: "Mouse",
      value: 125,
      description: "Typical mouse",
      type: "expenses",
      date: "10-02-2024",
      category: "entertainment",
    },
    {
      id: 2,
      label: "Work",
      value: 2111,
      description: "Typical work",
      type: "revenue",
      date: "12-02-2024",
      category: "job",
    },
    {
      id: 3,
      label: "Food",
      value: 915,
      description: "Typical food description",
      type: "expenses",
      date: "15-02-2024",
      category: "home",
    },
  ];

  //  ENDPOINTS MUST BE CREATED
  //   const { data: rawData } = useGetCostsQuery();

  //   const data: IPieChartCost[] = [];
  //   rawData?.forEach((element: IRawCost) => {
  //     const cost: IPieChartCost = {
  //       id: element.id,
  //       label: element.category,
  //       value: element.amount,
  //       description: element.description,
  //       date: element.date,
  //     };

  //     data.push(cost);
  //   });

  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: {
            innerRadius: 30,
            additionalRadius: -10,
            color: "gray",
          },
          innerRadius: 20,
          paddingAngle: 5,
          cornerRadius: 5,
        },
      ]}
      height={200}
    />
  );
}
