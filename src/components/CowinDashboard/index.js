import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {MainContainer, Cont, Image, Heading, Image1} from './styledComponents'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const viewState = {
  Loading: 'LOADING',
  Success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    barChartData: [],
    pieChartData: [],
    chartData: [],
    status: viewState.Loading,
  }

  componentDidMount() {
    this.getItems()
  }

  getItems = async () => {
    this.setState({status: viewState.Loading})
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')

    const data1 = await response.json()
    console.log(data1)

    if (response.ok) {
      const firstData = data1.last_7_days_vaccination.map(eachItem => ({
        vaccineDate: eachItem.vaccine_date,
        dose1: eachItem.dose_1,
        dose2: eachItem.dose_2,
      }))
      const secondData = data1.vaccination_by_age.map(each => ({
        age: each.age,
        count: each.count,
      }))
      const thirdData = data1.vaccination_by_gender.map(each => ({
        gender: each.gender,
        count: each.count,
      }))
      this.setState({
        barChartData: firstData,
        pieChartData: secondData,
        chartData: thirdData,
        status: viewState.Success,
      })
    } else {
      this.setState({status: viewState.failure})
    }
  }

  SuccessView = () => {
    const {barChartData, pieChartData, chartData} = this.state
    console.log(barChartData, pieChartData, chartData)

    return (
      <>
        <VaccinationCoverage listItem1={barChartData} />
        <VaccinationByGender listItem2={pieChartData} />
        <VaccinationByAge listItem3={chartData} />
      </>
    )
  }

  LoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  failureView = () => (
    <div>
      <Heading para>Something went wrong</Heading>
      <Image1
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
      />
    </div>
  )

  renderView = () => {
    const {status} = this.state
    switch (status) {
      case viewState.Loading:
        return this.LoadingView()
      case viewState.Success:
        return this.SuccessView()
      case viewState.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    return (
      <MainContainer>
        <Cont>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <Heading>Co-WIN</Heading>
        </Cont>

        <div>
          <Heading para>CoWIN Vaccination in India</Heading>
          <div>{this.renderView()}</div>
        </div>
      </MainContainer>
    )
  }
}

export default CowinDashboard
