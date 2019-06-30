const hosts = {
  dev: 'https://wen-xiong.github.io/api/data', // 本地开发
  production: 'https://wen-xiong.github.io/api/data', // 生产环境
};
const host = hosts.dev;
export default {
  test: `${host}/test.json`,
  checkVersion: `${host}/checkVersion.json`
}
