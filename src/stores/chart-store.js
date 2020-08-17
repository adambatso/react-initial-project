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
    console.log(
      '%c cacheDataKey',
      'font-size:20px;color:lime;',
      cacheDataKey,
      this.filteredDataCached,
    );
    if (this.filteredDataCached && this.filteredDataCached.hasOwnProperty(cacheDataKey)) {
      return this.filteredDataCached[cacheDataKey];
    }
    let filteredData = this.chartData;
    console.log('%c selectedSegmentFilter', 'font-size:20px;color:lime;', selectedSegmentFilter);
    //we start to filter the segment and then the number of items
    if (selectedSegmentFilter && selectedSegmentFilter !== 'all') {
      filteredData = filteredData.map((chartData) => {
        const returnVal = {
          [selectedSegmentFilter]: chartData[selectedSegmentFilter],
          date: chartData.date,
        };
        console.log('%c returnjVal', 'font-size:20px;color:lime;', returnVal);
        return chartData.hasOwnProperty(selectedSegmentFilter) ? returnVal : null;
      });
    }

    filteredData = filteredData.slice(0, selectedItemFilter);

    this.filteredDataCached[cacheDataKey] = filteredData;

    return filteredData;
  }
}

export default decorate(chartStore, {
  state: observable,
  setSelectedItemFilter: action,
  setSelectedSegmentFilter: action,
  filteredChartData: computed,
});
