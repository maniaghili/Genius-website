import swal from "sweetalert"

type swalProps = {
    title:string,
    text?:string,
    icon:string,
    button?:string
}

type dynamicButtons = {
    title:string,
    text?:string,
    icon:string,
    buttons?:[string,string]|undefined
}


export const showSwal = (infos:swalProps | dynamicButtons) => {
 return swal(infos)
}

