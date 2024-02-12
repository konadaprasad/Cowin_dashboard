import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

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

      <BarChart
        height={300}
        width={800}
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
          iconType="react"
          wrapperStyle={{
            padding: 30,
            border: 5,
          }}
        />
        <Bar dataKey="dose1" name="Dose1" fill=" #5a8dee" barSize="10%" />
        <Bar dataKey="dose2" name="Dose2" fill=" #f54394" barSize="10%" />
      </BarChart>
    </Cont2>
  )
}
export default VaccinationCoverage
