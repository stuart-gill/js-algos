// given two rectangles, find their overlap

const myRectangle = {
  // Coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // Width and height
  width: 6,
  height: 4,
};

const yourRectangle = {
  // Coordinates of bottom-left corner
  leftX: 0,
  bottomY: 0,

  // Width and height
  width: 7,
  height: 2,
};

const xOverlap = (rec1, rec2) => {
  let xLap = {};
  let highestLeft = Math.max(rec1.leftX, rec2.leftX);
  let lowestRight = Math.min(rec1.leftX + rec1.width, rec2.leftX + rec2.width);
  // if overlapping partially
  xLap.leftX = highestLeft;
  xLap.width = lowestRight - highestLeft;
  // if no overlap at all
  if (xLap.width <= 0) return false;
  return xLap;
};

const yOverlap = (rec1, rec2) => {
  let yLap = {};
  let highestBottom = Math.max(rec1.bottomY, rec2.bottomY);
  let lowestTop = Math.min(
    rec1.bottomY + rec1.height,
    rec2.bottomY + rec2.height
  );
  // if overlapping partially
  yLap.bottomY = highestBottom;
  yLap.height = lowestTop - highestBottom;
  // if no overlap at all
  if (yLap.height <= 0) return false;
  return yLap;
};

const overlap = (rec1, rec2) => {
  let xLap = xOverlap(rec1, rec2);
  let yLap = yOverlap(rec1, rec2);
  let overlapRec = {
    // Coordinates of bottom-left corner
    leftX: xLap.leftX,
    bottomY: yLap.bottomY,

    // Width and height
    width: xLap.width,
    height: yLap.height,
  };
  return overlapRec;
};

console.log(overlap(myRectangle, yourRectangle));
