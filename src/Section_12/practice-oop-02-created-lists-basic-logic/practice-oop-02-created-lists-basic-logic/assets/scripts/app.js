class Tooltip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    console.log(prjItems);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    console.log('1..',activeProjectsList)
    const finishedProjectsList = new ProjectList('finished');
    console.log('2..',finishedProjectsList)
  }
}

App.init();