export const formatDate = (date: Date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
