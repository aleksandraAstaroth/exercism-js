
export const gigasecond = (startDate) => {

let milliseconds = startDate.getTime();
    milliseconds += 1000000000000;  // 10^12 milliseconds


return new Date(milliseconds)
}
