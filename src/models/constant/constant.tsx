export default class Constants {

    static APP_SHM ="http"
    static APP_PORT='6743'
    static APP_URL = '192.168.31.106';
    static API_URL = `${this.APP_SHM}://${this.APP_URL}:${this.APP_PORT}/api`;
    static API_LOGIN = '/auth/login';
    static API_REGISTER = '/auth/register';
    static API_ANALYZE='/analyze';
    static API_LOGS='/logs';
  
    static TOKEN_SHM="Bearer"
    static TOKEN_KEY = 'TOKEN'
}