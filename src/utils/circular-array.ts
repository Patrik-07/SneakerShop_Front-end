export class CircularArray<T> {
  private elements: T[];
  private currentIndex: number;

  constructor(elements: T[]) {
    this.elements = elements;
    this.currentIndex = 0;
  }

  current(): T {
    return this.elements[this.currentIndex];
  }

  next(): T {
    const nextIndex = (this.currentIndex + 1) % this.elements.length;
    this.currentIndex = nextIndex;
    return this.elements[nextIndex];
  }

  prev(): T {
    const prevIndex =
      this.currentIndex === 0
        ? this.elements.length - 1
        : this.currentIndex - 1;
    this.currentIndex = prevIndex;
    return this.elements[prevIndex];
  }
}
