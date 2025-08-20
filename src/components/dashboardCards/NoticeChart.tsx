import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: "1", value: 15 },
  { day: "2", value: 17 },
  { day: "3", value: 14 },
  { day: "4", value: 18 },
  { day: "5", value: 16 },
  { day: "6", value: 19 },
  { day: "7", value: 23 },
  { day: "8", value: 38 },
  { day: "9", value: 52 },
  { day: "10", value: 65 },
  { day: "11", value: 72 },
  { day: "12", value: 68 },
  { day: "13", value: 70 },
];

const Example = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#85BA49" strokeWidth={2} fill="#E4F5D1" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Example;
