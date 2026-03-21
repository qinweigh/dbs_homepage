import api from './index'
import * as localData from '../data'

export const fetchData = async (type, options = {}) => {
  try {
    const response = await api.get(`/public/content/${type}`, {
      params: options
    })
    return response.data
  } catch (error) {
    console.warn(`API fetch for ${type} failed, falling back to local data.`, error)
    const data = localData[type] || []
    if (options.sort_order === 'desc') {
      return { items: [...data].reverse(), total: data.length }
    }
    return { items: data, total: data.length }
  }
}

export const fetchExcellentCases = (options) => fetchData('excellentCases', options)
export const fetchFdGroup = (options) => fetchData('fdGroup', options)
export const fetchBlueZoneStrategy = (options) => fetchData('blueZoneStrategy', options)
export const fetchServiceDomainSpecial = (options) => fetchData('serviceDomainSpecial', options)
export const fetchCapacityBuilding = (options) => fetchData('capacityBuilding', options)
export const fetchOperationDashboard = (options) => fetchData('operationDashboard', options)
export const fetchIndustryNews = (options) => fetchData('industryNews', options)
