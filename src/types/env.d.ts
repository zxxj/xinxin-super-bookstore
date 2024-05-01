import 'dotenv'

// 使用合并接口的方式为自定义的环境变量定义类型
declare module 'dotenv' {
	export interface DotenvParseOutput {
		VITE_HOST: string
		VITE_PORT: number
		VITE_BASEURL: string
		VITE_PROXY_DOMAIN: string
	}
}