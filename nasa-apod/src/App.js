import React from 'react';
import ViewerTemplate from './components/ViewerTemplate'
import SpaceNavigator from './components/SpaceNavigator'
import Viewer from './components/Viewer'
import moment from 'moment';

import * as api from './lib/api';

class App extends React.Component {
  state = {
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null
  }

  getAPOD = async (date) => {
    if(this.state.loading) return;

    this.setState({
      loading: true
    })

    try {
      const res = await api.getAPOD(date);
      const { date: retrivedDate, url, media_type: mediaType } = res

      if(!this.state.maxDate) {
        this.setState({
          maxDate: retrivedDate
        })
      }

      this.setState({
        date: retrivedDate,
        mediaType,
        url
      })

    } catch(e) {
      console.log(e);
    }
  }

  handlePrev = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    console.log(prevDate);
    this.getAPOD(prevDate);
  }

  handleNext = () => {
    const { date, maxDate } = this.state;
    if(date === maxDate) return;

    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(nextDate);
  }

  componentDidMount() {
    this.getAPOD();
  }
  render() {
    const { url, mediaType, loading } = this.state;
    const { handlePrev, handleNext } = this;

    return (
      <ViewerTemplate 
        spaceNavigator={
          <SpaceNavigator 
             onPrev={handlePrev} 
             onNext={handleNext}
             />} 
        viewer={(
          <Viewer
            url="https://apod.nasa.gov/apod/image/1712/GeminidsYinHao1024.jpg"
            mediaType="image" 
            />
        )}
      />
    );
  }
}

export default App;
