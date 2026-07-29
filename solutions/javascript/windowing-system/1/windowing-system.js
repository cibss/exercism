// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    // 1. Calculate maximum allowable dimensions based on current position
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    // 2. Clip width between 1 and maxWidth
    const clippedWidth = Math.max(1, Math.min(newSize.width, maxWidth));

    // 3. Clip height between 1 and maxHeight
    const clippedHeight = Math.max(1, Math.min(newSize.height, maxHeight));

    // 4. Update the size using the Size instance's resize method
    this.size.resize(clippedWidth, clippedHeight);
  }

  move(newPosition) {
    // 1. Calculate maximum allowable coordinates based on current window size
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    // 2. Clip x between 0 and maxX
    const clippedX = Math.max(0, Math.min(newPosition.x, maxX));

    // 3. Clip y between 0 and maxY
    const clippedY = Math.max(0, Math.min(newPosition.y, maxY));

    // 4. Update position using the Position instance's move method
    this.position.move(clippedX, clippedY);
  }
}

export function changeWindow(programWindow) {
  // 1. Create new instances for target size and position
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  // 2. Apply size and position changes using the instance methods
  programWindow.resize(newSize);
  programWindow.move(newPosition);

  // 3. Return the modified ProgramWindow instance
  return programWindow;
}