import { useQuery } from '@tanstack/react-query';
import { OnDemandPayload } from '../types/OnDemand';

const fetchOnDemandContent = async (): Promise<OnDemandPayload> => {
  const response = await fetch('api/2gb/feed/onDemand/249')
  if (!response.ok) {
    throw new Error('Bad network response, please try again later')
  }
  return response.json()
};

//RQ hook for actually getting the content
export const useOnDemandContent = () => {
  return useQuery<OnDemandPayload>({
    queryKey: ['onDemandContent'],
    queryFn: fetchOnDemandContent,
  })
}
