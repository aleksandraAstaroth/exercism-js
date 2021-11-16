
export const gigasecond = (startDate) => {

let milliseconds = startDate.getTime();
    milliseconds += Math.pow(10, 12);  // 10^12 milliseconds

return new Date(milliseconds)
}
