export default class ApiError extends Error
{
    constructor(data)
    {
        super(data.message || JSON.stringify(data, null, 3));
        
        this.name       = "ApiError";

        this.url        = data.url || "No Status Data Available"
        this.status     = data.status || "No Status Data Available"
        this.statusText = data.statusText || "No Status Data Available"
    }
}