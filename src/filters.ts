function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function replaceHyphensWithSpaces(str: string) {
  return str.replace(/-/g, ' ');
}

export function formatText (str: string) {
  return capitalizeFirstLetter(replaceHyphensWithSpaces(str));
}
  