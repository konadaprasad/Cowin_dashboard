import {Legend, ResponsiveContainer, PieChart, Pie, Cell} from 'recharts'
import {Heading, Cont2} from './styledComponents'

const VaccinationByGender = props => {
  const {listItem2} = props
  return (
    <Cont2>
      <Heading para>Vaccination by gender</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="60%"
            data={listItem2}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            horizontalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </Cont2>
  )
}
export default VaccinationByGender
