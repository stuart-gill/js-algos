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

const testMeetings2 = [
  { startTime: 1, endTime: 3 },
  { startTime: 2, endTime: 4 },
];

function mergeRanges(allMeetings) {
  let merged = [];

  for (let meeting of allMeetings) {
    let added = false;
    for (let mergedMeeting of merged) {
      if (
        meeting.startTime > mergedMeeting.startTime &&
        meeting.startTime <= mergedMeeting.endTime &&
        meeting.endTime > mergedMeeting.endTime
      ) {
        mergedMeeting.endTime = meeting.endTime;
        added = true;
      } else if (
        meeting.startTime < mergedMeeting.startTime &&
        meeting.endTime >= mergedMeeting.startTime &&
        meeting.endTime < mergedMeeting.endTime
      ) {
        mergedMeeting.startTime = meeting.startTime;
        added = true;
      } else if (
        meeting.startTime < mergedMeeting.startTime &&
        meeting.endTime > mergedMeeting.endTime
      ) {
        mergedMeeting.startTime = meeting.startTime;
        mergedMeeting.endTime = meeting.endTime;
        added = true;
      }
      console.log(merged);
    }
    if (added === false) {
      merged.push(meeting);
    }
  }

  return merged;
}

console.log(mergeRanges(testMeetings2));
console.log(mergeRanges(testMeetings));
