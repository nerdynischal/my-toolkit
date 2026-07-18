export function publicAssetPath(path: string) {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) {
    return path
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
