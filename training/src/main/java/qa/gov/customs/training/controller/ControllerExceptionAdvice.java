package qa.gov.customs.training.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import qa.gov.customs.utils.models.ResponseException;

import java.util.Date;



@ControllerAdvice
@RestController
public class ControllerExceptionAdvice extends ResponseEntityExceptionHandler {


    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleAllException(Exception ex, WebRequest request) throws Exception {
        ResponseException responseException = new ResponseException(new Date(), ex.getMessage(), request.getDescription(true), false);
        ex.printStackTrace();
        return new ResponseEntity<>(responseException, HttpStatus.INTERNAL_SERVER_ERROR);
    }


//    @ExceptionHandler(AuthenticationException.class)
//    public  ResponseEntity<Object> handleAuthException(Exception ex, WebRequest request) throws Exception {
//        ResponseException responseException = new ResponseException(new Date(), ex.getMessage(), request.getDescription(true), false);
//        ex.printStackTrace();
//        return new ResponseEntity<>(responseException,HttpStatus.NOT_FOUND);
//    }

}
