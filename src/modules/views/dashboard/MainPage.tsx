import { Paper } from "@mui/material";
import Layout from "components/Layout/Layout";
import MainPageTooltip from "components/Pure/MainPageTooltip";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from "recharts";

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
      date:"10-02-2024",
    },
    {
      title: "Work",
      amount: 11111,
      description: "Typical work",
      type: "revenue",
      date:"12-02-2024",
    },
    {
      title: "Food",
      amount: -4215,
      description: "Typical food description",
      type: "expenses",
      date:"15-02-2024",
    },
  ];
  return (
    <Layout>
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
          <Tooltip cursor={{ fill: "#8884d820"}} content={<MainPageTooltip />} />
          <Bar dataKey="amount" stackId={"a"} fill={"#8884d8"} />
        </BarChart>
      </Paper>
    </Layout>
  );
}
