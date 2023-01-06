import PocketBase from 'pocketbase'

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

export function createClient(endpoint:string) : PocketBase {
   return new PocketBase(endpoint);
}