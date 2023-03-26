const getCurrentDate = () => {
  const [date] = new Date().toISOString().split('T');
  return date;
};

const getParseDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return {
    year,
    month,
    day,
  };
};

export { getParseDate, getCurrentDate };
