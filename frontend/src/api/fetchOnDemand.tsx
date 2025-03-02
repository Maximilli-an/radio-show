import { useQuery } from '@tanstack/react-query';
import { OnDemandPayload } from '../types/OnDemand';

const fetchOnDemandContent = async (): Promise<OnDemandPayload> => {
  try {
    const response = await fetch('api/2gb/feed/onDemand/249')
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching on-demand content:', error)
    throw error;
}
}

//RQ hook for actually getting the content
export const useOnDemandContent = () => {
  return useQuery<OnDemandPayload>({
    queryKey: ['onDemandContent'],
    queryFn: fetchOnDemandContent,
  })
}
