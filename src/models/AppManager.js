class AppManager {
  constructor() {
    this.startIndex = 0;
    this.filter = "favorite";
    this.filterType = "tags";
    this.view = "carousel";
    this.selectedPage = "gallery";
    this.lookupTable = {};
    this.listeners = [];
  }

  handleViewChange(v) {
    this.view = v;
    this.notifyListeners(["view"]);
  }

  handleFilterChange(input) {
    if (input.type === "all") {
      this.filter = "all";
      this.filterType = "all";
      this.startIndex = 0;
    } else {
      this.filter = this.lookupTable[input.id].name;
      this.filterType = input.type;
      this.startIndex = 0;
    }

    this.notifyListeners(["filter"]);
  }

  handleStartIndexChange(s) {
    this.startIndex = s;
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
    console.log("notifying listeners of");
    console.log(propsChanged);
    for (let i = 0; i < this.listeners.length; i++) {
      const listener = this.listeners[i];
      if (listener !== undefined && listener !== null) {
        listener(propsChanged);
      }
    }
  }
}

export default AppManager;
