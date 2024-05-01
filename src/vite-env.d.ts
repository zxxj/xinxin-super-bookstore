/// <reference types="vite/client" />

// 解决自己在env环境文件中定义的变量不能.出来的问题,因为此文件处于全局依赖库,可以利用ts的接口合并实现
interface ImportMetaEnv {
  // [key: string]: any
  // BASE_URL: string
  // MODE: string
  // DEV: boolean
  // PROD: boolean
  // SSR: boolean
	VITE_username: string
	VITE_age: number
}
