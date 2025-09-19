export const useGetUrl = (folder, name) => {
  return new URL(`../assets/img/${folder}/${name}.jpg`, import.meta.url)
}