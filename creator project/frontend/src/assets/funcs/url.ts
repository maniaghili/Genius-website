const getUrlParam = (param: string) => {

  const urlParams = new URLSearchParams(location.search)

  return urlParams.get(param)
}

type ValueType = string | number | boolean

const setUrlParam = (param: string, value: ValueType, customSearchParams = "") => {
  value = `${value}`
  const splitedHash = location.hash.split('?')

  const searchParams = new URLSearchParams(customSearchParams || splitedHash[1]);
  searchParams.set(param, value);

  history.pushState({}, "", `${location.pathname}${splitedHash[0]}?${searchParams.toString()}`)
}



export {
  getUrlParam,
  setUrlParam
}