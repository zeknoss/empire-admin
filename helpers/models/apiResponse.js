export default function apiResponse(status,message,code,data) {
    this.status = status;
    this.message = message;
    this.code = code;
    this.data = data;
}