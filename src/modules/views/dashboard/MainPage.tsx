import { Paper, Toolbar } from "@mui/material";
import Layout from "components/Layout/Layout";
import MainPageTooltip from "components/Pure/MainPageTooltip";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

export default function MainPage() {
  const chartSetting = {
    width: 500,
    height: 300,
  };
  const data = [
    {
      title: "Keyboard",
      amount: -222,
      description: "Typical keyboard",
      type: "expenses",
      date: "10-02-2024",
      category: "entertainment",
    },
    {
      title: "Mouse",
      amount: -125,
      description: "Typical mouse",
      type: "expenses",
      date: "10-02-2024",
      category: "entertainment",
    },
    {
      title: "Work",
      amount: 2111,
      description: "Typical work",
      type: "revenue",
      date: "12-02-2024",
      category: "job",
    },
    {
      title: "Food",
      amount: -915,
      description: "Typical food description",
      type: "expenses",
      date: "15-02-2024",
      category: "home",
    },
  ];
  return (
    <Layout>
      <Toolbar />
      <Paper>
        <BarChart
          {...chartSetting}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip
            cursor={{ fill: "#8884d820" }}
            content={<MainPageTooltip />}
          />
          <Bar dataKey="amount" stackId={"a"} fill={"#8884d8"}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.amount > 0 ? "#8884d8" : "#d90429"}
              />
            ))}
          </Bar>
        </BarChart>
      </Paper>
    </Layout>
  );
}
