export const matchUrl: RegExp = new RegExp(/(https?:\/\/(?:www\.))?(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/g) // find an URL into string

export const sanitizeUrl: Function = (url: string): string => {
  return url.replace(/\s+/g, '')
}