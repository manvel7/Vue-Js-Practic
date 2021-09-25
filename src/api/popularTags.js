import axios from '@/api/axios'

export const getPopularTags = () => {
  return axios.get('/tags').then(response => response.data.tags)
}
export default {
  getPopularTags
}