const { NODE_ENV } = process.env
const isDev = NODE_ENV === 'development'

export const baseURL = isDev ? 'http://localhost:3000/api' : ''
export const currentURL = isDev ? 'http://localhost:3005/api' : ''
export const clientURL = isDev ? 'http://localhost:3000' : ''
export const Domain = isDev ? '.localhost' : '.develrocket.com'
export const S3Url = `https://develrocket-test.s3.ap-northeast-2.amazonaws.com`
export const OWNER: Account = `0x`
