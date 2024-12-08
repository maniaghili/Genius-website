

export const dateFilterCourses = (type:any,allCourses:any) => {

   switch (type) {
    case 'free': 
    const freeCourses = allCourses?.filter((course:any)=>course.price === 0);
    return(freeCourses);
    break;

    case 'notfree':
    const notFreeCourses = allCourses?.filter((course:any)=>course.price !== 0);
    return(notFreeCourses);
    break;
    
    case 'oldest':
    const oldestCourses = allCourses?.slice().reverse();
    return(oldestCourses);
    break;

    case 'new':
    return(allCourses);
    break;

  default:
    return(allCourses)

   }

}

