# Simple HTTP Request Integration

This integration enables you to send simple HTTP requests using various methods such as GET, POST, PUT, and DELETE. It is designed for ease of use and allows you to include optional headers and body content in your requests.

## Actions

### HTTP Request

**Title:** HTTP Request  
**Description:** Send a simple HTTP request to a specified URL.

#### Input Schema

To send an HTTP request, you'll need to provide the following parameters:

- **URL (string)**: The URL to which the HTTP request will be sent. This field is required.
  
- **Method (string)**: The HTTP method to use for the request. Supported methods are GET, POST, PUT, DELETE. The default value is GET.
  
- **Headers (string)**: Optional. Headers to include in the request, often used for authentication (e.g., Authorization). This field is optional.
  
- **Body (string)**: Optional. The body of the request (typically JSON). Use this field to include the payload you want to send with the request. This field is optional.

