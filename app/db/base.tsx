import pocketBase from 'pocketbase'


export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

export function createClient(endpoint:string) : pocketBase {
   return new pocketBase(endpoint);
}