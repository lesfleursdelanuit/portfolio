class AppManager {
  constructor() {
    this.startIndex = 0;
    this.filter = "favorite";
    this.filterType = "tags";
    this.view = "carousel";
    this.selectedPage = "gallery";
    this.numLeft = 0;
    this.current = 0;
    this.numVisible = 0;
    this.dataLength = 0;
    this.lookupTable = {};
    this.listeners = [];
  }

  setDataLength(d, numVisible) {
    this.dataLength = d;
    this.numVisible = numVisible;
    this.getInitCurrent();
  }

  getInitCurrent() {
    console.log(this.dataLength >= this.numVisible);
    let current = 0;
    if (this.dataLength >= this.numVisible) current = 1;
    //  this.handleSetCurrent(current);
    this.current = current;
  }

  getCurrent() {
    return this.current;
  }

  getNumLeft() {
    return this.numLeft;
  }

  handleSetCurrent(c) {
    this.current = c;
    this.notifyListeners(["current"]);
  }

  handleViewChange(v) {
    this.view = v;
    this.notifyListeners(["view"]);
  }

  decrementNumLeft() {
    this.numLeft--;
    this.notifyListeners(["numLeft"]);
  }

  handleFilterChange(input) {
    if (input.type === "all") {
      this.filter = "all";
      this.filterType = "all";
      this.startIndex = 0;
      this.numLeft = this.dataLength - this.startIndex;
      this.getInitCurrent();
    } else {
      this.filter = this.lookupTable[input.id].name;
      this.filterType = input.type;
      this.startIndex = 0;
      this.numLeft = this.dataLength - this.startIndex;
      this.getInitCurrent();
    }

    this.notifyListeners(["filter"]);
  }

  handleStartIndexChange(s) {
    this.startIndex = s;
    this.numLeft = this.dataLength - this.startIndex;
    this.notifyListeners(["startIndex"]);
  }

  getFilter() {
    return this.filter;
  }

  getFilterType() {
    return this.filterType;
  }

  getView() {
    return this.view;
  }

  getSelectedPage() {
    return this.selectedPage;
  }

  getStartIndex() {
    return this.startIndex;
  }

  registerListener(listener) {
    this.listeners.push(listener);
    return this.listeners.length - 1;
  }

  unregisterListener(id) {
    this.listeners[id] = null;
  }

  notifyListeners(propsChanged) {
    for (let i = 0; i < this.listeners.length; i++) {
      const listener = this.listeners[i];
      if (listener !== undefined && listener !== null) {
        listener(propsChanged);
      }
    }
  }
}

export default AppManager;
