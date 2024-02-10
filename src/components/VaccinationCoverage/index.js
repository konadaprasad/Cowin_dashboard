import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import {Heading, Cont2} from './styledComponents'

const VaccinationCoverage = props => {
  const {listItem1} = props

  const DataFormatter = number => {
    if (number > 5) {
      return `${(number / 5).toString()}k`
    }
    return number.toString()
  }
  return (
    <Cont2>
      <Heading para>Vaccination Coverage</Heading>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={listItem1}
          margin={{
            top: 30,
          }}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 10,
              border: 5,
            }}
          />
          <Bar dataKey="dose1" name="Dose1" fill=" #5a8dee" barSize="10%" />
          <Bar dataKey="dose2" name="Dose2" fill=" #f54394" barSize="10%" />
        </BarChart>
      </ResponsiveContainer>
    </Cont2>
  )
}
export default VaccinationCoverage
