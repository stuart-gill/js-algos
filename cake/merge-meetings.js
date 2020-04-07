//  Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

//  For example:

// { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

const testMeetings = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];

// most basic case
const testMeetings2 = [
  { startTime: 1, endTime: 3 },
  { startTime: 2, endTime: 4 },
];

// meetings don't overlap but should be merged
const testMeetings3 = [
  { startTime: 1, endTime: 2 },
  { startTime: 2, endTime: 3 },
];

// one meeting subsumed in another
const testMeetings4 = [
  { startTime: 2, endTime: 3 },
  { startTime: 1, endTime: 5 },
];

// all meetings subsumed
const testMeetings5 = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
];

function mergeRanges(allMeetings) {
  let merged = [];

  for (let meeting of allMeetings) {
    let added = false;
    for (let mergedMeeting of merged) {
      if (
        //meeting overlaps end of merged meeting
        meeting.startTime > mergedMeeting.startTime &&
        meeting.startTime <= mergedMeeting.endTime &&
        meeting.endTime > mergedMeeting.endTime
      ) {
        mergedMeeting.endTime = meeting.endTime;
        added = true;
        break;
      } else if (
        //meeting overlaps beginning of merged meeting
        meeting.startTime < mergedMeeting.startTime &&
        meeting.endTime >= mergedMeeting.startTime &&
        meeting.endTime < mergedMeeting.endTime
      ) {
        mergedMeeting.startTime = meeting.startTime;
        added = true;
        break;
      } else if (
        //meeting overlaps entirety of merged meeting
        meeting.startTime < mergedMeeting.startTime &&
        meeting.endTime > mergedMeeting.endTime
      ) {
        mergedMeeting.startTime = meeting.startTime;
        mergedMeeting.endTime = meeting.endTime;
        added = true;
        break;
      } else if (
        //meeting is subsumed my merged meeting
        meeting.startTime > mergedMeeting.startTime &&
        meeting.endTime < mergedMeeting.endTime
      ) {
        added = true;
        break;
      }
    }
    if (added === false) {
      //otherwise, add the meeting to merged array
      merged.push(meeting);
    }
    console.log(merged);
  }
  return merged;
}
mergeRanges(testMeetings2);
mergeRanges(testMeetings);
mergeRanges(testMeetings3);
mergeRanges(testMeetings4);
mergeRanges(testMeetings5);
console.log('+++++++++++++++++++++++++++++++++++');

// try again with O (n Lg n) time instead of nested loops
// much simpler!!
// sorting the array first removes a lot of the testing necessary, and removes the need to run two loops
// sort of a greedy algorithm

function merge(allMeetings) {
  allMeetings.sort((x, y) => x.startTime - y.startTime);

  let mergedMeetings = [allMeetings[0]];

  for (let meeting of allMeetings) {
    let currentMerge = mergedMeetings[mergedMeetings.length - 1];
    if (meeting.startTime <= currentMerge.endTime) {
      currentMerge.endTime = Math.max(meeting.endTime, currentMerge.endTime);
    } else {
      mergedMeetings.push(meeting);
    }
    console.log(mergedMeetings);
  }
}

merge(testMeetings2);
merge(testMeetings);
merge(testMeetings3);
merge(testMeetings4);
merge(testMeetings5);
