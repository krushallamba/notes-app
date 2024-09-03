
const useCreateDate = () => {

    const dateObj = new Date()
    const month = dateObj.getMonth();

    const date = `${dateObj.getDate()}/${month+1}/${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`
    return date;
}

export default useCreateDate