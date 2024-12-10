

export const changeTime = (date : string) => {
    const d = new Date(date)
    return new Intl.DateTimeFormat('fa-IR').format(d)
    
}