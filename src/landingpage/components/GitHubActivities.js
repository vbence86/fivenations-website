import React, {Component} from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import TM from 'fusioncharts/themes/fusioncharts.theme.ocean';
import GitHubClient from '../../utils/GitHubClient';

// Load the charts module pass FusionCharts as dependency
charts(FusionCharts);

export default class GitHubActivities extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.gitHubClient = new GitHubClient();
    this.gitHubClient.activities().then(activities => {
      this.createChart(activities);
    });
  }

  translateActivitiesToChartData(activities) {
    const days = [];
    activities.forEach(v => {
      let dayIdx = Math.floor((new Date() - new Date(v.created_at)) / 86400 / 1000);
      if (dayIdx > 6) {
        dayIdx = 6;
      } else {
        dayIdx = 6 - dayIdx;
      }
      if (!days[dayIdx]) {
        days[dayIdx] = {'value': 1};
      } else {
        days[dayIdx].value += 1;
      }
    });
    return days;
  }

  createChart(activities) {
    FusionCharts.ready(() => {
      var myDataSource = {
        chart: {
          'caption': 'Development activities',
          'subcaption': '',
          'xaxisname': 'Days',
          'yaxisname': 'Activities',
          'numberprefix': '',
          'theme': 'ocean',
        },
        'categories': [
          {
            'category': [
              {'label': 'Before'},
              {'label': '5 days ago'},
              {'label': '4 days ago'},
              {'label': '3 days ago'},
              {'label': '2 das ago'},
              {'label': '1 day ago'},
              {'label': 'Today'},
            ],
          },
        ],
        'dataset': [
          {
            'seriesname': 'Activities',
            'renderas': 'area',
            'showvalues': '0',
            'data': this.translateActivitiesToChartData(activities),
          },
        ],
      };

      const props_multi_chart = {
        id: 'multi_chart',
        type: 'mscombi2d',
        width: '100%',
        height: 400,
        dataFormat: 'json',
        dataSource: myDataSource,
      };

      this.setState({chart: props_multi_chart});

    });
  }


  renderChart() {
  	return <ReactFC {...this.state.chart} />;
  }

  render() {
    return (
      <div id="github-activities-container">
        <div className="col-xs-4 col-md-4">
          <img height={175} width={200} src={require('../../../public/images/github.jpg')} alt="github" />
        </div>
        <div className="col-xs-8 col-md-8 activitiesContainer">
          {this.renderChart()}
        </div>
      </div>
    );
  }

}
