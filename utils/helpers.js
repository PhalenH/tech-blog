module.exports = {
    format_date: (date) => {
        var month = date.getMonth();
        var dayOfMonth = date.getDate();
        var year = date.getFullYear(); 
        return endDate = `${month}/${dayOfMonth}/${year}`
      }
}