// Date converter - helps with converting tenure of employee in the compnay
// It compares start date and end date (takes today's date if not end date has been provided)
// It returns a number of years in the company - if less than 1 year tenure, will return 0

export const getTenure = (startDate: Date, endDate: Date) => {
    const NUMBER_OF_MILLISEC_IN_ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

    const start = new Date(startDate).getTime();
    const end = endDate
        ? new Date(endDate).getTime() - start
        : Date.now() - start;
    const tenure = Math.floor(end / NUMBER_OF_MILLISEC_IN_ONE_YEAR);

    return tenure;
};
