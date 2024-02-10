import {Legend, ResponsiveContainer, PieChart, Pie, Cell} from 'recharts'
import {Heading, Cont2} from './styledComponents'

const VaccinationByAge = props => {
  const {listItem3} = props

  return (
    <Cont2>
      <Heading para>Vaccination by Age</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={listItem3}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above60" fill=" #64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            horizontalAlign="middle"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </Cont2>
  )
}

export default VaccinationByAge
