"use client";

import useWindowSize from "@/hooks/use-window-size";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface ChartDiagramProps {
  groupVal: number;
  studentVal: number;
  teacherVal: number;
  blogVal: number;
}

const ChartDiagram = ({
  blogVal,
  groupVal,
  studentVal,
  teacherVal,
}: ChartDiagramProps) => {
  const data = [
    { name: "Groups", value: groupVal },
    { name: "Students", value: studentVal },
    { name: "Teachers", value: teacherVal },
    { name: "Blog-News", value: blogVal },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Get window size for responsiveness
  const { width } = useWindowSize();

  // Dynamically set width and height for responsiveness
  const chartWidth = width > 600 ? 400 : width - 40; // Adjust size based on width
  const chartHeight = width > 600 ? 400 : width - 40; // Same for height

  return (
    <PieChart width={chartWidth} height={chartHeight}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ChartDiagram;
