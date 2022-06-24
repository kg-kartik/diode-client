export const calculateData = (rowName, data) => {
    let max = 0,
        sum = 0,
        average = 0,
        last = 0;

    data.map((dataPoints, i) => {
        max = Math.max(max, dataPoints[1]);
        sum = sum + dataPoints[1];
    });

    average = parseFloat((sum / data.length).toFixed(2));

    last = data[data.length - 1][1];

    return { rowName, max, avg: average, last };
};
