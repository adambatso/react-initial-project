import { action, observable, computed, decorate } from 'mobx';

class chartStore {
  constructor(chartData) {
    this.chartData = chartData;
    this.filteredDataCached = {};
    this.state = {
      selectedItemFilter: 100,
      selectedSegmentFilter: null,
    };
  }

  setSelectedItemFilter(numberOfItems) {
    this.state.selectedItemFilter = numberOfItems;
  }

  setSelectedSegmentFilter(selectedSegment) {
    this.state.selectedSegmentFilter = selectedSegment;
  }

  get filteredChartData() {
    const { selectedItemFilter, selectedSegmentFilter } = this.state;
    const cacheDataKey = `${selectedItemFilter}_${selectedSegmentFilter}`;

    if (this.filteredDataCached && this.filteredDataCached.hasOwnProperty(cacheDataKey)) {
      return this.filteredDataCached[cacheDataKey];
    }
    let filteredData = this.chartData;

    //we start to filter the segment and then the number of items
    if (selectedSegmentFilter && selectedSegmentFilter !== 'all') {
      filteredData = filteredData.map((chartData) => {
        const returnVal = {
          [selectedSegmentFilter]: chartData[selectedSegmentFilter],
          date: chartData.date,
        };

        return chartData.hasOwnProperty(selectedSegmentFilter) ? returnVal : null;
      });
    }

    filteredData = filteredData.slice(0, selectedItemFilter);

    //TODO:: do it dynamic
    const dataBySegment = {
      segmentA: [],
      segmentB: [],
      segmentC: [],
      segmentD: [],
    };
    //TODO:: need to move it to store so it will be saved in cache
    filteredData.forEach((element) => {
      Object.keys(element).forEach((key) => {
        if (dataBySegment[key]) {
          const date = new Date(element.date);

          dataBySegment[key].push({
            y: element[key],
            label: date.getMonth(),
          });
        }
      });
    });

    this.filteredDataCached[cacheDataKey] = dataBySegment;

    return dataBySegment;
  }
}

export default decorate(chartStore, {
  state: observable,
  setSelectedItemFilter: action,
  setSelectedSegmentFilter: action,
  filteredChartData: computed,
});
