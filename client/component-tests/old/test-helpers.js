export function iit(name, test){
  return it.only(name, test);
}

export function ddescribe(name, test){
  return describe.only(name, test);
}
