package qa.gov.customs.utils;



//GET : Should not update anything. Should be idempotent (same result in multiple calls). Possible Return Codes 200 (OK) + 404 (NOT FOUND) +400 (BAD REQUEST)
//POST : Should create new resource. Ideally return JSON with link to newly created resource. Same return codes as get possible. In addition - Return code 201 (CREATED) can be used.
//PUT : Update a known resource. ex: update client details. Possible Return Codes : 200(OK) + 404 (NOT FOUND) +400 (BAD REQUEST)
//DELETE : Used to delete a resource. Possible Return Codes : 200(OK).
//500 - SERVER ERROR is possible with all the above HTTP methods. In the case of a 500, include the contact details of the help desk in the response.


public class Constants {
    public static int RESOURCE_NOT_FOUND = 404;
    public static int BAD_REQUEST = 400 ;
    public static int UNAUTHORIZED = 401 ;
    public static int UNSUPPORTED_TYPE = 415;
    public static int SERVER_ERROR = 500;

    public static String scuccess="success";
    public static String failure ="failure";

}
