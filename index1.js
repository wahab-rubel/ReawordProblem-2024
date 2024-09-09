// problems 
function password(obj){

  if(obj.name === undefined || 
    obj.birthYear === undefined || 
    obj.siteName === undefined ||
    obj.birthYear.toString().length !== 4
  )
    {
    return "invalid"
  }


  let capitalSiteName = obj.siteName[0].toUpperCase () + obj.siteName.slice(1);
  let passwordString = capitalSiteName + '#' + obj.name + '@' + obj.birthYear
  return passwordString;
}
console.log(
  password({name: 'kolimuddin', birthYear: 1994, siteName: 'google'}))

  console.log(password({name: 'rahat', birthYear: 2002, siteName: 'Facebook'}))
  console.log(password({name: 'toky', birthYear: 2002, siteName: 'Facebook'}))
  console.log(password({name: 'maisha', birthYear: 2002, siteName: 'Facebook'}))


let birthYear = 1995
console.log('hello'.length);
console.log(birthYear.toString().length === 4);