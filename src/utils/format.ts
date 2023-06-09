import dayjs from 'dayjs';

export const dateHyphenYYYYMMDD = (date: Date) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const dateFromTo = (dates: Date[]) => {
  return {
    startDate: dateHyphenYYYYMMDD(dates[0]),
    endDate: dateHyphenYYYYMMDD(dates[1])
  };
};

export const termByType = (duration: string, selectedDate: Date[]) => {
  switch (duration) {
    case 'all':
      return dateFromTo([new Date(), new Date()]);
    case 'yearly':
      return dateFromTo([
        dayjs(new Date()).month(0).date(1).toDate(),
        new Date()
      ]);
    case 'term':
      return dateFromTo(selectedDate);
    case 'monthly':
      return dateFromTo([dayjs(new Date()).date(1).toDate(), new Date()]);
    default:
      return dateFromTo([
        dayjs(new Date())
          .subtract(Number(duration.slice(-1)), 'month')
          .toDate(),
        new Date()
      ]);
  }
};
