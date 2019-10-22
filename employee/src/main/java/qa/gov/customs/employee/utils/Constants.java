package qa.gov.customs.employee.utils;


//GET : Should not update anything. Should be idempotent (same result in multiple calls). Possible Return Codes 200 (OK) + 404 (NOT FOUND) +400 (BAD REQUEST)
//POST : Should create new resource. Ideally return JSON with link to newly created resource. Same return codes as get possible. In addition - Return code 201 (CREATED) can be used.
//PUT : Update a known resource. ex: update client details. Possible Return Codes : 200(OK) + 404 (NOT FOUND) +400 (BAD REQUEST)
//DELETE : Used to delete a resource. Possible Return Codes : 200(OK).
//500 - SERVER ERROR is possible with all the above HTTP methods. In the case of a 500, include the contact details of the help desk in the response.


public class Constants {
    public static int RESOURCE_NOT_FOUND = 404;
    public static int BAD_REQUEST = 400;
    public static int UNAUTHORIZED = 401;
    public static int UNSUPPORTED_TYPE = 415;
    public static int SERVER_ERROR = 500;
    public static int SUCCESS = 200;
    public static int CREATED = 201;
    public static int RESOURCE_FOUND = 405;


//    1×× Informational
//    100 Continue
//    101 Switching Protocols
//    102 Processing
//
//    2×× Success
//    200 OK
//    201 Created
//    202 Accepted
//    203 Non-authoritative Information
//    204 No Content
//    205 Reset Content
//    206 Partial Content
//    207 Multi-Status
//    208 Already Reported
//    226 IM Used
//
//    3×× Redirection
//    300 Multiple Choices
//    301 Moved Permanently
//    302 Found
//    303 See Other
//    304 Not Modified
//    305 Use Proxy
//    307 Temporary Redirect
//    308 Permanent Redirect
//
//    4×× Client Error
//    400 Bad Request
//    401 Unauthorized
//    402 Payment Required
//    403 Forbidden
//    404 Not Found
//    405 Method Not Allowed
//    406 Not Acceptable
//    407 Proxy Authentication Required
//    408 Request Timeout
//    409 Conflict
//    410 Gone
//    411 Length Required
//    412 Precondition Failed
//    413 Payload Too Large
//    414 Request-URI Too Long
//    415 Unsupported Media Type
//    416 Requested Range Not Satisfiable
//    417 Expectation Failed
//    418 I'm a teapot
//            421 Misdirected Request
//    422 Unprocessable Entity
//    423 Locked
//    424 Failed Dependency
//    426 Upgrade Required
//    428 Precondition Required
//    429 Too Many Requests
//    431 Request Header Fields Too Large
//    444 Connection Closed Without Response
//    451 Unavailable For Legal Reasons
//    499 Client Closed Request
//
//    5×× Server Error
//    500 Internal Server Error
//    501 Not Implemented
//    502 Bad Gateway
//    503 Service Unavailable
//    504 Gateway Timeout
//    505 HTTP Version Not Supported
//    506 Variant Also Negotiates
//    507 Insufficient Storage
//    508 Loop Detected
//    510 Not Extended
//    511 Network Authentication Required
//    599 Network Connect Timeout Error


    public static String scuccess = "success";
    public static String failure = "failure";


    public static String ROLE_TRAINING_ADMIN = "train_admin";
    public static String ROLE_SYS_ADMIN = "sys_admin";
    public static String ROLE_TRAINING_MANAGER = "train_mgr";
    public static String ROLE_TRAINING_ASSIS_MANAGER = "train_asst_mgr";
    public static String ROLE_TRAINING_COORDINATOR = "train_coordinator";
    public static String ROLE_TRAINING_HEAD_TCE = "head_tce";
    public static String ROLE_HR_DEPT = "hr_dept";
    public static String ROLE_CHAIRMAN_ASSISTANT = "chairman_asst";
    public static String ROLE_CI_SYSTEM = "ci_system";
    public static String ROLE_AUDI_DEPT = "audi_dept";
    public static String ROLE_DEPT_MGR = "dept_mgr";
    public static String ROLE_DEPT_HEAD = "dept_head";
    public static String ROLE_EMPLOYEE = "employee";


}
