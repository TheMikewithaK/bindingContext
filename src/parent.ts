export class Parent {

  showingChild: boolean = false;
  vm: string = "I am the parent view model";
  something: string = "I am being accessed from the child";

  showChild() {
    this.showingChild = true;
  }

  hideChild() {
    this.showingChild = false;
  }
}
