import { action, observable, computed, decorate } from 'mobx';



class chartStore {
    constructor(chartData) {
        this.chartData = chartData;
        this.filteredDataCached = {}
        this.state = {
            selectedItemFilter: 100,
            selectedSegmentFilter: null,
        }
    }

   setSelectedItemFilter(numberOfItems) {
       this.state.selectedItemFilter = numberOfItems;
   }

   setSelectedSegmentFilter(selectedSegment) {
       this.state.selectedSegmentFilter = selectedSegment;
   }

   get filteredChartData() {
    const { selectedItemFilter, selectedSegmentFilter} = this.state;   
    const cacheDataKey = `${selectedItemFilter}_${selectedSegmentFilter}`;
    if (this.filteredDataCached.hasOwnProperty(cacheDataKey)) {
        return this.filteredDataCached[cacheDataKey];
    }
    let filteredData = this.chartData;
    //we start to filter the segment and then the number of items
    if (selectedSegmentFilter) {
        filteredData = filteredData.map((chartData) => {
            return chartData.hasOwnProperty[selectedSegmentFilter] ? chartData[selectedSegmentFilter] : null;
        })
    }

    filteredData = filteredData.slice(0,selectedItemFilter);
    this.filteredDataCached[cacheDataKey] = filteredData;

    return filteredData;
   }

    
    
    
}

export default decorate(TesterStore, {
    state: observable,
    setSelectedItemFilter: action,
    setSelectedSegmentFilter: action,
    
    chartData: computed
})