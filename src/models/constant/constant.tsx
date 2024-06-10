export default class Constants {

    static APP_SHM = "http"
    static APP_PORT = '8080'
    static APP_URL = 'ddos_detector_api';
    static API_URL = `${this.APP_SHM}://${this.APP_URL}:${this.APP_PORT}/api`;
    static API_LOGIN = '/auth/login';
    static API_REGISTER = '/auth/register';
    static API_ANALYZE = '/analyze';
    static API_LOGS = '/logs';
    static API_LOGS_USER = '/userLogs'
    static API_REPORT_LOGS_USER_WEEKLY = '/userLogs/weekly'

    static TOKEN_SHM = "Bearer"
    static TOKEN_KEY = 'TOKEN'
}