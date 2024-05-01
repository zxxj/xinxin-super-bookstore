import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { ConfigEnv, CommonServerOptions } from "vite"
import fs from "fs"
import dotenv from "dotenv"
import type { DotenvParseOutput } from "dotenv"

// https://vitejs.dev/config/
// export default defineConfig({
//   base: 'xin',
//   plugins: [vue()],
// })



// 使用函数形式来配置vite
export default defineConfig((mode: ConfigEnv) => {

  // 服务配置
  let server: CommonServerOptions = {}

  // 定义环境文件前缀.env
  const envFilePrefix: string = '.env'

  // mode与前缀拼接得到环境文件的完整地址
  const currentEnvFileName: string = `${envFilePrefix}.${mode.mode}`

  // 利用fs模块同步读取环境文件中的数据
  const envData: any = fs.readFileSync(currentEnvFileName)

  // 利用dotenv将环境变量转为[key:value]
  const envMap: DotenvParseOutput = dotenv.parse(envData);

  if(mode.mode === 'development') {
    server = {
      host: envMap.VITE_HOST,
      port: Number(envMap.VITE_PORT), 
      proxy: {
        [envMap.VITE_BASEURL]: {
          target: envMap.VITE_PROXY_DOMAIN
        }
      }
    }

    console.log('开发环境', server);
  }else { 
    server = {
      host: envMap.VITE_HOST,
      port: Number(envMap.VITE_PORT), 
    }
    console.log('生产环境', server);
  }

  return {
    plugins: [vue()],
    server
  }
})